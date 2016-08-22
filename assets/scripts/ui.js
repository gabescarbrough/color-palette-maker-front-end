'use strict';

const app = require('./app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('#sign-up-modal-link').hide();
  $('#sign-up-modal').modal('hide');
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('#change-password-modal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('#my-palettes-link').show();
  $('#change-password-modal-link').show();
  $('#sign-out-link').show();
  $('#palette-picker-buttons').show();
  $('#sign-up-modal-link').hide();
  $('#sign-in-modal-link').hide();
  $('#sign-in-modal').modal('hide');
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
  $('#my-palettes-link').hide();
  $('#change-password-modal-link').hide();
  $('#sign-out-link').hide();
  $('#sign-up-modal-link').show();
  $('#sign-in-modal-link').show();
  $('.palette-picker').show();
  $('#palette-picker-buttons').hide();
  $('.content').hide();
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
  changePasswordSuccess,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  displayPalettes,
  displayUserPalettes
};
