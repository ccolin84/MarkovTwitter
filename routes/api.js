const Twitter = require('twitter');
let router = require('express').Router();
let twitterUtils = require('../lib/twitter-helpers');

let getUserTweets = twitterUtils.getUserTweets;

let db = require('../dbconfig.js');
let User = require('../models/user.js');
let Tweet = require('../models/tweet.js');

// db interactions
router.get('/savedTweets', (req, res) => {
  Tweet.find({})
    .then((savedTweets) => {
      console.log('sending tweets: ', savedTweets);
      res.send(savedTweets);
    })
    .catch(() => {
      console.log('error getting saved Tweets', err);
      res.writeHead(404).send({});
    });
});

router.post('/savedTweets', (req, res) => {
  console.log('handling post with: ', req.body);
  let newTweet = new Tweet({
    backgroundImageUrl: req.body.backgroundImageUrl,
    imgUrl: req.body.imgUrl,
    text: req.body.text,
    twitterAccount: req.body.twitterAccount,
    user: req.body.user
  });
  newTweet.save()
    .then((savedTweets) => {
      console.log('saved Tweet: ', savedTweets);
      res.send(savedTweets);
    })
    .catch(() => {
      console.log('error posting to Tweets', err);
      res.writeHead(404).send({});
    });
});

// querry the twitter api
router.post('/tweetData', (req, res) => {
  let twitterHandle = req.body.twitterHandle;
  let count = req.body.tweetCount || 100;
  getUserTweets(twitterHandle, count, (err, twitterData) => {
    res.send(JSON.stringify(twitterData));
  });
});

module.exports = router;