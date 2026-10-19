// Contenu du portfolio : modifier ici sans toucher aux composants.

export const profile = {
  name: 'Jordan Fogou',
  role: 'Développeur full-stack et data',
  pitch:
    "Étudiant ingénieur en 5e année à CESI Nanterre. Je construis des applications web de bout en bout, de l'API à l'interface, et je les mets en ligne.",
  status: "Je cherche un stage de fin d'études de 6 mois, à partir du 1er février 2027, en développement full-stack ou en data.",
  location: 'Île-de-France',
  email: 'jordanfogou443@gmail.com',
  links: {
    github: 'https://github.com/jordanfogou',
    linkedin: 'https://www.linkedin.com/in/jordan-fogou-6578a4295/',
  },
  cv: '/CV jordan_FOGOU_alternant_DEVFULLSTACK.pdf',
};

export const about = [
  "J'aime les projets où il faut faire tenir ensemble une base de données, une API et une interface utilisable par de vraies personnes. Le dernier en date, Transvirex, est un ERP logistique que j'ai piloté en équipe : authentification, rôles métier, facturation, tableau de bord et suivi en temps réel.",
  "Je travaille surtout avec React, Node.js/NestJS et PostgreSQL, et je m'intéresse de plus en plus à la data : modéliser, analyser et rendre lisibles les données qu'une application produit. Mes stages m'ont aussi fait passer par .NET, l'intégration d'API et le réseau.",
];

export const featuredProject = {
  title: 'Transvirex ERP',
  subtitle: 'Projet d’équipe, que j’ai piloté de bout en bout',
  description:
    "Application de gestion pour une entreprise de transport : clients, chauffeurs, véhicules, livraisons et factures centralisés, avec un tableau de bord pour la direction et un assistant de dispatch.",
  points: [
    'Pilotage du projet : découpage des tâches, coordination de l’équipe, suivi jusqu’à la mise en production',
    'API REST NestJS avec authentification JWT et rôles (direction, dispatch, chauffeur, facturation, admin)',
    'Modèle de données PostgreSQL géré avec Prisma (migrations, seed de démonstration)',
    'Interface React (Vite, Tailwind) : tableaux de bord Recharts, carte Leaflet, notifications Socket.IO',
    'Déploiement : API et front sur Render, base PostgreSQL sur Neon, CI GitHub Actions',
  ],
  stack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Docker'],
  image: '/projects/transvirex-dashboard.png',
  imageAlt: 'Tableau de bord Transvirex : indicateurs de livraisons, graphique des statuts et disponibilité des chauffeurs',
  live: 'https://transvirex-front1.onrender.com',
  note: "Hébergement gratuit : le premier chargement peut prendre jusqu'à une minute.",
};

export const projects = [
  {
    title: 'Gestionnaire de tâches Java / Angular',
    description:
      "Projet personnel pour monter en compétences sur l'écosystème Java : API Spring Boot sécurisée par JWT, JPA/Hibernate sur PostgreSQL, front Angular.",
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    status: 'En cours',
  },
  {
    title: 'JerseyStoreFrance',
    description:
      'Boutique e-commerce de maillots de football : catalogue, paiement en ligne, référencement et suivi des ventes.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'],
    link: 'https://www.jerseystorefrance.com',
  },
  {
    title: 'Plateforme de stages',
    description:
      "Application web façon réseau professionnel, réalisée à quatre, pour mettre en relation étudiants et entreprises : profils, offres, messagerie.",
    stack: ['PHP', 'Twig', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Optimisation énergétique de serveurs',
    description:
      'Algorithme de planification de tâches qui réduit le nombre de serveurs actifs dans un data center.',
    stack: ['Python', 'NetworkX', 'Pandas'],
  },
  {
    title: 'Station météo connectée',
    description:
      'Capteurs sur microcontrôleur, firmware embarqué et interface web de suivi en temps réel.',
    stack: ['Arduino', 'C++', 'IoT'],
  },
  {
    title: 'Audit et sécurisation réseau',
    description:
      'Audit d’une infrastructure sous Kali Linux : scan, analyse de trafic, règles de pare-feu.',
    stack: ['Kali Linux', 'Nmap', 'Wireshark', 'iptables'],
  },
];

export const experiences = [
  {
    company: 'MOOVIT SAS',
    role: 'Stagiaire développeur, automatisation CRM',
    place: 'Marseille',
    period: 'janv. – avr. 2025',
    points: [
      'Intégration d’API entre Zoho CRM et des services externes (REST, webhooks)',
      'Widgets Zoho SalesIQ pour simplifier le parcours des utilisateurs',
      'Scripts de surveillance pour détecter les anomalies des webhooks',
      'Pilotage du projet dans Zoho Projects et Zoho Sprints',
    ],
    stack: ['JavaScript', 'Deluge', 'API REST', 'Webhooks'],
  },
  {
    company: 'OGMENTIS',
    role: 'Stagiaire développeur full-stack',
    place: 'Reims',
    period: 'juil. – sept. 2024',
    points: [
      'Espace administrateur d’une application SaaS en .NET Core et React',
      'Fonctionnalités back-end sécurisées et gestion des utilisateurs',
      'Interface React de visualisation 3D',
    ],
    stack: ['C#', '.NET Core', 'React', 'SQL Server'],
  },
  {
    company: 'ETM Telecom',
    role: 'Stagiaire technicien réseau',
    place: 'Paris',
    period: 'mai – juil. 2023',
    points: [
      'Conception et sécurisation d’infrastructures réseau pour plusieurs clients',
      'Diagnostic avec Wireshark et Cisco Packet Tracer',
      'Gestion des accès via Active Directory',
    ],
    stack: ['Cisco', 'Wireshark', 'Active Directory', 'VLAN'],
  },
  {
    company: 'IZISOLUTIONS',
    role: 'Stagiaire développeur web',
    place: 'Paris',
    period: 'mai – juil. 2022',
    points: [
      'Fonctionnalités PHP pour la gestion de projets, de tâches et de messages',
      'Interfaces responsives avec Bootstrap',
    ],
    stack: ['PHP', 'Twig', 'MySQL', 'Bootstrap'],
  },
];

export const skills = [
  { group: 'Front-end', items: ['React', 'JavaScript', 'TypeScript', 'Angular', 'HTML / CSS', 'Tailwind'] },
  { group: 'Back-end', items: ['Node.js', 'NestJS', 'Java / Spring Boot', 'C# / .NET Core', 'PHP', 'Python'] },
  { group: 'Data', items: ['Python', 'Pandas', 'SQL', 'NetworkX', 'Recharts (visualisation)'] },
  { group: 'Bases de données', items: ['PostgreSQL', 'Prisma', 'SQL Server', 'MySQL', 'MongoDB'] },
  { group: 'Outils et déploiement', items: ['Git', 'Docker', 'GitHub Actions', 'Render', 'Linux'] },
  { group: 'Réseau et sécurité', items: ['Cisco (CCNA 1)', 'Wireshark', 'Nmap', 'Active Directory'] },
];

export const extras = [
  'Mentor bénévole à l’AFEV depuis 2023',
  'Anglais professionnel (B1)',
  'Football en club',
];
