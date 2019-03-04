const webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      SpritesmithPlugin = require('webpack-spritesmith');

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
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            ]
        },
        mode: 'production',
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/style.css"),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' },
            { from: 'src/fonts', to: 'fonts' },
            { from: 'src/index.html', to: '' },
        ]),
        new SpritesmithPlugin({
            src: {
                cwd: 'src/png-icons',
                glob: '*.png'
            },
            target: {
                image: 'src/img/sprite.png',
                css: 'src/scss/_sprite.scss'
            },
            apiOptions: {
                cssImageRef: "/img/sprite.png"
            },
            retina: '@2x'
        })
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