import React from 'react';
import { Menu, Instagram, Youtube, Twitter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AppleMusicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" /><path d="M12 6v6l4 2" /></svg>
); // Placeholder for custom icons

const SpotifyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 11.9c3.2-1.3 7-1 9.9.8"/><path d="M7 14.9c2.8-1 6-1 8.5.5"/><path d="M6 17.9c2.5-1 5.5-1 7.5.5"/></svg>
);

export function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-between overflow-hidden bg-obsidian">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-[120px] mix-blend-difference text-sand">
        <div className="font-serif text-2xl font-bold tracking-widest uppercase">
          Elias.
        </div>
        <button className="p-2 -mr-2" aria-label="Menu">
          <Menu className="w-8 h-8" strokeWidth={1.5} />
        </button>
      </header>

      {/* Background Portrait */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb29keSUyMHBvcnRyYWl0JTIwbXVzaWNpYW58ZW58MXx8fHwxNzgyNzYzNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Elias playing guitar in cinematic lighting"
          className="w-full h-full object-cover"
        />
        {/* Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-16 md:pb-24 pt-32 h-full justify-end w-full max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="font-sans text-sm md:text-base tracking-[0.2em] text-sand/70 uppercase mb-2">
            The New Album
          </p>
          <h1 className="font-serif text-6xl md:text-9xl font-semibold text-sand leading-none tracking-tight mb-8">
            Midnight<br />Echos
          </h1>
        </div>
        
        {/* Social Icons Row */}
        <div className="flex items-center gap-6 mt-4">
          {[
            { icon: SpotifyIcon, label: 'Spotify' },
            { icon: AppleMusicIcon, label: 'Apple Music' },
            { icon: Youtube, label: 'YouTube' },
            { icon: Instagram, label: 'Instagram' },
          ].map((social, i) => (
            <a 
              key={i} 
              href="#" 
              aria-label={social.label}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-sand/30 text-sand hover:bg-sand hover:text-obsidian transition-colors duration-300"
            >
              <social.icon strokeWidth={1.5} size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
