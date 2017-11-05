// index.js

// creating and using a module

// load local "reverse" module
const reverse = require('./reverse');

const msg = "Hello, World!";
console.log('msg:', msg);
console.log('reversed msg:', reverse(msg));

