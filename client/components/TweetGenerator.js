import React, { Component } from 'react';

class TweetGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  render() {
    return (
      <div id='tweetGenerator'>
        <form>
          <h1>Enter a Twitter Handle!</h1>
          <input type="text" 
            value={ this.state.textInputValue } 
            onChange={ this.handleTextInput }
          />
          <input type="submit" 
            onClick={this.handleClick}
          />
        </form>
        <hr />
      </div>
    );
  }

  handleTextInput(e) {
    this.setState({ textInputValue: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateGeneratedTweet(this.state.textInputValue, 200);
  }
}

export default TweetGenerator;