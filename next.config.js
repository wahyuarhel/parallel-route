/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@ant-design/cssinjs'] = '@ant-design/cssinjs/lib';

    return config;
  },
}

module.exports = nextConfig
