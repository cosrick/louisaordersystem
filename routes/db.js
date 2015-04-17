var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var Schema = mongoose.Schema;
var router = express.Router();
mongoose.connect ('mongodb://rick:rick830620@ds031561.mongolab.com:31561/louisacafe',function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Remote DB Connect!");
	}
});
module.exports = function(app){
	app.use(bodyParser.urlencoded());
//Schema
/////////////////////////////////////////
	/**** 	Menu Info	****/ 
/////////////////////////////////////////
	var MenuSchema = new Schema({
		productName	: String,
		description : String,
		price 		: Number,
		category	: String,
	});


	var Menu = mongoose.model("Menu",MenuSchema,"Menu");//(modelName, Schema)




	//-------------------------------------------------
	//Menu 
	app.get('/api/menu', function (req,res){
		Menu.find(function (err,menulist) {
			console.log(menulist);
		})
		// return Menu.find(function (err, menulist){
		// 	if (!err){
		// 		res.render(menulist);
		// 		return res.send(menulist);
		// 	}else{
		// 		return res.send("Error!");
		// 	}
		// })
	});


};






