(function () {
  var header = document.querySelector('header');
  if (!header) return;

  var heroEl =
    document.querySelector('.hero') ||
    document.querySelector('.about-pg-hero') ||
    document.querySelector('.page-top');

  function update() {
    var threshold = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 80;
    header.classList.toggle('header--scrolled', window.scrollY > threshold);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Hero overlay on scroll (index.html only)
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  function updateOverlay() {
    var progress = Math.min(1, window.scrollY / 300);
    hero.style.setProperty('--hero-overlay', (progress * 0.6).toFixed(3));
  }

  window.addEventListener('scroll', updateOverlay, { passive: true });
  updateOverlay();
})();

