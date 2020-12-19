const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            demo: path.resolve(__dirname, '../src/demo'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
