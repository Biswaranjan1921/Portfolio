import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Github, Sparkles, ChevronRight } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web & React', 'Java & Backend', 'Full Stack Automation'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => {
        if (activeCategory === 'Web & React') return p.category.includes('React') || p.tech.includes('React');
        if (activeCategory === 'Java & Backend') return p.category.includes('Java') || p.tech.includes('Java');
        if (activeCategory === 'Full Stack Automation') return p.category.includes('Full Stack') || p.tech.includes('Hostel');
        return true;
      });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                /featured-projects
              </h2>
              <p className="text-xs text-slate-400 font-mono">Production Applications, Systems &amp; ML Models</p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group glow-card overflow-hidden"
            >
              
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {project.metrics.split('·')[0]}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
                >
                  <span>Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
