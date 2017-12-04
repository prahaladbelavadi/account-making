const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
var app = express();
//
// // Create HTTP server and listen on port 8000 for requests
// http.createServer(function(request, response) {
//
//    // Set the response HTTP header with HTTP status and Content type
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // Send the response body "Hello World"
//    response.render('./public/index.html');
// }).listen(8000);

app.get('/public', function(req, res) {
    res.sendFile(__dirname+'/public/index.html')
});

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(8000)
