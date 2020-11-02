const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const fs = require('fs');
const camelCase = require('camelcase');
const TerserPlugin = require('terser-webpack-plugin');

const filesName = fs.readdirSync(path.join(__dirname, '../src/modules'));

// const entry = {};
// filesName.forEach((fileName) => {
//   if(fileName !== 'login' && fileName !== 'layout') {
//     entry[`${camelCase(fileName)}AsyncModule`] = `./src/modules/${fileName}/export.js`
//   }
// });
const entry = {
  app: [
    './src/main.js'
  ]
}

module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkHash:5].js',
    library: '[name]',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.svg'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  stats: {
    colors: true,
    hash: true,
    timings: true,
    assets: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
  },
  // devtool: 'source-map',
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              emitWarning: true,
              emitError: true,
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest' // webpack runtime code
    },
    minimize: true, // default true in production mode
    minimizer : [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        cacheKeys: defaultCacheKeys => defaultCacheKeys,
        parallel: true,
        // sourceMap: true, // Must be set to true if using source-maps in production
        extractComments: false,
        terserOptions: {
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/i
          },
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true
          },
          // mangle: {
          //   safari10: true
          // }
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
    splitChunks: {
      // chunks: 'async',
      // chunks: 'all',
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 5,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // automaticNameMaxLength: 30,
      // name: true,
      cacheGroups: {
        default: false,
        vendors: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          // name(module, chunks, cacheGroupKey) {
          //   const moduleFileName = module.identifier().split('/').reduceRight((item) => item);
          //   const allChunksNames = chunks.map((item) => item.name).join('~');
          //   return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          // },
          name: 'vendor',
          // name(module) {
          //   // get the name. E.g. node_modules/packageName/not/this/part.js
          //   // or node_modules/packageName
          //   const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

          //   // npm package names are URL-safe, but some servers don't like @ symbols
          //   return `npm.${packageName.replace('@', '')}`;
          // },
          priority: 2
        },
        common: {
          chunks: 'all',
          minChunks: 2,
          minSize: 1000,
          // maxInitialRequests: 1,
          priority: -20,
          // name: false,
          // name(module, chunks, cacheGroupKey) {
          name(module) {
            const moduleFileName = module.identifier().split('/').reduceRight((item) => item).split('.')[0];
            // const allChunksNames = chunks.map((item) => item.name).join('~');
            // return `${cacheGroupKey}*${allChunksNames}*${moduleFileName}`;
            return `${moduleFileName}`;
          },
          // test: /.+/,
          // name(module) {
          //   return `hahaha${module}`;
          // },
          // reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true,
      templateParameters: {
        BASE_URL: '/' // for BASE_URL variable on index.html
      },
    }),
    new webpack.ProgressPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(), // webpack 4 default config
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'),
      to: '.',
      ignore: [
        'index.html',
      ]
    }]),
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ]
};
