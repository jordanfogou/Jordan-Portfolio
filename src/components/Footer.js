import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-900 text-white py-6 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-2">
            <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">J</div>
          </div>
          <p className="text-gray-400 text-sm">
            Je suis prêt à m'investir pleinement dans votre équipe...
          </p>
        </div>
        
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-sm font-semibold mb-2">Mes Infos</h3>
          <p className="text-gray-400 text-sm">Jordanfogou443@gmail.com</p>
          <p className="text-gray-400 text-sm">Tel: +33 (0) 6 13 99 27 20</p>
          <p className="text-gray-400 text-sm">Île-de-France, France</p>
        </div>
        
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-sm font-semibold mb-2">Liens Utiles</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-1"><a href="#about">À propos de moi</a></li>
            <li className="mb-1"><a href="#technologies">Mes Technologies</a></li>
            <li className="mb-1"><a href="#work">Mes Travaux</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-sm font-semibold text-white mb-2">S'abonner à la newsletter</h4>
          <form className="flex items-center space-x-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Entrer votre email"
              className="w-full sm:w-48 p-2 rounded bg-gray-800 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 p-2 rounded">→</button>
          </form>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/jordan-fogou-6578a4295/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
