import React, { Component } from 'react';
import TweetGenerator from './TweetGenerator.js';
import GeneratedTweetContainer from './GeneratedTweetContainer.js';

let markov = require('../../lib/markovGenerator');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterData: []
    };
    this.updateGeneratedTweet = this.updateGeneratedTweet.bind(this);
  }

  render() {
    return (
      <div>
        <TweetGenerator 
          updateGeneratedTweet={ this.updateGeneratedTweet }
        />
        <GeneratedTweetContainer 
          twitterData={ this.state.twitterData }
        />
      </div>
    ); 
  }

  updateGeneratedTweet(handle='crawfocc', count=100) {
    fetch('/api/tweetData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        twitterHandle: handle,
        tweetCount: count,
      })
    })
    .then((tweets) => tweets.json())
    .then((tweetData) => {
      let markovTweet = this.generateMarkovTweet(tweetData, count);
      
      // uses state to accumulate a new tweet each time
      // this.setState({ twitterData: [markovTweet, ...this.state.twitterData] });
      this.setState({ twitterData: [markovTweet] });
    })
    .catch((err) => console.log('Error fetching new tweets!', err));
  }

  // ------------- Using Markov Implimentation found on NPM ---------------------
  // generateMarkovTweet(tweetData, count) {
  //   // get the text from the tweet data and take out links
  //   let text = tweetData.map((tweetObj) => tweetObj.text).map((tweetText) => {
  //     return tweetText.split(' ').map((word) => {
  //       return word.indexOf('http') >= 0 ? ' ' : word
  //     }).join(' ');
  //   }).join(' ');

  //   // determine the length of the generated tweet
  //   let avgTweetLength = Math.floor(text.length / count);
  //   let generatedTweetLen = avgTweetLength > 10 ? 10 + Math.floor(Math.random() * 20) : 10;

  //   //configuration options for the model
  //   var options = {
  //     length: 2, // ngram size; default is 2
  //     stripPunctuation: false // default is true
  //   };
  //   // build the model
  //   var model = ngram.createModel(options);

  //   // feed the text into the model
  //   ngram.addSentenceToModel(model, text);
    
  //   let markovTweet = tweetData[0];
  //   markovTweet.markovTweetText = ngram.generateSentence(model, generatedTweetLen); // 10 is the desired length of the sentence

  //   return markovTweet;
  // }
  // --------------------------------------------------------------------------------

  generateMarkovTweet(tweetData, count) {
    // using my own markov implimentation
    let text = tweetData.map((tweetObj) => tweetObj.text).map((tweetText) => {
      return tweetText.split(' ').map((word) => {
        return word.indexOf('http') >= 0 ? ' ' : word
      }).join(' ');
    });

    let markovModel = markov(text);

    let markovTweet = tweetData[0];
    markovTweet.markovTweetText = markovModel.generateTweet();
    markovTweet.markovModel = markovModel;

    return markovTweet;
  }
}

export default App;