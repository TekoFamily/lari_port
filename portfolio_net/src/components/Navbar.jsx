import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const [logoText, setLogoText] = useState('larissa');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const names = ['larissa', 'lari'];
    let i = 0;
    const id = setInterval(() => {
      i = 1 - i;
      setLogoText(names[i]);
    }, 500);
    return () => clearInterval(id);
  }, []);

  // Função para navegação SPA e scroll suave
  const handleNavClick = (section) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Espera a Home carregar antes de rolar
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          {logoText}
        </Link>

        <nav className="nav-menu">
          <a href="#about" className="nav-link" onClick={handleNavClick('about')}>About</a>
          <a href="#works" className="nav-link" onClick={handleNavClick('works')}>Works</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick('contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};
