var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var page = "";
  var fd = fs.openSync('./index.html', "r");
  page = fs.readSync(fd, 28, 0, "ascii");
  response.send(page);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
