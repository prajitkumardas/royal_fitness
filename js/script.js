function openPopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("youtubeVideo");
  popup.style.display = "flex";

  // Your video embed link
  video.src = "https://www.youtube.com/embed/agQzceW4_g0?autoplay=1";
}

function closePopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("youtubeVideo");
  popup.style.display = "none";
  video.src = ""; // clear to stop playback
}

