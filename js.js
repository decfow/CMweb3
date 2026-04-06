document.addEventListener("DOMContentLoaded", function () {

  let slideIndex1 = 1;
  let slideIndex2 = 1;

let currentImages = [];
let currentIndex = 0;
  

  showSlides1(slideIndex1);
  showSlides2(slideIndex2);

  // Controls for slideshow 1
  window.plusSlides1 = function(n) {
    showSlides1(slideIndex1 += n);
  }

  function showSlides1(n) {
    let slides = document.getElementsByClassName("Slides1");

    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex1 - 1].style.display = "block";
  }

  // Controls for slideshow 2
  window.plusSlides2 = function(n) {
    showSlides2(slideIndex2 += n);
  }

  function showSlides2(n) {
    let slides = document.getElementsByClassName("Slides2");

    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex2 - 1].style.display = "block";
  }

  // LIGHTBOX
window.openLightbox = function(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Detect which slideshow was clicked
  const container = img.closest("#Slides1, #Slides2");

  // Get images from THAT slideshow
  currentImages = Array.from(container.querySelectorAll("img"));

  // Find index
  currentIndex = currentImages.indexOf(img);

  lightbox.style.display = "block";
  lightboxImg.src = img.src;
}

  window.closeLightbox = function() {
    document.getElementById("lightbox").style.display = "none";
  }

  const lightbox = document.getElementById("lightbox");

  lightbox.addEventListener("click", function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

window.changeLightboxSlide = function(n) {
  currentIndex += n;

  if (currentIndex >= currentImages.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;

  document.getElementById("lightbox-img").src =
    currentImages[currentIndex].src;
}

});
