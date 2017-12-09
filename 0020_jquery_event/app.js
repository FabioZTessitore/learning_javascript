// app.js

$(document).ready(function () {
  $('.box').on('click', 'a', function (event) {
    // do not bubble the event up to the box!
    event.stopPropagation();

    // do not follow the link (default)
    // (don't jump to the start of the page)
    event.preventDefault();

    $(this).closest('.box').find('.messages').slideToggle();
  });

  // never execute thanks to stopPropagation()
  $('.box').on('click', function () {
    alert('do not click on boxes ...');
  })
});
