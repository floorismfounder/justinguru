/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    lottiePath: '/public' // replace with the actual path to your Lottie animations
  }
}

module.exports = nextConfig
