// src/components/Projects.js
import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h3 className="section-title">Projects</h3>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-thumb"></div>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <div className="tech">
              {p.tech.map((t, idx) => <span className="tag" key={idx}>{t}</span>)}
            </div>
            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer">Live</a>
              <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
