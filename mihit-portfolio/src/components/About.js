// src/components/About.js
import React from 'react';

export default function About({ intro, location }) {
  return (
    <section id="about" className="section">
      <h3 className="section-title">About</h3>
      <p>{intro}</p>
      <p><strong>Location:</strong> {location}</p>
    </section>
  );
}
