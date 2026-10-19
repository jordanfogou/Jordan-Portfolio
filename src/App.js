import React, { useEffect, useState } from 'react';
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

const sections = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'projets', label: 'Projets' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

// Surligne dans le sommaire la section en cours de lecture
function useActiveSection() {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    // Section active = la dernière dont le haut a dépassé le premier tiers de l'écran
    const update = () => {
      const limit = window.innerHeight / 3;
      let current = sections[0].id;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= limit) current = id;
      });
      // En bas de page, la dernière section est forcément celle qu'on lit
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

function Sidebar({ active }) {
  return (
    <header className="sidebar">
      <div>
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="pitch">{profile.pitch}</p>
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>

        <nav className="toc" aria-label="Sommaire">
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <a className="button" href={encodeURI(profile.cv)} download>
          Télécharger mon CV
        </a>
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
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="a-propos" className="section">
      <h2 className="section-title">À propos</h2>
      {about.map((paragraph) => (
        <p key={paragraph.slice(0, 20)} className="prose">
          {paragraph}
        </p>
      ))}
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

function Projects() {
  return (
    <section id="projets" className="section">
      <h2 className="section-title">Projets</h2>
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
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="section">
      <h2 className="section-title">Expériences</h2>
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
    </section>
  );
}

function Skills() {
  return (
    <section id="competences" className="section">
      <h2 className="section-title">Compétences</h2>
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
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>
      <p className="prose">
        Vous recrutez un stagiaire de fin d’études, ou vous voulez parler d’un projet ? Écrivez-moi,
        je réponds rapidement.
      </p>
      <p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </p>
      <p className="meta">Basé en {profile.location}</p>
    </section>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <div className="layout">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Sidebar active={active} />
      <main id="contenu" className="content">
        <About />
        <Projects />
        <Experiences />
        <Skills />
        <Contact />
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}. Code source sur{' '}
            <a href="https://github.com/jordanfogou/Jordan-Portfolio" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
