var express = require('express');
var router = express.Router();

/* GET users listing. */
var menu = require('./apis/api_menu');

router.use('/menu',menu);




module.exports = router;
