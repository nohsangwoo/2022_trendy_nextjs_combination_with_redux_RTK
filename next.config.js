/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  /* experimental: {
    modularizeImports: {
      antd: {
        transform: 'antd/lib/{{member}}',
      },
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
    // runtime: 'nodejs',
    // serverComponents: true,
  }, */

  webpack: config => {
    if (!config.experiments) {
      config.experiments = {}
    }
    config.experiments.topLevelAwait = true
    return config
  },

  async rewrites() {
    return [
      // { source: '/resetLoginFailCnt', destination: '/companyInfo' },
      // {
      //   source: '/api/:path*',
      //   destination: `https://gcad.videohelp.me/api/:path*`,
      // },
      // {
      //   source: '/api/graphql',
      //   destination: `https://gcad.videohelp.me/api/graphql`,
      // },
    ]
  },
}

module.exports = nextConfig
