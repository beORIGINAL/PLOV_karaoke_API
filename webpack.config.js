var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, "app"),
	devtool: "inline-source-map",
	entry: {
		app: "./app.js",
		vendors: [ "angular" ]
	},
	output: {
		path: path.join(__dirname, "public"),
		publicPath: '/',
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loader: "style!css-loader!sass-loader"
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "raw"
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			filename: path.join(__dirname, "public", "index.html"),
			template: 'index.html'
		})
	]
};