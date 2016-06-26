var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var $ = require('jquery');
//app.use(express.staticProvider(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8080);