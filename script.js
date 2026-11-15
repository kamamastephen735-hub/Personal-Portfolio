// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamically update the footer year
  const currentYear = new Date().getFullYear();
  const footerText = document.querySelector('footer .wrap');
  if (footerText) {
    footerText.innerHTML = `© ${currentYear} Stephen Kamama · Professional Portfolio`;
  }

  // 2. Smooth scroll for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80; // Account for sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});