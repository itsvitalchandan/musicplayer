// script.js

const playButton = document.querySelector(".controls button:nth-child(2)");
const progressBar = document.querySelector(".progress input");

// Simulated song data
const songs = [
  { title: "Stronger", artist: "Kanye West", duration: 245 },
  { title: "Eye of the Tiger", artist: "Survivor", duration: 244 },
];

let currentSongIndex = 0;

// Format time in MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Play/Pause functionality
playButton.addEventListener("click", () => {
  const isPlaying = playButton.textContent === "⏸️";
  playButton.textContent = isPlaying ? "▶️" : "⏸️";

  // Simulate progress
  if (!isPlaying) {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= songs[currentSongIndex].duration) {
        clearInterval(interval);
      } else {
        progress++;
        progressBar.value = (progress / songs[currentSongIndex].duration) * 100;
      }
    }, 1000);
  }
});
