// src/components/BackgroundAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Cercle violet animé */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-30"
        animate={{
          scale: [0.8, 1.2, 0.8],
          x: [-50, 50],
          y: [50, -50],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cercle rose animé avec rotation et changement de couleur */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-pink-500 opacity-25"
        animate={{
          scale: [0.9, 1.4, 0.9],
          x: [30, -30],
          y: [-30, 30],
          rotate: [0, -45, 0],
          backgroundColor: ["#db2777", "#d946ef", "#db2777"], // Transition de couleurs
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cercle bleu avec mouvements circulaires */}
      <motion.div
        className="absolute bottom-1/4 left-1/6 w-72 h-72 rounded-full bg-blue-500 opacity-20"
        animate={{
          scale: [0.7, 1.3, 0.7],
          x: [-20, 20],
          y: [-20, 20],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Petits points flottants pour un effet de particules */}
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-white opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "20%", "0%"],
            x: ["0%", "-10%", "0%"],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3, // Durée aléatoire pour chaque point
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
