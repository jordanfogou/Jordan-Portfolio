import React, { useState, Suspense, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUser, FaDownload } from 'react-icons/fa';

const PCModelCanvas = lazy(() => import('./PCModel'));

const textVariant = (delay = 0) => ({
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1, delay }
  }
});

const fadeIn = (direction = "", type = "", delay = 0, duration = 0.8) => ({
  hidden: {
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    opacity: 0
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" }
  }
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { href: "#competences", label: "Compétences" },
    { href: "#experiences", label: "Expériences" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="section-unified min-h-screen relative">
      {/* Navigation */}
      <nav className="nav-dev">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-primary)' }}
              >
                <span className="text-white font-bold text-base">JF</span>
              </div>
              <div>
                <div className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Jordan FOGOU
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Développeur Full-Stack
                </div>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="/CV jordan_FOGOU_alternant_DEVFULLSTACK.pdf"
              download
              className="hidden lg:flex btn-dev text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaDownload className="mr-2" size={14} />
              Télécharger mon CV
            </motion.a>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg border"
              style={{ borderColor: 'var(--border-secondary)', color: 'var(--text-secondary)' }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="lg:hidden border-t py-4"
              style={{ borderColor: 'var(--border-secondary)' }}
            >
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="nav-link block py-2"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/CV jordan_FOGOU_alternant_DEVFULLSTACK.pdf"
                  download
                  className="btn-dev block text-center mt-3 text-sm"
                  onClick={toggleMenu}
                >
                  <FaDownload className="inline mr-2" size={14} />
                  Télécharger mon CV
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="flex-1 relative px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)]">
          
          {/* Layout : Texte à gauche + 3D à droite sur desktop */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Colonne gauche : Photo + Texte */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              
              {/* Photo de profil */}
              <motion.div 
                className="flex justify-center lg:justify-start mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative">
                  <div 
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 p-1 overflow-hidden"
                    style={{ borderColor: 'var(--accent-primary)' }}
                  >
                    <img
                      src="/new-profil image.jpg"
                      alt="Jordan FOGOU"
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full rounded-full items-center justify-center hidden"
                      style={{ background: 'var(--bg-card)' }}
                    >
                      <FaUser size={32} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                  </div>
                  {/* Disponible */}
                  <div 
                    className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-3"
                    style={{ 
                      background: '#10b981',
                      borderColor: 'var(--bg-primary)',
                      border: '3px solid var(--bg-primary)'
                    }}
                    title="Disponible pour alternance"
                  />
                </div>
              </motion.div>

              {/* Titre */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={textVariant(0.2)}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3"
                    style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  Salut, moi c'est{' '}
                  <span style={{ color: 'var(--accent-primary)' }}>Jordan</span>
                </h1>
                
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2" 
                    style={{ color: 'var(--accent-secondary)' }}>
                  Développeur Full-Stack
                </h2>
              </motion.div>

              {/* Description — ton personnel et direct */}
              <motion.div 
                className="text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'var(--text-secondary)' }}
                initial="hidden"
                animate="show"
                variants={fadeIn("", "", 0.4, 0.8)}
              >
                <p className="mb-4">
                  Étudiant ingénieur en <strong style={{ color: 'var(--text-primary)' }}>Bac+4 à CESI</strong>, 
                  je cherche une <strong style={{ color: 'var(--accent-primary)' }}>alternance d'un an</strong> (ou contrat 
                  de professionnalisation) à partir de <strong style={{ color: 'var(--accent-primary)' }}>septembre 2026</strong> en 
                  tant que développeur Full-Stack.
                </p>
                <p>
                  J'ai une bonne base en <strong style={{ color: 'var(--text-primary)' }}>React, Node.js et bases de données</strong>, 
                  et je monte actuellement en compétences sur <strong style={{ color: 'var(--text-primary)' }}>Java et Angular</strong> pour 
                  élargir mon profil. Mon objectif : intégrer une équipe où je peux contribuer 
                  concrètement tout en continuant à progresser.
                </p>
              </motion.div>

              {/* Infos clés — pas de boutons CTA artificiels */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4"
                initial="hidden"
                animate="show"
                variants={fadeIn("", "", 0.7, 0.8)}
              >
                <span className="btn-outline text-sm">
                  📍 Île-de-France
                </span>
                <span className="btn-outline text-sm">
                  📅 Disponible sept. 2026
                </span>
                <span className="btn-outline text-sm">
                  🔄 Rythme 2 sem. / 2 sem.
                </span>
              </motion.div>

              {/* CTA réels */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
                initial="hidden"
                animate="show"
                variants={fadeIn("", "", 0.9, 0.8)}
              >
                <a href="#contact" className="btn-dev text-sm">
                  Me contacter
                </a>
                <a href="#projects" className="btn-outline text-sm">
                  Voir mes projets
                </a>
              </motion.div>
            </div>

            {/* Colonne droite : 3D — responsive */}
            <div className="w-full lg:w-2/5 h-64 sm:h-72 lg:h-96 flex-shrink-0">
              {show3D ? (
                <motion.div 
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div 
                          className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-2"
                          style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
                        />
                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Chargement...</span>
                      </div>
                    </div>
                  }>
                    <PCModelCanvas />
                  </Suspense>
                </motion.div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div 
                    className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
                    style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 border-2 rounded-full flex justify-center cursor-pointer"
          style={{ borderColor: 'var(--border-primary)' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('competences')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div 
            className="w-1 h-2 rounded-full mt-1.5"
            style={{ background: 'var(--accent-primary)' }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;