// Simple fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fader => appearOnScroll.observe(fader));
});


window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const heroRect = hero.getBoundingClientRect();
  // Fade out earlier: when the bottom of hero is above 40% of viewport height
  if (heroRect.bottom < window.innerHeight * 0.3) {
    hero.classList.add('scrolled');
  } else {
    hero.classList.remove('scrolled');
  }
});
