// src/components/Hero.js
import React from "react";
import "./Hero.css"; // IMPORTANT: this enables the new sexy design

export default function Hero({ data }) {
  // Resume path (public folder)
  const resumePath =
    process.env.PUBLIC_URL +
    (data.socials && data.socials.resume
      ? data.socials.resume
      : "/_mihit_nanda.pdf");

  // Profile image path (public folder)
  const profilePath = process.env.PUBLIC_URL + "/profile.jpeg";

  // Handle smooth scroll + highlight Projects
  function goToProjects() {
    const el = document.getElementById("projects");
    if (!el) return;

    const navHeight = 70; // matches your NavBar height
    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;

    // Smooth scroll
    window.scrollTo({ top: y, behavior: "smooth" });

    // Tell Navbar to highlight Projects tab
    window.dispatchEvent(
      new CustomEvent("set-active-section", { detail: "projects" })
    );
  }

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h2>
          Hello, I'm <span className="highlight">{data.name}</span>
        </h2>

        <p className="hero-title">{data.title}</p>

        <p className="hero-desc">{data.intro}</p>

        <div className="hero-cta">
          <a className="btn" href={resumePath} download>
            Download CV
          </a>

          <button
            type="button"
            className="btn btn-outline"
            onClick={goToProjects}
            aria-label="See Projects"
          >
            See Projects
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={profilePath}
          alt={`${data.name} profile`}
          className="profile-photo"
        />
      </div>
    </section>
  );
}



