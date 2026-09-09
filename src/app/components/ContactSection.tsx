import React, { useState } from 'react';
import { Instagram, Youtube } from 'lucide-react';

const AppleMusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" /><path d="M12 6v6l4 2" /></svg>
); 

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 11.9c3.2-1.3 7-1 9.9.8"/><path d="M7 14.9c2.8-1 6-1 8.5.5"/><path d="M6 17.9c2.5-1 5.5-1 7.5.5"/></svg>
);

export function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  return (
    <section className="w-full bg-charcoal pt-20 md:pt-32 flex flex-col border-t border-border-subtle relative z-20">
      
      {/* Contact Form */}
      <div className="w-full max-w-3xl mx-auto px-6 md:px-[120px] mb-24 md:mb-32">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sand mb-4">Get In Touch</h2>
          <p className="font-sans text-sand/60 text-sm md:text-base uppercase tracking-widest">Booking & Inquiries</p>
        </div>

        <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
          
          <div className="relative">
            <input 
              type="text" 
              id="name"
              className="peer w-full bg-transparent border-b border-sand/20 py-3 font-sans text-sand text-lg focus:outline-none focus:border-sand transition-colors placeholder-transparent"
              placeholder="Name"
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 top-3 font-sans text-sand/50 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sand/80"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input 
              type="email" 
              id="email"
              className="peer w-full bg-transparent border-b border-sand/20 py-3 font-sans text-sand text-lg focus:outline-none focus:border-sand transition-colors placeholder-transparent"
              placeholder="Email"
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 top-3 font-sans text-sand/50 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sand/80"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea 
              id="message"
              rows={4}
              className="peer w-full bg-transparent border-b border-sand/20 py-3 font-sans text-sand text-lg focus:outline-none focus:border-sand transition-colors placeholder-transparent resize-none"
              placeholder="Message"
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
            />
            <label 
              htmlFor="message" 
              className="absolute left-0 top-3 font-sans text-sand/50 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-sand/80"
            >
              Message
            </label>
          </div>

          <button 
            type="submit"
            className="w-full mt-4 bg-sand text-obsidian font-sans font-semibold uppercase tracking-widest text-sm py-5 rounded-lg hover:bg-sand/90 active:scale-[0.99] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full px-6 py-8 md:px-[120px] md:py-12 border-t border-border-subtle bg-obsidian flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif text-xl font-bold tracking-widest text-sand uppercase">
          Elias.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sand/50 hover:text-sand transition-colors p-2"><SpotifyIcon /></a>
          <a href="#" className="text-sand/50 hover:text-sand transition-colors p-2"><AppleMusicIcon /></a>
          <a href="#" className="text-sand/50 hover:text-sand transition-colors p-2"><Youtube size={20} strokeWidth={1.5}/></a>
          <a href="#" className="text-sand/50 hover:text-sand transition-colors p-2"><Instagram size={20} strokeWidth={1.5}/></a>
        </div>

        <p className="font-sans text-xs text-sand/40">
          © {new Date().getFullYear()} Elias Music. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
