// Function to detect and remove anti-ad-block measures
function removeAntiAdBlock() {
    const antiAdBlockElements = document.querySelectorAll('.anti-adblock-class'); // Replace with the class name of anti-ad-block elements
    antiAdBlockElements.forEach(antiAdBlockElement => {
      antiAdBlockElement.remove();
    });
  }
  
  function removeAds() {
    const currentURL = window.location.href;
  
    // Define an array of URLs where you want to block ads
    const targetUrls = 
    {
        youtube: 'youtube.com',
        //putlocker:
        putlocker: ['putlocker.com', 'putlocker.pe', 'putlocker.sb'],
        solarmovie: 'solarmovie.com',
        movies: '123movies.com',
        fmovies: 'fmovies.com',
        
    }
  
    // Check if the current URL matches any of the target URLs
    if (targetURLs.some(url => currentURL.includes(url))) {
      // Select and remove ad elements by class name
      const adElements = document.querySelectorAll('.ad-class'); // Replace with the actual class name of your ad elements
      adElements.forEach(adElement => {
        adElement.remove();
      });
  
      // Call the removeAntiAdBlock function to remove anti-ad-block elements
      removeAntiAdBlock();
    }
  }
  
  window.addEventListener('load', removeAds);
  