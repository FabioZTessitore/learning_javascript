// index.js

// functions

// a function definition
function square(x)
{
  return x*x;
}

// a function literal
const cube = function (x) {
  return x*x*x;
};

// main
const x = 2;

console.log('Square of ' + x);
console.log(square(x));

console.log('\nCube of ' + x);
console.log(cube(x));
