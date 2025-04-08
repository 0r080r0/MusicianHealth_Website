// Get all necessary elements
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Show the selected slide
  slides[index].classList.add('active');
}

function plusSlides(n) {
  currentSlideIndex += n;

  // Loop the slides, wrapping around to the first or last
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
}

// Initially show the first slide
showSlide(currentSlideIndex);





// Webpage "Media": EP Descriptions Fade In Effect While Scrolling

<script>
  document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }

    // Select both paragraphs with fade-in classes
    const fadeInText1 = document.querySelector('.fade-in-text-1');
    const fadeInText2 = document.querySelector('.fade-in-text-2');

    function checkFade() {
      if (fadeInText1 && isElementInViewport(fadeInText1)) {
        fadeInText1.classList.add('is-visible');
      }
      if (fadeInText2 && isElementInViewport(fadeInText2)) {
        fadeInText2.classList.add('is-visible');
      }
    }

    // Trigger the function on scroll and on initial load
    window.addEventListener('scroll', checkFade);
    checkFade();  // Check visibility on initial load
  });
</script>




// Webpage "Performance Experience: Fade-In Effects for Bulletpoint-Sections"

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if the element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Select the fade-in block
  const fadeInBlock = document.querySelector('.fade-in-block');

  // Function to trigger fade-in effect
  function checkFade() {
    if (fadeInBlock && isElementInViewport(fadeInBlock)) {
      fadeInBlock.classList.add('is-visible');
    }
  }

  // Trigger the check when the page loads and on scroll
  window.addEventListener('scroll', checkFade);
  checkFade(); // Initial check in case the block is already in the viewport
});

