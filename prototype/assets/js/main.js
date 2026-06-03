// Brass Template — main.js

// Header scroll behavior
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('is-open'));
  });
}

// Active nav link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// Copyright year
const yearEl = document.querySelector('.js-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
