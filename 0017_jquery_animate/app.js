// app.js

$(document).ready(function () {
  var p = $('p');

  // needed to detect the end of animations
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  // add an animated class and then remove it
  var addAnimation = function (elem, animType) {
    elem.addClass("animated " + animType).one(animationEnd, function () {
      $(this).removeClass("animated " + animType);
    });
  }

  // lightSpeedIn
  addAnimation(p, 'lightSpeedIn');

  p.on('mouseenter', function () {
    addAnimation($(this), 'hinge');
  });
});
