var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html','utf8');
  var buffer = new Buffer(text);
  response.send(buffer.toString('utf8'));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
