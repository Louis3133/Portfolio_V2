

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scrollButton').addEventListener('click', function() {

    var container = document.getElementById('container');
    var containerHeight = container.clientHeight;

    container.scrollBy({
        top: containerHeight,
        left: 0,
        behavior: 'smooth'
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scrollButton2').addEventListener('click', function() {

    var container = document.getElementById('container');
    var containerHeight = container.clientHeight;

    container.scrollBy({
        top: -containerHeight,
        left: 0,
        behavior: 'smooth'
    });
  });
});
