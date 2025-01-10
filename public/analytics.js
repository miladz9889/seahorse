
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0QD8YWEY4V');


  document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buy-seahorse");
  
    if (buyButton) {
      buyButton.addEventListener("click", () => {
        // Track the click event in Google Analytics
        gtag('event', 'click', {
          event_category: 'Button',
          event_label: 'Buy $Seahorse',
          value: 1
        });
  
        //opening Jupiter Terminal
        console.log('Buy $Seahorse button clicked');
      });
    }
  });