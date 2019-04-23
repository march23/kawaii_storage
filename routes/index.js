var express = require('express');
var routes = express.Router();
var products = require('./products');

/* GET home page. */
routes.get('/', function(req, res, next) {
  res.render('index.pug', { title: 'Express' });
});

routes.use('/products', products);
 
module.exports = routes;
