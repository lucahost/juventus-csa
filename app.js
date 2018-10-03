var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mysql = require('mysql');

var index = require('./api/index');
var api = require('./api/api');

var compression = require('compression');
var helmet = require('helmet');

var app = express();

app.set('view engine', 'pug');

app.use(helmet());
app.use(favicon(__dirname + '/favicon.ico'));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // Add this after the bodyParser middleware!
app.use(cookieParser());


// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'secretjuventuscookie',
  secret: 'somerandonstuffs',
  resave: true,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

app.use((req, res, next) => {
  if (req.cookies.username && !req.session.username) {
      res.clearCookie('secretjuventuscookie');        
  }
  next();
});


// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.username && req.cookies.username) {
      res.redirect('/api');
  } else {
      next();
  }    
};

app.use(compression());
app.use(function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/api', api);

module.exports = app;