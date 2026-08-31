import React from 'react';
import { stats } from '../data/portfolioData';
import { Award, Code2, Trophy, TrendingUp } from 'lucide-react';

export default function StatsBar() {
  const icons = [Award, Trophy, Code2, TrendingUp];

  return (
    <section className="py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={stat.label}
                className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-900">
                    VERIFIED
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
