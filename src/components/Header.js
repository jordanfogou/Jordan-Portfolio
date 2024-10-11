import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PCModelCanvas from './PCModel';
import BackgroundAnimation from './BackgroundAnimation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative h-[110vh] flex flex-col justify-between bg-gradient-to-br from-indigo-900 to-purple-800 text-white overflow-hidden">
      {/* Barre de navigation */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4 bg-opacity-70 z-20">
        <div className="text-lg sm:text-xl font-bold">
          Jordan FOGOU
        </div>
        <nav className="hidden sm:flex space-x-4 text-sm sm:text-base">
          <a href="#competences" className="hover:text-purple-300 transition-colors">Compétences</a>
          <a href="#experiences" className="hover:text-purple-300 transition-colors">Expériences professionnelles</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Me contacter</a>
        </nav>
        <a
          href="/cv jordan fogou informatique.pdf"
          download="CV_Jordan_Fogou.pdf"
          className="hidden sm:block px-4 py-2 bg-red-500 rounded-full text-white font-bold hover:bg-red-600 transition-colors shadow-lg"
        >
          Télécharger mon CV
        </a>
        <button onClick={toggleMenu} className="sm:hidden text-white px-4 py-2 bg-blue-500 rounded-full">
          Menu
        </button>
      </div>

      {/* Menu déroulant pour mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-indigo-900 bg-opacity-90 p-4 flex flex-col items-center space-y-4 z-20 sm:hidden">
          <a href="#competences" className="text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
            Compétences
          </a>
          <a href="#experiences" className="text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
            Expériences professionnelles
          </a>
          <a href="#contact" className="text-white hover:text-purple-300 transition-colors" onClick={toggleMenu}>
            Me contacter
          </a>
          <a
            href="/cv jordan fogou informatique.pdf"
            download="CV_Jordan_Fogou.pdf"
            className="px-4 py-2 bg-red-500 rounded-full text-white font-bold hover:bg-red-600 transition-colors shadow-lg"
            onClick={toggleMenu}
          >
            Télécharger mon CV
          </a>
        </div>
      )}

      {/* Texte principal avec la barre verticale stylisée et l'image de profil */}
      <motion.div
        className="absolute top-1/4 left-10 px-4 sm:px-8 md:px-16 lg:px-24 flex items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/profile-image.jpg"
          alt="Photo de profil"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-blue-400 mr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="w-1 h-[76.8px] sm:h-[102.4px] bg-blue-400 rounded-full mr-4"></div>

        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Salut, je suis <span className="text-purple-400">Jordan</span>
          </h1>
          <p className="text-sm md:text-lg mt-4 text-left max-w-xl">
            Étudiant en première année du cycle ingénieur informatique (bac+3) à CESI École d'Ingénieurs sur le campus de Nanterre, Je suis actuellement à la recherche d'un stage de 15 semaines à partir de janvier 2025 dans le domaine informatique( réseau ,cybersécurité , dev Full-stack ou autres).
          </p>
        </div>
      </motion.div>

      {/* Modèle 3D dans la zone droite, ajusté pour être plus bas */}
      <div className="absolute bottom-[30px] right-4 sm:right-10 w-full sm:w-1/2 h-1/2 sm:h-3/4 z-10">
        <PCModelCanvas />
      </div>

      {/* Effet visuel de fond */}
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <BackgroundAnimation />
      </motion.div>
    </header>
  );
};

export default Header;
