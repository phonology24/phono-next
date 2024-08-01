/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['blog.phonology.io', 'flagsapi.com'],

  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
