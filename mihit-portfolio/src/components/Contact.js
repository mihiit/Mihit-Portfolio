// src/components/Contact.js
import React from "react";
import "./Contact.css";

export default function Contact({ email, socials }) {
  return (
    <section id="contact" className="section">
      <div className="contact-card">
        <h2 className="section-title">Contact</h2>
        <p>If you'd like to reach out — email me at {email}</p>
        <p>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          •{" "}
          <a href={socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
