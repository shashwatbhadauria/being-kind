import React from 'react';

// Being Kind India chapter nav config
const CHAPTERS = [
  { id: 'ch1', label: '1. ABOUT BEING KIND', position: 'top' },
  { id: 'ch2', label: '2. WHY STRAYS SUFFER', position: 'right' },
  { id: 'ch3', label: '3. HOW WE HELP', position: 'bottom' },
  { id: 'ch4', label: '4. GET INVOLVED', position: 'left' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function SiteFrame({ onMenuOpen, activeChapter }) {
  return (
    <>
      {/* 4 fixed border lines */}
      <div className="frame-border frame-top" aria-hidden="true" />
      <div className="frame-border frame-right" aria-hidden="true" />
      <div className="frame-border frame-bottom" aria-hidden="true" />
      <div className="frame-border frame-left" aria-hidden="true" />

      {/* Chapter navigation labels */}
      <button
        className={`chapter-nav chapter-nav-top${activeChapter === 'ch1' ? ' active' : ''}`}
        onClick={() => scrollTo('ch1')}
        aria-label="Go to About Being Kind"
      >
        1. ABOUT BEING KIND →
      </button>

      <button
        className={`chapter-nav chapter-nav-right${activeChapter === 'ch2' ? ' active' : ''}`}
        onClick={() => scrollTo('ch2')}
        aria-label="Go to Why Strays Suffer"
      >
        2. WHY STRAYS SUFFER →
      </button>

      <button
        className={`chapter-nav chapter-nav-bottom${activeChapter === 'ch3' ? ' active' : ''}`}
        onClick={() => scrollTo('ch3')}
        aria-label="Go to How We Help"
      >
        3. HOW WE HELP →
      </button>

      <button
        className={`chapter-nav chapter-nav-left${activeChapter === 'ch4' ? ' active' : ''}`}
        onClick={() => scrollTo('ch4')}
        aria-label="Go to Get Involved"
      >
        4. GET INVOLVED ↓
      </button>

      {/* Logo — two concentric circles */}
      <a href="/" className="site-logo" aria-label="Being Kind India — Home">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18.5" stroke="#1c1852" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="12" stroke="#1c1852" strokeWidth="1" />
        </svg>
      </a>

      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        onClick={onMenuOpen}
        aria-label="Open menu"
        id="hamburger-btn"
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>
    </>
  );
}
