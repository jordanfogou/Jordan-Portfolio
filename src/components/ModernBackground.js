// src/components/ModernBackground.js
import React from 'react';

const ModernBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fond noir de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
      
      {/* Lignes courbes animées */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.6 }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#3B82F6', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 0.4 }} />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EC4899', stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {/* Courbes fluides côté gauche */}
        <path
          d="M-100 0 Q200 100 150 300 Q100 500 250 600 Q400 700 300 800 L-100 800 Z"
          fill="url(#gradient1)"
          className="animate-pulse"
          style={{ 
            animation: 'float 6s ease-in-out infinite',
            transformOrigin: 'center'
          }}
        />
        
        {/* Courbes fluides côté droit */}
        <path
          d="M1300 0 Q1000 150 1100 350 Q1200 550 950 650 Q800 750 900 800 L1300 800 Z"
          fill="url(#gradient2)"
          className="animate-pulse"
          style={{ 
            animation: 'float 8s ease-in-out infinite reverse',
            transformOrigin: 'center'
          }}
        />
        
        {/* Lignes fines décoratives */}
        <g stroke="url(#gradient1)" strokeWidth="1" fill="none" opacity="0.3">
          <path d="M0 200 Q300 150 600 200 Q900 250 1200 200" />
          <path d="M0 400 Q300 350 600 400 Q900 450 1200 400" />
          <path d="M0 600 Q300 550 600 600 Q900 650 1200 600" />
        </g>
        
        {/* Cercles décoratifs */}
        <circle cx="200" cy="150" r="2" fill="#8B5CF6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="300" r="3" fill="#3B82F6" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="1000" cy="500" r="2" fill="#06B6D4" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Effet de grille subtile */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Gradient overlay pour plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
    </div>
  );
};

export default ModernBackground;