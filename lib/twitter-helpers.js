// functions to help with twitter api requests
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

exports.getUserTweets = function(twitterUser, tweetCount, cb) {
  var params = {screen_name: twitterUser, count: tweetCount};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets.length);
    }
    cb(error, tweets);
  });
};

 