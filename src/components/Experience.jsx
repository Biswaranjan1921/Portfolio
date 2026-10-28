import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              /work-experience
            </h2>
            <p className="text-xs text-slate-400 font-mono">Research Internship &amp; Technical Roles</p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
            >
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 mb-2">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 font-sans">
                    {exp.role} — <span className="text-cyan-400">{exp.company}</span>
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description & Impact Metrics */}
              <div className="mt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
