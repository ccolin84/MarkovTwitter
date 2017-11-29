// Npm module dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
// local dependencies
let apiRouter = require('./routes/api');
let utils = require('./lib/utils');

//------------- Authentication -------------
// let checkUser = utils.checkUser;
// let handleDisplayLogin = utils.handleDisplayLogin;
// let handleLogin = utils.handleLogin;
// let handleDisplaySignUp = utils.handleDisplaySignUp;
// let handleSignUp = utils.handleSignUp;
//------------------------------------------

// create app instance
var app = express();
// logging
app.use(morgan('tiny'));


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//------------- Authentication -------------
// app.use(cookieParser('shhhh, very secret'));
// app.use(session({
//   secret: 'shhh, it\'s a secret',
//   resave: false,
//   saveUninitialized: true
// }));
// unprotected routes for the user to login or sign up
// app.get('/signup', handleDisplaySignUp);
// app.post('/signup', handleSignUp);
// app.get('/login', handleDisplayLogin);
// app.post('/login', handleLogin);
// check for user log in
// app.use(checkUser)
//------------------------------------------

// server public files from the react app build
app.use(express.static(__dirname + '/client/dist'));
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRouter);

module.exports = app;
