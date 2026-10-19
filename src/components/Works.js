import Section from './Section';
import { projects } from '../data';

export default function Works() {
  return (
    <Section
      id="projets"
      title="Mes projets"
      intro="Une sélection de projets d’école, personnels et professionnels."
    >
      <ul className="projects">
        {projects.map((project) => (
          <li
            key={project.name}
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
          >
            <div className="project-top">
              <h3>{project.name}</h3>
              {project.label && <span className="project-label">{project.label}</span>}
            </div>
            <p className="project-desc">{project.description}</p>
            <ul className="project-tags" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.live && (
              <div className="project-actions">
                <a className="button" href={project.live} target="_blank" rel="noreferrer">
                  {project.featured ? 'Voir l’application en ligne' : 'Voir le site'}
                </a>
                {project.note && <span className="project-note">{project.note}</span>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
