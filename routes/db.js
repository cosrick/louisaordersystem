var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var Schema = mongoose.Schema;
var router = express.Router();
var DB_password = process.env.DB_password;

mongoose.connect ('mongodb://rick:' + DB_password + '@ds031561.mongolab.com:31561/louisacafe',function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Remote DB Connect!");
	}
});

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


	var Menu = mongoose.model("Menu",MenuSchema, "Menu");//(modelName, Schema, theExistingSchemaName)

	// app.use(bodyParser.urlencoded());


	//-------------------------------------------------
	//Menu 
	// app.get('/api/menu', function (req,res){
	// 	Menu.find(function (err,menulist) {
	// 		console.log(menulist);
	// 	})
	// 	return Menu.find(function (err, menulist){
	// 		if (!err){
	// 			res.render(menulist);
	// 			return res.send(menulist);
	// 		}else{
	// 			return res.send("Error!");
	// 		}
	// 	})
	// });








