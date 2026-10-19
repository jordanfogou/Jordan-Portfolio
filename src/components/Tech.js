import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaChartBar, FaDatabase, FaTools, FaNetworkWired, FaLayerGroup } from 'react-icons/fa';
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
  all: FaLayerGroup,
  front: FaLaptopCode,
  back: FaServer,
  data: FaChartBar,
  db: FaDatabase,
  tools: FaTools,
  network: FaNetworkWired,
};

// Toutes les compétences sans doublon
const allSkills = [...new Map(skillGroups.flatMap((g) => g.skills).map((s) => [s.name, s])).values()];

/* ---------- Nuage 3D ---------- */

// Répartit n points de façon régulière sur une sphère (spirale de Fibonacci)
function spherePoints(n) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });
}

function SkillCloud({ highlighted }) {
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);
  const highlightRef = useRef(highlighted);
  highlightRef.current = highlighted;
  const points = useMemo(() => spherePoints(allSkills.length), []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let radius = wrap.offsetWidth * 0.38;
    let rotX = 0.3;
    let rotY = 0;
    let speedX = 0.0015; // vitesse de base : rotation lente et continue
    let speedY = 0.004;
    let targetX = speedX;
    let targetY = speedY;
    let frame = 0;

    const render = () => {
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      points.forEach((p, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        // Rotation autour de Y puis de X
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;
        const depth = (z2 + 1) / 2; // 0 = derrière, 1 = devant
        const scale = 0.55 + depth * 0.65;
        const lit = highlightRef.current(allSkills[i].name);
        const opacity = (0.25 + depth * 0.75) * (lit ? 1 : 0.18);
        el.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y2 * radius}px, 0) scale(${scale})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(Math.round(depth * 100));
        el.dataset.lit = lit ? 'true' : 'false';
      });
    };

    const loop = () => {
      speedX += (targetX - speedX) * 0.05;
      speedY += (targetY - speedY) * 0.05;
      rotX += speedX;
      rotY += speedY;
      render();
      frame = requestAnimationFrame(loop);
    };

    // La souris oriente la rotation : plus elle est loin du centre, plus ça tourne vite
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      targetY = dx * 0.04;
      targetX = -dy * 0.04;
    };
    const onLeave = () => {
      targetX = 0.0015;
      targetY = 0.004;
    };

    const ro = new ResizeObserver(() => {
      radius = wrap.offsetWidth * 0.38;
      render();
    });
    ro.observe(wrap);

    if (reduce) {
      render();
    } else {
      wrap.addEventListener('pointermove', onMove);
      wrap.addEventListener('pointerleave', onLeave);
      frame = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, [points]);

  return (
    <div className="cloud" ref={wrapRef} aria-hidden="true">
      <div className="cloud-glow" />
      {allSkills.map((skill, i) => {
        const Icon = skillIcons[skill.icon];
        return (
          <span key={skill.name} className="cloud-item" ref={(el) => (itemRefs.current[i] = el)}>
            {Icon && <Icon />}
            <span>{skill.name}</span>
          </span>
        );
      })}
    </div>
  );
}

/* ---------- Bandeau défilant ---------- */

function Marquee({ items }) {
  return (
    <div className="marquee" aria-hidden="true">
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

/* ---------- Section ---------- */

const tabs = [{ title: 'Tout', icon: 'all', skills: allSkills }, ...skillGroups];

export default function Tech() {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  const names = useMemo(() => new Set(current.skills.map((s) => s.name)), [current]);

  return (
    <Section
      id="competences"
      title="Mes compétences"
      intro="Choisissez un domaine : les technologies correspondantes s’allument dans le nuage. Survolez le nuage pour le faire tourner."
    >
      <div className="skills-layout">
        <motion.div variants={fadeUp()} {...inView}>
          <SkillCloud highlighted={(name) => names.has(name)} />
        </motion.div>

        <motion.div className="skills-explorer" variants={fadeUp(0.15)} {...inView}>
          <div className="skill-tabs" role="tablist" aria-label="Domaines de compétences">
            {tabs.map((tab, i) => {
              const Icon = groupIcons[tab.icon];
              const selected = i === active;
              return (
                <button
                  key={tab.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skill-panel"
                  className="skill-tab"
                  onClick={() => setActive(i)}
                >
                  {selected && (
                    <motion.span
                      layoutId="skill-tab-pill"
                      className="skill-tab-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon aria-hidden="true" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          <div id="skill-panel" role="tabpanel" className="skill-panel spot">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <p className="skill-panel-count">
                  {current.skills.length} technologies{current.icon === 'all' ? '' : ` en ${current.title.toLowerCase()}`}
                </p>
                <motion.ul className="skill-chips" variants={stagger(0.04)} initial="hidden" animate="show">
                  {current.skills.map((skill) => {
                    const Icon = skillIcons[skill.icon];
                    return (
                      <motion.li key={skill.name} className="skill-chip" variants={pop} whileHover={{ y: -3, scale: 1.04 }}>
                        {Icon && <Icon aria-hidden="true" />}
                        {skill.name}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeUp(0.1)} {...inView}>
        <Marquee items={allSkills} />
      </motion.div>
    </Section>
  );
}
