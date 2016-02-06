// BACK END : showCtrl.js  WILL HAVE LOGIC FOR DISPLAYING THE LETTER GRADE
//// OR : SHOULD IT ALL BE HANDLED BY MAIN CTRL?  


//// will this call my database ?? 
var express = require('express');
// var request = require('request');
var Vote = require('../models/vote');
var router = express.Router();



router.route('/')
  .post(function(req, res) {
  	console.log(req.body);

  	var update;
  	if (req.body.vote === 'yes') {
  		update = {$inc: {yes_count: 1}};
  	} else {
  		update = {$inc: {no_count: 1}};
  	}

  	var options = {
  		// Return the document after updates are applied
  		new: true,
  		// Create a document if one isn't found. Required
  		// for 'setDefaultsOnInsert'
  		upsert: true,
  		setDefaultsOnInsert: true
  	};

  	Vote.findOneAndUpdate({business_id: req.body.business_id}, update, options, function(error, doc){
  		console.log("this is my error " +error);
  		console.log("doc " + doc);
  		if (error) return res.status(500).send(error);
  		res.send(doc);
  		// if (!err) {
  		// 	res.status(200).send(doc);
  		// }
  	});

    // Vote.findOrCreate(req.params.id, function(err, vote) {
    //   if (err) return res.status(500).send(err);
    //   // find, if not found, create, if found, update

    //   res.send(vote);
    // });
  })
  .put(function(req, res) {
    Vote.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Airplane.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

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

module.exports = router;