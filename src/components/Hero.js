import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import { fadeUp, stagger } from '../motion';
import { asset } from '../asset';

const Computer = lazy(() => import('./Computer'));

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-content container">
        <motion.img
          className="hero-photo"
          src={asset(profile.photo)}
          alt={profile.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Point + trait vertical qui se dessine au chargement */}
        <div className="hero-line" aria-hidden="true">
          <span className="hero-line-dot" />
          <motion.span
            className="hero-line-bar"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          />
        </div>

        <motion.div className="hero-text" variants={stagger(0.12, 0.2)} initial="hidden" animate="show">
          <motion.h1 className="hero-title" variants={fadeUp()}>
            Bonjour, je suis Jordan
          </motion.h1>
          <motion.p className="hero-role" variants={fadeUp()}>
            {profile.role}
          </motion.p>
          <motion.p className="hero-intro" variants={fadeUp()}>
            {profile.intro}
          </motion.p>
          <motion.p className="hero-status" variants={fadeUp()}>
            {profile.status}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp()}>
            <a className="button" href="#projets">
              Voir mes projets
            </a>
            <a className="button button-ghost" href="#contact">
              Me contacter
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-computer">
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
      </div>

      <a href="#a-propos" className="scroll-hint" aria-label="Descendre à la section À propos">
        <span />
      </a>
    </header>
  );
}
