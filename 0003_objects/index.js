// index.js

// objects

// create object invoking constructor
const obj = new Object(); // empty object
const now = new Date();

console.log('Empty Object:');
console.log(obj);

console.log('\nNow:');
console.log(now);

// adding properties to an object
const pointP = new Object();
// pointP cannot point to another object
// but we can add properties
pointP.x = 2.3;
pointP.y = -1.2;
console.log('\nA point (P):');
console.log(pointP);

// object literal
const pointQ = {
  x: 2.3,
  y: -1.2,
};
console.log('\nA point (Q):');
console.log(pointQ);
