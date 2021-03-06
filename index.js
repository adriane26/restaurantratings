var express 	= require('express');
var bodyParser 	= require('body-parser');
var path 		= require('path');
var request 	= require('request');
var app 		= express();


///// require mongoose/database stuff here////////////
var mongoose = require('mongoose');
var Vote = require('./models/vote');
mongoose.connect('mongodb://localhost/restaurantratings');

////// scotch.io says this: 
// var db = require('./config/db');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


///controllers here //////////////
app.use('/api', require('./controllers/MainCtrl'));
app.use('/restaurant', require('./controllers/ShowCtrl'));
//// other than our api, express will then default to angular to handle front end
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

console.log("HEY LOOK IT'S WORKING!");
app.listen(process.env.PORT || 3000);