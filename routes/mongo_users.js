var express = require('express');
var router = express.Router();
var collections = require('../mongoDB/collections');

/* GET users listing. */

router.get('/', function(req, res) {
	collections.find({},{},function(e,docs){
		res.render('users', {"userlist" : docs} );
	});
});

module.exports = router;
