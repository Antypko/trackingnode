var express = require('express');
var router = express.Router();
var collections = require('../mongoDB/collections');

/* GET users listing. */

router.get('/:userId', function(req, res) {
    var userIdvar = req.param("userId");
    collections.findById(userIdvar, {}, function(err, data){
    	res.render("user", 
    		{
    			userName : data.username,
    			userEmail : data.email
    		}
    	);
	});
});

module.exports = router;