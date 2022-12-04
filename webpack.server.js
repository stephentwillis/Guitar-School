const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'hidden-nosources-cheap-source-map',
	devServer: {
		port: 8080,
		open: true,
		hot: false,
		liveReload: true,
		static: { 
			directory: path.join(__dirname, "dist")
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
});
