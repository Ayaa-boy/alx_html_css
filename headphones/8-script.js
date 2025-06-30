document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.main-nav');

  menuToggle.addEventListener('change', () => {
    nav.classList.toggle('active');
  });
});
