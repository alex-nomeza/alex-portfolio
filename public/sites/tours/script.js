const form = document.querySelector('#tour-form');
const result = document.querySelector('#tour-result');
const money = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
form.querySelector('button').disabled = false;
form.addEventListener('input', () => result.replaceChildren());
form.addEventListener('submit', (event) => {
  event.preventDefault();
  result.replaceChildren();
  if (!form.reportValidity()) return;
  const departure = form.elements.namedItem('departure');
  const people = Number(form.elements.namedItem('people').value);
  const equipment = form.elements.namedItem('equipment').checked ? 45 : 0;
  const rate = Number(departure.value);
  const date = departure.selectedOptions[0].textContent.split(' — ')[0];
  result.textContent = `Départ fictif du ${date}. ${people} participants × ${money(rate)} = ${money(people * rate)}. Équipement : ${money(equipment * people)}. Total indicatif du groupe : ${money(people * (rate + equipment))}. Aucune inscription n’a été effectuée.`;
});
