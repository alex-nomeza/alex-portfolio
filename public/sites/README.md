# Sites de démonstration

Chaque dossier (`restaurant`, `boutique`, `agence`, `hotel`, `voyage`, `tours`) est un site autonome : ouvrir
`index.html` ou servir le dossier avec un serveur statique. Aucun build, framework,
service externe ou clé API n’est nécessaire. Les fichiers CSS et JavaScript utilisent
des chemins relatifs. Astro copie ces dossiers tels quels dans `dist/sites/`.

Les enseignes et les données sont fictives, explicitement signalées sur chaque page.
Les prix sont des exemples en euros, sans transaction réelle.

- **Restaurant** : carte filtrable et simulation de réservation validée côté navigateur.
  Aucune réservation n’est envoyée ni enregistrée.
- **Boutique** : filtre, tri et panier avec quantités (maximum 99 par produit).
  Le panier est enregistré dans `localStorage` sous `objet-cart-v1` lorsque disponible.
  Il n’y a ni paiement ni commande réelle.
- **Agence** : portfolio filtrable et génération locale d’un brief au format texte.
  Les informations saisies ne sont pas transmises.
- **Hôtel** : présentation des chambres et estimation du séjour avec dates, capacité
  et option petit-déjeuner. Aucun contrôle de disponibilité ni réservation réelle.
- **Agence de voyage** : filtres par région et budget, comparaison de deux séjours.
  Les durées, inclusions et tarifs sont des exemples fictifs.
- **Tour-opérateur** : circuit illustratif jour par jour et estimation pour un groupe,
  selon un départ fictif et une option d’équipement. Aucun départ réel n’est proposé.

Les données éditoriales sont dans chaque `index.html`; les règles interactives sont
dans `script.js` et les styles dans `styles.css`. Les contrôles natifs préservent
l’autonomie HTML/CSS/JS demandée, sans îlot React.

Les liens du portfolio sont définis dans `src/data/site-demos.ts` et présentés par
`SiteDemos.astro`, dans la liste des projets et dans « Web et numérique ».
Les liens « Visiter le site » ouvrent un nouvel onglet avec `noopener noreferrer`.
