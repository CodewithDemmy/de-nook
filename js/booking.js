/* =========================================================
   DE NOOK — Booking Page Scripts
   Live summary + form submission
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initSpaceSelector();
  initSummaryUpdates();
  initBookingForm();
});

/* ---------- Space selector: radio cards ---------- */
function initSpaceSelector() {
  const radios = document.querySelectorAll('input[name="space"]');
  radios.forEach((radio) => {
    radio.addEventListener('change', updateSummary);
  });
}

/* ---------- Summary sidebar live updates ---------- */
function initSummaryUpdates() {
  const dateInput = document.getElementById('bookDate');
  const timeSelect = document.getElementById('bookTime');
  const durationSelect = document.getElementById('bookDuration');

  if (dateInput) dateInput.addEventListener('change', updateSummary);
  if (timeSelect) timeSelect.addEventListener('change', updateSummary);
  if (durationSelect) durationSelect.addEventListener('change', updateSummary);

  // Set today's date as min
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  updateSummary();
}

function updateSummary() {
  const checkedSpace = document.querySelector('input[name="space"]:checked');
  const dateInput = document.getElementById('bookDate');
  const timeSelect = document.getElementById('bookTime');
  const durationSelect = document.getElementById('bookDuration');

  const sumSpace = document.getElementById('sumSpace');
  const sumDate = document.getElementById('sumDate');
  const sumTime = document.getElementById('sumTime');
  const sumDuration = document.getElementById('sumDuration');
  const sumCost = document.getElementById('sumCost');

  if (!sumSpace) return;

  // Space
  if (checkedSpace) {
    sumSpace.textContent = checkedSpace.value;
    sumSpace.classList.remove('placeholder');
  }

  // Date
  if (dateInput && dateInput.value) {
    const d = new Date(dateInput.value + 'T00:00:00');
    sumDate.textContent = d.toLocaleDateString('en-NG', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    sumDate.classList.remove('placeholder');
  } else if (sumDate) {
    sumDate.textContent = 'Not selected';
    sumDate.classList.add('placeholder');
  }

  // Time
  if (timeSelect && timeSelect.value) {
    const [h, m] = timeSelect.value.split(':');
    const hr = parseInt(h);
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const displayHr = hr % 12 || 12;
    sumTime.textContent = `${displayHr}:${m} ${ampm}`;
    sumTime.classList.remove('placeholder');
  } else if (sumTime) {
    sumTime.textContent = 'Not selected';
    sumTime.classList.add('placeholder');
  }

  // Duration
  if (durationSelect && durationSelect.value) {
    sumDuration.textContent = durationSelect.value;
    sumDuration.classList.remove('placeholder');
  } else if (sumDuration) {
    sumDuration.textContent = 'Not selected';
    sumDuration.classList.add('placeholder');
  }

  // Estimated cost
  if (sumCost && checkedSpace) {
    const pricePerUnit = parseInt(checkedSpace.dataset.price) || 0;
    const duration = durationSelect ? durationSelect.value : '';
    let estimate = pricePerUnit;

    if (duration === '2 hours') estimate = pricePerUnit * 2;
    else if (duration === '3 hours') estimate = pricePerUnit * 3;
    else if (duration === 'Half day (4 hrs)') estimate = pricePerUnit * 4;
    else if (duration === '1 week') estimate = pricePerUnit * 5;
    else if (duration === '1 month') estimate = pricePerUnit * 20;

    sumCost.textContent = `₦${estimate.toLocaleString('en-NG')}`;
  }
}

/* ---------- Booking form submission ---------- */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const layout = document.getElementById('bookingLayout');
  const success = document.getElementById('bookingSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateBookingForm(form)) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Booking…';
    submitBtn.disabled = true;

    // Simulate async submission
    setTimeout(() => {
      if (layout) layout.style.display = 'none';
      if (success) success.classList.add('show');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  });
}

function validateBookingForm(form) {
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
