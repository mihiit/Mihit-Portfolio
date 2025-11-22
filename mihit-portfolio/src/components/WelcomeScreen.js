// src/components/WelcomeScreen.js
import React, { useState } from "react";
import "./WelcomeScreen.css";

export default function WelcomeScreen({ onEnter }) {
  const [closing, setClosing] = useState(false);

  function handleClick() {
    // start CSS exit animation
    setClosing(true);

    // wait for animation, then remove overlay
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 650); // match CSS animation duration
  }

  return (
    <div className={`welcome-screen ${closing ? "closing" : ""}`}>
      {/* soft blue glow on left */}
      <div className="welcome-glow" />

      {/* shooting stars */}
      <div className="welcome-stars">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="welcome-content">
        <div className="welcome-circle">
          <div className="welcome-smoke">
            <span />
            <span />
            <span />
          </div>

          <span className="welcome-initials">MN</span>
        </div>

        <h1 className="welcome-title">Welcome to My World</h1>
        <p className="welcome-subtitle">
          I&apos;m <span className="welcome-name">Mihit Nanda</span>, a
          full-stack web developer crafting sleek, interactive experiences.
        </p>

        <button className="welcome-button" onClick={handleClick}>
          Enter Portfolio
        </button>
      </div>
    </div>
  );
}

