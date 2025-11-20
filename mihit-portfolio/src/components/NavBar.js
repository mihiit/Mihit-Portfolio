// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  // ----------------------
  // APPLY SAVED THEME
  // ----------------------
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  // ----------------------
  // TOGGLE THEME
  // ----------------------
  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // ----------------------
  // ACTIVE SECTION ON SCROLL
  // ----------------------
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];

    function onScroll() {
      const fromTop = window.scrollY + 120;
      let current = 'home';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= fromTop) current = id;
      });

      setActive(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ----------------------
  // SMOOTH SCROLL TO SECTION
  // ----------------------
  function handleClick(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <header className="site-nav">
      <div className="nav-inner container">

        {/* Brand */}
        <div
          className="nav-left"
          onClick={() => handleClick('home')}
          role="button"
          tabIndex={0}
        >
          <span className="brand">Mihit Nanda</span>
        </div>

        {/* 🌙 DARK MODE BUTTON */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
          🌙
        </button>

        {/* Hamburger */}
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <button
            className={active === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >
            About
          </button>

          <button
            className={active === 'projects' ? 'active' : ''}
            onClick={() => handleClick('projects')}
          >
            Projects
          </button>

          <button
            className={active === 'experience' ? 'active' : ''}
            onClick={() => handleClick('experience')}
          >
            Experience
          </button>

          <button
            className={active === 'contact' ? 'active' : ''}
            onClick={() => handleClick('contact')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}


