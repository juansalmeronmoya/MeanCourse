var winston = require('winston');
var express = require('express');
var router = express.Router();
var Contact = require('mongoose').model('Company');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){

});

router.get('/:id', function (req, res, next) {

});

router.post('/', function(req, res, next) {

});

router.delete('/:id', function(req, res, next) {

});

router.patch('/:id', function(req, res, next) {

});

module.exports = router; //When calling require('tasks'), we get the router.