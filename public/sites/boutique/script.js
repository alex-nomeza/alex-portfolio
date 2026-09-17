const products = [...document.querySelectorAll('#products article')];
const catalog = new Map(
  products.map((item) => [
    item.dataset.id,
    { name: item.dataset.name, price: Number(item.dataset.price) },
  ]),
);
const currency = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
const storageKey = 'objet-cart-v1';
let cart = {};
let storageAvailable = true;
// Le stockage local est non fiable : seules les références et quantités valides sont restaurées.
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
    for (const [id, quantity] of Object.entries(saved)) {
      if (catalog.has(id) && Number.isInteger(quantity) && quantity > 0 && quantity <= 99)
        cart[id] = quantity;
    }
  }
} catch {
  storageAvailable = false;
}
const dialog = document.querySelector('#cart');
const items = document.querySelector('#cart-items');
function renderCart() {
  items.replaceChildren();
  let total = 0;
  let count = 0;
  for (const [id, quantity] of Object.entries(cart)) {
    const product = catalog.get(id);
    total += product.price * quantity;
    count += quantity;
    const row = document.createElement('div');
    row.className = 'cart-row';
    const heading = document.createElement('div');
    heading.className = 'cart-row-top';
    const title = document.createElement('strong');
    title.textContent = product.name;
    const price = document.createElement('span');
    price.textContent = currency(product.price * quantity);
    heading.append(title, price);
    const controls = document.createElement('div');
    controls.className = 'quantity';
    for (const [action, label, accessible] of [
      ['minus', '−', 'Diminuer'],
      ['plus', '+', 'Augmenter'],
      ['remove', 'Retirer', 'Retirer'],
    ]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.dataset.id = id;
      button.dataset.action = action;
      button.className = action;
      button.setAttribute('aria-label', `${accessible} : ${product.name}`);
      button.disabled = action === 'plus' && quantity === 99;
      controls.append(button);
      if (action === 'minus') {
        const value = document.createElement('span');
        value.textContent = String(quantity);
        value.setAttribute('aria-label', `${quantity} exemplaire(s)`);
        controls.append(value);
      }
    }
    row.append(heading, controls);
    items.append(row);
  }
  if (!count) {
    const empty = document.createElement('p');
    empty.textContent = 'Votre panier est vide. Explorez la collection pour ajouter un objet.';
    items.append(empty);
  }
  document.querySelector('#cart-count').textContent = String(count);
  document.querySelector('#cart-total').textContent = `Total indicatif : ${currency(total)}`;
  document.querySelector('#clear-cart').disabled = count === 0;
  document.querySelector('#storage-note').textContent = storageAvailable
    ? 'Votre sélection est conservée sur ce navigateur.'
    : 'Stockage indisponible : le panier reste utilisable jusqu’à la fermeture de cette page.';
}
function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    storageAvailable = true;
  } catch {
    storageAvailable = false;
  }
  renderCart();
}
document.querySelector('.controls').hidden = false;
function filterProducts() {
  const category = document.querySelector('#category').value;
  const sort = document.querySelector('#sort').value;
  const ordered = [...products];
  if (sort !== 'selection')
    ordered.sort(
      (a, b) => (Number(a.dataset.price) - Number(b.dataset.price)) * (sort === 'asc' ? 1 : -1),
    );
  ordered.forEach((item) => {
    item.hidden = category !== 'all' && item.dataset.category !== category;
    document.querySelector('#products').append(item);
  });
  document.querySelector('#catalog-status').textContent =
    `${ordered.filter((item) => !item.hidden).length} objet(s) dans cette sélection.`;
}
document.querySelector('#category').addEventListener('change', filterProducts);
document.querySelector('#sort').addEventListener('change', filterProducts);
document.querySelectorAll('.add').forEach((button) => {
  button.disabled = false;
  button.addEventListener('click', () => {
    const id = button.closest('article').dataset.id;
    if ((cart[id] || 0) >= 99) {
      document.querySelector('#cart-feedback').textContent =
        'La limite est de 99 exemplaires par objet.';
      return;
    }
    cart[id] = (cart[id] || 0) + 1;
    save();
    document.querySelector('#cart-feedback').textContent =
      `${catalog.get(id).name} ajouté au panier (${cart[id]} exemplaire(s)).`;
  });
});
items.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const { id, action } = button.dataset;
  if (action === 'remove' || (action === 'minus' && cart[id] === 1)) delete cart[id];
  else cart[id] = Math.min(99, cart[id] + (action === 'plus' ? 1 : -1));
  save();
  // Restaurer le focus après le remplacement des contrôles du panier.
  const next =
    items.querySelector(`[data-id="${id}"][data-action="${action}"]:not(:disabled)`) ||
    items.querySelector('button:not(:disabled)') ||
    document.querySelector('#close-cart');
  next.focus();
});
const openCart = document.querySelector('#open-cart');
openCart.disabled = false;
openCart.addEventListener('click', () => dialog.showModal());
document.querySelector('#close-cart').addEventListener('click', () => dialog.close());
document.querySelector('#clear-cart').addEventListener('click', () => {
  cart = {};
  save();
  document.querySelector('#close-cart').focus();
});
save();
