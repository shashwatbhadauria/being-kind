import React from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'About', href: '#ch1' },
  { label: 'Why', href: '#ch2' },
  { label: 'How', href: '#ch3' },
  { label: 'Get Involved', href: '#ch4' },
  { label: 'Donate', highlight: true },
  { label: 'Instagram', external: 'https://www.instagram.com/beingkind_india/' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function MenuOverlay({ isOpen, onClose }) {
  // Sections mapped to chapter IDs
  const sections = [
    { label: 'About', id: 'ch1' },
    { label: 'Why', id: 'ch2' },
    { label: 'How We Help', id: 'ch3' },
    { label: 'Get Involved', id: 'ch4' },
  ];

  const handleSectionClick = (id) => {
    scrollTo(id);
    onClose();
  };

  return (
    <div
      className={`menu-overlay${isOpen ? ' menu-open' : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Navigation menu"
      id="menu-overlay"
    >
      {/* Close button */}
      <button
        className="menu-close-btn"
        onClick={onClose}
        aria-label="Close menu"
        id="menu-close-btn"
      >
        ×
      </button>

      {/* Navigation */}
      <nav aria-label="Main navigation">
        <ul className="menu-nav">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                className="menu-nav-link"
                onClick={() => handleSectionClick(s.id)}
                style={{ display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                {s.label}
              </button>
            </li>
          ))}
          <li>
            <a
              className="menu-nav-link menu-link-gold"
              href="https://www.instagram.com/beingkind_india/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </li>
        </ul>
      </nav>

      {/* Social / bottom links */}
      <div className="menu-bottom">
        <a
          href="https://www.instagram.com/beingkind_india/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-social-link"
        >
          Instagram
        </a>
        <a href="mailto:beingkind.india@gmail.com" className="menu-social-link">
          Email Us
        </a>
        <a href="tel:+91" className="menu-social-link">
          Contact
        </a>
      </div>
    </div>
  );
}
