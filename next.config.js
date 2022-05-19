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
  i18n: {
    locales: ["uk", "ru"],
    defaultLocale: "uk",
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
};
