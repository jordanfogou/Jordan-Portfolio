// Contenu du portfolio : modifier ici sans toucher aux composants.

export const profile = {
  name: 'Jordan Fogou',
  role: 'Développeur full-stack et data',
  photo: '/new-profil image.jpg',
  intro:
    "Étudiant ingénieur en 5e année à CESI Nanterre, je construis des applications web de bout en bout, de l'API à l'interface, et je les mets en ligne.",
  status:
    "Je cherche un stage de fin d'études de 6 mois, à partir du 1er février 2027, en développement full-stack ou en data.",
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
  "J'aime les projets où il faut faire tenir ensemble une base de données, une API et une interface utilisable par de vraies personnes. Je travaille surtout avec React, Node.js/NestJS et PostgreSQL, et je m'intéresse de plus en plus à la data : modéliser, analyser et rendre lisibles les données qu'une application produit. Mes stages m'ont aussi fait passer par .NET, l'intégration d'API et le réseau.";

// icon : clé de l'icône dans src/components/About.js
export const services = [
  { title: 'Interfaces web', text: 'React, Angular, interfaces claires et responsives', icon: 'front' },
  { title: 'API et back-end', text: 'NestJS, Spring Boot, .NET, authentification et rôles', icon: 'back' },
  { title: 'Data', text: 'Modélisation SQL, analyse Python, tableaux de bord', icon: 'data' },
  { title: 'Pilotage de projet', text: 'Coordination d’équipe, du besoin à la mise en ligne', icon: 'lead' },
];

export const experiences = [
  {
    company: 'MOOVIT SAS',
    role: 'Stagiaire développeur, automatisation CRM',
    place: 'Marseille',
    period: 'janv. 2025 – avr. 2025',
    logo: '/mixxit.jpg',
    points: [
      'Intégration d’API entre Zoho CRM et des services externes (REST, webhooks)',
      'Widgets Zoho SalesIQ pour simplifier le parcours des utilisateurs',
      'Scripts de surveillance pour détecter les anomalies des webhooks',
      'Pilotage du projet dans Zoho Projects et Zoho Sprints',
    ],
  },
  {
    company: 'OGMENTIS',
    role: 'Stagiaire développeur full-stack',
    place: 'Reims',
    period: 'juil. 2024 – sept. 2024',
    logo: '/ogmentis_logo.jpg',
    points: [
      'Espace administrateur d’une application SaaS en .NET Core et React',
      'Fonctionnalités back-end sécurisées et gestion des utilisateurs',
      'Interface React de visualisation 3D',
    ],
  },
  {
    company: 'ETM Telecom',
    role: 'Stagiaire technicien réseau',
    place: 'Paris',
    period: 'mai 2023 – juil. 2023',
    logo: '/etmtelecom_logo.jpeg',
    points: [
      'Conception et sécurisation d’infrastructures réseau pour plusieurs clients',
      'Diagnostic avec Wireshark et Cisco Packet Tracer',
      'Gestion des accès via Active Directory',
    ],
  },
  {
    company: 'IZISOLUTIONS',
    role: 'Stagiaire développeur web',
    place: 'Paris',
    period: 'mai 2022 – juil. 2022',
    logo: '/izisolutionscm_logo.jpg',
    points: [
      'Fonctionnalités PHP pour la gestion de projets, de tâches et de messages',
      'Interfaces responsives avec Bootstrap',
    ],
  },
];

// icon : nom d'une icône Simple Icons (react-icons/si)
export const technologies = [
  { name: 'React', icon: 'SiReact' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Angular', icon: 'SiAngular' },
  { name: 'Tailwind', icon: 'SiTailwindcss' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'NestJS', icon: 'SiNestjs' },
  { name: 'Spring Boot', icon: 'SiSpringboot' },
  { name: 'Java', icon: 'SiOpenjdk' },
  { name: '.NET', icon: 'SiDotnet' },
  { name: 'PHP', icon: 'SiPhp' },
  { name: 'Python', icon: 'SiPython' },
  { name: 'Pandas', icon: 'SiPandas' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'Prisma', icon: 'SiPrisma' },
  { name: 'MySQL', icon: 'SiMysql' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'GitHub Actions', icon: 'SiGithubactions' },
  { name: 'Linux', icon: 'SiLinux' },
  { name: 'Cisco', icon: 'SiCisco' },
];

// featured : projet mis en avant (carte plus large, placée en premier)
export const projects = [
  {
    name: 'Transvirex ERP',
    featured: true,
    label: 'Projet d’équipe, que j’ai piloté',
    description:
      "ERP logistique pour une entreprise de transport : clients, chauffeurs, véhicules, livraisons et factures centralisés, avec un tableau de bord pour la direction. J'ai coordonné l'équipe, du découpage des tâches jusqu'à la mise en production.",
    tags: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Render'],
    live: 'https://transvirex-front1.onrender.com',
    note: "Hébergement gratuit : le premier chargement peut prendre jusqu'à une minute.",
  },
  {
    name: 'Gestionnaire de tâches',
    label: 'En cours',
    description:
      'Projet personnel pour monter en compétences sur Java : API Spring Boot sécurisée par JWT, JPA/Hibernate sur PostgreSQL, front Angular.',
    tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'JerseyStoreFrance',
    description:
      'Boutique e-commerce de maillots de football : catalogue, paiement en ligne, référencement et suivi des ventes.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'],
    live: 'https://www.jerseystorefrance.com',
  },
  {
    name: 'Plateforme de stages',
    description:
      'Application web façon réseau professionnel, réalisée à quatre, pour mettre en relation étudiants et entreprises : profils, offres, messagerie.',
    tags: ['PHP', 'Twig', 'MySQL', 'JavaScript'],
  },
  {
    name: 'Optimisation énergétique',
    description:
      'Algorithme de planification de tâches qui réduit le nombre de serveurs actifs dans un data center.',
    tags: ['Python', 'NetworkX', 'Pandas'],
  },
  {
    name: 'Station météo connectée',
    description: 'Capteurs sur microcontrôleur, firmware embarqué et interface web de suivi en temps réel.',
    tags: ['Arduino', 'C++', 'IoT'],
  },
  {
    name: 'Audit réseau',
    description: 'Audit d’une infrastructure sous Kali Linux : scan, analyse de trafic, règles de pare-feu.',
    tags: ['Kali Linux', 'Nmap', 'Wireshark', 'iptables'],
  },
];

// Clés publiques EmailJS (prévues pour être visibles côté navigateur)
export const emailjsConfig = {
  serviceId: 'service_546fis9',
  templateId: 'template_7xgx6gu',
  publicKey: '4pnLIpL7mb2J9eGcn',
};
