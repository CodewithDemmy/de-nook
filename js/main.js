/* =========================================================
   DE NOOK — Shared Scripts
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initDeskMap();
});

/* ---------- Mobile nav toggle ---------- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is tapped (mobile)
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Live desk map (homepage hero) ---------- */
function initDeskMap() {
  const desks = document.querySelectorAll('.desk-grid .desk:not(.reserved)');
  const counter = document.querySelector('.desk-map-count');

  if (!desks.length || !counter) return;

  const total = document.querySelectorAll('.desk').length;

  const updateCounter = () => {
    const free = document.querySelectorAll('.desk.available').length;
    counter.textContent = `${free} of ${total} desks free today`;
  };

  updateCounter();

  // Gently shift desk availability every few seconds to feel "live"
  setInterval(() => {
    const randomDesk = desks[Math.floor(Math.random() * desks.length)];
    randomDesk.classList.toggle('available');
    randomDesk.classList.toggle('occupied');
    updateCounter();
  }, 3000);
}
