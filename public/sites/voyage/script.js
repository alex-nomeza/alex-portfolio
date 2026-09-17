const trips = [...document.querySelectorAll('.trips article')];
const filters = document.querySelector('#filters');
const selected = new Set();
const money = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
filters.hidden = false;
function filterTrips() {
  const region = document.querySelector('#region').value;
  const budget = document.querySelector('#budget').value;
  trips.forEach((trip) => {
    trip.hidden =
      (region !== 'all' && trip.dataset.region !== region) ||
      (budget !== 'all' && Number(trip.dataset.price) > Number(budget));
  });
  const count = trips.filter((trip) => !trip.hidden).length;
  document.querySelector('#filter-result').textContent = `${count} séjour(s) pour ces critères.`;
  document.querySelector('#empty').hidden = count > 0;
}
filters.addEventListener('change', filterTrips);
filters.addEventListener('reset', () => {
  setTimeout(filterTrips, 0);
});
function renderComparison() {
  const comparison = document.querySelector('#comparison');
  comparison.replaceChildren();
  trips.forEach((trip) => {
    const active = selected.has(trip.dataset.id);
    trip.querySelector('button').setAttribute('aria-pressed', String(active));
    if (!active) return;
    const article = document.createElement('article');
    const heading = document.createElement('h3');
    heading.textContent = trip.dataset.name;
    const duration = document.createElement('p');
    duration.textContent = `${trip.dataset.days} jours · ${money(Number(trip.dataset.price))} par personne, hors vols`;
    const included = document.createElement('p');
    included.textContent = `Inclus : ${trip.dataset.included}.`;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Retirer';
    remove.setAttribute('aria-label', `Retirer ${trip.dataset.name}`);
    remove.addEventListener('click', () => {
      selected.delete(trip.dataset.id);
      renderComparison();
      const next = comparison.querySelector('button');
      if (next) next.focus();
      else {
        document.querySelector('#compare-status').tabIndex = -1;
        document.querySelector('#compare-status').focus();
      }
    });
    article.append(heading, duration, included, remove);
    comparison.append(article);
  });
  document.querySelector('#compare-status').textContent = selected.size
    ? `${selected.size} séjour(s) sélectionné(s) sur 2. Votre sélection reste affichée lorsque vous filtrez les offres.`
    : 'Choisissez jusqu’à deux séjours avec le bouton « Comparer ».';
  document.querySelector('#clear').hidden = selected.size === 0;
}
document.querySelectorAll('.compare').forEach((button) => {
  button.disabled = false;
  button.addEventListener('click', () => {
    const id = button.closest('article').dataset.id;
    if (selected.has(id)) selected.delete(id);
    else if (selected.size < 2) selected.add(id);
    else {
      document.querySelector('#filter-result').textContent =
        'Deux séjours sont déjà sélectionnés. Désélectionnez-en un pour en comparer un autre.';
      return;
    }
    renderComparison();
    document.querySelector('#filter-result').textContent =
      `${selected.size} séjour(s) sélectionné(s). Le comparateur se trouve après les offres.`;
  });
});
document.querySelector('#clear').addEventListener('click', () => {
  selected.clear();
  renderComparison();
  document.querySelector('#compare-status').tabIndex = -1;
  document.querySelector('#compare-status').focus();
});
