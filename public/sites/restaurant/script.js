const filters = document.querySelector('.filters');
filters.hidden = false;
const dishes = [...document.querySelectorAll('[data-category]')];
filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filters
    .querySelectorAll('button')
    .forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  dishes.forEach((dish) => {
    dish.hidden =
      button.dataset.filter !== 'all' && dish.dataset.category !== button.dataset.filter;
  });
  document.querySelector('#menu-status').textContent =
    `${dishes.filter((dish) => !dish.hidden).length} propositions à découvrir.`;
});
const form = document.querySelector('#booking');
const dateInput = form.elements.namedItem('date');
const nameInput = form.elements.namedItem('name');
// La date locale évite un décalage de jour dû au fuseau UTC.
function today() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
dateInput.min = today();
form.querySelector('button').disabled = false;
form.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  dateInput.setCustomValidity('');
  document.querySelector('#booking-result').textContent = '';
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameInput.setCustomValidity(nameInput.value.trim() ? '' : 'Indiquez votre prénom.');
  dateInput.min = today();
  const dateTime = new Date(`${dateInput.value}T${form.elements.namedItem('time').value}:00`);
  dateInput.setCustomValidity(dateTime <= new Date() ? 'Choisissez un service à venir.' : '');
  if (!form.reportValidity()) return;
  const date = dateTime.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  document.querySelector('#booking-result').textContent =
    `Simulation : ${nameInput.value.trim()}, ${form.elements.namedItem('guests').value} personne(s), le ${date} à ${form.elements.namedItem('time').value}. Aucune réservation n’a été transmise.`;
});
