// src/components/About.js
import React from "react";
import "./About.css";

export default function About({ intro, location }) {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h2 className="section-title">About</h2>
        <p className="about-text">{intro}</p>
        <p className="about-location">
          <strong>Location:</strong> {location}
        </p>
      </div>
    </section>
  );
}

