var express = require('express');
var products = express.Router();
var fs = require('fs');

/* GET products listing. */
products.get('/', function(req, res) {
  fs.readFile('./files/default_storage.json', function(err, data) {
     res.status(200).json(JSON.parse(data));
  });
});

/* PUT products update. */
products.put('/', function(req, res){
  fs.writeFile('./files/default_storage.json', JSON.stringify(req.body.products), function (err) {
    res.status(200).json({ status: 'success' });
  });
});

module.exports = products;
