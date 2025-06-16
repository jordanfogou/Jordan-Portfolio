import React, { useState, useRef, useEffect } from 'react';

// Hook pour détecter si l'élément est visible (Intersection Observer)
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasBeenVisible, options]);

  return [elementRef, isVisible, hasBeenVisible];
};

// Composant d'image optimisée avec lazy loading et WebP
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loadingClassName = '',
  errorClassName = '',
  quality = 80,
  sizes = '',
  priority = false,
  ...props 
}) => {
  const [imageRef, isVisible, hasBeenVisible] = useIntersectionObserver();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  // Générer les sources d'images optimisées
  const generateImageSources = (originalSrc) => {
    if (!originalSrc) return { webp: null, fallback: originalSrc };
    
    // Si c'est une URL complète, la retourner telle quelle
    if (originalSrc.startsWith('http') || originalSrc.startsWith('//')) {
      return { webp: null, fallback: originalSrc };
    }

    const extension = originalSrc.split('.').pop().toLowerCase();
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    
    return {
      webp: `${baseName}.webp`,
      fallback: originalSrc
    };
  };

  const { webp, fallback } = generateImageSources(src);

  useEffect(() => {
    if (priority || hasBeenVisible) {
      setImageSrc(src);
    }
  }, [src, priority, hasBeenVisible]);

  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setLoaded(false);
  };

  // Placeholder pendant le chargement
  const renderPlaceholder = () => (
    <div className={`
      ${className} 
      ${loadingClassName}
      bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 
      animate-pulse 
      flex items-center justify-center
      relative overflow-hidden
    `}>
      {/* Animation de shimmer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Icône de chargement */}
      <div className="text-gray-400 text-center">
        <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs opacity-70">Chargement...</span>
      </div>
    </div>
  );

  // Placeholder en cas d'erreur
  const renderError = () => (
    <div className={`
      ${className} 
      ${errorClassName}
      bg-gray-800 
      flex items-center justify-center
      border-2 border-dashed border-gray-600
    `}>
      <div className="text-gray-400 text-center">
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <span className="text-xs">Image non disponible</span>
      </div>
    </div>
  );

  return (
    <div ref={imageRef} className="relative">
      {!imageSrc || (!loaded && !error) ? renderPlaceholder() : null}
      
      {error ? renderError() : null}
      
      {imageSrc && (
        <picture className={loaded ? 'block' : 'hidden'}>
          {/* Source WebP si disponible */}
          {webp && (
            <source
              srcSet={webp}
              type="image/webp"
              sizes={sizes}
            />
          )}
          
          {/* Image de fallback */}
          <img
            src={fallback}
            alt={alt}
            className={`${className} transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

// Composant spécialisé pour les images de projet
export const ProjectImage = ({ src, alt, className = '' }) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={`w-full h-48 object-cover rounded-lg ${className}`}
    loadingClassName="w-full h-48 rounded-lg"
    errorClassName="w-full h-48 rounded-lg"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
);

// Composant spécialisé pour les images de profil
export const ProfileImage = ({ src, alt, className = '' }) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={`rounded-full object-cover ${className}`}
    loadingClassName="rounded-full"
    errorClassName="rounded-full"
    priority={true}
    sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
  />
);

// Composant spécialisé pour les logos d'entreprises
export const CompanyLogo = ({ src, alt, className = '' }) => (
  <OptimizedImage
    src={src}
    alt={alt}
    className={`object-contain bg-gradient-to-br from-blue-500 to-indigo-700 p-2 shadow-2xl ${className}`}
    loadingClassName="rounded-full"
    errorClassName="rounded-full"
    sizes="(max-width: 768px) 80px, 96px"
  />
);

export default OptimizedImage;