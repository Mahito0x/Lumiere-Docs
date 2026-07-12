import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  allowedDevOrigins: [
    '3000-firebase-lumire-docs-1773505716285.cluster-ikslh4rdsnbqsvu5nw3v4dqjj2.cloudworkstations.dev'
  ],
  // experimental: {
  //   // This is the correct modern key for allowing origins
  //   serverActions: {
  //     allowedOrigins: [
  //       '3000-firebase-lumire-docs-1773505716285.cluster-ikslh4rdsnbqsvu5nw3v4dqjj2.cloudworkstations.dev'
  //     ],
  //   },
  // },
  async rewrites() {
    return [
      {
        source: '/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};


export default withMDX(config);
