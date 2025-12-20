#!/usr/bin/env node
/**
 * OLUK Cloudinary Upload Script
 * Favicon ve OG Image'leri Cloudinary'ye yükler
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Cloudinary config
cloudinary.config({
  cloud_name: 'dzegofdgp',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('☁️  OLUK Cloudinary Upload başlatılıyor...\n');

// Check API credentials
if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('❌ CLOUDINARY_API_KEY ve CLOUDINARY_API_SECRET .env.local\'de tanımlı değil!');
  console.error('\nŞimdilik test modu ile devam ediyoruz (upload yapılmayacak)\n');
}

async function uploadImage(filePath, publicId, options = {}) {
  try {
    if (!process.env.CLOUDINARY_API_KEY) {
      console.log(`⏭️  SKIP: ${publicId} (API key yok)`);
      return;
    }

    console.log(`📤 Uploading: ${publicId}...`);
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      ...options,
    });
    console.log(`✅ Uploaded: ${result.secure_url}`);
    return result;
  } catch (error) {
    console.error(`❌ Error uploading ${publicId}:`, error.message);
  }
}

async function generateOGImage(text, publicId) {
  try {
    if (!process.env.CLOUDINARY_API_KEY) {
      console.log(`⏭️  SKIP: ${publicId} OG image (API key yok)`);
      return;
    }

    console.log(`🎨 Creating OG Image: ${publicId}...`);
    
    // Create OG image with text overlay
    const result = await cloudinary.uploader.upload('public/icon.svg', {
      public_id: publicId,
      transformation: [
        { width: 1200, height: 630, crop: 'fill', background: '#0D4F4F' },
        {
          overlay: {
            font_family: 'Arial',
            font_size: 80,
            font_weight: 'bold',
            text: text,
          },
          gravity: 'center',
          color: '#C9A962',
        },
      ],
    });
    
    console.log(`✅ OG Image: ${result.secure_url}`);
    return result;
  } catch (error) {
    console.error(`❌ Error creating OG image ${publicId}:`, error.message);
  }
}

async function main() {
  const publicDir = path.join(__dirname, '../public');

  // 1. Upload Favicon
  console.log('\n📋 FAVICON UPLOAD\n');
  const faviconFiles = [
    { file: 'favicon.ico', id: 'oluk/favicon-ico' },
    { file: 'icon.svg', id: 'oluk/favicon' },
  ];

  for (const { file, id } of faviconFiles) {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      await uploadImage(filePath, id, { folder: 'oluk' });
    } else {
      console.log(`⏭️  SKIP: ${file} (dosya yok)`);
    }
  }

  // 2. Generate OG Images
  console.log('\n📋 OG IMAGE GENERATION\n');
  await generateOGImage('OLUK\\nAkışın Kanalı, Dönüşümün Yolu', 'oluk/og-default');
  await generateOGImage('SIRDAŞ\\nKelâmın Süzüldüğü Durak', 'oluk/og-sirdas');
  await generateOGImage('NUR KOÇU\\nManevi Dönüşüm Yolculuğu', 'oluk/og-nur-kocu');

  console.log('\n✅ Cloudinary upload tamamlandı!\n');
  console.log('📊 Cloudinary Dashboard: https://console.cloudinary.com/');
  console.log('🔍 Uploaded images: https://console.cloudinary.com/console/c-a1b2c3d4e5/media_library/folders/oluk\n');
  
  if (!process.env.CLOUDINARY_API_KEY) {
    console.log('⚠️  NOT: Gerçek upload için .env.local\'de API key/secret tanımla!\n');
    console.log('Cloudinary Dashboard → Settings → API Keys\n');
  }
}

main().catch(console.error);
