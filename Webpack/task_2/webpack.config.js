const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 70 },
              optipng: { enabled: false },
              pngquant: { enabled: false },
              gifsicle: { interlaced: false },
              webp: { quality: 70 },
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
};
