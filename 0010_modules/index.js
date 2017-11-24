// index.js

// using a module

// install modules
// $ npm install
//
// start
// $ node index.js


// load "lodash" module
// "_" is its standard name
const _ = require('lodash');

// using some functions from lodash module
const msg = "hello, world!";
console.log('msg: ' + msg);
console.log('capitalized: ' + _.capitalize(msg));
console.log('camel case: ' + _.camelCase(msg));
console.log('start case: ' + _.startCase(msg));
