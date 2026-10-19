import React, { Suspense, lazy, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  profile,
  about,
  featuredProject,
  projects,
  experiences,
  skills,
  extras,
} from './data';
import './App.css';

const PCModel = lazy(() => import('./PCModel'));

const sections = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

// Section active = la dernière dont le haut a dépassé le premier tiers de l'écran
function useActiveSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const update = () => {
      const limit = window.innerHeight / 3;
      let current = null;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= limit) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return active;
}

function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Socials() {
  return (
    <ul className="socials">
      <li>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label="Envoyer un email">
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
}

function Nav({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="nav-inner">
        <a href="#top" className="nav-name">
          {profile.name}
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>
        <ul id="nav-links" className={`nav-links${open ? ' is-open' : ''}`}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a className="button button-small" href={encodeURI(profile.cv)} download>
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-text">
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="pitch">{profile.pitch}</p>
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>
        <div className="hero-actions">
          <a className="button" href="#projets">
            Voir mes projets
          </a>
          <a className="button button-ghost" href={encodeURI(profile.cv)} download>
            Télécharger mon CV
          </a>
          <Socials />
        </div>
      </div>
      <div className="hero-model">
        <Suspense fallback={<div className="model-placeholder" aria-hidden="true" />}>
          <PCModel />
        </Suspense>
      </div>
    </header>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Featured() {
  const p = featuredProject;
  return (
    <article className="featured">
      <a href={p.live} target="_blank" rel="noreferrer" className="featured-shot">
        <img src={p.image} alt={p.imageAlt} loading="lazy" width="1917" height="912" />
      </a>
      <div className="featured-body">
        <h3 className="featured-title">
          <a href={p.live} target="_blank" rel="noreferrer">
            {p.title}
          </a>
        </h3>
        <p className="meta">{p.subtitle}</p>
        <p className="prose">{p.description}</p>
        <ul className="points">
          {p.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <Stack items={p.stack} />
        <p className="featured-actions">
          <a className="button" href={p.live} target="_blank" rel="noreferrer">
            Voir l’application en ligne
          </a>
          <span className="hint">{p.note}</span>
        </p>
      </div>
    </article>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Nav active={active} />
      <div className="page">
        <Hero />

        <main id="contenu">
          <Section id="a-propos" title="À propos">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="prose">
                {paragraph}
              </p>
            ))}
          </Section>

          <Section id="projets" title="Projets">
            <Featured />
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.title} className="project">
                  <div className="project-head">
                    <h3>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    {project.status && <span className="tag">{project.status}</span>}
                  </div>
                  <p>{project.description}</p>
                  <Stack items={project.stack} />
                </li>
              ))}
            </ul>
          </Section>

          <Section id="experiences" title="Expériences">
            <ol className="timeline">
              {experiences.map((exp) => (
                <li key={exp.company} className="job">
                  <p className="job-period">{exp.period}</p>
                  <div>
                    <h3 className="job-title">
                      {exp.role}, <span className="job-company">{exp.company}</span>
                    </h3>
                    <p className="meta">{exp.place}</p>
                    <ul className="points">
                      {exp.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <Stack items={exp.stack} />
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="competences" title="Compétences">
            <dl className="skills">
              {skills.map(({ group, items }) => (
                <div key={group} className="skill-row">
                  <dt>{group}</dt>
                  <dd>{items.join(', ')}</dd>
                </div>
              ))}
              <div className="skill-row">
                <dt>En dehors du code</dt>
                <dd>{extras.join(', ')}</dd>
              </div>
            </dl>
          </Section>

          <Section id="contact" title="Contact">
            <p className="prose">
              Vous cherchez un stagiaire de fin d’études en full-stack ou en data à partir de février
              2027 ? Écrivez-moi, je réponds rapidement.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-links">
              <Socials />
              <span className="meta">Basé en {profile.location}</span>
            </div>
          </Section>
        </main>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}. Code source sur{' '}
            <a href="https://github.com/jordanfogou/Jordan-Portfolio" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
