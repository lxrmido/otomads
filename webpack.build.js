// var webpack = require('webpack');

module.exports = {
	entry : {
		'index-bundle' : './src/index-entry.js'
	},

	output : {
		filename : './dist/js/[name].js'
	},

	module : {
		loaders : [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	babel: {
		presets: ['es2015', 'stage-0']
	}
};