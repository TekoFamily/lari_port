import React, { useState, useEffect } from 'react';

export default function Navbar(props) {
  const [logoText, setLogoText] = useState('larissa');

  useEffect(() => {
    const names = ['larissa', 'lari'];
    let i = 0;
    const id = setInterval(() => {
      i = 1 - i;
      setLogoText(names[i]);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          {logoText}
        </a>

        <nav className="nav-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#works" className="nav-link">Works</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};
