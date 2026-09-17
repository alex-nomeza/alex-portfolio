const filters = document.querySelector('.filters');
const projects = [...document.querySelectorAll('[data-category]')];
filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filters
    .querySelectorAll('button')
    .forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  projects.forEach((project) => {
    project.hidden =
      button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
  });
  document.querySelector('#project-status').textContent =
    `${projects.filter((project) => !project.hidden).length} exploration(s) affichée(s).`;
});
const form = document.querySelector('#brief-form');
const projectInput = form.elements.namedItem('project');
const descriptionInput = form.elements.namedItem('description');
form.querySelector('button').disabled = false;
form.addEventListener('input', () => {
  projectInput.setCustomValidity('');
  descriptionInput.setCustomValidity('');
  document.querySelector('#brief-result').textContent = '';
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  projectInput.setCustomValidity(projectInput.value.trim() ? '' : 'Indiquez le nom du projet.');
  descriptionInput.setCustomValidity(
    descriptionInput.value.trim().length >= 20
      ? ''
      : 'Décrivez votre idée en au moins 20 caractères.',
  );
  if (!form.reportValidity()) return;
  const brief = [
    'BRIEF DE PROJET — MARGE (DÉMONSTRATION)',
    '',
    `Projet : ${projectInput.value.trim()}`,
    `Besoin : ${form.elements.namedItem('service').value}`,
    `Échéance : ${form.elements.namedItem('deadline').value.trim() || 'À définir'}`,
    '',
    'DESCRIPTION',
    descriptionInput.value.trim(),
    '',
    'Fichier généré localement. Aucune information n’a été transmise au studio.',
  ].join('\n');
  const url = URL.createObjectURL(
    new Blob(['\uFEFF', brief], { type: 'text/plain;charset=utf-8' }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.download = 'brief-projet-marge.txt';
  document.body.append(link);
  link.click();
  link.remove();
  // Laisser au navigateur le temps de démarrer le téléchargement avant de libérer le fichier.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#brief-result').textContent =
    'Votre brief est prêt. Le téléchargement a été lancé ; aucune information n’a été envoyée.';
});
