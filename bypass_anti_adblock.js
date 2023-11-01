// Function to detect and remove anti-ad-block measures
function removeAntiAdBlock() {
    const antiAdBlockElements = document.querySelectorAll('.anti-adblock-class'); 
    antiAdBlockElements.forEach(antiAdBlockElement => {
      antiAdBlockElement.remove();
    });
  }
  
  function removeAds() {
    const currentURL = window.location.href;
  
    // Define an array of URLs where you want to block ads
    const targetUrls = 
    {   
        //youtube:
        youtube: 'youtube.com',
        //putlocker:
        putlocker: ['putlocker.com', 'putlocker.pe', 'putlocker.sb',],
        //solarmovie:
        solarmovie: 'solarmovie.com',
        //one23movies:
        one23movies: ['123moviesfree.net', '123movies.com.pk','123-movies.autos','123moviesgo.ac',],
        //fmovies:
        fmovies: 'fmovies.com',
        
    }
    //prefix for ad class since actual name may vary per website
    const adClassPrefix = 'ad';
  
    // Check if the current URL matches any of the target URLs
    if (targetURLs.some(url => currentURL.includes(url))) {
      // Select and remove ad elements by class name
      const adElements = document.querySelectorAll(`[class^="${adClassPrefix}"]`); // Replace with the actual class name of your ad elements
      adElements.forEach(adElement => {
        adElement.remove();
      });
  
      // Call the removeAntiAdBlock function to remove anti-ad-block elements
      removeAntiAdBlock();
    }
  }
  
  window.addEventListener('load', removeAds);
  