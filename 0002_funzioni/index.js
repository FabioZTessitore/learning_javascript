// funzioni.js

// function definition
function square(x)
{
  return x*x;
}

// function literal
const cube = function (x) {
  return x*x*x;
};

const x = 2;
let result;

console.log('Square of ' + x);
console.log(square(x));

console.log('\nCube of ' + x);
console.log(cube(x));
