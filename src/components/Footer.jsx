import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold font-mono text-sm">
              BP
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-slate-200">
                Biswaranjan Panda
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Java Developer &amp; Backend Specialist
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back To Top Button */}
          <div className="flex items-center gap-3">
            <p className="text-xs text-slate-500 font-mono">
              © {new Date().getFullYear()} Biswaranjan Panda. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
