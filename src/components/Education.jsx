import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              /academic-education
            </h2>
            <p className="text-xs text-slate-400 font-mono">Degree, High School &amp; Foundational Education</p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {edu.degree}
                  </h3>
                </div>
                
                <p className="text-sm font-medium text-slate-300 pl-9">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 pl-9 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                <span className="px-3 py-1.5 rounded-xl font-mono text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {edu.grade}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {edu.period}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
