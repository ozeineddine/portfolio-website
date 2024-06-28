/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  basePath: isProd ? '/portfolio-website' : '',
  assetPrefix: isProd ? '/portfolio-website/' : '',
};

export default nextConfig;
