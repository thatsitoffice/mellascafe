/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  // Optimize bundle size for Cloudflare Pages
  swcMinify: true,
  // Disable unnecessary headers
  poweredByHeader: false,
  // Optimize for Cloudflare Pages Edge Runtime
  experimental: {
    // Enable if needed for better Cloudflare Pages compatibility
  },
  // Compression handled by Cloudflare
  compress: false,
};

module.exports = nextConfig;
