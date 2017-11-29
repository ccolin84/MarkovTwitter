import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GeneratedTweet from './GeneratedTweet';


class SavedTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getSavedTweets = this.getSavedTweets.bind(this);
  }

  componentDidMount() {
    this.getSavedTweets();
  }

  render() {
    if (this.state.tweets) {
      return (
        <div>
          { this.state.tweets.reverse().map((tweetData, inx) => {
            return (
              <GeneratedTweet
                  showSave = { false }
                  key={ inx } 
                  text={ tweetData.text }
                  profile_background_image_url={ tweetData.backgroundImageUrl }
                  profile_image_url={ tweetData.imgUrl }
                  screen_name={ tweetData.twitterAccount }
              />
            );
          }) }
        </div>
      );
    } else {
      return (
        <div>
          put some loading image here!
        </div>
      );
    }
  }

  getSavedTweets() {
    fetch('/api/savedTweets')
      .then((data) => data.json())
      .then((tweets) => {
        console.log('setting state with data: ', tweets);
        this.setState({ tweets: tweets });
      })
      .catch((err) => console.log('error getting tweets', err));
  }
}

export default SavedTweets;