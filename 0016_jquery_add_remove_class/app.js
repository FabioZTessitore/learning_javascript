// app.js

$(document).ready(function () {
  var p = $('p');

  p.on('mouseenter', function () {
    $(this).addClass('highlight');
  });
  p.on('mouseleave', function () {
    $(this).removeClass('highlight');
  });
});
