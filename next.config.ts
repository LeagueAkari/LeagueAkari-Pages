import type { NextConfig } from 'next'

const isCI = process.env.GITHUB_ACTIONS === 'true'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const basePath = isCI && repo ? `/${repo}` : ''

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactCompiler: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : ''
}

export default nextConfig
