document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollhButton').addEventListener('click', function() {
      var container = document.getElementById('container');
      var containerWidth = container.clientWidth;
  
      container.scrollBy({
          top: 0,
          left: containerWidth,
          behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollhButton2').addEventListener('click', function() {
      var container = document.getElementById('container');
      var containerWidth = container.clientWidth;
  
      container.scrollBy({
          top: 0,
          left: -containerWidth,
          behavior: 'smooth'
      });
    });
  });