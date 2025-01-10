document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-ca-button");
    const copyMessage = document.getElementById("copy-message");
  
    if (copyButton) {
      copyButton.addEventListener("click", () => {
        // Get the CA address from the data attribute
        const caAddress = copyButton.getAttribute("data-ca-address");
  
        // Copy the CA address to the clipboard
        navigator.clipboard.writeText(caAddress).then(() => {
          // Show confirmation message
          copyMessage.style.opacity = "1";
  
          // Hide the message after 3 seconds
          setTimeout(() => {
            copyMessage.style.opacity = "0";
          }, 3000);
        }).catch(err => {
          console.error("Failed to copy text: ", err);
        });
      });
    }
  });