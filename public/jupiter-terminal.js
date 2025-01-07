document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("buy-seahorse");
  
    if (buyButton) {
      buyButton.addEventListener("click", () => {
        // Initialize and open the Jupiter Terminal in modal mode
        window.Jupiter.init({
          displayMode: "modal", // Open terminal in modal
          endpoint: "https://api.mainnet-beta.solana.com", // Solana RPC endpoint
          strictTokenList: false,
          defaultExplorer: "Solscan",
          formProps: {
            fixedOutputMint: true,
            swapMode: "ExactIn",
            initialOutputMint: "7L6M32mpkewGWj8bHspoX8QDe9pb3b3S1U33KpFvpump", // Seahorse token mint
          },
        });
      });
    }
  });