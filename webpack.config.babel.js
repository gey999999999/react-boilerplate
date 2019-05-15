const
  path = require("path"),
  webpack = require("webpack"),
  autoprefixer = require("autoprefixer"),
  TransferWebpackPlugin = require("transfer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  "mode": "development",
  "devtool": "source-map",
  "entry": "./src/index.jsx",
  "performance": {
    "hints": false
  },
  "output": {
    "filename": "bundle.js",
    "path": path.resolve(__dirname, "./dist")
  },
  "resolve": {
    "extensions": [".js", ".jsx"]
  },
  "devServer": {
    "contentBase": path.join(__dirname, "./dist"),
    "compress": true,
    "port": 80,
    "public": "localhost",
    "proxy": {
      /* 配置代理 */
    }
  },
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/i,
        "exclude": /node_modules/i,
        "use": "babel-loader?cacheDirectory"
      },
      {
        "test": /\.css$/i,
        "exclude": /node_modules/i,
        "use": [
          {"loader": "style-loader"},
          {
            "loader": "css-loader", "options": {
              "localIdentName": "[name]__[local]--[hash:base64:5]"
            }
          },
          {
            "loader": "postcss-loader", "options": {
              "plugins": () => [
                autoprefixer({
                  "browsers": ["iOS >= 7", "Android >= 4.0"],
                  "remove": false
                })
              ]
            }
          }
        ],
      },
      {
        "test": /\.less$/i,
        "exclude": /node_modules/i,
        "use": [
          {"loader": "style-loader"},
          {
            "loader": "css-loader", "options": {
              "localIdentName": "[name]__[local]--[hash:base64:5]"
            }
          },
          {
            "loader": "postcss-loader", "options": {
              "plugins": () => [
                autoprefixer({
                  "browsers": ["iOS >= 7", "Android >= 4.0"],
                  "remove": false
                })
              ]
            }
          },
          {
            "loader": "less-loader", "options": {
              "javascriptEnabled": true
            }
          }
        ],
      },
      {
        "test": /\.less$/i,
        "include": /node_modules/i,
        "use": [
          "style-loader",
          "css-loader",
          {
            "loader": "postcss-loader", "options": {
              "plugins": () => [
                autoprefixer({
                  "browsers": ["iOS >= 7", "Android >= 4.0"],
                  "remove": false
                })
              ]
            }
          },
          {
            "loader": "less-loader", "options": {
              "javascriptEnabled": true
            }
          }
        ],
      },
      {
        "test": /\.css$/i,
        "include": /node_modules/i,
        "use": [
          {"loader": "style-loader"},
          {
            "loader": "css-loader", "options": {
              "modules": false,
              "localIdentName": "[name]__[local]--[hash:base64:5]"
            }
          },
          {
            "loader": "postcss-loader", "options": {
              "plugins": () => [
                autoprefixer({
                  "browsers": ["iOS >= 7", "Android >= 4.0"],
                  "remove": false
                })
              ]
            }
          }
        ],
      },
      {
        "test": /\.(gif|jpg|png|woff|svg|eot|ttf)$/i,
        "use": "url-loader?limit=9648&name=[path][name].[ext]&v=[hash]"
      },
      {
        "test": /\.html$/i,
        "exclude": /node_modules/i,
        "include": /src/i,
        "use": "html-loader?minimize=true"
      },
      {
        "test": /\.appcache$/i,
        "use": "url-loader?mimetype=text/cache-manifest"
      }
    ]
  },
  "plugins": [
    new TransferWebpackPlugin([
      { "from": "../assets/", "to": "assets/" }
    ], path.join(__dirname, "./dist")),
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
      inject: "body",
      minify: false,
      title: "首页"
    })
  ]
};