// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8080/api';

mongoose.Promise = global.Promise;

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});


var options = { promiseLibrary: global.Promise };
mongoose.connect('mongodb://localhost/book-library', options);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
var routes = require('./routes');
app.use('/api', routes);



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api



// START THE SERVER
// =============================================================================
app.listen(port);
console.log();
console.log('App running on port: ' + port);

