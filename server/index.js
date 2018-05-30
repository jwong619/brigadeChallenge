var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

var port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});