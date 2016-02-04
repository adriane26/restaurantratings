///// CRUD FUNCTIONALITY, HANDLES SERVER SIDE THINGS
// $scope.searchTerm, etc. should not go here.
// console.log('hello')
var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res){
	console.log('here')
  // res.sendFile('./public/app/views/landing.html');
});

router.get('/restaurants/:searchTerm', function(req, res){
	// req(options, callback);
	// console.log(data);
	// res.send(data);

/// do I close it below or should  I include the options/callback function?
// });


//// this is request/ npm
var options = {
  url: 'https://data.kingcounty.gov/resource/gkhn-e8mn.json',
  //// info comes back the same whether you specify .json or not
  params: {
        $q: req.params.searchTerm
        // omdbapi = how search term is constructed. s="slfkj" based on what api is looking for. http automatically generates the ?=
  },
  headers: {
    'X-App-Token': process.env.APP_TOKEN
  }
  /// query here?
};
 
function callback(error, response, body) {
	console.log('this is inside the named callback')
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    	///// this is what is showing up in my terminal console log
    // console.log(info);
    // res.send('yououououasdflkhe')
  }
};
request(options, function(err, response, body){
	console.log(options);
	res.send(JSON.parse(response.body))
});

//// below closes the router.get api/restaurants
});

//// below should only be called when there is a searchTerm.  (if there's no search term, add in a warning to search for something)



// angular -
// $http:'mainCtrl/api/restaurants'

module.exports = router;

