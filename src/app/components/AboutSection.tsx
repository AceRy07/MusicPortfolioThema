import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="w-full bg-obsidian py-20 md:py-32 px-6 md:px-[120px] flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start">
        
        {/* Editorial Photo */}
        <div className="w-full md:w-5/12 aspect-[3/4] rounded-2xl overflow-hidden relative grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1504063038433-1137dec5462a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjBtb29keSUyMHBvcnRyYWl0JTIwbXVzaWNpYW58ZW58MXx8fHwxNzgyNzYzNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elias in the studio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Storytelling Text */}
        <div className="w-full md:w-7/12 flex flex-col justify-center pt-8 md:pt-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sand mb-8">
            The Sound <br/><span className="text-sand/50 italic font-normal">of Silence</span>
          </h2>
          
          <div className="font-sans text-sand/80 text-base md:text-lg leading-[1.8] font-light space-y-6 max-w-2xl">
            <p>
              Born out of the quiet hours of the night, my music is an exploration of the spaces between words. What started as late-night acoustic sessions in a small studio apartment has evolved into a cinematic soundscape blending organic instrumentation with moody electronics.
            </p>
            <p>
              "Midnight Echos" is a reflection of the past two years—a period of isolation, introspection, and eventual rediscovery. It's not just an album; it's a journal written in reverb and syncopation. I want listeners to feel both the vastness of an empty city and the intimacy of a whispered secret.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            {/* Signature Graphic placeholder */}
            <div className="font-serif text-3xl md:text-4xl text-sand italic tracking-wider opacity-60">
              Elias.
            </div>
            <div className="h-px w-12 bg-sand/30 mt-4"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
