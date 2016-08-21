'use strict';

const app = require('./app');

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

const displayPalettes = function(data){
  let paletteListingTemplate = require('./templates/palette.handlebars');
    $('.content').html(paletteListingTemplate({
      palettes: data.palettes
    }));
};

const displayUserPalettes = function(data){
  let paletteListingTemplate = require('./templates/user-palette.handlebars');
    $('.content').html(paletteListingTemplate({
      palettes: data.palettes
    }));
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  displayPalettes,
  displayUserPalettes
};
