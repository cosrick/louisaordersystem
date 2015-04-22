var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

router.post('create',function (req,res){
	var newOrder = new Order();
	newOrder.name = req.body.name;
	newOrder.phoneNumber = req.body.phoneNumber;
	newOrder.order = req.body.order;
	newOrder.total = req.body.total;
	newOrder.email = req.body.email;

	newOrder.save(function (err){
		if (err){
			console.log("Error :" + err);
		}else{
			console.log("Succeed!");
		}
	})

});

router.get('/',function (req,res){
	return Order.find(function (err,orderlist){
		if (!err){
			res.send(orderlist);
		}else{
			console.log("Error :" + err);
			res.send(err);
		}
	});
});


module.exports = router