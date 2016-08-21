'use strict';

const events = require('./events');

// On document ready
$(() => {
  events.addHandlers();
});
