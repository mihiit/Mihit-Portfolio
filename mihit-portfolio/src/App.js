// src/App.js
import React from 'react';
import data from './data';
import NavBar from './components/NavBar';   // <-- new
// import Header from './components/Header'; // removed (replaced by NavBar)
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <NavBar /> {/* top navigation */}
      <main className="container">
        <Hero data={data} />
        <About intro={data.intro} location={data.location} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Projects projects={data.projects} />
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer note={data.footerNote} />
    </div>
  );
}

export default App;


