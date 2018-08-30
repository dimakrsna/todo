const webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets:[ 'es2015', 'react', 'stage-2' ]
                }
            },
            {
                test: /\.css$/, // for libs .css
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        { loader: 'postcss-loader' },
                        { loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        emitFile: false
                    },
                },
                ],
            }
            ]
        },
        mode: 'production',
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/style.css"),
    ],
    devServer: {
        contentBase: './src',
        hot: true,
        historyApiFallback: true
    },
    optimization: {
      minimizer: [
      new UglifyJsPlugin({
          sourceMap: true,
          extractComments: true
      })
      ]
  }
};