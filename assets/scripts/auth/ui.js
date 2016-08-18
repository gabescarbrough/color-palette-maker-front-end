'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
