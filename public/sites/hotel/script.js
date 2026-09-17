const form = document.querySelector('#stay-form');
const room = form.elements.namedItem('room');
const arrival = form.elements.namedItem('arrival');
const departure = form.elements.namedItem('departure');
const guests = form.elements.namedItem('guests');
const result = document.querySelector('#stay-result');
const money = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
arrival.min = localToday();
departure.min = localToday();
form.querySelector('button').disabled = false;
function clearEstimate() {
  departure.setCustomValidity('');
  guests.setCustomValidity('');
  result.replaceChildren();
}
form.addEventListener('input', clearEstimate);
document.querySelectorAll('[data-room]').forEach((link) =>
  link.addEventListener('click', () => {
    room.value = link.dataset.room;
    clearEstimate();
    room.focus({ preventScroll: true });
  }),
);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearEstimate();
  arrival.min = localToday();
  // Les dates civiles sont comparées en UTC pour compter les nuits sans effet d’heure d’été.
  const nights =
    (Date.parse(`${departure.value}T00:00:00Z`) - Date.parse(`${arrival.value}T00:00:00Z`)) /
    86400000;
  const selected = room.selectedOptions[0];
  const capacity = Number(selected.dataset.capacity);
  const people = Number(guests.value);
  departure.setCustomValidity(
    !Number.isInteger(nights) || nights < 1
      ? 'Le départ doit suivre la date d’arrivée.'
      : nights > 30
        ? 'Cette démonstration accepte un maximum de 30 nuits.'
        : '',
  );
  guests.setCustomValidity(
    people > capacity
      ? `Cette chambre accueille au maximum ${capacity} personnes. Choisissez La Suite pour votre groupe.`
      : '',
  );
  if (!form.reportValidity()) return;
  const lodging = nights * Number(selected.dataset.rate);
  const breakfast = form.elements.namedItem('breakfast').checked ? nights * people * 15 : 0;
  result.textContent = `${nights} nuit(s) · ${people} personne(s). Chambre : ${money(lodging)}. Petit-déjeuner : ${money(breakfast)}. Total indicatif : ${money(lodging + breakfast)}. Aucune chambre n’est réservée. Taxes et autres services non simulés.`;
});
