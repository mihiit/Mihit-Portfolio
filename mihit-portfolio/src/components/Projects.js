// src/components/Projects.js
import React from 'react';
const TECH_LOGOS = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];


export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h3 className="section-title">Projects</h3>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-thumb">
  <div className="project-track">
    {TECH_LOGOS.concat(TECH_LOGOS).map((logo, index) => (
      <div className="project-logo-pill" key={logo.name + index}>
        <img src={logo.src} alt={logo.name} />
        <span>{logo.name}</span>
      </div>
    ))}
  </div>
</div>

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
