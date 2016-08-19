'use strict';

const app = require('./app');

// Authorization

const signUp = (data) => $.ajax({
  url: app.api + '/sign-up',
  method: 'POST',
  data,
});

const signIn = (data) => $.ajax({
  url: app.api + '/sign-in',
  method: 'POST',
  data,
});

const changePassword = (data) => $.ajax({
  url: app.api + '/change-password/' + app.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data,
});

const signOut = () => $.ajax({
  url: app.api + '/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});


// Palettes

const getPalettes = function() {
  return $.ajax({
    url: app.api + '/palettes',
    method: 'GET',
  });
};

const getUserPalettes = function() {
  return $.ajax({
    url: app.api + '/palettes?user_palettes=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getPalette = function() {
  return $.ajax({
    url: app.api + '/palettes/' + '4',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const createPalette = function() {
  return $.ajax({
    url: app.api + '/palettes',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
    data: {
      "palette": {
        "palette_name": "new2",
        "color1": "hsl(52, 50%, 50%)",
        "color2": "hsl(60, 50%, 50%)",
        "color3": "hsl(100, 50%, 50%)",
        "color4": "hsl(200, 50%, 50%)",
        "color5": "hsl(20, 50%, 50%)"
      }
    },
  });
};

const updatePalette = function() {
  return $.ajax({
      url: app.api + '/palettes/' + '4',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      method: 'PATCH',
      data: {
        "palette": {
          "palette_name": "Patch???"
        }
      }
  });
};

const deletePalette = function() {
  return $.ajax({
    url: app.api + '/palettes/' + '4',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getPalettes,
  getUserPalettes,
  getPalette,
  createPalette,
  updatePalette,
  deletePalette
};
