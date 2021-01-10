import React from 'react';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectSection from './components/ProjectSection';
import QualificationSection from './components/QualificationSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import './prueba.css'

function App() {

  return (
          <>
            <Header/>
            <main className="l-main">
              <HomeSection/>
              <AboutSection/>
              <QualificationSection/>
              <ServicesSection/>
              <ProjectSection/>
              <PortfolioSection/>
              <TestimonialSection/>
            </main>
          </>
  );
}

export default App;