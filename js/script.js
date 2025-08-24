/*NAVBAR*/

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      // Apply glass effect once scrolling starts
      if (currentScrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down → hide
        navbar.classList.remove("show");
        navbar.classList.add("hide");
      } else {
        // Scrolling up or stop → show
        navbar.classList.remove("hide");
        navbar.classList.add("show");
      }

      lastScrollY = currentScrollY;
    });

    // Always show on page load
    navbar.classList.add("show");
  });







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




  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('testimonialCarousel');
    const indicators = document.querySelectorAll('.custom-indicators button');

    // Sync active state with carousel events
    carousel.addEventListener('slid.bs.carousel', (e) => {
      indicators.forEach(btn => btn.classList.remove('active'));
      indicators[e.to].classList.add('active');
    });
  });



  
  

