var winston = require('winston');
var express = require('express');
var router = express.Router();
var Ship = require('mongoose').model('Ship');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){
  Ship.find({}, {'_id':false}, function(err, data) {
    if(!err) {
      res.status(200).json(data);
    }
  })
});

router.get('/:id', function (req, res, next) {
  mongo.connect("mongodb://localhost:27017/exercise3", function (err, db) {
    var id = new ObjectID(req.params.id);
    if (!err) {
      winston.info("We are connected");
      var collection = db.collection('ships');
      collection.find({'_id':id}).toArray(function (err, result) {
        winston.info(result);
        res.status(200).send(result);
      });
    }
  });
});

router.post('/', function(req, res, next) {
  var shipData = req.body;
  var newShip = new Ship(shipData);
  newShip.save(function(err, saved) {
    if(!err) {
      res.status(200).json(saved);
    } else {
      console.log(err);
    }
  })
});

router.delete('/:id', function(req, res, next) {
  var shipId = req.params.id;
  Ship.remove({_id: new ObjectId(shipId)}, function(err){
    if(!err) {
      res.status(200).send(true);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  var shipId = req.params.id;
  var shipData = req.body;
  Ship.update({_id: shipId}, {$set: shipData}, function(err) {
    if(!err) {
      res.status(200).end();
    }
  });
});

module.exports = router; //When calling require('tasks'), we get the router.