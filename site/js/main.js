async function loadPartial(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(url);
  if (res.ok) {
    el.innerHTML = await res.text();
  }
}

function initMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
      loadPartial('site-header', 'partials/header.html'),
      loadPartial('site-footer', 'partials/footer.html')
    ]);
    initMenu();
    initYear();
  });
}

if (typeof module !== 'undefined') {
  module.exports = { loadPartial, initMenu, initYear };
}
