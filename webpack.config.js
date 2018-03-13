var path = require("path")
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new
HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: path.resolve(__dirname , 'app/App.js'),
	module: {
		rules: [
		{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:{
          		presets: ['es2015', 'react']
        		}
		}
		]
	},
	output: {

		path:  path.resolve(__dirname , 'build'),
		filename: 'transformed.js',
	},
	plugins: [HTMLWebpackPluginConfig]
};