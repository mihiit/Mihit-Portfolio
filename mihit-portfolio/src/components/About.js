// src/components/About.js
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h2 className="section-title">About</h2>

        <p className="about-text">
          I’m a third-year Computer Science student at IILM University, Greater Noida,
          with a strong interest in <strong>Artificial Intelligence</strong> and
          <strong> software development</strong>.
        </p>

        <p className="about-text">
          I recently completed a summer internship at <strong>GSPANN</strong>, where I worked on
          front-end development for an e-commerce application. This experience helped me apply
          technical concepts to real-world projects, improve my problem-solving abilities,
          and gain hands-on exposure in building user-centered digital products.
        </p>

        <p className="about-text">
          I’m deeply curious about how AI can transform industries and enhance human decision-making.
          To expand my understanding, I attend seminars, tech talks, and workshops that explore
          innovative ideas and emerging technologies.
        </p>

        <p className="about-text">
          Beyond academics, I enjoy contributing to community service initiatives and believe in
          using technology as a tool for social impact. I’m eager to keep learning, building
          meaningful projects, and contributing to the evolving world of technology and AI.
        </p>
      </div>
    </section>
  );
}

