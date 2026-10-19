import { useState } from 'react';
import { navLinks, profile } from '../data';

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-inner">
        <a
          href="#top"
          className="brand"
          onClick={() => {
            setOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            JF
          </span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} aria-current={active === link.id ? 'true' : undefined}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a className="button nav-cv" href={encodeURI(profile.cv)} download>
          Télécharger mon CV
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="nav-mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a className="button" href={encodeURI(profile.cv)} download onClick={() => setOpen(false)}>
            Télécharger mon CV
          </a>
        </div>
      )}
    </nav>
  );
}
