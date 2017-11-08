// index.js

// this is the main file
// use browserify to bundle the app
//
// $ browserify index.js -o app.js


// require() is available on the client
// thanks to browserify!
var $ = require('jquery');

$(document).ready(function () {
    $('#time').text(new Date());
});
