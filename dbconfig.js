const mongoose = require('mongoose');
var Promise = require('bluebird');

mongoose.Promise = Promise;

// determine mongoDB location
let mongoDB = process.env.MONGODB_URI;

var db = mongoose.createConnection(mongoDB);
db.on('error', (error) => console.error('error! ', error));
db.on('open', () => console.log('connected!!!'));

module.exports = db;