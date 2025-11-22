// src/App.js
import React, { useState } from "react";
import data from "./data";

import NavBar from "./components/NavBars";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

import "./styles.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  function handleWelcomeDone() {
    setShowWelcome(false);
  }

  return (
    <div className="app">
      {/* Main site is always rendered under the welcome overlay */}
      <NavBar />
      <main className="container app-main">
        <Hero data={data} />
        <About intro={data.intro} location={data.location} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Projects projects={data.projects} />
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer note={data.footerNote} />

      {/* Cinematic overlay */}
      {showWelcome && <WelcomeScreen onEnter={handleWelcomeDone} />}
    </div>
  );
}

export default App;



