var winston = require('winston');
var express = require('express');
var router = express.Router();
var Contact = require('mongoose').model('Contact');
var Agenda = require('mongoose').model('Agenda');
var User = require('mongoose').model('User');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){

});

router.get('/:userName', function (req, res, next) {
    var username = req.params.userName;
    User.find({username: username}, {'_id':false,'agendas':true}).lean().populate('agendas').exec(function (err, docs) {

        //https://github.com/Automattic/mongoose/wiki/3.6-Release-Notes
        //https://gist.github.com/aheckmann/4947012
        var opts = {
            path: 'agendas.contacts'
        }

        Agenda.populate(docs, opts, function (err, docs) {
            res.status(200).json(docs);
        })
    })
});

router.get('/:contactId', function (req, res, next) {

});

router.post('/', function(req, res, next) {
    var contactData = req.body;
    var newContact = new Contact(contactData);
    newContact.save(function(err, saved) {
        if(!err) {
            res.status(200).json(saved);
        } else {
            console.log(err);
        }
    })
});

router.delete('/:id', function(req, res, next) {

});

router.patch('/:id', function(req, res, next) {

});

module.exports = router; //When calling require('tasks'), we get the router.