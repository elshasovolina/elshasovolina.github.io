// small script: mobile nav toggle + dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
navToggle && navToggle.addEventListener('click', () => {
  if (nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});
// optional: smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      if (window.innerWidth < 640) nav.style.display = ''; // close mobile nav
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (!navToggle || !mainNav) return;

  // Toggle menu and update aria-expanded
  const toggleMenu = () => {
    const isOpen = mainNav.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent immediate close from document click
    toggleMenu();
  });

  // Close when clicking a nav link (good UX on mobile)
  mainNav.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (target) {
      // close the menu after selecting a link
      mainNav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close when clicking outside the nav
  document.addEventListener("click", (e) => {
    const clickedInside = e.target.closest("#main-nav") || e.target.closest("#nav-toggle");
    if (!clickedInside && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Accessibility: collapse on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

