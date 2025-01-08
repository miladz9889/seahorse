
  
  document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buy-seahorse");
    const navbar = document.querySelector("nav.navbar");
  
    if (buyButton && navbar) {
      buyButton.addEventListener("click", () => {
        // Get navbar height dynamically
        const navbarHeight = navbar.offsetHeight;
  
        // Add "jupiter-active" class to body
        document.body.classList.add("jupiter-active");
  
        // Initialize Jupiter Terminal
        window.Jupiter.init({
          displayMode: "modal",
          endpoint: "https://twilight-dry-sheet.solana-mainnet.quiknode.pro/cd0792aececdd0f267891f8f7c5466d2d12d31fe",
          strictTokenList: false,
          defaultExplorer: "Solscan",
          formProps: {
            fixedOutputMint: true,
            swapMode: "ExactIn",
            initialOutputMint: "7L6M32mpkewGWj8bHspoX8QDe9pb3b3S1U33KpFvpump",
          },
          containerStyles: {
            top: `${navbarHeight}px`, // Dynamically set modal top based on navbar height
            height: `calc(100% - ${navbarHeight}px)`, 
            zIndex: 9999, // Ensure modal is above other elements
          },
        });
      });
    }
  });





