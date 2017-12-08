// app.js

// set current timestamp into an <p id="timestamp"></p>

// Warning: here the page DO NOT exists yet!

// register an event listener on document object
// When the document will be loaded a DOMContentLoaded event will be raised
// and the callback will be invoked.
// Note: the callback is defined where we need it!
document.addEventListener('DOMContentLoaded', function () {
    var timestamp_p = document.getElementById('timestamp');
    var now = new Date();
    timestamp_p.appendChild( document.createTextNode(now) );
}, false);
