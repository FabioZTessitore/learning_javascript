// app.js

$(document).ready(function () {
  var messageP = $('#message');

  // add a listener to all buttons of the table 'teams'
  $('#teams').on('click', 'button', function () {
    // search for the row where the button is in
    messageP.text( 'Selected row with ID ' + $(this).closest('tr').data('id') );
  });
});
