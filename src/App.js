// src/App.js
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Header : Présentation rapide et navigation */}
      <Header />
      {/* Expériences professionnelles : Stages et emplois précédents */}
      <section id="experiences" className="relative z-10 px-4 sm:px-8 py-8">
        <Projects />
      </section>
      {/* Projets Réalisés : Portfolio de projets */}
      <section id="projects" className="relative z-10 px-4 sm:px-8 py-8">
        <ProjectsGrid />
      </section>
      {/* Compétences : Compétences techniques et personnelles */}
      <section id="competences" className="relative z-10 px-4 sm:px-8 py-8">
        <Skills />
      </section>

  

      {/* Contact : Formulaire de contact */}
      <section id="contact" className="relative z-10 px-4 sm:px-8 py-8">
        <Contact />
      </section>

      {/* Footer : Informations supplémentaires */}
      <Footer />
    </div>
  );
}

export default App;
