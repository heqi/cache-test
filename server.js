var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.get('/hello',function(req, res) {
	res.send("hello world");
})


app.listen(process.env.PORT || 5000);
