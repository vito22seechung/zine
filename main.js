AOS.init();

$('body').jpreLoader({
  // default CSS classes for the preloader
  preMainSection: '#main-preloader',
  prePerText: '.preloader-percentage-text',
  preBar: '.preloader-bar',
  // show percentage value
  showPercentage: true,
  // enable debug mode
  debugMode: false,
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