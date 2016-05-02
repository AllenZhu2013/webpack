var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		pageA: './pageA',
		pageB: './pageB'
	},
	output: {
		path: path.join(__dirname, 'js'),
		filename: '[name].bundle.js',
		chunkFileName: '[id].chunk.js'//代码分离，使用异步的方式加载文件，避免文件过大
	},
	plugins: [
        new  webpack.optimize.CommonsChunkPlugin({  //抽取各个模块的公用部分，去重
        	filename: 'common.js',
        	name: 'common'
        })
    ]
}