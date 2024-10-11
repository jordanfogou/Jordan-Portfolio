import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-semibold mb-2">Mes Infos</h3>
          <p className="text-gray-400 text-xs">Jordanfogou443@gmail.com</p>
          <p className="text-gray-400 text-xs">Tel: +33 (0) 6 13 99 27 20</p>
          <p className="text-gray-400 text-xs">Île-de-France, France</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-semibold mb-2">Liens Utiles</h3>
          <ul className="text-gray-400 text-xs space-y-1">
            <li><a href="#about" className="hover:text-purple-400 transition-colors">À propos de moi</a></li>
            <li><a href="#technologies" className="hover:text-purple-400 transition-colors">Mes Technologies</a></li>
            <li><a href="#work" className="hover:text-purple-400 transition-colors">Mes Travaux</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-semibold mb-2">Suivez-moi</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/jordan-fogou-6578a4295/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} className="hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} className="hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={18} className="hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-semibold mb-2">Mentions légales</h3>
          <p className="text-gray-400 text-xs">
            <a href="#legal" className="hover:text-purple-400 transition-colors">Voir les mentions légales</a>
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div className="flex items-center">
          <h4 className="text-sm font-semibold text-white mr-2">S'abonner à la newsletter</h4>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Entrer votre email"
              className="p-2 rounded bg-gray-800 text-xs placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">→</button>
          </form>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
