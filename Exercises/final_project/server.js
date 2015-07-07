var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var expressWinston = require('express-winston');
var winston = require('winston');
var mongoose = require('mongoose');
var app = express();
var db = mongoose.connection;
var models = require('./models');

//Connect to database
mongoose.connect('mongodb://localhost/finalproject');
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
var contactsRouter = require('./routes/contacts');
var agendasRouter = require('./routes/agendas');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');

//Use this router for /users/ endpoint.
app.use('/contacts', contactsRouter);
app.use('/agendas', agendasRouter);
app.use('/users', usersRouter);
app.use('/companies', companiesRouter);

http.createServer(app).listen(8080);