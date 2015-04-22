var express = require('express');
var router = express.Router();

/* GET users listing. */
var menu = require('./apis/api_menu');
var order = require('./apis/api_order');

router.use('/menu',menu);
router.use('/order',order);




module.exports = router;
