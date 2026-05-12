/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/gastropay-frontend',
}

export default nextConfig
