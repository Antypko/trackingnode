var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/test');

var collection = db.get('node');

module.exports = collection;