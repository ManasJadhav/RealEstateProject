/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  // images: {
  //   loader: "imgix",
  //   path: "https://example.com/myaccount/",
  // },
  reactStrictMode: true,
};

module.exports = nextConfig;

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   reactStrictMode: true,
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Find and remove NextJS css rules.
//     const cssRulesIdx = config.module.rules.findIndex((r) => r.oneOf);
//     if (cssRulesIdx === -1) {
//       throw new Error("Could not find NextJS CSS rule to overwrite.");
//     }
//     config.module.rules.splice(cssRulesIdx, 1);

//     // Add a simpler rule for global css anywhere.
//     config.plugins.push(
//       new MiniCssExtractPlugin({
//         experimentalUseImportModule: true,
//         filename: "static/css/[contenthash].css",
//         chunkFilename: "static/css/[contenthash].css",
//       })
//     );

//     config.module.rules.push({
//       test: /\.css$/i,
//       use: !isServer
//         ? ["style-loader", "css-loader"]
//         : [MiniCssExtractPlugin.loader, "css-loader"],
//     });
//     return config;
//   },
// };
