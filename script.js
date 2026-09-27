// Animated Counter
const counters = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Trigger animation when stats section is visible
window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats');
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    animateCounters();
  }
});

// Mobile menu toggle
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.textContent = '☰ Menu';
document.querySelector('.site-header').insertBefore(menuToggle, document.querySelector('nav'));

menuToggle.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show');
});
