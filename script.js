const toggleButton = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');
const yearTarget = document.getElementById('year');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (toggleButton && header) {
  toggleButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}
