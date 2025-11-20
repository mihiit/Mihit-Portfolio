// src/components/Hero.js
import React from 'react';

export default function Hero({ data }) {
  // use process.env.PUBLIC_URL to reliably reference files in public/
  const resumePath = process.env.PUBLIC_URL + (data.socials && data.socials.resume ? data.socials.resume : '/_mihit_nanda.pdf');
  const profilePath = process.env.PUBLIC_URL + '/profile.jpeg'; // change if you used a different name

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h2>Hello, I'm <span className="highlight">{data.name}</span></h2>
        <p className="hero-title">{data.title}</p>
        <p className="hero-desc">{data.intro}</p>
        <div className="hero-cta">
          {/* download attribute forces browser to download the file */}
          <a className="btn" href={resumePath} download>Download CV</a>
          <a className="btn btn-outline" href="#projects">See Projects</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profilePath} alt={`${data.name} profile`} className="profile-photo" />
        <div className="hero-meta">
          <div><strong>Location</strong><div>{data.location}</div></div>
        </div>
      </div>
    </section>
  );
}
