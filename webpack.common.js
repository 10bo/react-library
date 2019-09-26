const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src", "client", "js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			loader: "babel-loader",
			exclude: "/node_modules/",
			query: {
				presets: [
					'@babel/env',
					'@babel/react'
				]
			},
			resolve: /\.jsx?/
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'MailCharm',
		template: 'index.html'
	})]
}