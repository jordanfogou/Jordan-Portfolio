import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import BackgroundAnimation from './BackgroundAnimation';

const Projects = () => {
  const experienceData = [
    {
      title: 'OGMENTIS - Reims, France',
      descriptionShort: 'Startup de développement de logiciels de réalité augmentée',
      date: 'Juillet 2024 - Septembre 2024 (3 mois)',
      position: 'Stagiaire développeur Full-stack (.NET Core C# & React)',
      logo: '/ogmentis_logo.jpg',
      description: [
        "Au cours de mon stage chez Ogmentis, j'ai contribué au développement d'un espace administrateur SaaS en .NET Core C# et React. J'ai conçu et implémenté des fonctionnalités Back-End sécurisées, et développé une interface utilisateur intuitive.",
        'Concevoir et développer des fonctionnalités Back-End sécurisées en .NET Core C#.',
        "Implémenter des mesures de sécurité pour protéger les données et gérer les autorisations d'accès des utilisateurs.",
        "Créer une interface utilisateur intuitive et moderne en React pour la visualisation 3D des produits.",
      ],
      side: 'right',
    },
    {
      title: 'IZISOLUTIONS',
      descriptionShort: 'Agence Web Full-Stack Spécialisée dans la Transformation Digitale',
      date: 'Mai 2023 - Juillet 2023 (3 mois)',
      position: 'Stagiaire développeur Full-stack',
      logo: '/izisolutionscm_logo.jpg',
      description: [
        "Durant mon stage chez IziSolutions, j'ai eu l'opportunité de participer activement au déploiement de solutions de gestion interne, tout en contribuant à divers aspects du développement front-end et back-end.",
        'Configurer un environnement de développement local avec les outils nécessaires (serveur local, gestionnaire de versions).',
        'Utiliser le framework Bootstrap pour concevoir une interface utilisateur réactive et moderne.',
        'Intégrer Twig comme moteur de templates pour séparer la logique métier de la présentation.',
        'Concevoir des fonctionnalités en PHP pour gérer les projets, les tâches, les utilisateurs et les communications internes.',
      ],
      side: 'left',
    },
    {
      title: "ETS ISBE (Établissement d'ingénierie des services biomédicaux et électronique)",
      date: 'Mai 2022 - Juin 2022 (1 mois)',
      position: 'Stagiaire en informatique et technologie Biomédicale',
      description: [
        "Durant mon stage à ETS ISBE, j'ai participé activement à la maintenance et l'optimisation de dispositifs médicaux et électroniques.",
        'Participation à la maintenance préventive et curative des dispositifs médicaux.',
        'Évaluation et optimisation des dispositifs IoT utilisés dans le domaine médical.',
        "Amélioration de l'ergonomie des interfaces pour les dispositifs médicaux.",
        'Contribution à la gestion des risques électromagnétiques des équipements.',
      ],
      side: 'right',
    },
  ];

  return (
    <section id="projects" className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-8 text-white z-10">
      <BackgroundAnimation />

      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Mes Expériences Professionnelles
      </motion.h3>

      <div className="relative flex flex-col items-center">
        <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-400 z-0"></div>

        <div className="space-y-8 z-10">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-start w-full md:w-3/4 lg:w-2/5 ${
                experience.side === 'left' ? 'md:ml-auto' : 'md:mr-auto'
              } bg-blue-950 p-4 rounded-md shadow-md border border-gray-200`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex flex-col items-start text-left">
                {experience.logo && (
                  <img
                    src={experience.logo}
                    alt={`${experience.title} Logo`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
                  />
                )}
                <h4 className="text-md md:text-xl font-semibold">{experience.title}</h4>
                <p className="text-purple-300 text-sm md:text-base mt-1">{experience.descriptionShort}</p>
                <p className="italic flex items-center mt-2">
                  <FaCalendarAlt className="mr-2 text-purple-400" /> {experience.date}
                </p>
                <p className="font-semibold mt-2 text-sm md:text-base">{experience.position}</p>
                <p className="mt-4 text-xs md:text-lg font-light leading-relaxed">
                  {experience.description[0]}
                </p>
                <ul className="list-disc ml-4 mt-2 text-xs md:text-base">
                  {experience.description.slice(1).map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
