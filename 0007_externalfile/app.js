// app.js

// set current timestamp into an <p id="date"></p>

// Warning: here the page DO NOT exists yet!

var setDate = function () {
    var date_p = document.getElementById('date');
    var now = new Date();
    date_p.appendChild(document.createTextNode(now));
}

// register an event listener on document object
// When the document will be loaded a DOMContentLoaded event will be raised
// and the callback setDate will be invoked
document.addEventListener('DOMContentLoaded', setDate, false);
