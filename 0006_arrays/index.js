// index.js

// arrays

// create arrays invoking Array() constructor
const a = new Array(); // empty array

console.log('Empty Array:');
console.log(a);

// assign
a[0] = 2.3;
a[1] = -1.2;
console.log('\nAfter assignment:');
console.log(a);

// create and initialize array
const a2 = new Array(
  1.2,
  "JavaScript",
  true,
  { x: 1, y: 3},
);
console.log('\na2:');
console.log(a2);

// invoking Array() with only a single number
// specifies the length
const a3 = new Array(10);
console.log('\na3:');
console.log(a3);


// array literal
const a4 = [
  1.2,
  "JavaScript",
  true,
  { x: 1, y: 3},
];
console.log('\na4:');
console.log(a4);
