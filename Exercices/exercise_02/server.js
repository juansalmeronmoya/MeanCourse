var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var expressWinston = require('express-winston');
var winston = require('winston');
var app = express();

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
var piecesRouter = require('./routes/pieces');
var spacecraftsRouter = require('./routes/spacecrafts');

//Use this router for /users/ endpoint.
app.use('/pieces', piecesRouter);
app.use('/spacecrafts', spacecraftsRouter);

http.createServer(app).listen(8080);