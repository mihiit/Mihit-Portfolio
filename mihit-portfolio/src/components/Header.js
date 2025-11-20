// src/components/Header.js
import React from 'react';

export default function Header({ name }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">{name}</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
