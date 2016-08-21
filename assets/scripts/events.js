'use strict';

const getFormFields = require('../../lib/get-form-fields');


const api = require('./api');
const ui = require('./ui');
const app = require('./app');


// Variables

const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomHue = function() {
  return getRandomInt(0, 360);
};

const randomPercent = function() {
  return getRandomInt(0, 100);
};

let hueOne = randomHue();
let saturationOne = randomPercent();
let luminanceOne = randomPercent();

let hueTwo = randomHue();
let saturationTwo = randomPercent();
let luminanceTwo = randomPercent();

let hueThree = getRandomInt(0, 360);
let saturationThree = randomPercent();
let luminanceThree = randomPercent();

let hueFour = getRandomInt(0, 360);
let saturationFour = randomPercent();
let luminanceFour = randomPercent();

let hueFive = randomHue();
let saturationFive = randomPercent();
let luminanceFive = randomPercent();


let hslOne = "hsl("+hueOne +", "+saturationOne +"%, "+luminanceOne +"%)";
let hslTwo = "hsl("+hueTwo +", "+saturationTwo +"%, "+luminanceTwo +"%)";
let hslThree = "hsl("+hueThree +", "+saturationThree +"%, "+luminanceThree +"%)";
let hslFour = "hsl("+hueFour +", "+saturationFour +"%, "+luminanceFour +"%)";
let hslFive = "hsl("+hueFive +", "+saturationFive +"%, "+luminanceFive +"%)";



// Authentication

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



// AJAX


const onGetPalettes = function (event) {
  $('.palette-picker').hide();
  $('.content').show();
  event.preventDefault();
  api.getPalettes()
  .done(function(palettes){
    ui.displayPalettes(palettes);
  })
  .fail(ui.failure);
};

const onGetUserPalettes = function (event) {
  $('.palette-picker').hide();
  $('.content').show();
  event.preventDefault();
  api.getUserPalettes()
  .done(function(palettes){
    ui.displayUserPalettes(palettes);
  })
  .fail(ui.failure);
};

const onGetPalette = function (event) {
  event.preventDefault();
  api.getPalette()
  .done(ui.success)
  .fail(ui.failure);
};

const onCreatePalette = function (event) {
  let paletteName = $('#palette-name').val();

  event.preventDefault();
  api.createPalette(paletteName, hslOne, hslTwo, hslThree, hslFour, hslFive)
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
  let paletteIdDelete = $('#palette-id-delete').val();

  event.preventDefault();
  api.deletePalette(paletteIdDelete)
  .done(onGetUserPalettes(event))
  .fail(ui.failure);
};





// Palette Picker


$(document).ready(function() {
		$('.one').css({'background-color': hslOne});
    $('.hue-one').val(hueOne);
    $('.saturation-one').val(saturationOne);
    $('.luminance-one').val(luminanceOne);

    $('.two').css({'background-color': hslTwo});
    $('.hue-two').val(hueTwo);
    $('.saturation-two').val(saturationTwo);
    $('.luminance-two').val(luminanceTwo);

    $('.three').css({'background-color': hslThree});
    $('.hue-three').val(hueThree);
    $('.saturation-three').val(saturationThree);
    $('.luminance-three').val(luminanceThree);

    $('.four').css({'background-color': hslFour});
    $('.hue-four').val(hueFour);
    $('.saturation-four').val(saturationFour);
    $('.luminance-four').val(luminanceFour);

    $('.five').css({'background-color': hslFive});
    $('.hue-five').val(hueFive);
    $('.saturation-five').val(saturationFive);
    $('.luminance-five').val(luminanceFive);
});


const addHandlers = () => {
  $('#sign-up-modal-link').on('click', showSignUpModal);
  $('#sign-in-modal-link').on('click', showSignInModal);
  $('#change-password-modal-link').on('click', showChangePasswordModal);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out-link').on('click', onSignOut);
  $('#palette-picker-link').on('click', function(){
    $('.palette-picker').show();
    $('.content').hide();
  });
  $('#inspiration-link').on('click', onGetPalettes);
  $('#my-palettes-link').on('click', onGetUserPalettes);
  $('#get-palette').on('click', onGetPalette);
  $('#create-palette').on('click', onCreatePalette);
  $('#update-palette').on('click', onUpdatePalette);
  $('#delete-palette').on('click', onDeletePalette);

  // color-card one

  $('.hue-one').on('input change', function() {
  	  hueOne = $(this).val();
  });

  $('.saturation-one').on('input change', function() {
      saturationOne = $(this).val();
  });

  $('.luminance-one').on('input change', function() {
      luminanceOne = $(this).val();
  });




  // color-card two

  $('.hue-two').on('input change', function() {
  	  hueTwo = $(this).val();
  });

  $('.saturation-two').on('input change', function() {
      saturationTwo = $(this).val();
  });

  $('.luminance-two').on('input change', function() {
      luminanceTwo = $(this).val();
  });



  // color-card three

  $('.hue-three').on('input change', function() {
  	  hueThree = $(this).val();
  });

  $('.saturation-three').on('input change', function() {
      saturationThree = $(this).val();
  });

  $('.luminance-three').on('input change', function() {
      luminanceThree = $(this).val();
  });



  // color-card four

  $('.hue-four').on('input change', function() {
  	  hueFour = $(this).val();
  });

  $('.saturation-four').on('input change', function() {
      saturationFour = $(this).val();
  });

  $('.luminance-four').on('input change', function() {
      luminanceFour = $(this).val();
  });





  // color-card five

  $('.hue-five').on('input change', function() {
  	  hueFive = $(this).val();
  });

  $('.saturation-five').on('input change', function() {
      saturationFive = $(this).val();
  });

  $('.luminance-five').on('input change', function() {
      luminanceFive = $(this).val();
  });


  $(document).on('input change', function(){
      hslOne = "hsl("+hueOne +", "+saturationOne +"%, "+luminanceOne +"%)";
      hslTwo = "hsl("+hueTwo +", "+saturationTwo +"%, "+luminanceTwo +"%)";
      hslThree = "hsl("+hueThree +", "+saturationThree +"%, "+luminanceThree +"%)";
      hslFour = "hsl("+hueFour +", "+saturationFour +"%, "+luminanceFour +"%)";
      hslFive = "hsl("+hueFive +", "+saturationFive +"%, "+luminanceFive +"%)";

      $('.one').css({'background-color': hslOne});
      $('.two').css({'background-color': hslTwo});
      $('.three').css({'background-color': hslThree});
      $('.four').css({'background-color': hslFour});
      $('.five').css({'background-color': hslFive});

      $('.hsl-one').html(hslOne);
      $('.hsl-two').html(hslTwo);
      $('.hsl-three').html(hslThree);
      $('.hsl-four').html(hslFour);
      $('.hsl-five').html(hslFive);
  });

};

module.exports = {
  addHandlers,
};
