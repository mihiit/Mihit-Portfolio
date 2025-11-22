// src/components/NavBar.js
import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // listen for "set-active-section" from Hero (See Projects button)
  useEffect(() => {
    function onSetActiveSection(e) {
      if (e && e.detail) setActive(e.detail);
    }
    window.addEventListener("set-active-section", onSetActiveSection);
    return () => window.removeEventListener("set-active-section", onSetActiveSection);
  }, []);

  function handleClick(id) {
    setOpen(false);
    setActive(id);

    const el = document.getElementById(id);
    if (el) {
      const navHeight = 70;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <header className="site-nav">
      <div className="nav-inner container">
        {/* Brand */}
        <div
          className="nav-left"
          onClick={() => handleClick("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick("home")}
        >
          <span className="brand">Mihit Nanda</span>
        </div>

        {/* Mobile burger */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <nav className={`nav-links ${open ? "open" : ""}`} role="navigation">
          <button
            className={active === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </button>
          <button
            className={active === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            Projects
          </button>
          <button
            className={active === "experience" ? "active" : ""}
            onClick={() => handleClick("experience")}
          >
            Experience
          </button>
          <button
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}




