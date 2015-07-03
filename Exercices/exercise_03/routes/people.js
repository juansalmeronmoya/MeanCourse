var winston = require('winston');
var express = require('express');
var router = express.Router();
var People = require('mongoose').model('People');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){
  People.find({}, {'_id':false}, function(err, data) {
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
      var collection = db.collection('people');
      collection.find({'_id':id}).toArray(function (err, result) {
        winston.info(result);
        res.status(200).send(result);
      });
    }
  });
  //Retrieve all pieces
});

router.post('/', function(req, res, next) {
  mongo.connect("mongodb://localhost:27017/exercise3", function (err, db) {
    var json = req.body;
    if (!err) {
      winston.info("We are connected");
      var collection = db.collection('people');
      collection.insert(json);
      res.status(200).send(true);
    }
  });
  //Create new piece
});

router.delete('/:id', function(req, res, next) {
  mongo.connect("mongodb://localhost:27017/exercise3", function (err, db) {
    var id = new ObjectID(req.params.id);
    if (!err) {
      winston.info("We are connected");
      var collection = db.collection('people');
      collection.remove({'_id': id});
      res.status(200).send(true);
    }
  });
  //Delete from DB.
});

router.patch('/:id', function(req, res, next) {
  mongo.connect("mongodb://localhost:27017/exercise3", function (err, db) {
    var id = new ObjectID(req.params.id);
    var type = req.body.type;
    var location = req.body.location;
    var cost = req.body.cost;
    var json = req.body;
    if (!err) {
      winston.info("We are connected");
      var collection = db.collection('people');
      collection.update({'_id': id},{$set:json}, {multi:true});
      res.status(200).send(true);
    }
  });
  //Update on db
});

module.exports = router; //When calling require('tasks'), we get the router.