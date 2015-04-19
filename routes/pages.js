var express = require('express');
var router = express.Router();

var test = require('./apis/api_menu');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

router.use('/poka', test)

module.exports = router;
