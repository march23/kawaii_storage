var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res) {
  res.send('Welcome,  Kawaii Storage Center');
});

app.get('/products', function(req, res) {
  fs.readFile('./files/default_storage.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(JSON.parse(data)));
  });
});

app.listen(8080 );


