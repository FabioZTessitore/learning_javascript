// app.js

$(document).ready(function () {
  var fruitsList = $('#fruits');
  var fruits = fruitsList.children('.fruit');

  $('#sort-fruits').on('click', function () {
    fruits.sort( function (n, m) {
      return $(n).text() > $(m).text();
    });
    fruits.each( function (index, fruit) {
      $(fruit).appendTo(fruitsList);
    });
  });

  var rankingTable = $('#ranking');
  var rankingTBody = rankingTable.children('tbody');
  var rankingRows = rankingTBody.children('tr');

  $('#sort-by-name').on('click', function () {
    rankingRows.sort( function (n, m) {
      return $(n).find('.name').text() > $(m).find('.name').text();
    });
    rankingRows.each( function (index, row) {
      $(row).appendTo(rankingTBody);
    });
  });
  $('#sort-by-points').on('click', function () {
    rankingRows.sort( function (n, m) {
      return parseInt($(n).find('.points').text()) > parseInt($(m).find('.points').text());
    });
    rankingRows.each( function (index, row) {
      $(row).appendTo(rankingTBody);
    });
  });
});
