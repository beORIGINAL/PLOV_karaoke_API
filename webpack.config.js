"use strict";
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
	context: path.resolve(__dirname, "app"),
	devtool: "inline-source-map",
	entry: {
		app: "./app.js",
		vendors: Object.keys(require("./package.json").dependencies)
	},
	output: {
		path: path.join(__dirname, "public"),
		publicPath: "/",
		filename: "[name].js"
	},
	module: {
		resolve: ["", ".js", ".scss", ".html"],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style", "css-loader!sass-loader")
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
			filename: "index.html",
			template: path.join(__dirname, "app", "index.html")
		}),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("[name].css", { allChunks:true, disable: process.env.NODE_ENV === 'development'})
	],
	node: {
		fs: "empty"
	},
	devServer: {
		hot: true,
		inline: true,
		watch: true
	}
};