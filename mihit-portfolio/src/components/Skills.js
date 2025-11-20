// src/components/Skills.js
import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <h3 className="section-title">Skills</h3>
      <ul className="skills-list">
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </section>
  );
}
