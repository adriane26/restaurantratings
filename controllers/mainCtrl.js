/////BACK END. CRUD FUNCTIONALITY, HANDLES SERVER SIDE THINGS.
// $scope.searchTerm, etc. should not go here.
// console.log('hello')
var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res){
  // res.sendFile('./public/app/views/landing.html');
});

router.get('/restaurants/:searchTerm', function(req, res){
//// this is request/ npm
	var options = {
  	url: ('https://data.kingcounty.gov/resource/gkhn-e8mn.json?$$app_token='+process.env.APP_TOKEN+'&$q='+req.params.searchTerm)
	};
	function callback(error, response, body) {
  	if (!error && response.statusCode == 200) {
    	var info = JSON.parse(body);
  	}
	};
	request(options, function(err, response, body){
		res.send(JSON.parse(response.body))
	});
//// below closes the router.get api/restaurants
});

module.exports = router;