/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '48tools.com',
      'interactive-examples.mdn.mozilla.net',
      'filedn.com',
    ],
  },
}

module.exports = nextConfig
