import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cogs125-next',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
