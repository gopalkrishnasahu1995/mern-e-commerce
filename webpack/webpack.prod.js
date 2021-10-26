const webpack = require('webpack');
const BundleAnalyzePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env.name':JSON.stringify('production')
        }),
        new BundleAnalyzePlugin()
    ]
}