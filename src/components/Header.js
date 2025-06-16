import React, { useState, Suspense, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUser, FaDownload, FaLaptopCode } from 'react-icons/fa';

// Lazy loading du modèle 3D
const PCModelCanvas = lazy(() => import('./PCModel'));

// Animations variants
const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay }
  }
});

const fadeIn = (direction = "", type = "", delay = 0, duration = 1) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
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

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Démarrer le chargement 3D après un délai
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setShow3D(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <header className="section-unified min-h-screen relative">
      {/* Navigation professionnelle */}
      <nav className="nav-dev">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo professionnel */}
            <motion.div 
              className="flex items-center space-x-3"
              initial="hidden"
              animate="show"
              variants={fadeIn("right", "spring", 0.1, 0.6)}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FaUser className="text-white text-lg" />
              </div>
              <div className="text-lg font-bold">
                <span style={{ color: 'var(--accent-primary)' }}>Jordan FOGOU</span>
                <div className="text-sm font-normal" style={{ color: 'var(--text-muted)' }}>
                  Développeur Full-Stack
                </div>
              </div>
            </motion.div>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#competences", label: "competences" },
                { href: "#experiences", label: "experiences" },
                { href: "#projects", label: "projects" },
                { href: "#contact", label: "contact" }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Bouton CV */}
            <motion.a
              href="/CV_Jordan_Fogou_D.pdf"
              download
              className="hidden lg:flex items-center btn-dev text-dev-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FaDownload className="mr-2" />
              download_cv
            </motion.a>

            {/* Menu mobile */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg border"
              style={{ borderColor: 'var(--border-primary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>

          {/* Menu mobile */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="lg:hidden border-t mt-4 pt-4"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="space-y-4 pb-4">
                {[
                  { href: "#competences", label: "competences" },
                  { href: "#experiences", label: "experiences" },
                  { href: "#projects", label: "projects" },
                  { href: "#contact", label: "contact" }
                ].map((item) => (
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
                  href="/CV_Jordan_Fogou_D.pdf"
                  download
                  className="btn-dev block text-center mt-4 text-dev-sm"
                  onClick={toggleMenu}
                >
                  <FaDownload className="inline mr-2" />
                  download_cv
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="flex-1 relative px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto h-full flex items-center min-h-[calc(100vh-80px)]">
          <div className="w-full">
            
            {/* Layout principal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start overflow-visible">
              
              {/* Colonne gauche : Photo + Contenu textuel */}
              <div className="space-y-8 -mt-8 lg:-mt-16 lg:-ml-8">
                
                {/* Photo de profil */}
                <motion.div 
                  className="flex justify-center lg:justify-start"
                  initial="hidden"
                  animate="show"
                  variants={fadeIn("right", "spring", 0.2, 0.8)}
                >
                  <div className="relative">
                    <div 
                      className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 p-1 shadow-2xl"
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
                        className="w-full h-full rounded-full bg-card flex items-center justify-center hidden"
                        style={{ background: 'var(--bg-card)' }}
                      >
                        <FaUser size={60} style={{ color: 'var(--accent-primary)' }} />
                      </div>
                    </div>
                    {/* Indicateur en ligne */}
                    <div 
                      className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full border-4 flex items-center justify-center"
                      style={{ 
                        background: 'var(--accent-tertiary)', 
                        borderColor: 'var(--bg-primary)' 
                      }}
                      title="Disponible pour opportunités"
                    />
                  </div>
                </motion.div>

                {/* Contenu textuel principal */}
                <div className="text-center lg:text-left">
                  
                  {/* Titre principal */}
                  <motion.h1 
                    className="title-dev text-dev-xl mb-6"
                    initial="hidden"
                    animate="show"
                    variants={textVariant(0.3)}
                  >
                    <span className="block text-white">salut, moi c'est</span>
                    <span 
                      className="block"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      jordan
                    </span>
                  </motion.h1>

                  {/* Sous-titre */}
                  <motion.h2
                    className="text-dev-lg font-semibold mb-8"
                    style={{ color: 'var(--accent-secondary)' }}
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("", "", 0.5, 1)}
                  >
                    développeur full-stack & devsecops
                  </motion.h2>

                  {/* Description détaillée */}
                  <motion.div 
                    className="text-dev-md leading-relaxed mb-8 space-y-4"
                    style={{ color: 'var(--text-secondary)' }}
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("", "", 0.7, 1)}
                  >
                    <p>
                      étudiant ingénieur cesi (bac+3) passionné par le devsecops et les technologies modernes. 
                      je recherche une <strong style={{ color: 'var(--accent-primary)' }}>alternance de 2 ans</strong> ou un 
                      <strong style={{ color: 'var(--accent-primary)' }}> stage de 6 mois</strong> dès septembre 2025 
                      en région parisienne.
                    </p>
                    <p className="text-dev-sm">
                      motivé par l'innovation et la sécurité, je souhaite contribuer à des projets 
                      stimulants tout en développant mes compétences dans un environnement dynamique.
                    </p>
                  </motion.div>

                  {/* Informations de localisation */}
                  <motion.div
                    className="flex items-center justify-center lg:justify-start space-x-6 text-dev-sm"
                    style={{ color: 'var(--text-muted)' }}
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("", "", 0.9, 1)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>île-de-france, france</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ background: 'var(--accent-tertiary)' }}
                      />
                      <span style={{ color: 'var(--accent-tertiary)' }}>disponible</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Colonne droite : Animation 3D */}
              <div className="relative overflow-visible">
                {!isMobile && show3D ? (
                  <motion.div 
                    className="fixed top-0 left-0 pointer-events-none z-50"
                    style={{ 
                      width: '100vw',
                      height: '100vh',
                      overflow: 'visible'
                    }}
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("left", "", 1.2, 1)}
                  >
                    <div style={{ 
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      width: '50vw',
                      height: '100vh',
                      overflow: 'visible'
                    }}>
                      <Suspense fallback={null}>
                        <PCModelCanvas />
                      </Suspense>
                    </div>
                  </motion.div>
                ) : isMobile ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div 
                      className="text-center space-y-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <motion.div
                        className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full flex items-center justify-center shadow-xl"
                        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                        animate={{ 
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        <FaLaptopCode size={40} color="white" />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                          innovation & code
                        </h3>
                        <p className="text-base" style={{ color: 'var(--text-muted)' }}>
                          développement moderne et sécurisé
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial="hidden"
        animate="show"
        variants={fadeIn("up", "", 2, 1)}
      >
        <motion.div
          className="w-6 h-10 border-2 rounded-full flex justify-center cursor-pointer"
          style={{ borderColor: 'var(--border-primary)' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('competences')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2"
            style={{ background: 'var(--accent-primary)' }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;