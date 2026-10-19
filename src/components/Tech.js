import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiOpenjdk,
  SiDotnet,
  SiPhp,
  SiPython,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiCisco,
} from 'react-icons/si';
import Section from './Section';
import { technologies } from '../data';

// Ajouter ici l'icône (react-icons/si) d'une nouvelle techno de data.js
const icons = {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiOpenjdk,
  SiDotnet,
  SiPhp,
  SiPython,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiCisco,
};

export default function Tech() {
  return (
    <Section id="competences" title="Mes compétences">
      <ul className="tech-grid">
        {technologies.map((tech) => {
          const Icon = icons[tech.icon];
          return (
            <li key={tech.name} className="tech-item">
              <span className="tech-disc">{Icon && <Icon aria-hidden="true" />}</span>
              <span className="tech-name">{tech.name}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
