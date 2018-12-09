// Require the Express module
// https://npmjs.com/package/express
var express = require('express');

// Create a new application instance
var app = express();

// Use Express's built-in static file server
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/js', express.static(__dirname + '/node_modules/popper/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// Also respond to `GET` requests at the path '/hi'
app.get('/hi', function(req, res){
   res.send('Hello from Express!'); 
});

// Listen on port 8080 for Cloud9
// https://docs.c9.io/docs/run-an-application#section-environment-variables
app.listen(8080);

// Log a message to the console.
console.log("Server is up!");
console.log("Port: 8080.");


