import { useState } from 'react';
import Section from './Section';
import { experiences } from '../data';

function Logo({ src, company }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="timeline-initial">{company.charAt(0)}</span>;
  }
  return <img src={src} alt="" onError={() => setFailed(true)} />;
}

// Frise verticale : ligne centrale, cartes en alternance gauche / droite
export default function Experience() {
  return (
    <Section id="experiences" title="Mes expériences professionnelles">
      <ol className="timeline">
        {experiences.map((exp) => (
          <li key={exp.company} className="timeline-item">
            <div className="timeline-icon" title={exp.company}>
              <Logo src={exp.logo} company={exp.company} />
            </div>
            <p className="timeline-date">{exp.period}</p>
            <article className="timeline-card">
              <h3>{exp.role}</h3>
              <p className="timeline-company">
                {exp.company}, {exp.place}
              </p>
              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
