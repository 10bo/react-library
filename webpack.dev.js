const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

new webpack.HotModuleReplacementPlugin({
  // Options...
});

module.exports = merge(common,
	{
		watch: true,
		devServer: {
			historyApiFallback: true,
			hot: true
		},
		devtool: 'source-map'
	}
);