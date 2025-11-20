// src/components/Contact.js
import React from 'react';

export default function Contact({ email, socials }) {
  return (
    <section id="contact" className="section">
      <h3 className="section-title">Contact</h3>
      <p>If you'd like to reach out — email me at <a href={`mailto:${email}`}>{email}</a></p>
      <p>
        <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> •
        <a href={socials.github} target="_blank" rel="noreferrer"> GitHub</a>
      </p>
    </section>
  );
}
