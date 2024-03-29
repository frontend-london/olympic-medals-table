import { Configuration } from 'webpack';
import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const CopyPlugin = require('copy-webpack-plugin');
const projectDirectory = join(__dirname, '..');

const config: Configuration = {
    entry: {
        app: join(projectDirectory, 'src/app/index.tsx'),
    },
    output: {
        path: join(projectDirectory, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(projectDirectory, 'src/app/index.html'),
            inject: 'body',
            react: `react@${process.env.npm_package_dependencies_react}`,
            reactDOM: `react-dom@${process.env.npm_package_dependencies_react_dom}`
        }),
        new CopyPlugin([
            { from: 'src/data', to: 'data' },
        ]),
        new CopyPlugin([
            { from: 'src/images/favicon.ico', to: 'favicon.ico', toType: 'file' },
        ]),
    ]
}

export default config;