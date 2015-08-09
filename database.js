var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    title : String,
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb://admin:test3ser@ds031893.mongolab.com:31893/heroku_1mrrqb3j');