import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import PCModelCanvas from './PCModel';
import BackgroundAnimation from './BackgroundAnimation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="
        relative
        min-h-screen
        flex flex-col justify-between
        bg-gradient-to-br from-indigo-900 to-purple-800
        text-white
        overflow-visible
      "
    >
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4 bg-opacity-70 z-20">
        <div className="text-lg sm:text-xl font-bold">
          Jordan FOGOU<br/>
          <span className="text-blue-700">Bienvenue sur mon portfolio</span>
        </div>

        <nav className="hidden sm:flex space-x-4 text-sm sm:text-base">
          <a href="#competences" className="hover:text-purple-300 transition-colors">Compétences</a>
          <a href="#experiences" className="hover:text-purple-300 transition-colors">Expériences professionnelles</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Me contacter</a>
        </nav>

        <a
          href="/CV_Jordan_Fogou.pdf"
          download
          className="hidden sm:block px-4 py-2 bg-red-500 rounded-full text-white font-bold hover:bg-red-600 transition-colors shadow-lg"
        >
          Télécharger mon CV
        </a>

        <button onClick={toggleMenu} className="sm:hidden text-white p-2 bg-blue-500 rounded-full">
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-indigo-900 bg-opacity-90 p-4 flex flex-col items-center space-y-4 z-20 sm:hidden">
          <a href="#competences" className="text-white hover:text-purple-300" onClick={toggleMenu}>
            Compétences
          </a>
          <a href="#experiences" className="text-white hover:text-purple-300" onClick={toggleMenu}>
            Expériences professionnelles
          </a>
          <a href="#contact" className="text-white hover:text-purple-300" onClick={toggleMenu}>
            Me contacter
          </a>
          <a
            href="/CV_Jordan_Fogou.pdf"
            download
            className="px-4 py-2 bg-red-500 rounded-full text-white font-bold hover:bg-red-600"
            onClick={toggleMenu}
          >
            Télécharger mon CV
          </a>
        </div>
      )}

      {/* Intro text + profile */}
      <motion.div
        className="
          absolute top-1/4 left-0 right-0
          px-4 sm:px-8 md:px-16 lg:px-24
          flex flex-col md:flex-row items-start
          overflow-visible
        "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/new-profil image.jpg"
          alt="Photo de profil"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-blue-400 mb-4 md:mb-0 md:mr-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold whitespace-normal">
            Salut, moi c’est <span className="text-blue-400">Jordan</span>
          </h1>
          <p className="text-sm md:text-lg mt-4 text-left">
            Actuellement étudiant en cycle ingénieur (Bac+3) à CESI, passionné par le DevSecOps, je recherche une alternance de 2 ans  ou un stage de 6 mois à pouvoir dès septembre 2025 aux postes Développement Fullstack, Sécurité logicielle ou poste similaire en région parisienne. Dynamique et motivé, je souhaite contribuer à des projets innovants.
          </p>
        </div>
      </motion.div>

      {/* 3D model, relevé pour ne pas masquer le texte */}
      <div
        className="
          absolute bottom-[-10px] right-4 sm:right-10
          w-full sm:w-1/2 h-1/2 sm:h-3/4
          z-10
        "
        style={{ pointerEvents: 'none' }}
      >
        <PCModelCanvas />
      </div>

      {/* Background animation */}
      <motion.div
        className="absolute inset-0"
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
