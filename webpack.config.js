const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,

  devServer: {
    static: {
      directory: path.join(__dirname, "src/pages"),
      directory: path.join(__dirname, "src/index.scss"),
      directory: path.join(__dirname, "src/style/"),
    },
    port: 3000,
    open: true,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
  },

  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/img"),
    },
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: [
        {
          filename: "index.html", // => dist/index.html
          import: "src/pages/index.html", // template file
        },
        {
          filename: "page2.html", // => dist/index.html
          import: "src/pages/page2.html", // template file
        },
        {
          filename: "page3.html", // => dist/index.html
          import: "src/pages/page3.html", // template file
        },
        {
          filename: "page4.html", // => dist/index.html
          import: "src/pages/page4.html", // template file
        },
        {
          filename: "page5.html", // => dist/index.html
          import: "src/pages/page5.html", // template file
        },
        {
          filename: "page6.html", // => dist/index.html
          import: "src/pages/page6.html", // template file
        },
        {
          filename: "page7.html", // => dist/index.html
          import: "src/pages/page7.html", // template file
        },
        {
          filename: "page8.html", // => dist/index.html
          import: "src/pages/page8.html", // template file
        },
        {
          filename: "page9.html", // => dist/index.html
          import: "src/pages/page9.html", // template file
        },
        {
          filename: "page10.html", // => dist/index.html
          import: "src/pages/page10.html", // template file
        },
        {
          filename: "page11.html", // => dist/index.html
          import: "src/pages/page11.html", // template file
        },
        {
          filename: "page12.html", // => dist/index.html
          import: "src/pages/page12.html", // template file
        },
      ],

      preprocessor: "eta",
      preprocessorOptions: {
        async: false, // defaults 'false', wenn is 'true' then must be used `await includeAsync()`
        useWith: true, // defaults 'true', use variables in template without `it.` scope
        views: "src/", // relative path to directory that contains templates
        // views: path.join(__dirname, 'src/views'), // absolute path to directory that contains templates
      },
      preload: [
        {
          test: /\.(woff2|woff)$/,
          attributes: { as: "font", crossorigin: true },
        },
      ],
    }),

    new CleanWebpackPlugin({
      // Пример: Очищать папку dist в корне проекта
      // Дополнительные опции могут быть настроены здесь, если требуется
      // dry: true, // Симулировать удаление (файлы не удаляются)
      // verbose: true, // Писать логи в консоль
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Inputmask: "inputmask",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              import: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "group-css-media-queries-loader",
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: "asset/resource",
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
          // options: {
          //   presets: ["@babel/preset-env"],
          //   cacheDirectory: true,
          // },
        },
      },
    ],
  },
};
