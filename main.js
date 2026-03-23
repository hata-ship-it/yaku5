(function () {
  var header = document.querySelector('header');
  if (!header) return;

  var triggerEl =
    document.querySelector('.about-text-area') ||
    document.querySelector('.about-pg-hero') ||
    document.querySelector('.page-top');

  function update() {
    var threshold = triggerEl ? triggerEl.offsetTop : 80;
    header.classList.toggle('header--scrolled', window.scrollY > threshold);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Hero overlay on scroll (index.html only)
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var heroCatch = document.querySelector('.hero-catch');
  var header    = document.querySelector('header');

  var visionSection  = document.querySelector('.vision-section');
  var aboutSection   = document.querySelector('.about-section');

  function updateOverlay() {
    var progress = Math.min(1, window.scrollY / 300);
    hero.style.setProperty('--hero-overlay', (progress * 0.6).toFixed(3));

    // vision-section の上端が 0px に達するまでフェードアウト
    var fadeEnd      = visionSection ? visionSection.offsetTop : 300;
    var fadeProgress = Math.min(1, window.scrollY / fadeEnd);
    var opacity      = 1 - fadeProgress;

    // about-section が始まったら opacity を 1 に戻す
    if (aboutSection && window.scrollY >= aboutSection.offsetTop) {
      opacity = 1;
    }

    var val = opacity.toFixed(3);
    if (heroCatch) heroCatch.style.opacity = val;
    if (header)    header.style.opacity    = val;
  }

  window.addEventListener('scroll', updateOverlay, { passive: true });
  updateOverlay();
})();

