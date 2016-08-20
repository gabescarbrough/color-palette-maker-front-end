'use strict';

const getFormFields = require('../../lib/get-form-fields');


const api = require('./api');
const ui = require('./ui');
const app = require('./app');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  console.log(app);
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data, app)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};



const showSignUpModal = function showPasswordModal(){
  $('#sign-up-modal').modal('show');
};

const showSignInModal = function showPasswordModal(){
  $('#sign-in-modal').modal('show');
};

const showChangePasswordModal = function showPasswordModal(){
  $('#change-password-modal').modal('show');
};



let displayPalettes = function(data){
  let paletteListingTemplate = require('./templates/palette.handlebars');
    $('.content').html(paletteListingTemplate({
      palettes: data.palettes
    }));
};


const onGetPalettes = function (event) {
  event.preventDefault();
  api.getPalettes()
  .done(function(palettes){
    displayPalettes(palettes);
  })
  .fail(ui.failure);
};

const onGetUserPalettes = function (event) {
  event.preventDefault();
  api.getUserPalettes()
  .done(ui.success)
  .fail(ui.failure);
};

const onGetPalette = function (event) {
  event.preventDefault();
  api.getPalette()
  .done(ui.success)
  .fail(ui.failure);
};

const onCreatePalette = function (event) {
  event.preventDefault();
  api.createPalette()
  .done(ui.success)
  .fail(ui.failure);
};

const onUpdatePalette = function (event) {
  event.preventDefault();
  api.updatePalette()
  .done(ui.success)
  .fail(ui.failure);
};

const onDeletePalette = function (event) {
  event.preventDefault();
  api.deletePalette()
  .done(ui.success)
  .fail(ui.failure);
};




const addHandlers = () => {
  $('#sign-up-modal-link').on('click', showSignUpModal);
  $('#sign-in-modal-link').on('click', showSignInModal);
  $('#change-password-modal-link').on('click', showChangePasswordModal);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out-link').on('click', onSignOut);
  $('#get-palettes').on('click', onGetPalettes);
  $('#get-user-palettes').on('click', onGetUserPalettes);
  $('#get-palette').on('click', onGetPalette);
  $('#create-palette').on('click', onCreatePalette);
  $('#update-palette').on('click', onUpdatePalette);
  $('#delete-palette').on('click', onDeletePalette);
};

module.exports = {
  addHandlers,
};
