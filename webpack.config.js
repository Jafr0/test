const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESlintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = {
	entry: path.resolve(__dirname, './src/page/script.js'), ///////////
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.ts?$/i,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/page/index.html'),
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
		new ESlintPlugin({ extensions: ['ts'] }),
		/* new CopyWebpackPlugin({ patterns: [{ from: './src/assets/', to: './assets/' }] }), */
	],

	experiments: {
		topLevelAwait: true,
	},
};

module.exports = ({ mode }) => {
	const isProductionMode = mode === 'prod';
	const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

	return merge(baseConfig, envConfig);
};
