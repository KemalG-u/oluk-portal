#!/usr/bin/env python3
"""
🤖 OLUK YouTube Transcript Bot
Ayşe Sarzey Bek kanalından videoları otomatik işler

Özellikler:
- Rate limiting (15 video/gün)
- Random delays (bot tespitini önler)
- User-agent rotation
- Progress tracking
- Cloudinary upload
- OLUK GEM ile dil dönüşümü
"""

import os
import json
import time
import random
import logging
from datetime import datetime
from typing import List, Dict, Optional
from pathlib import Path

# YouTube
from googleapiclient.discovery import build
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import TranscriptsDisabled, NoTranscriptFound

# Gemini
import google.generativeai as genai

# Cloudinary
import cloudinary
import cloudinary.uploader

# Rate limiting
from functools import wraps
from time import sleep

# Config
from dotenv import load_dotenv
load_dotenv()

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('youtube_bot.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ============================================================================
# CONFIGURATION
# ============================================================================

class Config:
    # API Keys (from .env)
    YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')
    GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
    CLOUDINARY_CLOUD_NAME = os.getenv('CLOUDINARY_CLOUD_NAME', 'dzegofdgp')
    CLOUDINARY_API_KEY = os.getenv('CLOUDINARY_API_KEY', '283632349543287')
    CLOUDINARY_API_SECRET = os.getenv('CLOUDINARY_API_SECRET', 'dm_7xFvraZI-IwcvAxnWGTeNrWM')
    
    # Channel
    CHANNEL_URL = 'https://www.youtube.com/@aysesarzeybek2739'
    CHANNEL_ID = 'UCxxxxxxxxxxxxxxxxxxxxxx'  # Auto-detect from URL
    
    # Rate Limiting
    DAILY_VIDEO_LIMIT = 15
    MIN_DELAY_SECONDS = 30
    MAX_DELAY_SECONDS = 120
    
    # Cloudinary Folders
    CLOUDINARY_BASE = 'oluk/transcripts'
    
    # Progress File
    PROGRESS_FILE = '_BRAIN/automation/progress.json'

# Initialize APIs
cloudinary.config(
    cloud_name=Config.CLOUDINARY_CLOUD_NAME,
    api_key=Config.CLOUDINARY_API_KEY,
    api_secret=Config.CLOUDINARY_API_SECRET
)

# ============================================================================
# RATE LIMITING DECORATORS
# ============================================================================

def random_delay(min_sec=Config.MIN_DELAY_SECONDS, max_sec=Config.MAX_DELAY_SECONDS):
    """Random delay to avoid bot detection"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            delay = random.uniform(min_sec, max_sec)
            logger.info(f"⏳ Waiting {delay:.1f}s to avoid detection...")
            sleep(delay)
            return func(*args, **kwargs)
        return wrapper
    return decorator

def daily_limit(max_count=Config.DAILY_VIDEO_LIMIT):
    """Enforce daily video processing limit"""
    def decorator(func):
        processed_today = []
        
        @wraps(func)
        def wrapper(*args, **kwargs):
            today = datetime.now().date()
            
            # Reset counter at midnight
            if processed_today and processed_today[0] != today:
                processed_today.clear()
            
            if not processed_today or processed_today[0] != today:
                processed_today.append(today)
                processed_today.append(0)
            
            if processed_today[1] >= max_count:
                logger.warning(f"🚫 Daily limit reached ({max_count} videos)")
                return None
            
            result = func(*args, **kwargs)
            if result:
                processed_today[1] += 1
                logger.info(f"📊 Progress: {processed_today[1]}/{max_count} videos today")
            
            return result
        return wrapper
    return decorator

# ============================================================================
# YOUTUBE FUNCTIONS
# ============================================================================

class YouTubeClient:
    def __init__(self):
        self.youtube = build('youtube', 'v3', developerKey=Config.YOUTUBE_API_KEY)
    
    def get_channel_id(self, channel_url: str) -> str:
        """Extract channel ID from URL"""
        # @aysesarzeybek2739 -> channel ID
        handle = channel_url.split('@')[-1].split('/')[0]
        
        request = self.youtube.search().list(
            part='snippet',
            q=handle,
            type='channel',
            maxResults=1
        )
        response = request.execute()
        
        if response['items']:
            channel_id = response['items'][0]['snippet']['channelId']
            logger.info(f"✅ Channel ID: {channel_id}")
            return channel_id
        else:
            raise ValueError(f"Channel not found: {channel_url}")
    
    @random_delay(10, 30)
    def get_channel_videos(self, channel_id: str, max_results: int = 50) -> List[Dict]:
        """Get all videos from channel"""
        videos = []
        next_page_token = None
        
        while True:
            request = self.youtube.search().list(
                part='snippet',
                channelId=channel_id,
                type='video',
                order='date',
                maxResults=min(max_results, 50),
                pageToken=next_page_token
            )
            response = request.execute()
            
            for item in response['items']:
                video_id = item['id']['videoId']
                title = item['snippet']['title']
                published_at = item['snippet']['publishedAt']
                
                videos.append({
                    'video_id': video_id,
                    'title': title,
                    'published_at': published_at,
                    'channel_title': item['snippet']['channelTitle']
                })
            
            next_page_token = response.get('nextPageToken')
            if not next_page_token or len(videos) >= max_results:
                break
        
        logger.info(f"📹 Found {len(videos)} videos")
        return videos
    
    @random_delay(20, 60)
    def get_transcript(self, video_id: str) -> Optional[Dict]:
        """Get video transcript"""
        try:
            # Try Turkish first, then English
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
            
            try:
                transcript = transcript_list.find_transcript(['tr', 'tr-TR'])
                logger.info(f"✅ Turkish transcript found for {video_id}")
            except:
                transcript = transcript_list.find_transcript(['en', 'en-US'])
                logger.info(f"✅ English transcript found for {video_id}")
            
            # Get transcript data
            transcript_data = transcript.fetch()
            
            # Format as single text
            full_text = ' '.join([entry['text'] for entry in transcript_data])
            
            return {
                'language': transcript.language_code,
                'is_generated': transcript.is_generated,
                'is_translatable': transcript.is_translatable,
                'segments': transcript_data,
                'full_text': full_text
            }
        
        except (TranscriptsDisabled, NoTranscriptFound) as e:
            logger.warning(f"⚠️ No transcript for {video_id}: {e}")
            return None
        except Exception as e:
            logger.error(f"❌ Error getting transcript for {video_id}: {e}")
            return None

# ============================================================================
# GEMINI FUNCTIONS (OLUK GEM)
# ============================================================================

class OLUKGemProcessor:
    def __init__(self):
        genai.configure(api_key=Config.GEMINI_API_KEY)
        
        # OLUK GEM DİL USTASI - 9 USTA SENTEZİ
        # Kullanıcı bu prompt'u doldurmalı
        self.system_prompt = """
        Sen OLUK GEM DİL USTASI'sın - 9 Usta'nın sentezlenmiş dil yapısı.
        
        Görevi: YouTube transkrip metinlerini OLUK.ORG'un dil yapısına çevirmek.
        
        Özellikler:
        - Şiirsel ama anlaşılır
        - Derinlikli ama yalın
        - Metaforik ama somut
        - Ruhani ama pratik
        
        Çıktı formatı: Markdown (başlıklar, paragraflar, listeler)
        
        [KULLANICI: Lütfen kendi OLUK GEM prompt'unuzu buraya ekleyin]
        """
        
        self.model = genai.GenerativeModel('gemini-2.0-flash-exp')
    
    @random_delay(5, 15)
    def process_transcript(self, raw_text: str, video_title: str) -> str:
        """Process transcript with OLUK GEM"""
        try:
            prompt = f"""
            {self.system_prompt}
            
            ## Video Başlığı
            {video_title}
            
            ## Ham Transkrip
            {raw_text}
            
            ## Görev
            Bu transkrip metnini OLUK dil yapısına dönüştür. 
            Önemli noktaları vurgula, metaforlar ekle, akışı iyileştir.
            """
            
            response = self.model.generate_content(prompt)
            processed_text = response.text
            
            logger.info(f"✅ OLUK GEM processed: {len(processed_text)} chars")
            return processed_text
        
        except Exception as e:
            logger.error(f"❌ OLUK GEM error: {e}")
            return f"[PROCESS ERROR]\n\n{raw_text}"

# ============================================================================
# CLOUDINARY FUNCTIONS
# ============================================================================

class CloudinaryUploader:
    def __init__(self):
        self.base_folder = Config.CLOUDINARY_BASE
    
    def sanitize_filename(self, text: str) -> str:
        """Clean filename for Cloudinary"""
        import re
        # Remove special chars, keep Turkish chars
        text = re.sub(r'[^\w\s-]', '', text)
        text = re.sub(r'[\s_]+', '-', text)
        return text.lower()[:100]  # Max 100 chars
    
    def upload_transcript(
        self, 
        content: Dict, 
        channel_name: str, 
        video_title: str, 
        transcript_type: str  # 'ham' or 'cevrilmis'
    ) -> Optional[str]:
        """Upload transcript to Cloudinary"""
        try:
            # Generate folder path
            channel_slug = self.sanitize_filename(channel_name)
            video_slug = self.sanitize_filename(video_title)
            
            folder = f"{self.base_folder}/{channel_slug}/{transcript_type}"
            public_id = f"{video_slug}"
            
            # Convert to JSON
            json_content = json.dumps(content, ensure_ascii=False, indent=2)
            
            # Upload as raw file
            result = cloudinary.uploader.upload(
                f"data:text/plain;base64,{json_content.encode('utf-8').hex()}",
                folder=folder,
                public_id=public_id,
                resource_type='raw',
                overwrite=True
            )
            
            url = result['secure_url']
            logger.info(f"☁️ Uploaded to: {url}")
            return url
        
        except Exception as e:
            logger.error(f"❌ Cloudinary upload error: {e}")
            return None

# ============================================================================
# PROGRESS TRACKING
# ============================================================================

class ProgressTracker:
    def __init__(self, file_path: str):
        self.file_path = file_path
        self.data = self.load()
    
    def load(self) -> Dict:
        """Load progress from file"""
        if os.path.exists(self.file_path):
            with open(self.file_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {
            'channels': {},
            'last_run': None,
            'total_processed': 0
        }
    
    def save(self):
        """Save progress to file"""
        os.makedirs(os.path.dirname(self.file_path), exist_ok=True)
        with open(self.file_path, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, ensure_ascii=False, indent=2)
    
    def is_processed(self, channel_name: str, video_id: str) -> bool:
        """Check if video already processed"""
        if channel_name not in self.data['channels']:
            self.data['channels'][channel_name] = {'videos': {}}
        
        return video_id in self.data['channels'][channel_name]['videos']
    
    def mark_processed(
        self, 
        channel_name: str, 
        video_id: str, 
        video_data: Dict
    ):
        """Mark video as processed"""
        if channel_name not in self.data['channels']:
            self.data['channels'][channel_name] = {'videos': {}}
        
        self.data['channels'][channel_name]['videos'][video_id] = {
            'title': video_data['title'],
            'processed_at': datetime.now().isoformat(),
            'status': 'completed'
        }
        
        self.data['total_processed'] += 1
        self.data['last_run'] = datetime.now().isoformat()
        self.save()

# ============================================================================
# MAIN BOT
# ============================================================================

class OLUKYouTubeBot:
    def __init__(self):
        self.youtube = YouTubeClient()
        self.gem = OLUKGemProcessor()
        self.cloudinary = CloudinaryUploader()
        self.progress = ProgressTracker(Config.PROGRESS_FILE)
    
    @daily_limit()
    def process_video(self, video: Dict, channel_name: str) -> bool:
        """Process single video"""
        video_id = video['video_id']
        title = video['title']
        
        logger.info(f"\n{'='*60}")
        logger.info(f"🎬 Processing: {title}")
        logger.info(f"🆔 Video ID: {video_id}")
        
        # Check if already processed
        if self.progress.is_processed(channel_name, video_id):
            logger.info("⏭️ Already processed, skipping...")
            return False
        
        # Get transcript
        transcript = self.youtube.get_transcript(video_id)
        if not transcript:
            logger.warning("⚠️ No transcript available, skipping...")
            return False
        
        # Upload RAW transcript
        raw_data = {
            'channel': channel_name,
            'video_id': video_id,
            'title': title,
            'published_at': video['published_at'],
            'transcript': transcript,
            'processed_at': datetime.now().isoformat()
        }
        
        raw_url = self.cloudinary.upload_transcript(
            raw_data,
            channel_name,
            title,
            'ham'
        )
        
        if not raw_url:
            logger.error("❌ Failed to upload raw transcript")
            return False
        
        # Process with OLUK GEM
        processed_text = self.gem.process_transcript(
            transcript['full_text'],
            title
        )
        
        # Upload PROCESSED transcript
        processed_data = {
            **raw_data,
            'oluk_processed': processed_text,
            'processed_at': datetime.now().isoformat()
        }
        
        processed_url = self.cloudinary.upload_transcript(
            processed_data,
            channel_name,
            title,
            'cevrilmis'
        )
        
        if not processed_url:
            logger.error("❌ Failed to upload processed transcript")
            return False
        
        # Mark as processed
        self.progress.mark_processed(channel_name, video_id, video)
        
        logger.info("✅ Video processing completed!")
        logger.info(f"📦 Raw: {raw_url}")
        logger.info(f"✨ Processed: {processed_url}")
        
        return True
    
    def run(self, channel_url: str, max_videos: Optional[int] = None):
        """Run bot for a channel"""
        logger.info(f"\n🚀 OLUK YouTube Bot Started")
        logger.info(f"📺 Channel: {channel_url}")
        logger.info(f"⏰ Started at: {datetime.now()}")
        
        # Get channel ID
        channel_id = self.youtube.get_channel_id(channel_url)
        
        # Get videos
        videos = self.youtube.get_channel_videos(
            channel_id, 
            max_results=max_videos or 1000
        )
        
        channel_name = videos[0]['channel_title'] if videos else 'Unknown'
        
        # Process videos
        processed_count = 0
        for video in videos:
            success = self.process_video(video, channel_name)
            if success:
                processed_count += 1
            
            # Check daily limit
            if processed_count >= Config.DAILY_VIDEO_LIMIT:
                logger.info(f"\n🎯 Daily limit reached: {Config.DAILY_VIDEO_LIMIT} videos")
                break
        
        logger.info(f"\n🏁 Bot finished")
        logger.info(f"✅ Processed: {processed_count} videos")
        logger.info(f"📊 Total processed ever: {self.progress.data['total_processed']}")

# ============================================================================
# CLI
# ============================================================================

if __name__ == '__main__':
    import argparse
    
    parser = argparse.ArgumentParser(description='OLUK YouTube Transcript Bot')
    parser.add_argument('--channel', default=Config.CHANNEL_URL, help='YouTube channel URL')
    parser.add_argument('--limit', type=int, help='Max videos to process (default: all)')
    parser.add_argument('--test', action='store_true', help='Test mode (1 video only)')
    
    args = parser.parse_args()
    
    # Test mode
    if args.test:
        Config.DAILY_VIDEO_LIMIT = 1
        logger.info("🧪 TEST MODE: Processing 1 video only")
    
    # Run bot
    bot = OLUKYouTubeBot()
    bot.run(args.channel, max_videos=args.limit)
