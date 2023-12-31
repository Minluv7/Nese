const slider = document.querySelector('.slider');

(() => {
  const app = {
    currentIndex: 0,
    visibleSlides: 2, // Aantal zichtbare slides in de viewport

    initialize() {
      this.cacheElements();
      this.buttonListeners();
      this.updateVisibleSlides(); // Pas de zichtbare slides aan bij het initialiseren
      window.addEventListener('resize', this.updateVisibleSlides.bind(this)); // Voeg een event listener toe om het aantal zichtbare slides bij te werken bij het wijzigen van het schermformaat
    },

    cacheElements() {
      this.$previousBtn = document.querySelector('.previous-btn');
      this.$nextBtn = document.querySelector('.next-btn');
      this.slides = Array.from(slider.querySelectorAll('.slide')); // Array van alle slides
    },

    buttonListeners() {
      this.$previousBtn.addEventListener('click', () => this.updateSlide(-1));
      this.$nextBtn.addEventListener('click', () => this.updateSlide(1));
    },

    updateSlide(step) {
      this.currentIndex += step;
      if (this.currentIndex >= this.slides.length) {
        this.currentIndex = 0;
      } else if (this.currentIndex < 0) {
        this.currentIndex = this.slides.length - 1;
      }
      this.updateVisibleSlides();
    },

    updateVisibleSlides() {
      // Bepaal het aantal zichtbare slides op basis van het schermformaat
      if (window.innerWidth < 500) {
        this.visibleSlides = 1;
      } else {
        this.visibleSlides = 2;
      }

      this.slides.forEach((slide, index) => {
        if (index >= this.currentIndex && index < this.currentIndex + this.visibleSlides) {
          slide.style.display = 'block'; // Toon de slide binnen het zichtbare gedeelte
        } else {
          slide.style.display = 'none'; // Verberg de slide buiten het zichtbare gedeelte
        }
      });
    }
  };

  app.initialize();
})();
