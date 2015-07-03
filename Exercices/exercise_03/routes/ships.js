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
  mongo.connect("mongodb://localhost:27017/exercise3", function (err, db) {
    var json = req.body;
    if (!err) {
      winston.info("We are connected");
      var collection = db.collection('ships');
      collection.insert(json);
      res.status(200).send(true);
    }
  });
});

router.delete('/:id', function(req, res, next) {
  var taskId = req.params.id;
  Ship.remove({_id: new ObjectId(taskId)}, function(err){
    if(!err) {
      res.status(200).send(true);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  var planetId = req.params.id;
  var planetData = req.body;
  Ship.update({_id: planetId}, {$set: planetData}, function(err) {
    if(!err) {
      res.status(200).end();
    }
  });
});

module.exports = router; //When calling require('tasks'), we get the router.