const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		styles  : './src/sass/styles.scss',
		scripts : './src/app.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'assets')
	},
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
		fallback: {
			fs : false
		}		
	},
	module  : {
		rules : [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ 
				test: /\.(ts|tsx)$/,
				loader: "ts-loader" 
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-classes']
					}
				}
			},
			{
				test : /\.html$/,
				use  : [
					'html-loader'
				]
			},
			{
				test : /\.(svg|png|jpg|gif)$/,
				use  : {
					loader  : 'file-loader',
					options : {
						name       : '[name].[ext]',
						outputPath : 'imgs'
					}
				}
			}
		]
	},
	plugins : [
		new CleanWebpackPlugin()
	]
};
