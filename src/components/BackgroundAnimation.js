// src/components/BackgroundAnimation.js - Version globale optimisée
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Fond noir profond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Lignes courbes animées SVG - style Stadiane */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.8 }}
      >
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: '#3B82F6', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 0.5 }} />
          </linearGradient>
          
          <linearGradient id="blueGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.7 }} />
            <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        
        {/* Courbes fluides gauche */}
        <motion.path
          d="M-50 0 Q200 100 150 300 Q100 500 250 600 Q400 700 300 800 L-50 800 Z"
          fill="url(#purpleGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Courbes fluides droite */}
        <motion.path
          d="M1250 0 Q1000 150 1100 350 Q1200 550 950 650 Q800 750 900 800 L1250 800 Z"
          fill="url(#blueGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Lignes décoratives ondulées - plus nombreuses */}
        <g stroke="url(#purpleGradient)" strokeWidth="2" fill="none" opacity="0.5">
          <motion.path
            d="M0 150 Q300 100 600 150 Q900 200 1200 150"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 300 Q300 250 600 300 Q900 350 1200 300"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 450 Q300 400 600 450 Q900 500 1200 450"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1.4, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 600 Q300 550 600 600 Q900 650 1200 600"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1.6, ease: "easeInOut" }}
          />
        </g>
      </svg>

      {/* Cercles animés modernisés - plus grands et visibles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)'
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          x: [-40, 40],
          y: [40, -40],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cercle bleu avec effet moderne */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)'
        }}
        animate={{
          scale: [0.9, 1.4, 0.9],
          x: [30, -30],
          y: [-30, 30],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Cercle cyan subtil */}
      <motion.div
        className="absolute bottom-1/4 left-1/6 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)'
        }}
        animate={{
          scale: [0.7, 1.3, 0.7],
          x: [-20, 20],
          y: [-20, 20],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Particules flottantes améliorées */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: index % 3 === 0 ? '#8B5CF6' : index % 3 === 1 ? '#3B82F6' : '#06B6D4',
            opacity: 0.8,
          }}
          animate={{
            y: ["0%", "30%", "0%"],
            x: ["0%", "-15%", "0%"],
            opacity: [0.4, 0.9, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Effet de grille subtile plus visible */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Overlay de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
    </div>
  );
};

export default BackgroundAnimation;