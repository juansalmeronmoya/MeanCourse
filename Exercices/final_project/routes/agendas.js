var winston = require('winston');
var express = require('express');
var router = express.Router();
var Agenda = require('mongoose').model('Agenda');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){
  Planet.find({}, {'_id':false}, function(err, data) {
    if(!err) {
      res.status(200).json(data);
    }
  })
});

router.get('/:id', function (req, res, next) {
  var planetId = req.params.id;
  Planet.find({_id: new ObjectId(planetId)}, {_id: false}, function(err, data) {
    if(!err) {
      res.status(200).json(data);
    }
  })
});

router.post('/', function(req, res, next) {
  var planetData = req.body;
  var newPlanet = new Planet(planetData);
  newPlanet.save(function(err, saved) {
    if(!err) {
      res.status(200).json(saved);
    } else {
      console.log(err);
    }
  })
});

router.delete('/:id', function(req, res, next) {
  var planetId = req.params.id;
  Planet.remove({_id: new ObjectId(planetId)}, function(err){
    if(!err) {
      res.status(200).send(true);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  var planetId = req.params.id;
  var planetData = req.body;
  Planet.update({_id: planetId}, {$set: planetData}, function(err) {
    if(!err) {
      res.status(200).end();
    }
  });
});

module.exports = router; //When calling require('tasks'), we get the router.