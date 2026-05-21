const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => { if (window.scrollY > 50) nav.style.padding = '0.9rem 3rem'; else nav.style.padding = '1.4rem 3rem'; });