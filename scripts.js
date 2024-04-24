// Slide the images
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function showSlides() {
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const offset = -slideIndex * 100;
    slideshow.style.transform = `translateX(${offset}%)`;
}

setInterval(showSlides, 5000); // Change slide every 5 seconds

document.addEventListener('DOMContentLoaded', function () {
  // Function to update total clients
  function updateTotalClients() {
      const totalClientsElement = document.getElementById('total-clients');
      const exactNumber = parseInt(totalClientsElement.textContent); // Fetch the exact number from the paragraph
      let currentClients = 0;
      const interval = setInterval(function () {
          totalClientsElement.textContent = currentClients;
          currentClients++;
          if (currentClients > exactNumber) {
              clearInterval(interval);
          }
      }, 50);
  }

  // Call function to update total clients
  updateTotalClients();
});

document.addEventListener('DOMContentLoaded', function () {
  // Function to update total client
  function updateTotalClient() {
      const totalClientsElement = document.getElementById('total-client');
      const exactNumber = parseInt(totalClientsElement.textContent); // Fetch the exact number from the paragraph
      let currentClient = 0;
      const interval = setInterval(function () {
          totalClientsElement.textContent = currentClient;
          currentClient++;
          if (currentClient > exactNumber) {
              clearInterval(interval);
          }
      }, 50);
  }

  // Call function to update total clients
  updateTotalClient();
});
