var express = require('express');
var fs = require ('fs'); 
var app = express.createServer(express.logger());

var index = fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data.toString('utf8',0));
}); 

app.get('/', function(request, response) {
  response.send(index.toString('utf8',0));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
