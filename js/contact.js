/* =========================================================
   DE NOOK — Contact Page Scripts
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('contactSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateContactForm(form)) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      if (successMsg) successMsg.classList.add('show');
      form.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}

function validateContactForm(form) {
  let valid = true;
  const required = form.querySelectorAll('[required]');

  required.forEach((field) => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--coral)';
      valid = false;
    }
  });

  return valid;
}
