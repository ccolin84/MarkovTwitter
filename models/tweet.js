const mongoose = require('mongoose');
var db = require('../dbconfig');

let generatedTweetScheme = new mongoose.Schema({
  backgroundImageUrl: String,
  imgUrl: String,
  text: String,
  twitterAccount: String,
  // user: String
})

let GeneratedTweet = db.model('GeneratedTweet', generatedTweetScheme);

module.exports = GeneratedTweet;