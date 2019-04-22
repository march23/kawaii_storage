const http = require('http');
const url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('./files/default_storage.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(JSON.parse(data)));
  });
}).listen(8080);