import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaNetworkWired, FaTools, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const skillsData = [
  {
    id: 'programming',
    title: 'Programmation & Développement',
    icon: <FaCode />,
    color: '#3b82f6',
    items: [
      { name: 'React', level: 90, icon: '/react.jpg', category: 'Frontend' },
      { name: 'JavaScript', level: 88, icon: '/javascript.png', category: 'Frontend' },
      { name: 'HTML/CSS', level: 92, icon: '/htmlcss.png', category: 'Frontend' },
      { name: 'Node.js', level: 82, icon: '/nodejs.png', category: 'Backend' },
      { name: 'C#', level: 85, icon: '/csharp.png', category: 'Backend' },
      { name: '.NET Core', level: 85, icon: '/dotnet.png', category: 'Framework' },
      { name: 'Java', level: 55, icon: '/java.png', category: 'Backend' },
      { name: 'Spring Boot', level: 45, icon: '/springboot.png', category: 'Framework' },
      { name: 'Angular', level: 50, icon: '/angular.png', category: 'Frontend' },
      { name: 'TypeScript', level: 55, icon: '/typescript.png', category: 'Frontend' },
      { name: 'Python', level: 80, icon: '/python.png', category: 'Backend' },
      { name: 'PHP', level: 75, icon: '/php.png', category: 'Backend' },
      { name: 'C++', level: 80, icon: '/cpp.png', category: 'Système' }
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
    color: '#8b5cf6',
    items: [
      { name: 'Git', level: 85, icon: '/git.png', category: 'Versioning' },
      { name: 'Docker', level: 75, icon: '/docker.png', category: 'Container' },
      { name: 'Visual Studio', level: 90, icon: '/visual-studio.png', category: 'IDE' },
      { name: 'IntelliJ IDEA', level: 50, icon: '/intellij.png', category: 'IDE' },
      { name: 'Linux', level: 80, icon: '/linux.png', category: 'OS' },
      { name: 'SQL Server', level: 78, icon: '/sql-server.png', category: 'Database' },
      { name: 'PostgreSQL', level: 60, icon: '/postgresql.png', category: 'Database' },
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
      { name: 'Anglais professionnel', description: 'Niveau B1 — Communication technique', badge: 'Langues' },
      { name: 'Football en club', description: 'Sport d\'équipe — Leadership', badge: 'Sport' },
      { name: 'Cryptomonnaies & Voyages', description: 'Ouverture technologique et culturelle', badge: 'Passion' }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 }
    }
  };

  const activeSkillSet = skillsData.find(skill => skill.id === activeTab);

  const SkillBar = ({ level, color }) => (
    <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  );

  const SkillIcon = ({ src, name, fallback = '💻' }) => {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    return (
      <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
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
        {(imageError || !src) && <span className="text-base">{fallback}</span>}
      </div>
    );
  };

  return (
    <section className="section-unified">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="title-dev title-gradient text-dev-xl mb-3">
            Compétences
          </h3>
          <p className="text-dev-md max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Compétences techniques et qualités professionnelles
          </p>
        </motion.div>

        {/* Onglets */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setActiveTab(skill.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={activeTab === skill.id ? {
                borderColor: skill.color,
                border: `1px solid ${skill.color}40`,
                background: `${skill.color}10`,
                color: skill.color
              } : {
                border: '1px solid var(--border-secondary)',
                color: 'var(--text-muted)',
                background: 'transparent'
              }}
            >
              <span style={{ color: activeTab === skill.id ? skill.color : 'var(--text-muted)' }}>
                {skill.icon}
              </span>
              <span className="hidden sm:inline">{skill.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Contenu */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="card-dev"
        >
          <div className="flex items-center gap-3 mb-6">
            <span style={{ color: activeSkillSet.color, fontSize: '1.3rem' }}>
              {activeSkillSet.icon}
            </span>
            <h4 className="text-dev-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {activeSkillSet.title}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeSkillSet.items.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="p-4 rounded-lg border transition-all duration-200"
                style={{ 
                  borderColor: 'var(--border-secondary)',
                  background: 'var(--bg-glass)'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <SkillIcon 
                      src={item.icon} 
                      name={item.name}
                      fallback={activeTab === 'soft' ? '🎯' : activeTab === 'personal' ? '⭐' : '💻'}
                    />
                    <div>
                      <h5 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </h5>
                      {(item.category || item.badge) && (
                        <span 
                          className="text-xs px-1.5 py-0.5 rounded inline-block mt-0.5"
                          style={{ 
                            color: activeSkillSet.color,
                            background: `${activeSkillSet.color}15`
                          }}
                        >
                          {item.category || item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.level && (
                      <span className="text-sm font-bold" style={{ color: activeSkillSet.color }}>
                        {item.level}%
                      </span>
                    )}
                    {item.description && (
                      <button
                        onClick={() => toggleExpand(`${activeTab}-${index}`)}
                        className="p-1 transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {expandedItems[`${activeTab}-${index}`] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </button>
                    )}
                  </div>
                </div>

                {item.level && <SkillBar level={item.level} color={activeSkillSet.color} />}

                {item.description && expandedItems[`${activeTab}-${index}`] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Langages', value: '10+', color: '#3b82f6' },
            { label: 'Frameworks', value: '6+', color: '#10b981' },
            { label: 'Outils', value: '12+', color: '#8b5cf6' },
            { label: 'Années d\'exp.', value: '2+', color: '#f59e0b' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-lg border"
              style={{ 
                borderColor: 'var(--border-secondary)',
                background: 'var(--bg-glass)'
              }}
            >
              <div className="text-dev-xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;