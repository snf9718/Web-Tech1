var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});
module.exports = router;
/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});
/* GET home page. */

