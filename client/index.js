import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './components/App.js';
import SavedTweets from './components/SavedTweets.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <nav>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/savedTweets">Saved Tweets</Link></button>
      </nav>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/savedTweets" component={ SavedTweets }/>
    </div>
  </Router>,
  document.getElementById('App')
);