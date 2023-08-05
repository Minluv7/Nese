const slider = document.querySelector('.slider');
let currentIndex = 0;

function slideTo(index) {
  const slideWidth = slider.offsetWidth;
  const offset = -slideWidth * index;
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }
  slideTo(currentIndex);
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }
  slideTo(currentIndex);
}

// Event listeners voor de knoppen "Vorige" en "Volgende"
document.querySelector('.prev-btn').addEventListener('click', previousSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);
