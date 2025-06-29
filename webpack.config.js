const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
     entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: 'assets/[name][ext]'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] }
          }
        },
        {
          test: /\.webp$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]' // Organiza mejor las imágenes
          }
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // ← Ruta corregida aquí
        filename: 'index.html'
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 8080,
      open: true,
      hot: true,
      compress: true,
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};
