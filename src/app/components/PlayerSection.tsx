import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const TRACKS = [
  { id: 1, title: 'Fading Lights', duration: '3:42', explicit: false },
  { id: 2, title: 'Midnight Echos', duration: '4:15', explicit: true },
  { id: 3, title: 'City Sleeps', duration: '2:58', explicit: false },
  { id: 4, title: 'Whispers in the Dark', duration: '5:01', explicit: true },
  { id: 5, title: 'Dawn Chorus', duration: '3:20', explicit: false },
];

export function PlayerSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(2);

  return (
    <section className="w-full bg-obsidian py-20 md:py-32 px-6 md:px-[120px] flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Now Playing Card */}
        <div className="w-full md:w-1/2 flex flex-col bg-charcoal rounded-2xl p-6 md:p-8 border border-border-subtle shadow-2xl">
          <div className="w-full aspect-square rounded-lg overflow-hidden shadow-xl mb-8 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1766153550988-121007d31002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYWJzdHJhY3QlMjBjaW5lbWF0aWMlMjB0ZXh0dXJlJTIwYWxidW0lMjBjb3ZlcnxlbnwxfHx8fDE3ODI3NjM1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Midnight Echos Album Cover"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col mb-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-sand mb-1">
              {TRACKS.find(t => t.id === activeTrack)?.title}
            </h3>
            <p className="font-sans text-sand/60 text-sm md:text-base">Elias</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex flex-col gap-2 mb-8">
            <div className="w-full h-1 bg-border-subtle rounded-full overflow-hidden relative cursor-pointer flex items-center">
              <div className="absolute left-0 top-0 h-full bg-sand w-1/3 rounded-full"></div>
              <div className="absolute left-1/3 w-3 h-3 bg-sand rounded-full -ml-1.5 shadow-sm transform scale-0 hover:scale-100 transition-transform"></div>
            </div>
            <div className="w-full flex justify-between font-sans text-xs text-sand/50">
              <span>1:15</span>
              <span>4:15</span>
            </div>
          </div>

          {/* Controls */}
          <div className="w-full flex items-center justify-between px-2">
            <button className="text-sand/60 hover:text-sand transition-colors w-12 h-12 flex items-center justify-center">
              <Shuffle size={20} />
            </button>
            <button className="text-sand hover:text-sand/80 transition-colors w-12 h-12 flex items-center justify-center">
              <SkipBack size={24} fill="currentColor" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 md:w-20 md:h-20 bg-sand text-obsidian rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-sand hover:text-sand/80 transition-colors w-12 h-12 flex items-center justify-center">
              <SkipForward size={24} fill="currentColor" />
            </button>
            <button className="text-sand/60 hover:text-sand transition-colors w-12 h-12 flex items-center justify-center">
              <Repeat size={20} />
            </button>
          </div>
        </div>

        {/* Tracklist */}
        <div className="w-full md:w-1/2 flex flex-col bg-charcoal rounded-2xl p-4 md:p-6 border border-border-subtle max-h-[500px] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {TRACKS.map((track) => {
              const isActive = track.id === activeTrack;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-colors text-left min-h-[64px] ${
                    isActive ? 'bg-sand/10 border border-sand/20' : 'hover:bg-sand/5 border border-transparent'
                  }`}
                >
                  <span className={`font-sans text-sm font-medium w-6 text-center ${isActive ? 'text-sand' : 'text-sand/50'}`}>
                    {isActive && isPlaying ? <div className="flex gap-0.5 justify-center h-3 items-end">
                      <div className="w-1 bg-sand h-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 bg-sand h-2/3 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1 bg-sand h-4/5 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div> : track.id}
                  </span>
                  
                  <div className="flex flex-col flex-1">
                    <span className={`font-sans font-medium line-clamp-1 ${isActive ? 'text-sand' : 'text-sand/80'}`}>
                      {track.title}
                    </span>
                  </div>

                  {track.explicit && (
                    <span className="text-[10px] uppercase font-bold border border-sand/40 text-sand/60 px-1.5 py-0.5 rounded-sm">
                      E
                    </span>
                  )}

                  <span className="font-sans text-xs text-sand/50 w-10 text-right">
                    {track.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
