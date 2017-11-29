import React, { Component } from 'react';

const GeneratedTweet = (props) => 
  (
    <div className='generatedTweet' style={{ backgroundImage: `url(${props.profile_background_image_url.replace('http', 'https')})`, padding: '10px', borderRadius: '10px'}}>
      <img className='profileImg' src={ props.profile_image_url.replace('normal', 'bigger') } height="100px" width="100px" />
      <div style={{ backgroundColor: 'white', margin: '15px', borderRadius: '10px' }}>{ '@' + props.screen_name }</div>
      <div style={{ backgroundColor: 'white', margin: '15px', borderRadius: '10px' }}>{ props.text }</div>
      { props.showSave ? (
      <button 
        className='saveButton' 
        onClick={ () => { 
          console.log('sending fetch post');
          fetch('/api/savedTweets', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              backgroundImageUrl: props.profile_background_image_url,
              imgUrl: props.profile_image_url,
              text: props.text,
              twitterAccount: props.screen_name
            })
          })
          .then((tweets) => tweets.json())
          .catch((err) => console.log('Error fetching new tweets!', err));
        }}>Save</button>
        ) : (<div></div>)
      }
    </div>
  );

export default GeneratedTweet;