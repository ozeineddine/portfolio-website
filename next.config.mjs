/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: 'akamai',
      path: '/',
    },
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website/',
  };
  
  export default nextConfig;
  