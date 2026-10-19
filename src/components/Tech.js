import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaChartBar, FaDatabase, FaTools, FaNetworkWired } from 'react-icons/fa';
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiOpenjdk,
  SiSpringboot,
  SiDotnet,
  SiPhp,
  SiPython,
  SiPandas,
  SiPostgresql,
  SiZoho,
  SiChartdotjs,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiRender,
  SiLinux,
  SiCisco,
  SiWireshark,
  SiKalilinux,
} from 'react-icons/si';
import Section from './Section';
import { skillGroups } from '../data';
import { fadeUp, inView, pop, stagger } from '../motion';

// Ajouter ici l'icône (react-icons/si) d'une nouvelle compétence de data.js
const skillIcons = {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiOpenjdk,
  SiSpringboot,
  SiDotnet,
  SiPhp,
  SiPython,
  SiPandas,
  SiPostgresql,
  SiZoho,
  SiChartdotjs,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiRender,
  SiLinux,
  SiCisco,
  SiWireshark,
  SiKalilinux,
};

const groupIcons = {
  front: FaLaptopCode,
  back: FaServer,
  data: FaChartBar,
  db: FaDatabase,
  tools: FaTools,
  network: FaNetworkWired,
};

// Toutes les compétences, sans doublon, pour le bandeau défilant
const allSkills = [
  ...new Map(skillGroups.flatMap((g) => g.skills).map((s) => [s.name, s])).values(),
];

function Marquee({ items, reverse }) {
  // La liste est dupliquée pour que la boucle soit continue
  return (
    <div className={`marquee${reverse ? ' marquee--reverse' : ''}`} aria-hidden="true">
      <ul className="marquee-track">
        {[...items, ...items].map((skill, i) => {
          const Icon = skillIcons[skill.icon];
          return (
            <li key={`${skill.name}-${i}`} className="marquee-item">
              {Icon && <Icon />}
              <span>{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Tech() {
  const half = Math.ceil(allSkills.length / 2);
  return (
    <Section
      id="competences"
      title="Mes compétences"
      intro="Les technologies que j’utilise, regroupées par domaine."
    >
      <motion.div className="marquees" variants={fadeUp(0.1)} {...inView}>
        <Marquee items={allSkills.slice(0, half)} />
        <Marquee items={allSkills.slice(half)} reverse />
      </motion.div>

      <motion.ul className="skill-groups" variants={stagger(0.1)} {...inView}>
        {skillGroups.map((group) => {
          const GroupIcon = groupIcons[group.icon];
          return (
            <motion.li key={group.title} className="skill-group" variants={fadeUp()}>
              <div className="skill-group-head">
                <span className="skill-group-icon">
                  <GroupIcon aria-hidden="true" />
                </span>
                <h3>{group.title}</h3>
              </div>
              <motion.ul className="skill-chips" variants={stagger(0.05, 0.15)}>
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill.icon];
                  return (
                    <motion.li
                      key={skill.name}
                      className="skill-chip"
                      variants={pop}
                      whileHover={{ y: -3 }}
                    >
                      {Icon && <Icon aria-hidden="true" />}
                      {skill.name}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
