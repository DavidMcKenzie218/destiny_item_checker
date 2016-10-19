var ItemApi = function(app){

  var items = require('../client/src/models/items')();

  app.get('/api/items/', function(req, res){
    res.json(items);
  });

}

module.exports = ItemApi;