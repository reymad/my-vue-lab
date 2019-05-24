// server.js

var express = require('./node_modules/express');
var path = require('path');
var serveStatic = require('./node_modules/serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);