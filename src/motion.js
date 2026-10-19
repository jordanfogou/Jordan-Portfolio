// Variantes d'animation partagées (framer-motion).
// Les animations sont désactivées automatiquement si l'utilisateur réduit les animations (MotionConfig dans App.js).

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

export const slideIn = (from = 'left', delay = 0) => ({
  hidden: { opacity: 0, x: from === 'left' ? -60 : 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
});

export const stagger = (step = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

export const pop = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

// Déclenche l'animation quand l'élément entre à l'écran, une seule fois
export const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.2 } };
