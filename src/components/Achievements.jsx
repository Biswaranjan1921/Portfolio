import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Flag } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              /achievements-&amp;-awards
            </h2>
            <p className="text-xs text-slate-400 font-mono">Hackathon Championships &amp; Robotics Titles</p>
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-4 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/80">
                  {item.badge}
                </span>
              </div>

              {/* Title & Org */}
              <div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1">
                  <Flag className="w-3 h-3" />
                  {item.organization} ({item.year})
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
