var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Menu = mongoose.model('Menu'); // Get Meeting data schema
	// bodyParser = require('body-parser'),
	// formidable = require('formidable'),
    // util = require('util')
    // fs   = require('fs-extra');


router.get('/',function(req,res){
	// res.send('poak123');
	return Menu.find(function(err, menu){
		if(!err)
			return res.send(menu);
		else
			return res.send(err);
	});
});

// find one
router.get('/:id',function(req,res){
	// res.send('poak123');
	return Menu.findOne({_id: req.params.id},function(err, menu){
		if(!err)
			return res.send(menu);
		else
			return res.send(err);
	});
});
// find one

router.post('/create',function(req,res){

	var newMenu = new Menu();

	newMenu.productName	= req.body.productName;
	newMenu.description = req.body.description;
	newMenu.price 		= req.body.price;
	newMenu.category	= req.body.category;

	// console.log(req.body);
	newMenu.save(function(err){
		if(!err){
			console.log("created");
			res.send(newMenu);
		}
		else{
			console.log(err);
		}
	})
})



// router.get('/id/:id',function(req,res){
// 	return Menu.findById(req.params.id, function(err, menu){
// 		if (!err)
// 			return res.send(menu);
// 		else 
// 			return res.send(err);
// 	});
// });


module.exports = router;