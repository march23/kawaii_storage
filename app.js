var express = require('express');
var app = express();
var routes = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(express.json());
app.use('/', routes);

app.listen(8080 );


