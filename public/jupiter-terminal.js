document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buy-seahorse");
  
    if (buyButton) {
      buyButton.addEventListener("click", () => {
        // Initialize and open the Jupiter Terminal in modal mode
        window.Jupiter.init({
          displayMode: "modal", // Open terminal in modal
          endpoint: "https://twilight-dry-sheet.solana-mainnet.quiknode.pro/cd0792aececdd0f267891f8f7c5466d2d12d31fe", // Solana RPC endpoint
          strictTokenList: false,
          defaultExplorer: "Solscan",
          formProps: {
            fixedOutputMint: true,
            swapMode: "ExactIn",
            initialOutputMint: "7L6M32mpkewGWj8bHspoX8QDe9pb3b3S1U33KpFvpump", // Seahorse token mint
          },  containerStyles: { zIndex: 9999 }, // Ensure Jupiter Terminal has the highest z-index

        });
        
      });
      
    }
  });