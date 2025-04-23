import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: 'spring', stiffness: 60 }
  }),
  hover: { scale: 1.02, transition: { duration: 0.3 } }
};

const lineVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const dividerVariants: Variants = {
  hidden: { width: 0 },
  visible: { width: '100%', transition: { duration: 0.8, ease: 'easeInOut' } }
};

const Projects = () => {
  const experienceData = [
    {
      title: 'Mixxit - Marseille, France',
      date: 'Janvier 2025 - Avril 2025 (4 mois)',
      position: 'Stagiaire Développeur en Automatisation ETL',
      logo: '/mixxit.jpg',
      description: [
        "Gestion de projet technique : J’ai piloté l’intégralité du projet (de la conception à la mise en production) via Zoho Project et Zoho Sprint, démontrant mes compétences en coordination et en gestion des priorités. J’ai également rédigé la documentation technique (API, workflows, guides Deluge) pour assurer la maintenabilité et l’évolutivité de la solution.",
        "Développement front-end et optimisation UX : J’ai implémenté et personnalisé des widgets (Zoho SalesIQ) pour fluidifier l’expérience utilisateur et adapté les templates/formulaires afin de maximiser la collecte d’informations et la conversion.",
        "Conception et intégration d’API : J’ai déployé et implémenté une architecture d’échanges entre Zoho CRM et divers services (API REST, webhooks) en m’appuyant sur des fonctions personnalisées et du code Deluge pour automatiser la création/mise à jour et l’enrichissement en temps réel des leads.",
        "Configuration de serveurs et déclenchement de webhooks : J’ai configuré des serveurs dédiés pour lancer et superviser automatiquement des workflows (intégration, synchronisation), tout en développant des scripts de surveillance (monitoring, logs, alertes) pour détecter et prévenir rapidement les anomalies."
      ],
      side: 'left'
    },
    {
      title: 'OGMENTIS - Reims, France',
      date: 'Juillet 2024 - Septembre 2024 (3 mois)',
      position: 'Stagiaire Développeur Full-stack (.NET Core C# & React)',
      logo: '/ogmentis_logo.jpg',
      description: [
        "Au cours de mon stage chez Ogmentis, j'ai contribué au développement d'un espace administrateur SaaS en .NET Core C# et React. J'ai conçu et implémenté des fonctionnalités Back-End sécurisées, et développé une interface utilisateur intuitive.",
        "Concevoir et développer des fonctionnalités Back-End sécurisées en .NET Core C#.",
        "Implémenter des mesures de sécurité pour protéger les données et gérer les autorisations d'accès des utilisateurs.",
        "Créer une interface utilisateur intuitive et moderne en React pour la visualisation 3D des produits."
      ],
      side: 'right'
    },
    {
      title: 'ETM Telecom - Paris, Île-de-France',
      date: 'Mai 2023 - Juillet 2023 (3 mois)',
      position: 'Stagiaire Technicien Réseau',
      logo: '/etmtelecom_logo.jpeg',
      description: [
        "Durant mon stage chez ETM Telecom, j'ai contribué activement à la conception, l'optimisation et la sécurisation d'infrastructures réseau pour des entités variées.",
        "Analyse des besoins en réseau et mise en œuvre de configurations avancées pour garantir la qualité et la sécurité des communications.",
        "Utilisation d'outils de diagnostic comme Cisco Packet Tracer et Wireshark pour surveiller et analyser les performances réseau.",
        "Gestion des accès et sécurité des données via Active Directory.",
        "Optimisation des systèmes pour assurer une communication fluide et sécurisée entre les départements."
      ],
      side: 'right'
    },
    {
      title: 'IZISOLUTIONS - Paris, France',
      date: 'Mai 2022 - Juillet 2022 (2 mois)',
      position: 'Stagiaire Développeur Full-stack',
      logo: '/izisolutionscm_logo.jpg',
      description: [
        "Durant mon stage chez IziSolutions, j'ai eu l'opportunité de participer activement au déploiement de solutions de gestion interne, tout en contribuant à divers aspects du développement front-end et back-end.",
        "Configurer un environnement de développement local avec les outils nécessaires (serveur local, gestionnaire de versions).",
        "Utiliser le framework Bootstrap pour concevoir une interface utilisateur réactive et moderne.",
        "Intégrer Twig comme moteur de templates pour séparer la logique métier de la présentation.",
        "Concevoir des fonctionnalités en PHP pour gérer les projets, les tâches, les utilisateurs et les communications internes."
      ],
      side: 'right'
    }
  ];

  return (
    <section
      id="projects"
      className="relative px-6 py-16 bg-gradient-to-br from-indigo-900 to-purple-800 text-white overflow-hidden"
    >
      {/* Fond animé uniforme */}
      <BackgroundAnimation />

      <motion.h3
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes Expériences Professionnelles
      </motion.h3>

      <div className="flex flex-col space-y-12 w-full md:w-3/4 lg:w-2/3 mx-auto">
        {experienceData.map((exp, idx) => {
          return (
            <React.Fragment key={idx}>
              <motion.div
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-blue-950 p-8 rounded-3xl shadow-sm border border-gray-600 text-white transition-all duration-300"
              >
                <motion.img
                  src={exp.logo}
                  alt={`${exp.title} logo`}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 p-2 shadow-2xl float-left mr-6"
                  variants={lineVariants}
                />

                <div className="overflow-hidden">
                  <motion.h4 className="text-2xl font-bold mb-2" variants={lineVariants}>
                    {exp.title}
                  </motion.h4>
                  <motion.div className="flex items-center text-blue-300 mb-4" variants={lineVariants}>
                    <FaCalendarAlt className="mr-2 text-blue-400" /> {exp.date}
                  </motion.div>
                  <motion.p
                    className="text-lg font-medium mb-6"
                    variants={lineVariants}
                  >
                    {exp.position}
                  </motion.p>

                  <motion.ul className="list-none text-gray-200 leading-relaxed space-y-2" variants={lineVariants}>
                    {exp.description.map((task, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1 text-blue-400 text-lg">&#8226;</span>
                        <span className="flex-1">{task}</span>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>

              {idx < experienceData.length - 1 && (
                <motion.div
                  className="flex items-center justify-center my-4 overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  variants={dividerVariants}
                >
                  <div className="w-full h-0.5 bg-blue-500" />
                  <motion.div
                    className="w-4 h-4 bg-blue-400 rounded-full mx-4"
                    initial={{ x: 0 }}
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ loop: Infinity, ease: 'linear', duration: 2 }}
                  />
                  <div className="w-full h-0.5 bg-blue-500" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
