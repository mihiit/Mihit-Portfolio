// src/components/Hero.js
import React from 'react';

export default function Hero({ data }) {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h2>Hello, I'm <span className="highlight">{data.name}</span></h2>
        <p className="hero-title">{data.title}</p>
        <p className="hero-desc">{data.intro}</p>
        <div className="hero-cta">
          <a className="btn" href={data.socials.resume}>Download CV</a>
          <a className="btn btn-outline" href="#projects">See Projects</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/profile.jpg" alt={data.name} className="profile-photo" />
        <div className="hero-meta">
          <div><strong>Location</strong><div>{data.location}</div></div>
        </div>
      </div>
    </section>
  );
}
