var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');	
//Schema


/////////////////////////////////////////
	/**** 	Menu Info	****/ 
/////////////////////////////////////////

var Menu = new Schema({
	productName	: String,
	description : String,
	price 		: Number,
	category	: String,
})


var Menu = mongoose.model("Menu",Menu);//(modelName, Schema)



var Account = mongoose.model('Account', AccountSchema, 'ACCOUNT')
mongoose.connect ('mongodb://rick:rick830620@ds031561.mongolab.com:31561/louisacafe'function(err){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("Remote DB Connect!");
	}
});



