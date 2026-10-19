import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-meta">{profile.email}</p>
          <p className="footer-meta">{profile.location}</p>
        </div>
        <ul className="footer-links">
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
    </footer>
  );
}
