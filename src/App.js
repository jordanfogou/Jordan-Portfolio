// src/App.js - Version avec fond uniforme global
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      
      {/* FOND GLOBAL - Uniforme sur toute la page */}
      <div className="fixed inset-0 z-0">
        <BackgroundAnimation />
      </div>
      
      {/* CONTENU - Au-dessus du fond */}
      <div className="relative z-10">
        
        {/* Header : Présentation rapide et navigation */}
        <Header />
        
        {/* Expériences professionnelles : Stages et emplois précédents */}
        <section id="experiences" className="section-unified">
          <Projects />
        </section>
        
        {/* Projets Réalisés : Portfolio de projets */}
        <section id="projects" className="section-unified">
          <ProjectsGrid />
        </section>
        
        {/* Compétences : Compétences techniques et personnelles */}
        <section id="competences" className="section-unified">
          <Skills />
        </section>

        {/* Contact : Formulaire de contact */}
        <section id="contact" className="section-unified">
          <Contact />
        </section>

        {/* Footer : Informations supplémentaires */}
        <Footer />
        
      </div>
    </div>
  );
}

export default App;