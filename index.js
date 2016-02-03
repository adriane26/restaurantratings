var express 	= require('express');
var bodyParser 	= require('body-parser');
var path 		= require('path');
// var http 		= require('http');
var request 	= require('request');
// var https 		= require('https');
// var fs 			= require('fs');
// var privateKey  = fs.readFileSync('key.pem', 'utf8');
// var certificate = fs.readFileSync('cert.pem', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
var app 		= express();


///// require mongoose/database stuff here////////////
var mongoose = require('mongoose');
// var Comment = require('./models/comment');
mongoose.connect('mongodb://localhost/restaurantratings');

////// scotch.io says this: 
// var db = require('./config/db');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


///controllers here //////////////
// app.use('api/restaurants', require('./controllers/mainCtrl'));
// app.use('/api/restaurants', require('./controllers/mainCtrl'));
//// other than our api, express will then default to angular to handle front end
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/', require('./controllers/mainCtrl'));

// app.use('/api/stuff', require('./controllers/stuff'));
// //Below codes unnecessary as catch-all is handled by 'otherwise' in ngRoute (app.js)
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });



// var httpServer = http.createServer(app);
// var httpsServer = https.createServer( app);
// var httpsServer = https.createServer(credentials, app);


// var port = process.env.PORT || 3000;
console.log("HEY LOOK IT'S WORKING!");
// httpServer.listen(process.env.PORT || 3000);
// httpsServer.listen(process.env.SSLPORT || 4000); 

  // console.log("RUNNING");
  app.listen(process.env.PORT || 3000);