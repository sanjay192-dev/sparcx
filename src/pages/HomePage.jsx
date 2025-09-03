import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import TechStackSection from '../components/TechStackSection';
import CallToActionSection from '../components/CallToActionSection'; // Import CallToActionSection

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection />
      <CallToActionSection /> {/* Include CallToActionSection */}
    </div>
  );
}

export default HomePage;
