function toggleMenu() {
  const nav = document.getElementById('nav');
  const btn = document.getElementById('hamburger');
  const open = nav.classList.toggle('menu-open');
  btn.setAttribute('aria-expanded', open);
}

document.querySelectorAll('.nav-link, .nav-cta').forEach(l => {
  l.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('menu-open');
    document.getElementById('hamburger').setAttribute('aria-expanded', false);
  });
});
