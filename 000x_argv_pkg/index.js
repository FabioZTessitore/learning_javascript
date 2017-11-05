// index.js

// command line arguments

// double the input:
// $ node index.js --digit 4
// 8

// to create a pkg for linux, macos and windows
// install pkg:
// $ sudo npm install -g pkg
// make
// pkg index.js

const argv = require('yargs')
  .usage('Usage: $0 --digit [num]')
  .demandOption('digit')
  .argv;


const num = argv.digit;
const result = 2. * num;
console.log(result);
