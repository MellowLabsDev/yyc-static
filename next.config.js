/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    loader:'imgix',
    path:'/',
  }
}

module.exports = nextConfig
