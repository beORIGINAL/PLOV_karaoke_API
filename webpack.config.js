"use strict";
const path = require("path");
const autoprefixer = require('autoprefixer');
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
	context: path.resolve(__dirname, "app"),
	devtool: "inline-source-map",
	entry: {
		app: "./bootstrap",
		vendors: Object.keys(require("./package.json").dependencies)
	},
	output: {
		path: path.join(__dirname, "public"),
		publicPath: "/",
		filename: "[name].js"
	},
	module: {
		resolve: {
			extensions: ["", ".js", ".scss", ".html"]
		},
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "ng-annotate?add=true!babel"
			},
			{
				test: /\.s(c|a)ss/,
				loader: ExtractTextPlugin.extract("style", "css-loader!postcss-loader!sass-loader")
			},
			{
				test: /\.jade$/,
				loader: "ng-cache!jade-html"
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			filename: "index.html",
			template: path.join(__dirname, "app", "index.html")
		}),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("[name].css", { allChunks:true, disable: process.env.NODE_ENV === 'development'}),
		new webpack.ProvidePlugin({
			'_': 'lodash'
		})
	],
	'postcss': [
		autoprefixer({
			browsers: [
				'last 3 versions',
				'iOS >= 7',
				'Android >= 4',
				'Explorer >= 11',
				'ExplorerMobile >= 11'
			],
			cascade: false
		})
	],
	node: {
		fs: "empty"
	},
	devServer: {
		hot: true,
		inline: true,
		colors: true,
		watchPoll: true,
		contentBase: path.resolve(__dirname, "public"),
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 300,
			poll: 500
		},
		stats: {
			hash: false,
			version: false,
			timings: false,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: true,
			warnings: false,
			publicPath: false
		}
	}
};