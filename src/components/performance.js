// src/utils/performance.js - Configuration et optimisations de performance
import React from 'react';

// 1. Configuration des images optimisées
export const imageConfig = {
  // Qualité par défaut pour la compression
  defaultQuality: 80,
  
  // Formats d'images supportés par ordre de préférence
  supportedFormats: ['webp', 'avif', 'jpg', 'png'],
  
  // Tailles d'images responsive
  imageSizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 400, height: 300 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 900 },
    hero: { width: 1920, height: 1080 }
  },
  
  // Sources d'images responsive
  generateSrcSet: (basePath, sizes = ['small', 'medium', 'large']) => {
    return sizes.map(size => {
      const { width } = imageConfig.imageSizes[size];
      return `${basePath}?w=${width} ${width}w`;
    }).join(', ');
  }
};

// 2. Configuration du lazy loading
export const lazyLoadConfig = {
  // Seuil d'intersection pour déclencher le chargement
  threshold: 0.1,
  
  // Marge pour précharger avant que l'élément soit visible
  rootMargin: '50px',
  
  // Observer pour le lazy loading
  createObserver: (callback, options = {}) => {
    const defaultOptions = {
      threshold: lazyLoadConfig.threshold,
      rootMargin: lazyLoadConfig.rootMargin,
      ...options
    };
    
    return new IntersectionObserver(callback, defaultOptions);
  }
};

// 3. Configuration des animations
export const animationConfig = {
  // Durées d'animation standard
  durations: {
    fast: 150,
    normal: 300,
    slow: 500,
    veryFast: 100
  },
  
  // Courbes d'animation
  easings: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  // Vérifier si l'utilisateur préfère des animations réduites
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  // Adapter la durée selon les préférences
  getDuration: (duration) => {
    return animationConfig.prefersReducedMotion() ? 0 : duration;
  }
};

// 4. Configuration de la gestion mémoire
export const memoryConfig = {
  // Limite de cache pour les images
  imageCacheLimit: 50,
  
  // Limite de cache pour les modèles 3D
  modelCacheLimit: 5,
  
  // Nettoyer le cache périodiquement
  cleanupInterval: 5 * 60 * 1000, // 5 minutes
  
  // Cache manager simple
  cache: new Map(),
  
  // Ajouter au cache avec limite
  addToCache: (key, value) => {
    if (memoryConfig.cache.size >= memoryConfig.imageCacheLimit) {
      const firstKey = memoryConfig.cache.keys().next().value;
      memoryConfig.cache.delete(firstKey);
    }
    memoryConfig.cache.set(key, value);
  },
  
  // Nettoyer le cache
  clearCache: () => {
    memoryConfig.cache.clear();
  }
};

// 5. Configuration des modèles 3D
export const model3DConfig = {
  // Paramètres de chargement
  loading: {
    // Charger les modèles de façon différée
    lazy: true,
    
    // Timeout pour le chargement
    timeout: 10000,
    
    // Compression des modèles
    compression: true
  },
  
  // Paramètres de rendu
  rendering: {
    // Qualité de rendu adaptative
    adaptiveQuality: true,
    
    // FPS cible
    targetFPS: 60,
    
    // Réduire la qualité sur mobile
    mobileOptimization: true
  },
  
  // Détection de la performance du device
  getDevicePerformance: () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) return 'low';
    
    const renderer = gl.getParameter(gl.RENDERER);
    const vendor = gl.getParameter(gl.VENDOR);
    
    // Simple heuristique pour déterminer la performance
    if (renderer.includes('Intel') || renderer.includes('PowerVR')) {
      return 'low';
    } else if (renderer.includes('NVIDIA') || renderer.includes('AMD')) {
      return 'high';
    }
    
    return 'medium';
  }
};

// 6. Configuration du responsive
export const responsiveConfig = {
  // Breakpoints standard
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    wide: 1536
  },
  
  // Détecter le type d'appareil
  getDeviceType: () => {
    const width = window.innerWidth;
    if (width < responsiveConfig.breakpoints.mobile) return 'mobile';
    if (width < responsiveConfig.breakpoints.tablet) return 'tablet';
    if (width < responsiveConfig.breakpoints.desktop) return 'desktop';
    return 'wide';
  },
  
  // Vérifier si c'est un appareil tactile
  isTouchDevice: () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },
  
  // Détecter la densité de pixels
  getPixelRatio: () => {
    return window.devicePixelRatio || 1;
  }
};

// 7. Configuration de la performance réseau
export const networkConfig = {
  // Détecter la connexion
  getConnectionType: () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (!connection) return 'unknown';
    
    const effectiveType = connection.effectiveType;
    
    switch (effectiveType) {
      case 'slow-2g':
      case '2g':
        return 'slow';
      case '3g':
        return 'medium';
      case '4g':
        return 'fast';
      default:
        return 'unknown';
    }
  },
  
  // Adapter le contenu selon la connexion
  adaptContent: () => {
    const connectionType = networkConfig.getConnectionType();
    
    return {
      loadHighQualityImages: connectionType === 'fast',
      load3DModels: connectionType !== 'slow',
      enableAnimations: connectionType !== 'slow',
      preloadContent: connectionType === 'fast'
    };
  }
};

// 8. Utilitaires de performance
export const performanceUtils = {
  // Debounce function pour limiter les appels
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function pour limiter la fréquence
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Mesurer les performances
  measurePerformance: (name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  },
  
  // Observer les changements de performance
  observePerformance: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} - ${entry.duration}ms`);
          }
        }
      });
      observer.observe({ entryTypes: ['measure'] });
    }
  }
};

// 9. Configuration SEO et métadonnées
export const seoConfig = {
  // Métadonnées par défaut
  defaultMeta: {
    title: 'Jordan FOGOU - Portfolio Développeur Full-Stack',
    description: 'Portfolio de Jordan FOGOU, développeur Full-Stack et passionné de DevSecOps. Découvrez mes projets et expériences.',
    keywords: 'développeur, full-stack, react, node.js, portfolio, jordan fogou',
    author: 'Jordan FOGOU',
    image: '/og-image.jpg',
    url: 'https://jordan-portfolio.vercel.app'
  },
  
  // Générer les métadonnées Open Graph
  generateOGMeta: (customMeta = {}) => {
    const meta = { ...seoConfig.defaultMeta, ...customMeta };
    return {
      'og:title': meta.title,
      'og:description': meta.description,
      'og:image': meta.image,
      'og:url': meta.url,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': meta.title,
      'twitter:description': meta.description,
      'twitter:image': meta.image
    };
  }
};

// 10. Hook personnalisé pour la performance
export const usePerformanceOptimization = () => {
  const [deviceType, setDeviceType] = React.useState(() => responsiveConfig.getDeviceType());
  const [connectionType, setConnectionType] = React.useState(() => networkConfig.getConnectionType());
  const [shouldReduceMotion, setShouldReduceMotion] = React.useState(() => animationConfig.prefersReducedMotion());
  
  React.useEffect(() => {
    // Écouter les changements de taille d'écran
    const handleResize = performanceUtils.debounce(() => {
      setDeviceType(responsiveConfig.getDeviceType());
    }, 100);
    
    // Écouter les changements de connexion
    const handleConnectionChange = () => {
      setConnectionType(networkConfig.getConnectionType());
    };
    
    // Écouter les changements de préférence de mouvement
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setShouldReduceMotion(e.matches);
    };
    
    window.addEventListener('resize', handleResize);
    
    if (navigator.connection) {
      navigator.connection.addEventListener('change', handleConnectionChange);
    }
    
    mediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', handleConnectionChange);
      }
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);
  
  return {
    deviceType,
    connectionType,
    shouldReduceMotion,
    adaptiveSettings: networkConfig.adaptContent(),
    isMobile: deviceType === 'mobile',
    isSlowConnection: connectionType === 'slow'
  };
};

// 11. Configuration d'initialisation
export const initializePerformanceOptimizations = () => {
  // Observer les performances
  performanceUtils.observePerformance();
  
  // Nettoyer le cache périodiquement
  setInterval(() => {
    if (memoryConfig.cache.size > memoryConfig.imageCacheLimit) {
      memoryConfig.clearCache();
    }
  }, memoryConfig.cleanupInterval);
  
  // Précharger les ressources critiques
  const preloadCriticalResources = () => {
    const links = [
      { rel: 'preload', href: '/new-profil image.jpg', as: 'image' },
      { rel: 'preload', href: '/favicon.ico', as: 'image' }
    ];
    
    links.forEach(link => {
      const linkElement = document.createElement('link');
      Object.keys(link).forEach(key => {
        linkElement[key] = link[key];
      });
      document.head.appendChild(linkElement);
    });
  };
  
  // Initialiser le préchargement si la connexion est rapide
  if (networkConfig.getConnectionType() === 'fast') {
    preloadCriticalResources();
  }
  
  console.log('🚀 Performance optimizations initialized');
};

export default {
  imageConfig,
  lazyLoadConfig,
  animationConfig,
  memoryConfig,
  model3DConfig,
  responsiveConfig,
  networkConfig,
  performanceUtils,
  seoConfig,
  usePerformanceOptimization,
  initializePerformanceOptimizations
};