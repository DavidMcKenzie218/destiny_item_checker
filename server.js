var express = require('express');
var app = express();
var path = require('path');
var ItemApi = require('./item_api/ItemApi');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  new ItemApi(app);

  console.log('Example app listening at http://%s:%s', host, port);
});
