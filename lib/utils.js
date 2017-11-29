// helper functions

exports.checkUser = function(req, res, next) {
  if(!req.session.username) {
    // send to login page
    res.redirect('/login');
  } else {
    next();
  }
};

exports.handleDisplayLogin = function(req, res) {
  res.send('Log in page!');
  // res.render();
};

exports.handleDisplaySignUp = function(req, res) {
  res.send('Signup page!');
  // res.render();
};

exports.handleLogin = function(req, res) {
  let username = req.body.username;
  let password = req.body.username;
};

exports.handleSignUp = function(req, res) {

};