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
                <span className="text-white font-bold text-lg">J</span>
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
              télécharger mon cv
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
                  télécharger mon cv
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Contenu principal - Layout reorganisé */}
      <div className="flex-1 relative px-4 sm:px-6 lg:px-8 pt-12">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center min-h-[calc(100vh-80px)]">
          
          {/* Photo de profil en haut - Plus petite */}
          <motion.div 
            className="flex justify-center mb-8 lg:mb-12"
            initial="hidden"
            animate="show"
            variants={fadeIn("down", "spring", 0.2, 0.8)}
          >
            <div className="relative">
              <div 
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full border-4 p-2 shadow-2xl"
                style={{ 
                  borderColor: 'var(--accent-primary)',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                }}
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
                  <FaUser size={40} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
              {/* Indicateur violet */}
              <div 
                className="absolute top-4 right-2 w-5 h-5 rounded-full border-4"
                style={{ 
                  background: 'var(--accent-secondary)', 
                  borderColor: 'var(--bg-primary)' 
                }}
                title="Disponible pour opportunités"
              />
            </div>
          </motion.div>

          {/* Layout principal : Texte étalé sur la largeur + PC 3D en bas à droite */}
          <div className="flex-1 relative">
            
            {/* Contenu textuel - De gauche à droite sur toute la largeur */}
            <div className="text-center lg:text-left relative z-10 space-y-8 mb-12">
              
              {/* Titre principal - Largeur complète */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={textVariant(0.4)}
                className="w-full"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  Bonjour, Je suis{' '}
                  <span 
                    className="lg:inline"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    Jordan
                  </span>
                </h1>
                
                {/* Sous-titre sur toute la largeur */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8" style={{ color: 'var(--accent-secondary)' }}>
                  Développeur Full-Stack & DevSecOps
                </h2>
              </motion.div>

              {/* Description principale - Étalée sur la largeur */}
              <motion.div 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed space-y-6 max-w-none"
                style={{ color: 'var(--text-secondary)' }}
                initial="hidden"
                animate="show"
                variants={fadeIn("right", "", 0.6, 1)}
              >
                <p className="w-full">
                  Actuellement étudiant ingénieur Bac+4 à <strong style={{ color: 'var(--accent-primary)' }}>CESI</strong>, 
                  je suis passionné et par le DevSecOps(Pratiques intégrant la sécurité et l'éfficacité dans le développement d'applications fiable et sécurisées.) <strong style={{ color: 'var(--accent-primary)' }}></strong> pour 
                  mon année académique prochaine, je recherche une alternance de 24 mois pour mettre en pratique mes compétences et en apprendre de nouvelles  au sein d'une entreprise dynamique, humaine ,  avec des missions qui répondent à un réel besoin au poste de developpeur {' '}
                  <strong style={{ color: 'var(--accent-primary)' }}>Full-stack</strong>.
                </p>
              </motion.div>

              

              {/* Call to Action - Sur toute la largeur */}
              <motion.div
                className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 w-full"
                initial="hidden"
                animate="show"
                variants={fadeIn("right", "", 1.0, 1)}
              >
                <a
                  href="#contact"
                  className="btn-dev text-dev-sm px-8 py-4 text-center"
                >
                  📍Île-de-France, France
                </a>
                <a
                  href="#projects"
                  className="border border-primary px-8 py-4 rounded-lg text-center transition-all hover:bg-primary/10"
                  style={{ 
                    borderColor: 'var(--accent-primary)', 
                    color: 'var(--accent-primary)' 
                  }}
                >
                  Rythme 2 semaines/2semaines
                </a>
                <a
                  href="/CV_Jordan_Fogou_D.pdf"
                  download
                  className="border border-secondary px-8 py-4 rounded-lg text-center transition-all hover:bg-secondary/10"
                  style={{ 
                    borderColor: 'var(--accent-secondary)', 
                    color: 'var(--accent-secondary)' 
                  }}
                >
                  Disponible pour alternance de 24 mois
                </a>
              </motion.div>
            </div>

            {/* PC 3D - Positionné en bas à droite de façon absolue */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-96">
              {!isMobile && show3D ? (
                <motion.div 
                  className="w-full h-full relative"
                  initial="hidden"
                  animate="show"
                  variants={fadeIn("left", "", 1.2, 1)}
                >
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                        <span className="text-dev-sm">Chargement...</span>
                      </div>
                    </div>
                  }>
                    <PCModelCanvas />
                  </Suspense>
                </motion.div>
              ) : null}
            </div>

            {/* Version mobile du PC 3D */}
            {isMobile && (
              <div className="w-full h-64 flex items-center justify-center mt-8">
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-xl"
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
                    <FaLaptopCode size={32} color="white" />
                  </motion.div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Innovation & Code
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      Développement moderne
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
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