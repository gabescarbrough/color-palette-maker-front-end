'use strict';

const events = require('./events');

// On document ready
$(() => {
  events.addHandlers();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let hueOne = getRandomInt(0, 360);
let saturationOne = getRandomInt(0, 100);
let luminanceOne = getRandomInt(0, 100);

let hueTwo = getRandomInt(0, 360);
let saturationTwo = getRandomInt(0, 100);
let luminanceTwo = getRandomInt(0, 100);

let hueThree = getRandomInt(0, 360);
let saturationThree = getRandomInt(0, 100);
let luminanceThree = getRandomInt(0, 100);

let hueFour = getRandomInt(0, 360);
let saturationFour = getRandomInt(0, 100);
let luminanceFour = getRandomInt(0, 100);

let hueFive = getRandomInt(0, 360);
let saturationFive = getRandomInt(0, 100);
let luminanceFive = getRandomInt(0, 100);


let hslOne = "hsl("+hueOne +", "+saturationOne +"%, "+luminanceOne +"%)";
let hslTwo = "hsl("+hueTwo +", "+saturationTwo +"%, "+luminanceTwo +"%)";
let hslThree = "hsl("+hueThree +", "+saturationThree +"%, "+luminanceThree +"%)";
let hslFour = "hsl("+hueFour +", "+saturationFour +"%, "+luminanceFour +"%)";
let hslFive = "hsl("+hueFive +", "+saturationFive +"%, "+luminanceFive +"%)";


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

$(document).on('input change', function(){
		hslOne = "hsl("+hueOne +", "+saturationOne +"%, "+luminanceOne +"%)";
		$('.one').css({'background-color': hslOne});
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

$(document).on('input change', function(){
		hslTwo = "hsl("+hueTwo +", "+saturationTwo +"%, "+luminanceTwo +"%)";
		$('.two').css({'background-color': hslTwo});
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

$(document).on('input change', function(){
		hslThree = "hsl("+hueThree +", "+saturationThree +"%, "+luminanceThree +"%)";
		$('.three').css({'background-color': hslThree});
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

$(document).on('input change', function(){
		hslFour = "hsl("+hueFour +", "+saturationFour +"%, "+luminanceFour +"%)";
		$('.four').css({'background-color': hslFour});
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
		hslFive = "hsl("+hueFive +", "+saturationFive +"%, "+luminanceFive +"%)";
		$('.five').css({'background-color': hslFive});
});
