import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SiteFrame from './components/layout/SiteFrame';
import MenuOverlay from './components/layout/MenuOverlay';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('ch1');

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Fixed viewport frame + chapter labels + logo + hamburger */}
      <SiteFrame
        onMenuOpen={() => setMenuOpen(true)}
        activeChapter={activeChapter}
      />

      {/* Full-screen menu overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Page content */}
      <Outlet context={{ setActiveChapter }} />
    </div>
  );
}
