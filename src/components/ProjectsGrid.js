import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Réseau',
    description:
      "Concevoir, optimiser, analyser et sécuriser l’infrastructure réseau de plusieurs entités d’une ville. Mise en œuvre de configurations avancées pour garantir la qualité et la sécurité des communications.",
    technologies: ['Cisco PT', 'Wireshark', 'Active Directory'],
    image: '/network_project.jpg',
    link: '#',
  },
  {
    title: 'Sécurité sous Kali Linux',
    description:
      "Sécurisation et analyse d'infrastructures réseau sous Linux, avec la mise en place de pare-feux, de règles de sécurité avancées et de surveillance en temps réel pour garantir la protection des données.",
    technologies: ['Kali Linux', 'OpenSSL', 'Wireshark', 'iptables', 'Nmap'],
    image: '/security_project.jpg',
    link: '#',
  },
  {
    title: 'Développement Web',
    description:
      "Dans un groupe de 4 étudiants, j'ai participé au développement d'une application web comme Linkedin permettant de mettre en relation des entreprises et des étudiants dans le cadre des recherches de stage.",
    technologies: ['HTML5', 'TWIG', 'PhpStorm', 'Postman', 'PHPmyAdmin', 'JavaScript'],
    image: '/web.jpg',
    link: '#',
  },
  {
    title: 'Optimisation énergétique des data centers',
    description:
      "Développement d'un algorithme de planification des tâches pour minimiser le nombre de serveurs actifs et la consommation d'énergie pour une entreprise.",
    technologies: ['Python', 'NetworkX', 'Algorithmie gloutonne'],
    image: '/energy_optimization_project.jpg',
    link: '#',
  },
  {
    title: 'Projet programmation orienté objet',
    description:
      "Conception d’une application graphique en C++/CLI, création et gestion d’une architecture type Client-serveur, et intégration avec une base de données.",
    technologies: ['C++/CLI', 'Client-serveur', 'Base de données'],
    image: '/cpp_project.jpg',
    link: '#',
  },
  {
    title: 'Projet systèmes embarqués',
    description:
      "Réalisation d'une station météo avec des capteurs. Programmation des microcontrôleurs, rédaction d'un cahier de charge et mise en place d'un environnement de développement.",
    technologies: ['Arduino', 'Microcontrôleurs', 'IDE', 'Capteurs'],
    image: '/embedded_project.jpg',
    link: '#',
  },
  {
    title: 'Site e-commerce avec Shopify',
    description:
      "Création et configuration d'une boutique en ligne sur Shopify pour la vente de maillots de foot via le site JerseyStoreFrance.com. Gestion de l'inventaire, intégration de méthodes de paiement et optimisation de l'expérience utilisateur.",
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML5', 'CSS3', 'Stripe', 'SEO', 'Responsive Design'],
    image: '/ecommerce_project.jpg',
    link: 'https://www.jerseystorefrance.com',
  },
];

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF6'];

const ProjectsGrid = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 text-white z-10">
      <motion.h3
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileHover={{
          scale: 1.05,
          color: '#d946ef',
        }}
      >
        Mes Projets Réalisés
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-black via-purple-800 to-gray-900 p-6 rounded-lg shadow-lg border-2 border-transparent"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: '0px 0px 20px rgba(128, 90, 213, 0.7), 0px 0px 30px rgba(255, 255, 255, 0.5)',
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0px 0px 30px rgba(128, 90, 213, 1), 0px 0px 50px rgba(255, 255, 255, 0.8)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg md:text-2xl font-semibold mb-4 text-center">{project.title}</h4>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded shadow-lg"
                  style={{ color: colors[idx % colors.length] }}
                >
                  #{tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              Voir plus
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
