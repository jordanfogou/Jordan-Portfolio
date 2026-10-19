// Contenu du portfolio : modifier ici sans toucher aux composants.

export const profile = {
  name: 'Jordan Fogou',
  role: 'Développeur full-stack et data',
  photo: '/new-profil image.jpg',
  intro:
    "Élève ingénieur en 5e année à CESI Nanterre, je conçois des applications web complètes, de la base de données à l'interface, et j'exploite les données qu'elles produisent pour en tirer des indicateurs utiles. En entreprise, j'ai travaillé sur des intégrations d'API, des flux ETL et une application SaaS.",
  status:
    "Disponible pour un stage de fin d'études de 6 mois à partir du 1er février 2027, en développement full-stack ou en data.",
  location: 'Île-de-France',
  email: 'jordanfogou443@gmail.com',
  links: {
    github: 'https://github.com/jordanfogou',
    linkedin: 'https://www.linkedin.com/in/jordan-fogou-6578a4295/',
  },
  cv: '/CV jordan_FOGOU_alternant_DEVFULLSTACK.pdf',
};

export const navLinks = [
  { id: 'a-propos', title: 'À propos' },
  { id: 'experiences', title: 'Expériences' },
  { id: 'competences', title: 'Compétences' },
  { id: 'projets', title: 'Projets' },
  { id: 'contact', title: 'Contact' },
];

export const about =
  "Je cherche le bon compromis entre développement et data : construire des applications solides, puis donner du sens aux données qu'elles collectent. J'ai piloté en équipe un ERP logistique mis en production, développé des intégrations d'API et des flux ETL en stage, et je continue de monter en compétences sur Java/Spring Boot et l'analyse de données avec Python.";

// icon : clé de l'icône dans src/components/About.js
export const services = [
  { title: 'Développement full-stack', text: 'Applications web complètes avec React, NestJS, Spring Boot ou .NET', icon: 'front' },
  { title: 'API et intégrations', text: 'API REST sécurisées, webhooks, échanges entre logiciels métier', icon: 'back' },
  { title: 'Data', text: 'Flux ETL, modélisation SQL, analyse Python et tableaux de bord', icon: 'data' },
  { title: 'Pilotage de projet', text: 'Coordination d’équipe, priorisation, du besoin à la mise en ligne', icon: 'lead' },
];

export const experiences = [
  {
    company: 'Mixxit (MOOVIT SAS)',
    role: 'Stagiaire développeur en automatisation ETL',
    place: 'Marseille, hybride',
    period: 'janv. 2025 – mai 2025',
    logo: '/mixxit.jpg',
    summary:
      "Mixxit édite des solutions de téléphonie unifiée et de communication professionnelle. J'ai travaillé sur l'automatisation de l'acquisition, du traitement et de l'exploitation des données commerciales.",
    points: [
      'J’ai mis sur pied un pipeline automatisé de gestion et de valorisation des données CRM, qui relie plusieurs outils et automatise les échanges entre eux',
      'J’ai développé des fonctions personnalisées en Deluge, configuré des webhooks et intégré des API REST externes',
      'J’ai orchestré les workflows dans la suite Zoho (CRM, Flow, Sheet, DataPrep, Analytics)',
      'Résultat : moins de tâches manuelles, un CRM plus fiable et des données exploitables pour la prospection, le suivi commercial et le reporting',
    ],
    stack: ['Deluge', 'Zoho CRM', 'Zoho Flow', 'Zoho DataPrep', 'Zoho Analytics', 'API REST', 'Webhooks'],
  },
  {
    company: 'OGMENTIS',
    role: 'Stagiaire développeur full-stack (.NET Core et React)',
    place: 'Reims',
    period: 'juil. 2024 – sept. 2024',
    logo: '/ogmentis_logo.jpg',
    points: [
      'J’ai développé l’espace administrateur d’une application SaaS en .NET Core (C#) et React',
      'J’ai conçu et implémenté des fonctionnalités back-end sécurisées',
      'J’ai réalisé une interface utilisateur claire et intuitive en React',
    ],
    stack: ['C#', '.NET Core', 'React', 'SQL Server'],
  },
  {
    company: 'ETM Telecom',
    role: 'Stagiaire technicien réseau',
    place: 'Paris',
    period: 'mai 2023 – juil. 2023',
    logo: '/etmtelecom_logo.jpeg',
    points: [
      'J’ai participé à la conception et à la sécurisation d’infrastructures réseau pour plusieurs clients',
      'J’ai diagnostiqué et surveillé les réseaux avec Wireshark et Cisco Packet Tracer',
      'J’ai administré les accès et les droits via Active Directory',
    ],
    stack: ['Cisco', 'Wireshark', 'Active Directory', 'VLAN'],
  },
  {
    company: 'IziSolutions',
    role: 'Stagiaire informaticien support',
    place: 'Yaoundé, Cameroun',
    period: 'mai 2023 – juil. 2023',
    logo: '/izisolutionscm_logo.jpg',
    points: [
      'J’ai participé au déploiement d’une plateforme interne de communication, de gestion et de suivi des tâches',
      'J’ai conçu les maquettes des interfaces sur Figma, puis développé le front-end (HTML, CSS, JavaScript, jQuery, Bootstrap)',
      'J’ai développé la partie back-end en PHP Laravel pour la gestion des données',
      'J’ai formé les utilisateurs et assuré le support technique',
    ],
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap', 'Figma'],
  },
];

// Compétences regroupées par catégorie. icon : clé dans src/components/Tech.js
export const skillGroups = [
  {
    title: 'Front-end',
    icon: 'front',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Angular', icon: 'SiAngular' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    title: 'Back-end',
    icon: 'back',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'Java', icon: 'SiOpenjdk' },
      { name: 'Spring Boot', icon: 'SiSpringboot' },
      { name: '.NET / C#', icon: 'SiDotnet' },
      { name: 'PHP', icon: 'SiPhp' },
    ],
  },
  {
    title: 'Data',
    icon: 'data',
    skills: [
      { name: 'Python', icon: 'SiPython' },
      { name: 'Pandas', icon: 'SiPandas' },
      { name: 'SQL', icon: 'SiPostgresql' },
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
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
      { name: 'Render', icon: 'SiRender' },
      { name: 'Linux', icon: 'SiLinux' },
    ],
  },
  {
    title: 'Réseau et sécurité',
    icon: 'network',
    skills: [
      { name: 'Cisco (CCNA 1)', icon: 'SiCisco' },
      { name: 'Wireshark', icon: 'SiWireshark' },
      { name: 'Kali Linux', icon: 'SiKalilinux' },
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
      "Au sein d'un groupe d'étudiants, j'ai piloté le projet. Nous avons conçu un ERP logistique pour une entreprise de transport : clients, chauffeurs, véhicules, livraisons et factures centralisés, rôles métier, tableau de bord pour la direction et suivi en temps réel, jusqu'à la mise en production.",
    tags: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.IO'],
    github: '',
    live: 'https://transvirex-front1.onrender.com',
  },
  {
    name: 'Gestionnaire de tâches',
    label: 'En cours',
    description:
      "Projet personnel pour monter en compétences sur Java. J'ai développé une API Spring Boot sécurisée par JWT, avec JPA/Hibernate sur PostgreSQL, et un front Angular.",
    tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    icon: 'tasks',
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
    name: 'Optimisation énergétique',
    image: '/projects/optimisation-energetique.jpg',
    description:
      'En binôme, nous avons développé un algorithme de planification de tâches qui réduit le nombre de serveurs actifs dans un data center, avec analyse des résultats en Python.',
    tags: ['Python', 'NetworkX', 'Pandas'],
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
  {
    name: 'Audit et sécurisation réseau',
    image: '/projects/audit-reseau.jpg',
    description:
      "J'ai audité une infrastructure sous Kali Linux : scan des ports, analyse du trafic et mise en place de règles de pare-feu.",
    tags: ['Kali Linux', 'Nmap', 'Wireshark', 'iptables'],
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
