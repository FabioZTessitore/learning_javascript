// app.js

// set current timestamp into an <p id="date"></p>

// Warning: here the page DO NOT exists yet!

// register an event listener on document object
// When the document will be loaded a DOMContentLoaded event will be raised
// and the callback will be invoked.
// Note: the callback is defined where we need it!
document.addEventListener('DOMContentLoaded', function () {
    var date_p = document.getElementById('date');
    var now = new Date();
    date_p.appendChild(document.createTextNode(now));
}, false);
