/**
 * OLUK Cloudinary Image Component Wrapper
 * Optimized images with automatic format, quality, and lazy loading
 */

'use client';

import { CldImage as CloudinaryImage, CldImageProps } from 'next-cloudinary';

interface OLUKImageProps extends Omit<CldImageProps, 'src'> {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function CldImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  priority = false,
  ...props
}: OLUKImageProps) {
  // Remove 'oluk/' prefix if present (Cloudinary handles folder structure)
  const publicId = src.startsWith('oluk/') ? src : `oluk/${src}`;

  return (
    <CloudinaryImage
      src={publicId}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      priority={priority}
      format="auto"
      quality="auto"
      {...props}
    />
  );
}

/**
 * Pre-configured image components for common OLUK use cases
 */

export function OGImage({ page = 'default' }: { page?: string }) {
  return (
    <CldImage
      src={`og-${page}`}
      alt={`OLUK - ${page}`}
      width={1200}
      height={630}
      priority
    />
  );
}

export function FaviconImage({ size = 32 }: { size?: number }) {
  return (
    <CldImage
      src="favicon"
      alt="OLUK"
      width={size}
      height={size}
      priority
      format="png"
    />
  );
}

export function DersImage({
  slug,
  width = 800,
  height = 450,
}: {
  slug: string;
  width?: number;
  height?: number;
}) {
  return (
    <CldImage
      src={`dersler/${slug}`}
      alt={`OLUK Ders: ${slug}`}
      width={width}
      height={height}
      crop="fill"
    />
  );
}

export function MeditationBackground({ mood }: { mood: string }) {
  return (
    <CldImage
      src={`meditation/${mood}`}
      alt={`OLUK Meditasyon: ${mood}`}
      width={1920}
      height={1080}
      crop="fill"
      quality={80}
      priority
    />
  );
}

export function Avatar({
  userId,
  size = 128,
  name,
}: {
  userId: string;
  size?: number;
  name?: string;
}) {
  return (
    <CldImage
      src={`avatars/${userId}`}
      alt={name || 'User avatar'}
      width={size}
      height={size}
      crop="thumb"
      gravity="face"
      format="webp"
    />
  );
}
