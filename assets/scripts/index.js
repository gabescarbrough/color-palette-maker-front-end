'use strict';

const events = require('./events');

// On document ready
$(() => {
  events.addHandlers();

  $('#my-palettes-link').hide();
  $('#sign-out-link').hide();
  $('#my-palettes-link').hide();
  $('#change-password-modal-link').hide();
  $('#palette-picker-buttons').hide();
});
