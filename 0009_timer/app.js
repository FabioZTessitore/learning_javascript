// app.js

// set current timestamp into an <p id="date"></p>

// Warning: here the page DO NOT exists yet!

// register an event listener on document object
// When the document will be loaded a DOMContentLoaded event will be raised
// and the callback will be invoked.
// Note: the callback is defined where we need it!
document.addEventListener('DOMContentLoaded', function () {
    var date_p = document.getElementById('date');
    
    // change the content of date_p every second
    // (using an anonymous callback)
    setInterval( function () {
        var now = new Date();
        
        // do not use appendChild()
        date_p.innerHTML = now;
    }, 1000);
}, false);
