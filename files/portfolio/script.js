// ===== Portfolio scripts: small and easy to edit =====
document.documentElement.classList.add('js');

// 1. Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// 2. Nav gets a background after scrolling
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// 3. Reveal sections as they enter the screen
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 4. Contact form: opens the visitor's email app (no backend needed).
// Replace YOUR_EMAIL with your real address, or use Formspree/EmailJS.
const YOUR_EMAIL = 'YOUR_EMAIL';
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`;
  window.location.href = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(body)}`;
  document.getElementById('note').textContent = 'Opening your email app to send the message.';
});
