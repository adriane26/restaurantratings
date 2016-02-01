var express 	= require('express');
var bodyParser 	= require('body-parser');
var path 		= require('path');
var http 		= require('http');
var app 		= express();


///// require mongoose/database stuff here////////////
// var mongoose = require('mongoose');
// var Stuff = require('./models/stuff');
// // var User = require('./models/user');
// var Trail = require('./models/trail');
// var Comment = require('./models/comment');
// mongoose.connect('mongodb://localhost/stuff');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


///controllers here //////////////
app.get('/', require('./app/controllers/mainCtrl'));

// app.use('/api/stuff', require('./controllers/stuff'));
// //Below codes unnecessary as catch-all is handled by 'otherwise' in ngRoute (app.js)
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });



var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

console.log("HEY LOOK IT'S WORKING!")
httpServer.listen(process.env.PORT || 3000);
// orrrrr 

  // console.log("RUNNING");
  // app.listen(process.env.PORT || 3000);