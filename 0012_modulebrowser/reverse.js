// reverse.js

// reverse a string

// this function is private!
const reverse = function (str) {
    return str.split('').reverse().join('');
}

// but we can export her outside
module.exports = reverse;
