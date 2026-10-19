import { Suspense, lazy } from 'react';
import { profile } from '../data';

const Computer = lazy(() => import('./Computer'));

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-content container">
        <img className="hero-photo" src={encodeURI(profile.photo)} alt={profile.name} />

        {/* Point + trait vertical, repris de la structure d'origine */}
        <div className="hero-line" aria-hidden="true">
          <span className="hero-line-dot" />
          <span className="hero-line-bar" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Bonjour, je suis Jordan</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-status">{profile.status}</p>
        </div>
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
