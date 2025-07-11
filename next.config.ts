import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Konfigurasi lainnya di sini
  reactStrictMode: true,
  // ...dll
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rwtest.dashboard-ppb-uinjkt.my.id',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'rwtest.dashboard-ppb-uinjkt.my.id',
        pathname: '/api/v1/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'rwtest.dashboard-ppb-uinjkt.my.id',
        pathname: '/v1/storage/**', // 
      },  
    ],
  },
  

};

export default nextConfig;
