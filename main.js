AOS.init();

$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

// this will disable dragging of all images
$("img").mousedown(function(e) {
  e.preventDefault()
});

// this will disable right-click on all images
$("body").on("contextmenu", function(e) {
  return false;
});

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

document.querySelectorAll('img')
  .forEach((img) =>
      img.addEventListener('load', () =>
          AOS.refresh()
      )
  );