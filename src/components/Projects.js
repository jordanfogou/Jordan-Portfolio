import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Projects = () => {
  const experienceData = [
    {
      title: 'MOOVIT SAS',
      location: 'Marseille, France',
      date: 'Janvier 2025 - Avril 2025 (4 mois)',
      position: 'Stagiaire Développeur en Automatisation ETL',
      logo: '/mixxit.jpg',
      fallbackLogo: '🏢',
      missionOverview: 'Développement d\'une solution d\'automatisation CRM intégrée',
      description: [
        "Développement front-end et optimisation UX : Implémentation de widgets Zoho SalesIQ pour fluidifier l'expérience utilisateur.",
        "Conception et intégration d'API : Architecture d'échanges entre Zoho CRM et services externes (API REST, webhooks).",
        "Gestion de projet technique : Pilotage intégral du projet via Zoho Project et Zoho Sprint, coordination et gestion des priorités.",
        "Configuration serveurs et webhooks : Scripts de surveillance pour détecter et prévenir les anomalies."
      ],
      technologies: ['Zoho', 'API REST', 'Webhooks', 'JavaScript', 'Deluge']
    },
    {
      title: 'OGMENTIS',
      location: 'Reims, France',
      date: 'Juillet 2024 - Septembre 2024 (3 mois)',
      position: 'Stagiaire Développeur Full-stack (.NET Core C# & React)',
      logo: '/ogmentis_logo.jpg',
      fallbackLogo: '💻',
      missionOverview: 'Développement d\'un espace administrateur SaaS sécurisé avec gestion utilisateurs optimisée',
      description: [
        "Développement d'un espace administrateur SaaS en .NET Core C# et React.",
        "Conception et implémentation de fonctionnalités Back-End sécurisées.",
        "Implémentation de mesures de sécurité pour protéger les données utilisateurs.",
        "Création d'interface utilisateur intuitive en React pour visualisation 3D."
      ],
      technologies: ['.NET Core', 'C#', 'React', 'SQL Server', 'Security']
    },
    {
      title: 'ETM Telecom',
      location: 'Paris, Île-de-France',
      date: 'Mai 2023 - Juillet 2023 (3 mois)',
      position: 'Stagiaire Technicien Réseau',
      logo: '/etmtelecom_logo.jpeg',
      fallbackLogo: '🌐',
      missionOverview: 'Conception, optimisation et sécurisation d\'infrastructures réseau multi-entités',
      description: [
        "Conception, optimisation et sécurisation d'infrastructures réseau pour entités variées.",
        "Analyse des besoins et configurations avancées pour communications sécurisées.",
        "Utilisation d'outils diagnostic (Cisco Packet Tracer, Wireshark) pour surveillance réseau.",
        "Gestion des accès et sécurité via Active Directory."
      ],
      technologies: ['Cisco', 'Wireshark', 'Active Directory', 'Network Security', 'VLAN']
    },
    {
      title: 'IZISOLUTIONS',
      location: 'Paris, France',
      date: 'Mai 2022 - Juillet 2022 (2 mois)',
      position: 'Stagiaire Développeur Full-stack',
      logo: '/izisolutionscm_logo.jpg',
      fallbackLogo: '⚡',
      missionOverview: 'Développement d\'une plateforme de gestion de projets centralisée avec suivi des tâches et communication collaborative',
      description: [
        "Participation au déploiement de solutions de gestion interne.",
        "Configuration d'environnement de développement local avec outils nécessaires.",
        "Utilisation de Bootstrap pour interface utilisateur réactive et moderne.",
        "Conception de fonctionnalités PHP pour gestion projets, tâches et communications."
      ],
      technologies: ['PHP', 'Bootstrap', 'Twig', 'MySQL', 'Git']
    }
  ];

  // Composant d'image avec fallback
  const CompanyLogo = ({ experience }) => {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative">
        {!imageError && !imageLoaded && (
          <div className="loading-dev w-full h-full rounded-full" />
        )}
        
        {!imageError && (
          <img
            src={experience.logo}
            alt={`${experience.title} logo`}
            className={`w-full h-full rounded-full object-cover border-2 transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ borderColor: 'var(--accent-primary)' }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        
        {imageError && (
          <div 
            className="w-full h-full rounded-full flex items-center justify-center text-2xl border-2"
            style={{ 
              background: 'var(--bg-card)', 
              borderColor: 'var(--accent-primary)' 
            }}
          >
            {experience.fallbackLogo}
          </div>
        )}
      </div>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2, 
        type: 'spring', 
        stiffness: 100,
        damping: 15
      }
    })
  };

  return (
    <section className="section-unified">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête professionnel */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="title-dev text-dev-xl mb-4">
            Mes Expériences Professionnelles
          </h3>
          <p className="text-dev-md max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Parcours professionnel et stages réalisés
          </p>
        </motion.div>

        {/* Timeline des expériences */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="card-dev"
            >
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Logo de l'entreprise */}
                <CompanyLogo experience={exp} />

                {/* Contenu principal */}
                <div className="flex-1 space-y-4">
                  
                  {/* En-tête de l'expérience */}
                  <div className="space-y-2">
                    <h4 className="title-dev text-dev-lg">
                      {exp.title}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-dev-sm">
                      <div className="flex items-center" style={{ color: 'var(--accent-primary)' }}>
                        <FaMapMarkerAlt className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center" style={{ color: 'var(--text-muted)' }}>
                        <FaCalendarAlt className="mr-2" />
                        {exp.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-dev-md" style={{ color: 'var(--accent-secondary)' }}>
                      <FaBriefcase className="mr-2" />
                      {exp.position}
                    </div>
                  </div>

                  {/* Description générale de la mission */}
                  {exp.missionOverview && (
                    <motion.div 
                      className="p-4 rounded-lg border-l-4"
                      style={{ 
                        background: 'var(--bg-glass)', 
                        borderLeftColor: 'var(--accent-primary)',
                        borderLeft: '4px solid var(--accent-primary)'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                    >
                      <div className="text-dev-sm font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>
                        Mission principale :
                      </div>
                      <div className="text-dev-sm italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {exp.missionOverview}
                      </div>
                    </motion.div>
                  )}

                  {/* Description des tâches détaillées */}
                  <div className="space-y-3">
                    <div className="text-dev-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                      Tâches réalisées :
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((task, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-dev-sm"
                          style={{ color: 'var(--text-secondary)' }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + i * 0.1 }}
                        >
                          <span 
                            className="mr-3 mt-1 text-dev-sm"
                            style={{ color: 'var(--accent-primary)' }}
                          >
                            •
                          </span>
                          <span className="flex-1 leading-relaxed">{task}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies utilisées */}
                  <div className="space-y-3">
                    <div className="text-dev-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                      Technologies utilisées :
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          className="tech-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default Projects;