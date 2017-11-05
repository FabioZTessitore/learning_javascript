// index.js

// this is the main file
// use browserify to bundle the app
//
// $ browserify index.js -o app.js


// require() is available on the client
// thanks to browserify!
var reverse = require('./reverse');

document.addEventListener('DOMContentLoaded', function () {
    var msg_p = document.getElementById('msg');
    var reversed_msg_p = document.getElementById('reversed-msg');
    
    var msg = "Hello, World!";

    msg_p.innerHTML = msg;
    reversed_msg_p.innerHTML = reverse(msg);
}, false);
