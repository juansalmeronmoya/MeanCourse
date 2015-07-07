var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var expressWinston = require('express-winston');
var winston = require('winston');
var mongoose = require('mongoose');
var app = express();
var db = mongoose.connection;
var models = require('./models');
var config = require('./config');
var express_jwt = require('express-jwt');

//Connect to database
mongoose.connect(config.db_path);

//Models initialization
models.initialize();


app.use(bodyParser.json());
db.on('error', function(err) {
    log.error(err);
});

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

//Import routers
var contactsRouter = require('./routes/contacts');
var agendasRouter = require('./routes/agendas');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');
var authRouter = require('./routes/authentication');

//Router endpoints.
app.use('/contacts', contactsRouter);
app.use('/agendas', agendasRouter);
app.use('/users', usersRouter);
app.use('/companies', companiesRouter);
app.use('/authenticate', authRouter);

//Listening server
http.createServer(app).listen(8080);