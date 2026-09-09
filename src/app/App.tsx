import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PlayerSection } from './components/PlayerSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-obsidian text-sand selection:bg-sand/30 selection:text-sand font-sans overflow-x-hidden">
      <HeroSection />
      <PlayerSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
