export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description?: string;
  highlights?: string[];
  draft?: boolean;
}

// Professional information transcribed from the CV supplied by the owner.
// Entries are ordered by end date, then start date. Drafts are never rendered.
export const experiences: TimelineEntry[] = [
  {
    period: 'Mai 2016 – Janvier 2018',
    title: 'Responsable de service',
    organization: 'CYBERPRO',
    location: 'Antsahamamy, Antananarivo',
    highlights: [
      'Maintenance du matériel informatique.',
      'Graphisme et mise en page.',
      'Services multimédias et administratifs.',
      'Création de maquettes de programmes et d’affiches pour des sociétés et des hôtels.',
    ],
  },
  {
    period: 'Janvier 2016 – Septembre 2017',
    title: 'Opérateur de saisie',
    organization: 'CNTEMAD',
    location: 'Antananarivo',
  },
  {
    period: 'Avril 2015',
    title: 'Assistant · Stage',
    organization: 'MADASERVICE',
    location: 'Antananarivo',
    highlights: [
      'Accueil et prise de contact avec les visiteurs.',
      'Mise à jour des pages sur les réseaux sociaux et envoi d’e-mails.',
      'Tâches administratives : copies et impressions.',
      'Réception et transfert des appels, prise de messages.',
    ],
  },
  {
    period: 'Mars 2015',
    title: 'Projet de gestion des logements universitaires',
    organization: 'Université de Fianarantsoa',
    description: 'Réalisation du projet « Gestion des logements de l’Université de Fianarantsoa ».',
  },
  {
    period: 'Octobre 2014',
    title: 'Consultant · Stage',
    organization: 'AGID — Agence Immobilier Diana',
    highlights: [
      'Rédaction de messages de communication.',
      'Traitement des résultats de mailing.',
      'Recherche d’informations et gestion des dossiers clients.',
    ],
  },
  {
    period: 'Juin – Août 2013',
    title: 'Standard · Stage',
    organization: 'INFOTECH',
    location: 'Majunga',
    highlights: [
      'Accueil des clients et gestion des appels.',
      'Saisie, élaboration et mise en forme de documents.',
      'Rédaction et saisie de courriers contentieux et juridiques.',
      'Établissement des rapports journaliers.',
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    period: '2014 – 2016',
    title: 'Bac +2 en informatique',
    organization: 'ENI',
    location: 'Fianarantsoa',
    description: 'Formation professionnelle hybride en informatique.',
  },
  {
    period: '2015',
    title: 'C2I · Niveau I',
    organization: 'Ministère de l’Enseignement général',
    description: 'Formation en informatique et internet.',
  },
  {
    period: '2013',
    title: 'Certificat de formation professionnelle',
    organization: 'Institut Supérieur de Majunga',
    description: 'Formation par modules : bureautique, maintenance et PAO.',
  },
  {
    period: '2006 – 2012',
    title: 'BEPC / Baccalauréat série D',
    organization: 'École privée La Colline',
    location: 'Ambatoloaka',
    description: 'Enseignement général.',
  },
];

export const skills = [
  { title: 'Bureautique', items: ['Word', 'Excel', 'PowerPoint'] },
  { title: 'Création graphique', items: ['Photoshop', 'Illustrator', 'InDesign'] },
  { title: 'Vidéo & audio', items: ['Vegas', 'Audition', 'After Effects'] },
  { title: 'Web', items: ['HTML5', 'CSS3'] },
  { title: 'Informatique', items: ['Utilisation, maintenance et installation d’ordinateurs'] },
  {
    title: 'Qualités professionnelles',
    items: [
      'Motivation & dynamisme',
      'Esprit d’initiative',
      'Sens des responsabilités',
      'Sens du relationnel',
    ],
  },
];

export const languages: { name: string; level: string }[] = [
  { name: 'Français', level: 'Maîtrisé' },
  { name: 'Anglais', level: 'Niveau intermédiaire' },
];
