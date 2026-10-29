// Contenu du portfolio : modifier ici sans toucher aux composants.

export const profile = {
  name: 'Jordan Fogou',
  role: 'Développeur back-end & Data Engineer',
  photo: '/new-profil image.jpg',
  intro:
    "Élève ingénieur en 5e année à CESI Nanterre, passionné par la gestion et la valorisation des données. Enthousiaste à l'idée de travailler en data et en développement back-end, je cherche une entreprise où mettre mes qualités au service de sa croissance, tout en continuant d'aiguiser mes compétences.",
  status:
    "Disponible pour un stage de fin d'études de 6 mois à partir du 1er février 2027.",
  location: 'Île-de-France',
  email: 'jordanfogou443@gmail.com',
  links: {
    github: 'https://github.com/jordanfogou',
    linkedin: 'https://www.linkedin.com/in/jordan-fogou-6578a4295/',
  },
  cv: '/CV_Jordan_FOGOU_Backend_Data_Engineer.pdf',
};

export const navLinks = [
  { id: 'a-propos', title: 'À propos' },
  { id: 'experiences', title: 'Expériences' },
  { id: 'competences', title: 'Compétences' },
  { id: 'projets', title: 'Projets' },
  { id: 'contact', title: 'Contact' },
];

export const about =
  "Dès ma première année du cycle ingénieur, j'ai été fasciné par ce qui se passe derrière l'écran : les API qui font tourner une application, les bases de données qui la portent, et les pipelines qui transforment ses données en décisions. Depuis, je travaille sur les deux versants de ce même sujet. Côté développement, j'ai conçu des API et des applications full-stack en .NET Core, NestJS et React, jusqu'à leur mise en production. Côté data, j'ai mis sur pied un pipeline ETL en entreprise et modélisé des bases de données qui alimentent des tableaux de bord. Je me forme en continu, en ce moment sur Java Spring Boot et Databricks.";

// icon : clé de l'icône dans src/components/About.js
export const services = [
  { title: 'Back-end et API', text: 'API REST en NestJS, .NET ou Spring Boot, authentification JWT, mise en production', icon: 'code' },
  { title: 'Pipelines de données', text: 'Flux ETL, intégration d’API et de webhooks, automatisation des échanges entre outils', icon: 'pipeline' },
  { title: 'Bases de données et SQL', text: 'Modélisation relationnelle, requêtes, qualité et fiabilité des données', icon: 'db' },
  { title: 'Mise en production', text: 'Docker, CI/CD avec GitHub Actions, déploiement cloud d’API et de bases de données', icon: 'cloud' },
];

export const experiences = [
  {
    company: 'Mixxit (MOOVIT SAS)',
    role: 'Data Engineer (stage) : pipelines ETL et intégration CRM',
    place: 'Marseille, hybride',
    period: 'janv. 2025 – mai 2025',
    logo: '/mixxit.jpg',
    summary:
      "Mixxit édite des solutions de téléphonie et de communication pour les entreprises. Pendant ce stage de 5 mois, j'ai mis sur pied un process qui, à partir du seul nom d'une entreprise, va chercher ses données, les traite et les envoie dans le CRM.",
    points: [
      'J’ai mis sur pied un système de scraping automatisé : à partir du seul nom d’une entreprise, il récupère et enrichit ses données clés via les API Piloterr et Kanbox',
      'J’ai automatisé toute la chaîne dans Zoho Flow avec des fonctions Deluge, de l’appel d’API jusqu’au CRM, sans aucune saisie manuelle',
      'J’ai fiabilisé les données avec Zoho DataPrep et livré à l’équipe commerciale des rapports exploitables dans Zoho Analytics',
    ],
    stack: ['ETL', 'Zoho Flow', 'Deluge', 'Zoho DataPrep', 'Zoho Analytics', 'Zoho CRM', 'API Piloterr', 'Kanbox', 'Webhooks'],
  },
  {
    company: 'OGMENTIS',
    role: 'Stagiaire développeur full-stack (.NET Core et React)',
    place: 'Reims',
    period: 'juil. 2024 – sept. 2024',
    logo: '/ogmentis_logo.jpg',
    summary:
      "J'ai développé l'espace administrateur d'une application SaaS de réalité augmentée, de l'API en .NET Core jusqu'à l'interface React.",
    points: [
      'J’ai conçu la gestion des utilisateurs, des rôles et des droits d’accès de l’API (C#, .NET Core)',
      'J’ai sécurisé l’accès aux données de l’application',
      'J’ai intégré une vue de visualisation 3D dans l’interface d’administration React',
      'J’ai documenté l’API sous Swagger pour faciliter le travail de l’équipe',
    ],
    stack: ['C#', '.NET Core', 'React', 'SQL Server', 'Swagger'],
  },
  {
    company: 'IziSolutions',
    role: 'Développeur web (stage)',
    place: 'Yaoundé, Cameroun',
    period: 'avr. 2022 – juin 2022',
    logo: '/izisolutionscm_logo.jpg',
    summary:
      "J'ai participé au développement d'une plateforme interne de gestion de projets et de messagerie, de la maquette jusqu'à la mise en service.",
    points: [
      'J’ai conçu les maquettes des interfaces sur Figma, puis l’interface responsive avec Bootstrap',
      'J’ai développé le back-end en PHP avec Twig, sur une base MariaDB',
      'J’ai accompagné la mise en service en formant les utilisateurs et en assurant le support',
    ],
    stack: ['PHP', 'Twig', 'MariaDB', 'Bootstrap', 'Figma'],
  },
];

// Compétences regroupées par catégorie. icon : clé dans src/components/Tech.js
export const skillGroups = [
  {
    title: 'Back-end et API',
    icon: 'back',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: '.NET / C#', icon: 'SiDotnet' },
      { name: 'PHP', icon: 'SiPhp' },
      { name: 'Java', icon: 'SiOpenjdk' },
      { name: 'Spring Boot', icon: 'SiSpringboot' },
    ],
  },
  {
    title: 'Data engineering',
    icon: 'pipeline',
    skills: [
      { name: 'Python', icon: 'SiPython' },
      { name: 'SQL', icon: 'SiPostgresql' },
      { name: 'Pandas', icon: 'SiPandas' },
      { name: 'ETL / API', icon: 'SiZoho' },
      { name: 'Tableaux de bord', icon: 'SiChartdotjs' },
    ],
  },
  {
    title: 'Bases de données',
    icon: 'db',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'Prisma', icon: 'SiPrisma' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
    ],
  },
  {
    title: 'DevOps et outils',
    icon: 'tools',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'GitLab', icon: 'SiGitlab' },
      { name: 'Jira', icon: 'SiJira' },
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
      { name: 'Render', icon: 'SiRender' },
      { name: 'Linux', icon: 'SiLinux' },
    ],
  },
  {
    title: 'Machine learning',
    icon: 'ml',
    skills: [
      { name: 'TensorFlow', icon: 'SiTensorflow' },
      { name: 'Keras', icon: 'SiKeras' },
      { name: 'scikit-learn', icon: 'SiScikitlearn' },
      { name: 'NumPy', icon: 'SiNumpy' },
      { name: 'Jupyter', icon: 'SiJupyter' },
    ],
  },
  {
    title: 'Front-end',
    icon: 'front',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
];

// image : vignette 16:10 dans public/projects. github / live : laisser vide si pas de lien.
export const projects = [
  {
    name: 'Transvirex ERP',
    featured: true,
    label: 'Projet piloté',
    image: '/projects/transvirex.jpg',
    description:
      "Au sein d'un groupe de trois étudiants, j'ai piloté le projet. Nous avons conçu un ERP logistique qui centralise les données d'une entreprise de transport (clients, chauffeurs, véhicules, livraisons, factures) dans un modèle PostgreSQL, et les restitue dans un tableau de bord d'indicateurs pour la direction : taux de réussite des livraisons, chiffre d'affaires, disponibilité des chauffeurs. Mis en production.",
    tags: ['PostgreSQL', 'Prisma', 'Modélisation', 'Dashboard', 'NestJS', 'React'],
    github: '',
    live: 'https://transvirex-front1.onrender.com',
  },
  {
    name: 'Gestionnaire de tâches',
    label: 'Projet personnel',
    description:
      "Projet personnel pour monter en compétences sur Java. J'ai développé une API Spring Boot sécurisée par JWT, avec JPA/Hibernate sur PostgreSQL, et un front Angular.",
    tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    icon: 'tasks',
    github: '',
    live: '',
  },
  {
    name: 'Leyenda : vision et NLP',
    label: 'Projet de groupe',
    icon: 'ml',
    description:
      "En groupe à CESI, nous avons développé des modèles de deep learning et j'ai contribué à chaque étape. Auto-encodeur convolutif pour débruiter et déflouter des images (évalué par MSE, PSNR et SSIM, comparé aux filtres classiques), et pipeline NLP de classification de tweets avec GRU, LSTM bidirectionnel et embeddings GloVe. Analyse des erreurs et notebooks reproductibles.",
    tags: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'NLTK', 'pandas'],
    github: '',
    live: '',
  },
  {
    name: 'Optimisation énergétique',
    image: '/projects/optimisation-energetique.jpg',
    description:
      'En binôme, nous avons développé un algorithme de planification de tâches qui réduit le nombre de serveurs actifs dans un data center, puis analysé les résultats en Python.',
    tags: ['Python', 'NetworkX', 'Pandas'],
    github: '',
    live: '',
  },
  {
    name: 'JerseyStoreFrance',
    image: '/projects/jerseystore.jpg',
    description:
      "J'ai mis sur pied une boutique e-commerce de maillots de football : catalogue, paiement en ligne, référencement et suivi des ventes.",
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'],
    github: '',
    live: 'https://www.jerseystorefrance.com',
  },
  {
    name: 'Plateforme de stages',
    image: '/projects/plateforme-stages.jpg',
    description:
      'En équipe de quatre étudiants, nous avons conçu une application web façon réseau professionnel pour mettre en relation étudiants et entreprises : profils, offres de stage, messagerie.',
    tags: ['PHP', 'Twig', 'MySQL', 'JavaScript'],
    github: '',
    live: '',
  },
  {
    name: 'Station météo connectée',
    image: '/projects/station-meteo.jpg',
    description:
      'En équipe de trois, nous avons conçu une station météo : capteurs sur microcontrôleur, firmware embarqué et interface web de suivi en temps réel.',
    tags: ['Arduino', 'C++', 'IoT'],
    github: '',
    live: '',
  },
];

// Clés publiques EmailJS (prévues pour être visibles côté navigateur)
export const emailjsConfig = {
  serviceId: 'service_546fis9',
  templateId: 'template_7xgx6gu',
  publicKey: '4pnLIpL7mb2J9eGcn',
};
