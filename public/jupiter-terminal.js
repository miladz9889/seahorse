// document.addEventListener("DOMContentLoaded", () => {
//     const buyButton = document.getElementById("buy-seahorse");
  
//     if (buyButton) {
//       buyButton.addEventListener("click", () => {
//         // Initialize and open the Jupiter Terminal in modal mode
//         window.Jupiter.init({
//           displayMode: "modal", // Open terminal in modal
//           endpoint: "https://twilight-dry-sheet.solana-mainnet.quiknode.pro/cd0792aececdd0f267891f8f7c5466d2d12d31fe", // Solana RPC endpoint
//           strictTokenList: false,
//           defaultExplorer: "Solscan",
//           formProps: {
//             fixedOutputMint: true,
//             swapMode: "ExactIn",
//             initialOutputMint: "7L6M32mpkewGWj8bHspoX8QDe9pb3b3S1U33KpFvpump", // Seahorse token mint
//           },  containerStyles: { zIndex: 9999 }, // Ensure Jupiter Terminal has the highest z-index

//         });
        
//       });
      
//     }
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   const buyButton = document.getElementById("buy-seahorse");

//   if (buyButton) {
//     buyButton.addEventListener("click", () => {
//       // Add "jupiter-active" class to body when modal is opened
//       document.body.classList.add("jupiter-active");

//       // Initialize and open the Jupiter Terminal in modal mode
//       window.Jupiter.init({
//         displayMode: "modal", // Open as modal
//         endpoint: "https://twilight-dry-sheet.solana-mainnet.quiknode.pro/cd0792aececdd0f267891f8f7c5466d2d12d31fe",
//         strictTokenList: false,
//         defaultExplorer: "Solscan",
//         formProps: {
//           fixedOutputMint: true,
//           swapMode: "ExactIn",
//           initialOutputMint: "7L6M32mpkewGWj8bHspoX8QDe9pb3b3S1U33KpFvpump",
//         },
//         containerStyles: {
//           zIndex: 9999, // Set highest z-index for the modal
//         },
//       });

//       // Remove "jupiter-active" class when modal is closed
//       // You may need to attach this event to a modal-specific close button
//       const observer = new MutationObserver(() => {
//         const modalExists = document.querySelector(".jupiter-modal");
//         if (!modalExists) {
//           document.body.classList.remove("jupiter-active");
//           observer.disconnect(); // Stop observing once the modal is gone
//         }
//       });

//       observer.observe(document.body, { childList: true });
//     });
//   }
// });

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
          height: `calc(100% - ${navbarHeight}px)`, // Adjust modal height
          zIndex: 9999, // Ensure modal is above other elements
        },
      });
    });
  }
});