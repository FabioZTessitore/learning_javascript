// app.js

$(document).ready(function () {
  var fruitsList = $('#fruits');
  var fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Pear'
  ];

  $('#add-fruits').on('click', function () {
    $(fruits).each( function (index, fruit) {
      $('<li>').text(fruit).appendTo(fruitsList);
    });
  });

  var rankingTable = $('#ranking');
  var rankingTBody = rankingTable.children('tbody');
  var teams = [
    { name: 'Foo', points: 19 },
    { name: 'Bar', points: 32 },
    { name: 'Zed', points: 25 }
  ];

  $('#add-teams').on('click', function () {
    $(teams).each( function (index, team) {
      var nameTD = $('<td>', { class: 'name'}).text(team.name);
      var pointsTD = $('<td>', { class: 'points'}).text(team.points);
      $('<tr>').append(nameTD).append(pointsTD).appendTo(rankingTBody);
    });
  });
});
