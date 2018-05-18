var express = require('express');
var path = require('path');
var open = require('open');

var port = 1337;
var app = express();

app.get('/', function(req, res) { // any references to the root should be handled by this function, which takes a request and a response
  res.sendFile(path.join(__dirname, '../src/index.html')); // get response and join specified file to the directory name that function is currently running
});

app.listen(port, function(err) { // listen on the port
  if (err) {
    console.log(err); // log error to console
  } else {
    open('http://localhost:' + port); // open website
  }
});
