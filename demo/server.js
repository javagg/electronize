var express = require('express')
var static = require('serve-static')
//var exposeRequire = require('browser-require');
var app = express()
//app.use(exposeRequire({  base: __dirname + "/app" }))
app.use(static(__dirname + '/app'))
app.listen(3000)