
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 200);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
       
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();
