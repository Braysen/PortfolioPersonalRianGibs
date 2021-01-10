import React from 'react';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import QualificationSection from './components/QualificationSection';
import ServicesSection from './components/ServicesSection';
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
            </main>
          </>
  );
}

export default App;