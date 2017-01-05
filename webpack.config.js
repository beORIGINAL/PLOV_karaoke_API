"use strict";
const path = require("path");
const autoprefixer = require('autoprefixer');
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

const PORT = 3000;
const environment = process.env.NODE_ENV;

module.exports = {
	context: path.resolve(__dirname, "app"),
	devtool: "inline-source-map",
	devServer: {
		hot: true,
		noInfo: true,
		contentBase: '/',
		publicPath: `http://localhost:${PORT}/`,
		clientLogLevel: 'error',
		compress: true,
		port: PORT,
		open: true
	},
	entry: {
		vendors: Object.keys(require("./package.json").dependencies),
		app: "./bootstrap"
	},
	output: {
		path: path.join(__dirname, "public"),
		publicPath: `http://localhost:${PORT}/`,
		filename: "[name].js",
		chunkFilename: '[name].bundle.js'
	},
	resolve: {
		alias: {
			images: path.resolve(__dirname, 'assets', 'media', 'images')
		}
	},
	performance: {
		hints: environment === 'production' ? "warning" : false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ng-annotate-loader",
						options: { add: true }
					},
					{
						loader: "babel-loader"
					}
				]
			},
			{
				test: /\.s(c|a)ss/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: [
						{
							loader: "css-loader",
							options: {
								modules: true,
								sourceMap: true
							}
						},
						// {
						// 	loader: 'postcss',
						// 	options: {
						// 		autoprefixer: autoprefixer({
						// 			browsers: [
						// 				'last 3 versions',
						// 				'iOS >= 7',
						// 				'Android >= 4',
						// 				'Explorer >= 11',
						// 				'ExplorerMobile >= 11'
						// 			],
						// 			cascade: false
						// 		})
						// 	}
						// },
						{
							loader: "sass-loader",
							options: {
								sourceMap: true,
								sourceMapContents: true
							}
						}
					]
				})
			},
			{
				test: /\.pug/,
				use: [
					// {
					// 	loader: "ng-cache-loader"
					// },
					{
						loader: "pug-html-loader",
						options: {
							pretty: false
						}
					}
				]
			},
			{
				test: /\.(otf|ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/static/[ext]/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			filename: "index.html",
			template: path.join(__dirname, "app", "index.html"),
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		}),
		new ExtractTextPlugin({
			filename: "[name].css",
			allChunks:true,
			disable: environment === 'development'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors'
		}),
		new webpack.ProvidePlugin({
			'_': 'lodash'
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.scss$/,
			options: {
				sassLoader: {
					loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"],
					includePaths: [ path.resolve(__dirname, 'assets', 'media', 'images') ],
					data: `$env: ${environment};`
				}
			}
		})
	]
};