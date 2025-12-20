/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // API routes için kapatıldı (Nur Koçu)
  // trailingSlash: true,  // 404 sorununa sebep oluyor, kapatıldı
  reactStrictMode: true,
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/nur-kocu',
        destination: '/sirdas',
        permanent: true,
      },
    ];
  },
  
  // Compiler optimizasyonları
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Static dosyalar için cache
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Image optimization (unoptimized for static export)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dzegofdgp/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // SWC Minification
  swcMinify: true,

  // Experimental features
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@phosphor-icons/react'],
  },
}

export default nextConfig
