// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.3, // Trigger when 30% of element is visible
  rootMargin: '0px 0px -50px 0px' // Slight offset from bottom
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Initialize observers when page loads
window.addEventListener('load', () => {
  // Observe ribbons for individual fade-in
  const ribbons = document.querySelectorAll('.ribbon');
  ribbons.forEach(ribbon => {
    observer.observe(ribbon);
  });
  
  // Observe other fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
});

// Optional: Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (window.scrollY > 50) {
      hero.classList.add('scrolled');
    } else {
      hero.classList.remove('scrolled');
    }
  });