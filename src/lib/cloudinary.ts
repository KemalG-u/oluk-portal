/**
 * Cloudinary Configuration
 * Cloud Name: dzegofdgp
 */

import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dzegofdgp',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Generate optimized Cloudinary URL
 */
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: string;
    format?: string;
    quality?: string | number;
  } = {}
): string {
  const {
    width,
    height,
    crop = 'fill',
    format = 'auto',
    quality = 'auto',
  } = options;

  const transformations = [
    `f_${format}`,
    `q_${quality}`,
    width && `w_${width}`,
    height && `h_${height}`,
    crop && `c_${crop}`,
  ]
    .filter(Boolean)
    .join(',');

  return `https://res.cloudinary.com/dzegofdgp/image/upload/${transformations}/${publicId}`;
}

/**
 * OLUK Image Presets
 */
export const CLOUDINARY_IMAGES = {
  // Favicon (multiple sizes from one source)
  favicon: (size: number) => 
    getCloudinaryUrl('oluk/favicon', { width: size, height: size, format: 'png' }),
  
  // OG Images
  ogDefault: () => 
    getCloudinaryUrl('oluk/og-default', { width: 1200, height: 630 }),
  ogSirdas: () =>
    getCloudinaryUrl('oluk/og-sirdas', { width: 1200, height: 630 }),
  ogNurKocu: () =>
    getCloudinaryUrl('oluk/og-nur-kocu', { width: 1200, height: 630 }),
  
  // Ders görselleri
  dersImage: (slug: string, width?: number) =>
    getCloudinaryUrl(`oluk/dersler/${slug}`, { width, format: 'webp' }),
  
  // Meditasyon backgrounds
  meditationBg: (mood: string) =>
    getCloudinaryUrl(`oluk/meditation/${mood}`, { width: 1920, quality: 80 }),
  
  // User avatars
  avatar: (userId: string, size: number = 128) =>
    getCloudinaryUrl(`oluk/avatars/${userId}`, { 
      width: size, 
      height: size, 
      crop: 'thumb',
      format: 'webp'
    }),
};

/**
 * Upload image to Cloudinary (server-side only)
 */
export async function uploadToCloudinary(
  file: string,
  folder: string = 'oluk',
  options: any = {}
) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      ...options,
    });
    return result;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

export default cloudinary;
