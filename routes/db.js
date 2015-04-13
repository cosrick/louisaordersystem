var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema

var AccountSchema = new Schema({
	ID : String,
	Password : String
});


var Account = mongoose.model('Account', AccountSchema, 'ACCOUNT')
mongoose.connect ('mongodb://rick:rick830620@ds031561.mongolab.com:31561/louisacafe');



