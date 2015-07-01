var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var expressWinston = require('express-winston');
var winston = require('winston');
var mongoose = require('mongoose');
var app = express();
var db = mongoose.connection;

//Connect to database
mongoose.connect('mongodb://localhost/exercise3');
models.initialize();

db.on('error', function(err) {
    log.error(err);
});

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

//Import the router of users
var planetsRouter = require('./routes/planets');
var shipsRouter = require('./routes/ships');
var racesRouter = require('./routes/races');
var peopleRouter = require('./routes/people');

//Use this router for /users/ endpoint.
app.use('/planets', planetsRouter);
app.use('/ships', shipsRouter);
app.use('/races', racesRouter);
app.use('/people', peopleRouter);

http.createServer(app).listen(8080);