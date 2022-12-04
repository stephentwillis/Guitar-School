const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].bundle.css' })
	]
});
