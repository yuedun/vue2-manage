require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var open = require('open')
var path = require('path')
var express = require('express')
var cookieParse = require('cookie-parser')
var webpack = require('webpack');
var bodyParser = require('body-parser');
var { createProxyMiddleware } = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
	? require('./webpack.prod.conf')
	: require('./webpack.dev.conf')

var apiServer = require('./data-service')
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => { }
})
// force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', function (compilation) {
// 	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
// 		hotMiddleware.publish({ action: 'reload' })
// 		cb()
// 	})
// })
compiler.hooks.compile.tap('MyPlugin', (compilation) => {
	hotMiddleware.publish({ action: 'reload' })
	// compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
	// 	cb()
	// })
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
app.use(cookieParse());

app.use('/api', createProxyMiddleware({
	target: 'http://localhost:8900/',
	changeOrigin: true,
	logLevel: 'debug',
	pathRewrite: { '^/api': '' },
	onProxyReq: function (proxyReq, req, res) {
		proxyReq.setHeader('Authorization', "Bearer " + req.cookies.token);
		proxyReq.setHeader('Authorization', "Bearer " + req.cookies.jwt);
	}
}))

app.use(bodyParser.json());
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'));// 图片请求路径/static/img/xx.jpg

//****************前端调用自带API服务****************
apiServer(app);
//****************前端调用自带API服务****************

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
	_resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
	console.log('> Listening at ' + uri + '\n')
	// when env is testing, don't need open it
	if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
		open(uri);
	}
	_resolve()
})

var server = app.listen(port)

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
}
