// src/components/Skills.js
import React from "react";
import "./Skills.css";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-card">
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
