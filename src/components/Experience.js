import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Section from './Section';
import { experiences } from '../data';
import { inView, slideIn } from '../motion';

function Logo({ src, company }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="timeline-initial">{company.charAt(0)}</span>;
  return <img src={src} alt="" onError={() => setFailed(true)} />;
}

// Frise verticale : la ligne se remplit au fil du défilement,
// les cartes arrivent depuis leur côté (gauche / droite en alternance).
export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experiences" title="Mes expériences professionnelles">
      <ol className="timeline" ref={listRef}>
        <motion.span className="timeline-progress" style={{ scaleY: progress }} aria-hidden="true" />
        {experiences.map((exp, i) => (
          <li key={exp.company} className="timeline-item">
            <motion.div
              className="timeline-icon"
              title={exp.company}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <Logo src={exp.logo} company={exp.company} />
            </motion.div>
            <p className="timeline-date">{exp.period}</p>
            <motion.article
              className="timeline-card"
              variants={slideIn(i % 2 === 0 ? 'left' : 'right')}
              {...inView}
            >
              <h3>{exp.role}</h3>
              <p className="timeline-company">
                {exp.company}, {exp.place}
              </p>
              <ul className="timeline-points">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="timeline-stack">
                <p className="timeline-stack-title">Stack technique</p>
                <ul>
                  {exp.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
