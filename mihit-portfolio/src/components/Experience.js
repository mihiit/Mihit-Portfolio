// src/components/Experience.js
import React from 'react';

export default function Experience({ items }) {
  return (
    <section id="experience" className="section">
      <h3 className="section-title">Experience</h3>
      <div className="experience-list">
        {items.map((e, idx) => (
          <div className="exp-item" key={idx}>
            <h4>{e.role} <span className="muted">— {e.company}</span></h4>
            <div className="muted">{e.period}</div>
            <p>{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
