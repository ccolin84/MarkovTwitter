import React, { Component } from 'react';
import GeneratedTweet from './GeneratedTweet';
import MarkovData from './MarkovData';

const GeneratedTweetContainer = (props) => {
    if (props.twitterData.length) {
      return (
        <div>
          {
            props.twitterData.map((tweetData) => {
              return (
                <div>
                  <GeneratedTweet
                    showSave = { true }
                    key={ tweetData.markovTweetText } 
                    text={ tweetData.markovTweetText }
                    profile_background_image_url={ tweetData.user.profile_background_image_url }
                    profile_image_url={ tweetData.user.profile_image_url }
                    screen_name={ tweetData.user.screen_name }
                  />
                  <MarkovData 
                    key={ tweetData.markovTweetText + 'keykey' }
                    markovModel={ tweetData.markovModel }
                    text={ tweetData.markovTweetText }
                  />
                </div>
              );
            })
          }
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
};

export default GeneratedTweetContainer;