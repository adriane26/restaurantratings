/////BACK END. CRUD FUNCTIONALITY, HANDLES SERVER SIDE THINGS.
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
//// this is request/ npm
var options = {
  // url: 'https://data.kingcounty.gov/resource/gkhn-e8mn.json',
  ///// below will still give me entire .json object. the whole list.
  // url: ('https://data.kingcounty.gov/resource/gkhn-e8mn.json'+'?$q='+req.params.searchTerm),
  url: ('https://data.kingcounty.gov/resource/gkhn-e8mn.json?$$app_token='+process.env.APP_TOKEN+'&$q='+req.params.searchTerm)
  //// info comes back the same whether you specify .json or not
  // headers: {
  //   'X-App-Token': process.env.APP_TOKEN
  // },
  // params: {
  //       $q: req.params.searchTerm
  //       // omdbapi = how search term is constructed. s="slfkj" based on what api is looking for. http automatically generates the ?=
  // }
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
	// console.log(options);
	res.send(JSON.parse(response.body))
});

//// below closes the router.get api/restaurants
});

/////// when we click through to see a restaurant expanded view: 

// router.get('/restaurants/:id', function(req, res){
  //// i'm not doing anything on back end... just taking that business and showing more info.

// }); /// closes router.get('/restaurants/:id');


// angular -
// $http:'mainCtrl/api/restaurants'

module.exports = router;

