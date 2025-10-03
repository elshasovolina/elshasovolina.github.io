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
