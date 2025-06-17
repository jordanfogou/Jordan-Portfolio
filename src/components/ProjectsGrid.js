import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Développement Web',
    description: "Application web type LinkedIn développée en équipe de 4 étudiants pour mettre en relation entreprises et étudiants dans leurs recherches de stage.",
    fullDescription: "Projet collaboratif de développement d'une plateforme de mise en relation professionnelle. Implementation d'un système d'authentification, de profils utilisateurs, de messagerie interne et de gestion des offres de stage.",
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
    description: "Sécurisation et analyse d'infrastructures réseau sous Linux avec mise en place de pare-feux, règles de sécurité avancées et surveillance temps réel.",
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
    description: "Conception d'une application graphique en C++/CLI avec architecture Client-serveur et intégration base de données.",
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
  'React': '#61dafb',
  'Node.js': '#68a063',
  'Python': '#3776ab',
  'C++': '#00599c',
  'Kali Linux': '#557c94',
  'Docker': '#2496ed',
  'Arduino': '#00979d'
};

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'Tous' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  // Composant d'image avec fallback
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
            className="w-full h-full flex items-center justify-center text-6xl"
            style={{ background: 'var(--bg-card)' }}
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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="section-unified">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête professionnel */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="title-dev text-dev-xl mb-4">
            Mes Projets Réalisés
          </h3>
          <p className="text-dev-md max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Découvrez mes réalisations techniques et créatives à travers différents domaines
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-dev-sm font-mono transition-all duration-300 ${
                selectedCategory === category
                  ? 'tech-badge'
                  : 'border border-secondary'
              }`}
              style={selectedCategory !== category ? {
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-muted)',
                background: 'transparent'
              } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <motion.div
          className="grid-dev"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card-dev group cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image du projet */}
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <ProjectImage 
                    project={project}
                    className="w-full h-48"
                  />
                  
                  {/* Overlay avec badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span 
                      className="px-2 py-1 rounded text-dev-xs font-mono"
                      style={{ 
                        background: 'var(--bg-primary)', 
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--border-primary)'
                      }}
                    >
                      {project.category}
                    </span>
                    <span 
                      className={`px-2 py-1 rounded text-dev-xs font-mono ${
                        project.status === 'En ligne' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="title-dev text-dev-lg group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h4>
                    <FaCode className="text-accent-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-dev-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Métadonnées */}
                  <div className="flex items-center justify-between text-dev-xs" style={{ color: 'var(--text-muted)' }}>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {project.duration}
                      </span>
                      <span className="flex items-center">
                        <FaUsers className="mr-1" />
                        {project.team}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-badge text-dev-xs"
                        style={{
                          color: techColors[tech] || 'var(--accent-primary)',
                          borderColor: techColors[tech] || 'var(--accent-primary)',
                          background: `${techColors[tech] || 'var(--accent-primary)'}15`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge text-dev-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 btn-dev text-dev-xs"
                    >
                      Voir les détails
                    </button>
                    
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                        style={{ borderColor: 'var(--border-primary)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} style={{ color: 'var(--accent-primary)' }} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de détails */}
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
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* En-tête modal */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="title-dev text-dev-lg mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4 text-dev-sm" style={{ color: 'var(--text-muted)' }}>
                      <span className="tech-badge">
                        {selectedProject.category}
                      </span>
                      <span>⏱️ {selectedProject.duration}</span>
                      <span>👥 {selectedProject.team}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-secondary/20 rounded-lg transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ✕
                  </button>
                </div>

                {/* Image */}
                <ProjectImage
                  project={selectedProject}
                  className="w-full h-64 rounded-xl mb-6"
                />

                {/* Description complète */}
                <div className="mb-6">
                  <h4 className="text-dev-md mb-3 font-semibold" style={{ color: 'var(--accent-primary)' }}>
                    Description détaillée
                  </h4>
                  <p className="text-dev-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies complètes */}
                <div className="mb-6">
                  <h4 className="text-dev-md mb-3 font-semibold" style={{ color: 'var(--accent-primary)' }}>
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-badge"
                        style={{
                          color: techColors[tech] || 'var(--accent-primary)',
                          borderColor: techColors[tech] || 'var(--accent-primary)',
                          background: `${techColors[tech] || 'var(--accent-primary)'}15`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                {selectedProject.link !== '#' && (
                  <div className="flex justify-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-dev text-dev-sm"
                    >
                      <FaExternalLinkAlt className="inline mr-2" />
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