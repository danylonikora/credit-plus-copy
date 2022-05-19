/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { not: [/\.scss$/, /\.html$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: { ref: true },
        },
      ],
    });

    return config;
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
};
