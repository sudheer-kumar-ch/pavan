// JavaScript to synchronize scrolling 
const leftCard = document.getElementById('left-card');
const rightCard = document.getElementById('right-card');

// Listen for the scroll event on the left card
leftCard.addEventListener('wheel', (e) => {
    // Prevent the left card from scrolling
    e.preventDefault();

    // Manually scroll the right card by the same amount
    rightCard.scrollTop += e.deltaY;
  });


  const track = document.getElementById('unique-carousel-track');
  const indicators = document.querySelectorAll('.unique-carousel-indicator');
  const prevButton = document.getElementById('unique-prev-button');
  const nextButton = document.getElementById('unique-next-button');
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.unique-carousel-item').length;

  // Function to update carousel position and indicators
  function updateCarouselPosition() {
      track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
      indicators.forEach(indicator => indicator.classList.remove('active'));
      indicators[currentIndex].classList.add('active');
  }

  // Move to next slide
  function moveToNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarouselPosition();
  }

  // Move to previous slide
  function moveToPrevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarouselPosition();
  }

  // Manual controls (next and prev)
  nextButton.addEventListener('click', () => {
      moveToNextSlide();
      resetAutoSlide(); // Reset the auto-slide timer on manual interaction
  });

  prevButton.addEventListener('click', () => {
      moveToPrevSlide();
      resetAutoSlide(); // Reset the auto-slide timer on manual interaction
  });

  // Indicator click event
  indicators.forEach(indicator => {
      indicator.addEventListener('click', (e) => {
          currentIndex = parseInt(e.target.getAttribute('data-slide'));
          updateCarouselPosition();
          resetAutoSlide(); // Reset the auto-slide timer on manual interaction
      });
  });

  // Set the first indicator as active
  updateCarouselPosition();

  // Auto-slide functionality
  let autoSlideInterval = setInterval(moveToNextSlide, 5000); // 5 seconds interval

  // Reset the auto-slide when there's manual interaction
  function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(moveToNextSlide, 5000); // Restart interval
  }


  //Booking urgency
  /*
  let timeLeft = 59; // Set countdown time in seconds
const countdownElement = document.getElementById('countdown');

const countdownTimer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownElement.textContent = "";
    } else {
        countdownElement.textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
    }
    timeLeft--;
}, 1000);
*/
  //Booking urgency end

  //FAQs
// Get all FAQ items
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each FAQ question
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the visibility of the answer
        if (answer.classList.contains('visible')) {
            answer.classList.remove('visible'); // Hide the answer
            question.classList.remove('active'); // Rotate icon back
        } else {
            // Hide all other answers first
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('visible');
            });
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });

            answer.classList.add('visible'); // Show the clicked answer
            question.classList.add('active'); // Rotate the icon
        }
    });
});


  //FAQs END