var winston = require('winston');
var express = require('express');
var router = express.Router();
var Contact = require('mongoose').model('Contact');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){
  People.find({}, {'_id':false}, function(err, data) {
    if(!err) {
      res.status(200).json(data);
    }
  })
});

router.get('/:id', function (req, res, next) {
  var peopleId = req.params.id;
  People.find({_id: new ObjectId(peopleId)}, {_id: false}, function(err, data) {
    if(!err) {
      res.status(200).json(data);
    }
  })
});

router.post('/', function(req, res, next) {

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

});

module.exports = router; //When calling require('tasks'), we get the router.