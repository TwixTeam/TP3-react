const path = require('path')
const webpack = require('webpack')
const SRC_DIR = path.resolve(__dirname, 'src')

let config = {
    entry: SRC_DIR + '/main.jsx',
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['react-hot-loader/webpack', 'babel-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve('./public')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    )
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin()
    )  
} else {
    config.devtool = 'cheap-module-eval-source-map'
    config.entry = ['react-hot-loader/patch', config.entry]
}

module.exports = config