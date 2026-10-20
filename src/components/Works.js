import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTasks, FaBrain } from 'react-icons/fa';
import Section from './Section';
import { projects } from '../data';
import { fadeUp, inView, stagger } from '../motion';
import { asset } from '../asset';

// Visuel de remplacement pour un projet sans capture
const coverIcons = { tasks: FaTasks, ml: FaBrain };

function Cover({ project }) {
  if (project.image) {
    return <img src={asset(project.image)} alt={`Aperçu du projet ${project.name}`} loading="lazy" width="960" height="600" />;
  }
  const Icon = coverIcons[project.icon] || FaTasks;
  return (
    <div className="project-cover-fallback">
      <Icon aria-hidden="true" />
      <span>{project.name}</span>
    </div>
  );
}

export default function Works() {
  return (
    <Section
      id="projets"
      title="Mes projets"
      intro="Projets d’équipe et personnels autour de la donnée : modélisation, tableaux de bord, deep learning, et les applications qui les font vivre."
    >
      <motion.ul className="projects" variants={stagger(0.1)} {...inView}>
        {projects.map((project) => (
          <motion.li
            key={project.name}
            className={`project-card spot${project.featured ? ' project-card--featured' : ''}`}
            variants={fadeUp()}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <div className="project-cover">
              <Cover project={project} />
              {project.github && (
                <a
                  className="project-github"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Code source de ${project.name} sur GitHub`}
                >
                  <FaGithub />
                </a>
              )}
            </div>

            <div className="project-body">
              <div className="project-top">
                <h3>{project.name}</h3>
                {project.label && <span className="project-label">{project.label}</span>}
              </div>
              <p className="project-desc">{project.description}</p>
              <ul className="project-tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
              {(project.live || project.github) && (
                <div className="project-links">
                  {project.live && (
                    <a className="button button-small" href={project.live} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt aria-hidden="true" /> Voir en ligne
                    </a>
                  )}
                  {project.github && (
                    <a className="button button-small button-ghost" href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub aria-hidden="true" /> Code source
                    </a>
                  )}
                </div>
              )}
              {project.featured && project.live && (
                <p className="project-note">Hébergement gratuit : le premier chargement peut prendre jusqu’à une minute.</p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
