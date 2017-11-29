const mongoose = require('mongoose');
var db = require('../dbconfig');

let userScheme = new mongoose.Schema({
  username: String,
  password: String
})

let User = db.model('User', userScheme);

module.exports = User;