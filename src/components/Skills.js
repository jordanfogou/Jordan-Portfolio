import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaNetworkWired, FaTools, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const skillsData = [
  {
    id: 'programming',
    title: 'Programmation & Développement',
    icon: <FaCode />,
    color: '#00d4ff',
    items: [
      { name: 'C#', level: 85, icon: '/csharp.png', category: 'Backend' },
      { name: 'C++', level: 80, icon: '/cpp.png', category: 'Système' },
      { name: '.NET Core', level: 85, icon: '/dotnet.png', category: 'Framework' },
      { name: 'React', level: 90, icon: '/react.jpg', category: 'Frontend' },
      { name: 'JavaScript', level: 88, icon: '/javascript.png', category: 'Frontend' },
      { name: 'HTML/CSS', level: 92, icon: '/htmlcss.png', category: 'Frontend' },
      { name: 'PHP', level: 75, icon: '/php.png', category: 'Backend' },
      { name: 'Python', level: 80, icon: '/python.png', category: 'Backend' }
    ]
  },
  {
    id: 'network',
    title: 'Réseau & Sécurité',
    icon: <FaNetworkWired />,
    color: '#10b981',
    items: [
      { name: 'Cisco Packet Tracer', level: 85, icon: '/cisco.png', category: 'Simulation' },
      { name: 'Wireshark', level: 80, icon: '/wireshark.jpg', category: 'Analyse' },
      { name: 'Nmap', level: 75, icon: '/nmap.jpg', category: 'Scan' },
      { name: 'Active Directory', level: 70, icon: '/active-directory.png', category: 'Gestion' },
      { name: 'Kali Linux', level: 78, icon: '/kali.png', category: 'Pentest' },
      { name: 'iptables', level: 72, icon: '/iptables.png', category: 'Firewall' }
    ]
  },
  {
    id: 'tools',
    title: 'Outils & Technologies',
    icon: <FaTools />,
    color: '#7c3aed',
    items: [
      { name: 'Visual Studio', level: 90, icon: '/visual-studio.png', category: 'IDE' },
      { name: 'Git', level: 85, icon: '/git.png', category: 'Versioning' },
      { name: 'Docker', level: 75, icon: '/docker.png', category: 'Container' },
      { name: 'Linux', level: 80, icon: '/linux.png', category: 'OS' },
      { name: 'SQL Server', level: 78, icon: '/sql-server.png', category: 'Database' },
      { name: 'Figma', level: 70, icon: '/figma.png', category: 'Design' }
    ]
  },
  {
    id: 'soft',
    title: 'Qualités Professionnelles',
    icon: <FaUsers />,
    color: '#f59e0b',
    items: [
      { name: 'Travail en équipe', level: 95, description: 'Collaboration efficace en environnement agile' },
      { name: 'Adaptabilité', level: 90, description: 'Capacité à apprendre rapidement de nouvelles technologies' },
      { name: 'Communication', level: 88, description: 'Expression claire et écoute active' },
      { name: 'Résolution de problèmes', level: 92, description: 'Approche analytique et méthodique' },
      { name: 'Autonomie', level: 85, description: 'Gestion indépendante des projets' },
      { name: 'Curiosité technique', level: 93, description: 'Veille technologique constante' }
    ]
  },
  {
    id: 'personal',
    title: 'Profil Personnel',
    icon: <FaUser />,
    color: '#ef4444',
    items: [
      { name: 'Mentor bénévole AFEV', description: 'Accompagnement d\'étudiants depuis 2023', badge: 'Engagement' },
      { name: 'Certification CCNA1', description: 'Cisco Certified Network Associate', badge: 'Certifié' },
      { name: 'Anglais professionnel', description: 'Niveau B1 - Communication technique', badge: 'Langues' },
      { name: 'Football en club', description: 'Sport d\'équipe - Leadership', badge: 'Sport' },
      { name: 'Cryptomonnaies & Voyages', description: 'Ouverture technologique et culturelle', badge: 'Passion' }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const activeSkillSet = skillsData.find(skill => skill.id === activeTab);

  // Composant de barre de niveau
  const SkillBar = ({ level, color }) => (
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );

  // Composant d'image avec fallback
  const SkillIcon = ({ src, name, fallback = '💻' }) => {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
      <div className="w-8 h-8 flex items-center justify-center">
        {!imageError && src && (
          <img
            src={src}
            alt={`${name} icon`}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        {(imageError || !src) && (
          <span className="text-lg">{fallback}</span>
        )}
      </div>
    );
  };

  return (
    <section className="section-unified">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="title-dev text-dev-xl mb-4">
            Mes Compétences & Atouts
          </h3>
          <p className="text-dev-md max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Un aperçu complet de mes compétences techniques et qualités professionnelles
          </p>
        </motion.div>

        {/* Onglets de navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillsData.map((skill) => (
            <motion.button
              key={skill.id}
              onClick={() => setActiveTab(skill.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-dev-sm font-medium transition-all duration-300 ${
                activeTab === skill.id
                  ? 'card-dev'
                  : 'border border-secondary hover:bg-secondary/10'
              }`}
              style={activeTab === skill.id ? {
                borderColor: skill.color,
                background: `${skill.color}15`
              } : {
                borderColor: 'var(--border-secondary)',
                color: 'var(--text-muted)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ color: skill.color }}>{skill.icon}</span>
              <span>{skill.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Contenu des compétences */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="card-dev"
        >
          <div className="flex items-center space-x-3 mb-8">
            <span style={{ color: activeSkillSet.color, fontSize: '1.5rem' }}>
              {activeSkillSet.icon}
            </span>
            <h4 className="text-dev-lg" style={{ color: 'var(--text-primary)' }}>
              {activeSkillSet.title}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSkillSet.items.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="p-4 rounded-lg border transition-all duration-300 hover:border-primary"
                style={{ 
                  borderColor: 'var(--border-secondary)',
                  background: 'var(--bg-glass)'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <SkillIcon 
                      src={item.icon} 
                      name={item.name}
                      fallback={activeTab === 'soft' ? '🎯' : activeTab === 'personal' ? '⭐' : '💻'}
                    />
                    <div>
                      <h5 className="text-dev-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </h5>
                      {item.category && (
                        <span 
                          className="text-dev-xs px-2 py-1 rounded"
                          style={{ 
                            color: activeSkillSet.color,
                            background: `${activeSkillSet.color}20`
                          }}
                        >
                          {item.category}
                        </span>
                      )}
                      {item.badge && (
                        <span 
                          className="text-dev-xs px-2 py-1 rounded"
                          style={{ 
                            color: activeSkillSet.color,
                            background: `${activeSkillSet.color}20`
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.level && (
                    <div className="text-dev-sm font-bold" style={{ color: activeSkillSet.color }}>
                      {item.level}%
                    </div>
                  )}

                  {item.description && (
                    <button
                      onClick={() => toggleExpand(`${activeTab}-${index}`)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {expandedItems[`${activeTab}-${index}`] ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  )}
                </div>

                {item.level && (
                  <SkillBar level={item.level} color={activeSkillSet.color} />
                )}

                {item.description && expandedItems[`${activeTab}-${index}`] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 text-dev-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Résumé statistique */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Langages', value: '8+', color: '#00d4ff' },
            { label: 'Frameworks', value: '5+', color: '#10b981' },
            { label: 'Outils', value: '12+', color: '#7c3aed' },
            { label: 'Années d\'exp.', value: '2+', color: '#f59e0b' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-lg border"
              style={{ 
                borderColor: 'var(--border-secondary)',
                background: 'var(--bg-glass)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-dev-xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-dev-sm" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;