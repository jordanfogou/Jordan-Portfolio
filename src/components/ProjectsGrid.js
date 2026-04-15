import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const projectsData = [
  {
    id: 8,
    title: 'Gestionnaire de Tâches — Java/Angular',
    description: "Application full-stack de gestion de tâches avec un backend Spring Boot (Java) et un frontend Angular. CRUD complet, authentification JWT et base PostgreSQL.",
    fullDescription: "Projet personnel développé pour monter en compétences sur l'écosystème Java/Angular. Backend RESTful avec Spring Boot, Spring Security (JWT), et JPA/Hibernate connecté à PostgreSQL. Frontend Angular avec composants réactifs, routing, services HTTP et formulaires réactifs. Déploiement Docker avec docker-compose pour l'ensemble de la stack.",
    technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT'],
    imageUrl: '/java_angular_project.jpg',
    fallbackImage: '☕',
    link: '#',
    category: 'Web',
    duration: '2 mois',
    team: 'Solo',
    status: 'En cours'
  },
  {
    id: 1,
    title: 'Développement Web',
    description: "Application web type LinkedIn développée en équipe de 4 étudiants pour mettre en relation entreprises et étudiants dans leurs recherches de stage.",
    fullDescription: "Projet collaboratif de développement d'une plateforme de mise en relation professionnelle. Implémentation d'un système d'authentification, de profils utilisateurs, de messagerie interne et de gestion des offres de stage.",
    technologies: ['HTML5', 'TWIG', 'PhpStorm', 'Postman', 'PHPmyAdmin', 'JavaScript'],
    imageUrl: '/web.jpg',
    fallbackImage: '🌐',
    link: '#',
    category: 'Web',
    duration: '4 mois',
    team: '4 développeurs',
    status: 'Terminé'
  },
  {
    id: 2,
    title: 'Sécurité sous Kali Linux',
    description: "Sécurisation et analyse d'infrastructures réseau sous Linux avec pare-feux, règles de sécurité avancées et surveillance temps réel.",
    fullDescription: "Projet de cybersécurité impliquant l'audit et la sécurisation complète d'une infrastructure réseau. Configuration de firewalls avancés, détection d'intrusions et analyse de vulnérabilités.",
    technologies: ['Kali Linux', 'OpenSSL', 'Wireshark', 'iptables', 'Nmap'],
    imageUrl: '/security_project.jpg',
    fallbackImage: '🔒',
    link: '#',
    category: 'Sécurité',
    duration: '3 mois',
    team: 'Solo',
    status: 'Terminé'
  },
  {
    id: 3,
    title: 'Projet POO C++',
    description: "Application graphique en C++/CLI avec architecture Client-serveur et intégration base de données.",
    fullDescription: "Développement d'une application desktop robuste utilisant les principes de la programmation orientée objet. Implémentation d'une architecture client-serveur sécurisée.",
    technologies: ['C++/CLI', 'Client-serveur', 'Base de données', 'Visual Studio'],
    imageUrl: '/cpp_project.jpg',
    fallbackImage: '⚙️',
    link: '#',
    category: 'Desktop',
    duration: '2 mois',
    team: 'Solo',
    status: 'Terminé'
  },
  {
    id: 4,
    title: 'Réseau & Systèmes',
    description: "Conception, optimisation et sécurisation d'infrastructures réseau multi-entités avec configurations avancées.",
    fullDescription: "Projet d'envergure impliquant la conception complète de l'infrastructure réseau d'une ville fictive. Analyse des besoins, dimensionnement et sécurisation.",
    technologies: ['Cisco PT', 'Wireshark', 'Active Directory', 'VLAN', 'VPN'],
    imageUrl: '/network_project.jpg',
    fallbackImage: '🌐',
    link: '#',
    category: 'Réseau',
    duration: '5 mois',
    team: '3 techniciens',
    status: 'Terminé'
  },
  {
    id: 5,
    title: 'Optimisation Énergétique',
    description: "Algorithme de planification des tâches pour minimiser le nombre de serveurs actifs et optimiser la consommation énergétique.",
    fullDescription: "Développement d'un système intelligent d'optimisation énergétique pour data centers. Implémentation d'algorithmes gloutons et de techniques d'apprentissage.",
    technologies: ['Python', 'NetworkX', 'Algorithmie gloutonne', 'Machine Learning', 'Pandas'],
    imageUrl: '/energy_optimization_project.jpg',
    fallbackImage: '⚡',
    link: '#',
    category: 'IA',
    duration: '3 mois',
    team: '2 développeurs',
    status: 'Terminé'
  },
  {
    id: 6,
    title: 'Systèmes Embarqués',
    description: "Station météo intelligente avec capteurs IoT, programmation microcontrôleurs et interface de monitoring temps réel.",
    fullDescription: "Conception et réalisation d'une station météorologique connectée intégrant multiple capteurs. Développement du firmware embarqué et interface web.",
    technologies: ['Arduino', 'Microcontrôleurs', 'IDE', 'Capteurs IoT', 'C++', 'WiFi'],
    imageUrl: '/embedded_project.jpg',
    fallbackImage: '🔧',
    link: '#',
    category: 'IoT',
    duration: '4 mois',
    team: '3 ingénieurs',
    status: 'Terminé'
  },
  {
    id: 7,
    title: 'E-commerce Shopify',
    description: "Boutique en ligne complète JerseyStoreFrance.com avec gestion inventaire, paiements sécurisés et optimisation UX.",
    fullDescription: "Création et déploiement d'une boutique e-commerce professionnelle spécialisée dans la vente de maillots de football. Intégration de solutions de paiement multiples.",
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML5', 'CSS3', 'Stripe', 'SEO', 'Analytics'],
    imageUrl: '/ecommerce_project.jpg',
    fallbackImage: '🛒',
    link: 'https://www.jerseystorefrance.com',
    category: 'E-commerce',
    duration: '2 mois',
    team: 'Solo',
    status: 'En ligne'
  }
];

const categories = ['Tous', 'Web', 'Sécurité', 'Desktop', 'Réseau', 'IA', 'IoT', 'E-commerce'];

const techColors = {
  'HTML5': '#e34f26',
  'CSS3': '#1572b6',
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'React': '#61dafb',
  'Angular': '#dd0031',
  'Node.js': '#68a063',
  'Python': '#3776ab',
  'C++': '#00599c',
  'Java': '#ed8b00',
  'Spring Boot': '#6db33f',
  'PostgreSQL': '#4169e1',
  'Docker': '#2496ed',
  'Kali Linux': '#557c94',
  'Arduino': '#00979d',
  'JWT': '#000000'
};

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'Tous' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const ProjectImage = ({ project, className }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div className={`relative overflow-hidden ${className}`}>
        {!imageError && !imageLoaded && (
          <div className="loading-dev w-full h-full" />
        )}
        
        {!imageError && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        
        {imageError && (
          <div 
            className="w-full h-full flex items-center justify-center text-5xl"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            {project.fallbackImage}
          </div>
        )}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 }
    }
  };

  return (
    <section className="section-unified">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="title-dev title-gradient text-dev-xl mb-3">
            Mes Projets
          </h3>
          <p className="text-dev-md max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Réalisations techniques à travers différents domaines
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'tech-badge'
                  : ''
              }`}
              style={selectedCategory !== category ? {
                border: '1px solid var(--border-secondary)',
                color: 'var(--text-muted)',
                background: 'transparent'
              } : {}}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <motion.div
          className="grid-dev"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card-dev group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative mb-5 rounded-lg overflow-hidden">
                  <ProjectImage project={project} className="w-full h-44" />
                  
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        background: 'rgba(11, 13, 23, 0.85)', 
                        color: 'var(--accent-primary)',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {project.category}
                    </span>
                    <span 
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === 'En ligne' 
                          ? 'bg-green-500/20 text-green-400' 
                          : project.status === 'En cours'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-3">
                  <h4 className="text-dev-md font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h4>

                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={11} />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers size={11} />
                      {project.team}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-badge text-xs"
                        style={{
                          color: techColors[tech] || 'var(--accent-primary)',
                          borderColor: `${techColors[tech] || 'var(--accent-primary)'}40`,
                          background: `${techColors[tech] || 'var(--accent-primary)'}10`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge text-xs">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className="flex-1 btn-dev text-xs py-2"
                    >
                      Détails
                    </button>
                    
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border rounded-lg transition-colors flex items-center justify-center"
                        style={{ borderColor: 'var(--border-secondary)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={12} style={{ color: 'var(--accent-primary)' }} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="card-dev max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-dev-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span className="tech-badge text-xs">{selectedProject.category}</span>
                      <span>⏱️ {selectedProject.duration}</span>
                      <span>👥 {selectedProject.team}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg transition-colors text-lg"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ✕
                  </button>
                </div>

                <ProjectImage project={selectedProject} className="w-full h-56 rounded-xl mb-5" />

                <div className="mb-5">
                  <h4 className="text-base font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>
                    Description
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-base font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>
                    Stack technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-badge"
                        style={{
                          color: techColors[tech] || 'var(--accent-primary)',
                          borderColor: `${techColors[tech] || 'var(--accent-primary)'}40`,
                          background: `${techColors[tech] || 'var(--accent-primary)'}10`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link !== '#' && (
                  <div className="flex justify-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dev text-sm"
                    >
                      <FaExternalLinkAlt className="mr-2" size={12} />
                      Voir le projet
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGrid;