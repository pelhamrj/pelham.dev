import type { NextConfig } from 'next';

const isCI = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isCI ? '/pelham.dev' : '',
    assetPrefix: isCI ? '/pelham.dev/' : '',
    images: { unoptimized: true },
    trailingSlash: true,
};

export default nextConfig;
