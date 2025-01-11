document.addEventListener("DOMContentLoaded", () => {
    const streamerUsername = "andrewshaman";
    const liveStatusDot = document.getElementById("live-status-dot");
    const twitchEmbedContainer = document.getElementById("twitch-embed");
  
    // Initialize Twitch Embed
    const embed = new Twitch.Embed("twitch-embed", {
      width: "100%",
      height: "450",
      channel: streamerUsername,
      parent: ["localhost"],
    //   ["seahorse.meme"],
    });
  
    // Listen for the VIDEO_PLAY event
    embed.addEventListener(Twitch.Embed.VIDEO_PLAY, () => {
      // Stream is live
      liveStatusDot.style.backgroundColor = "red";
      liveStatusDot.classList.add("blinking");
    });
  
    // Listen for VIDEO_PAUSE
    embed.addEventListener(Twitch.Embed.VIDEO_PAUSE, () => {
      // Stream might not be live
      liveStatusDot.style.backgroundColor = "gray";
      liveStatusDot.classList.remove("blinking");
    });

// Add a test button to simulate live/offline status
//   const testButton = document.createElement("button");
//   testButton.textContent = "Simulate Live Status";
//   testButton.id = "test-live-status-button";
//   testButton.style.position = "fixed";
//   testButton.style.bottom = "20px";
//   testButton.style.right = "20px";
//   testButton.style.zIndex = 1000;
//   testButton.style.padding = "10px 20px";
//   testButton.style.backgroundColor = "#007acc";
//   testButton.style.color = "#fff";
//   testButton.style.border = "none";
//   testButton.style.borderRadius = "5px";
//   testButton.style.fontSize = "1rem";
//   testButton.style.fontWeight = "bold";
//   testButton.style.cursor = "pointer";
//   testButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
//   testButton.style.transition = "background-color 0.3s ease, transform 0.2s ease";

//   document.body.appendChild(testButton);

  // Simulate live/offline toggle
//   let isLive = false;
//   testButton.addEventListener("click", () => {
//     isLive = !isLive;
//     if (isLive) {
//       console.log("Simulating stream going live...");
//       liveStatusDot.style.backgroundColor = "red";
//       liveStatusDot.classList.add("blinking");
//     } else {
//       console.log("Simulating stream going offline...");
//       liveStatusDot.style.backgroundColor = "gray";
//       liveStatusDot.classList.remove("blinking");
//     }
//   });
});