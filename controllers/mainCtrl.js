///// CRUD FUNCTIONALITY, HANDLES SERVER SIDE THINGS
// $scope.searchTerm, etc. should not go here.

var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res){
  res.sendFile('./public/app/views/landing.html');
});

// node -
// .get ('/api/restaurants' request: 'http://data.gov'
// 	res.send(data))

router.get('/api/restaurants', function(req, res){
	res.send(data);
});


//// this is request/ npm
var options = {
  url: 'https://data.kingcounty.gov/resource/gkhn-e8mn',

  headers: {
    'X-App-Token': process.env.APP_TOKEN
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
};
 
request(options, callback);


// angular -
// $http:'mainCtrl/api/restaurants'

module.exports = router;



///// ACCORDING TO AIRPLANE EXAMPLE, CRUD FUNCTIONALITY WILL GO HERE.

// var express = require('express');
// var Airplane = require('../models/airplane');
// var router = express.Router();

// router.route('/')
//   .get(function(req, res) {
//     Airplane.find(function(err, airplanes) {
//       if (err) return res.status(500).send(err);
//       res.send(airplanes);
//     });
//   })
//   .post(function(req, res) {
//     Airplane.create(req.body, function(err, airplane) {
//       if (err) return res.status(500).send(err);
//       res.send(airplane);
//     });
//   });

// router.route('/:id')
//   .get(function(req, res) {
//     Airplane.findById(req.params.id, function(err, airplane) {
//       if (err) return res.status(500).send(err);
//       res.send(airplane);
//     });
//   })
//   .put(function(req, res) {
//     Airplane.findByIdAndUpdate(req.params.id, req.body, function(err) {
//       if (err) return res.status(500).send(err);
//       res.send({'message': 'success'});
//     });
//   })
//   .delete(function(req, res) {
//     Airplane.findByIdAndRemove(req.params.id, function(err) {
//       if (err) return res.status(500).send(err);
//       res.send({'message': 'success'});
//     });
//   });

// module.exports = router;