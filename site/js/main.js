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

function initForm() {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name')||'').toString().trim();
    const phone = (data.get('phone')||'').toString().trim();
    const email = (data.get('email')||'').toString().trim();
    const message = (data.get('message')||'').toString().trim();
    if (!name || !phone || !message) {
      msg.textContent = 'Vul naam, telefoon en bericht in.';
      msg.style.color = 'var(--warn)';
      return;
    }
    const subject = encodeURIComponent("Offerte/Service aanvraag – Xavi's Koeltechniek");
    const body = encodeURIComponent(`Naam: ${name}\nTel/WhatsApp: ${phone}\nE-mail: ${email}\n\nBericht:\n${message}`);
    const href = `mailto:info@xaviskoeltechniek.sr?subject=${subject}&body=${body}`;
    window.location.href = href;
    msg.textContent = 'Je e-mailapp wordt geopend. Bedankt!';
    msg.style.color = 'var(--ok)';
    form.reset();
  });
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
    initForm();
    initYear();
  });
}

if (typeof module !== 'undefined') {
  module.exports = { loadPartial, initMenu, initForm, initYear };
}
