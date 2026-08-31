import React from 'react';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl max-w-2xl w-full flex flex-col shadow-2xl overflow-hidden my-auto animate-float">
        
        {/* Modal Top Header */}
        <div className="p-4 px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
            {project.category}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-100">
              {project.title}
            </h2>
            <p className="text-cyan-400 font-mono text-xs mt-1">
              {project.tagline}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Project Architecture &amp; Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements & Details */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Key Engineering Highlights
            </h3>
            {project.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-cyan-300 border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-800/80 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-[11px] font-mono text-cyan-400">Impact Metric</p>
                <p className="text-xs font-bold text-slate-200">{project.metrics}</p>
              </div>
            </div>
          )}

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
