var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	console.log(data.toString('utf8',0));
	response.send(data.toString('utf8',0));
    });
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
