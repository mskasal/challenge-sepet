const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const ROOT = path.resolve(__dirname, '../');
const PATHS = {
	dist: `${ROOT}/dist/`,
	src: `${ROOT}/src/`,
	entry: [`${ROOT}/src/index.js`]
};

module.exports = {
	entry: {
		app: PATHS.entry
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /dist/],
				use: 'babel-loader',
				include: PATHS.src
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Challenge Sepet!',
			hash: true,
			minify: {
				collapseWhitespace: false
			}
		}),
		new FaviconsWebpackPlugin({
			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			},
			inject: true,
			logo: `${PATHS.src}/logo.png`
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: PATHS.dist
	}
};
