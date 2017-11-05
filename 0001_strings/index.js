// index.js

// basic operations with strings

// start with
// $ node index.js

// print to the console
console.log('Hello, World!');

// concat
const msg = "Hello, " + "World!"
console.log('\nString Concat:');
console.log(msg);

// string length
console.log('\nString \"' + msg + '\"');
console.log("is " + msg.length + " characters long.");

// extract a char
console.log('\nChar at index 4:');
console.log(msg.charAt(4));

// substring
console.log('\nSubstring from index 7 to 12:');
console.log(msg.substring(7, 12));

// find a char
console.log('\n\'W\' is at index:');
console.log(msg.indexOf('W'));
