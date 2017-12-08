// app.js

$(document).ready(function () {
  var messageP = $('#message');

  $('#report').on('click', function () {
    var boldFlag = $('#bold-checkbox').prop('checked');
    var sexValue = $('input[name=sex]').filter(':checked').val();
    var countryValue = $('#country').val();
    var usernameText = $('#username').val();

    messageP.html('bold checkbox is ' + boldFlag +
        '<br>sex radio is ' + sexValue +
        '<br>country select is ' + countryValue +
        '<br>username is ' + usernameText);
  });
});
