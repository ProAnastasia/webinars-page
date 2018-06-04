const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = args.mode === 'production';

module.exports = {
  entry: {main: ['./src/index']},
  output: {
    filename: isProduction ?  'bundle.[chunkhash].js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'styles': path.resolve(__dirname, './src/assets/scss/'),
      'images': path.resolve(__dirname, './src/assets/images/'),
      'actions': path.resolve(__dirname, './src/actions/'),
      'reducers': path.resolve(__dirname, './src/reducers/'),
      'containers': path.resolve(__dirname, './src/containers/'),
      'components': path.resolve(__dirname, './src/components/'),
      'pages': path.resolve(__dirname, './src/pages/'),
      'constants': path.resolve(__dirname, './src/constants/constants.js'),
      'utils': path.resolve(__dirname, './src/utils/utils.js')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use:  [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['src/assets/scss/variables.scss', 'src/assets/scss/mixins.scss']
            }
          },
          'import-glob-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?removeSVGTagAttrs=false'
      },
      {
        test: /\.png/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.woff2|woff$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: isProduction ? 'stylesheets/style.[contenthash].css' : 'stylesheets/style.css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: isProduction,
      template: 'src/template.html',
      filename: 'index.html',
      title: 'Webinars Semrush'
    }),
    new WebpackMd5Hash()
  ]
};