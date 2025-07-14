  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
          unoptimized: true,
      domains: ['blog.phonology.io', 'flagsapi.com', 'phonology.io','images.unsplash.com', 'plus.unsplash.com', 'via.placeholder.com', 'placehold.co'],
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

    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
    },
  };

  export default nextConfig;
