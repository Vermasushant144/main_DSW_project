window.addEventListener('load', function() {
    // Simulate a 5-second delay
    setTimeout(function() {
      var loadingPage = document.getElementById('circle-container');
      var mainPage = document.getElementById('main-page');
  
      // Hide the loading page
      loadingPage.style.display = 'none';
  
      // Show the main page
      mainPage.style.display = 'block';
    }, 5000);
  });
  