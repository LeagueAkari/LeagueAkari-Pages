import type { NextConfig } from 'next'
import { SITE_BASE } from '@/config/site'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactCompiler: true,
  basePath: SITE_BASE
}

export default nextConfig
