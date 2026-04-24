// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');
const cta = document.querySelector('.nav__cta');

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    cta.classList.toggle('is-open', isOpen);
    if (isOpen) {
      links.style.cssText = 'display:flex;flex-direction:column;gap:12px;position:absolute;top:100%;left:0;right:0;background:#fff;padding:20px 28px;border-bottom:1px solid var(--line);';
      cta.style.cssText = 'display:flex;flex-direction:column;gap:8px;position:absolute;top:calc(100% + 180px);left:0;right:0;background:#fff;padding:0 28px 20px;';
    } else {
      links.style.cssText = '';
      cta.style.cssText = '';
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target && this.getAttribute('href') !== '#') {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
