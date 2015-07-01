// Include http module.
var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');
var winston = require('winston');
var expressWinston = require('express-winston');
var app = express();
var mongo = require('mongodb').MongoClient;

app.use(bodyParser.json());

//Middleware for log every request to the system.
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            colorize: true
        })
    ],
    meta: false,
    msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    colorStatus: true
}));

app.get('/lightsaber', function(req, res, next) {
    var color = req.query.color;
    mongo.connect("mongodb://localhost:27017/lights", function(err, db) {
        if(!err) {
            winston.info("We are connected");
            var collection = db.collection('items');
            collection.find({color: color}).toArray(function (err, result) {
                winston.info(result);
                res.status(200).send(result);
            });
        }
    });
});

app.post('/lightsaber', function(req, res, next) {
    var color = req.query.color;
    var owner = req.query.owner;
    var id = req.query.id;
    mongo.connect("mongodb://localhost:27017/lights", function(err, db) {
        if(!err) {
            winston.info("We are connected");
            var collection = db.collection('items');
            collection.insert({color: color, owner: owner, id: id}, function (err, result) {
                winston.info(result);
                res.status(200).send(true);S
            });
        }
    });
});

http.createServer(app).listen(8080);