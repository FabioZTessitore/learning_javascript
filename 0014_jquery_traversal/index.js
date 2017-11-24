// index.js

// this is the main file
// use browserify to bundle the app
//
// $ browserify index.js -o app.js


// require() is available on the client
// thanks to browserify!
var $ = require('jquery');

$(document).ready(function () {
  var fruitsList = $('#fruits');
  var fruits = fruitsList.children('.fruit');

  $('#sort-fruits').on('click', function () {
    fruits.sort( function (n, m) {
      return $(n).text() > $(m).text();
    });
    fruitsList.html(fruits);
  });

  var rankingTable = $('#ranking');
  var rankingTBody = rankingTable.find('tbody');
  var rankingRows = rankingTBody.children('tr');

  $('#sort-by-name').on('click', function () {
    rankingRows.sort( function (n, m) {
      return $(n).find('.name').text() > $(m).find('.name').text();
    });
    rankingTBody.html(rankingRows);
  });
  $('#sort-by-points').on('click', function () {
    rankingRows.sort( function (n, m) {
      return parseInt($(n).find('.points').text()) > parseInt($(m).find('.points').text());
    });
    rankingTBody.html(rankingRows);
  });
});
