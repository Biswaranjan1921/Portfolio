import React, { useState, useEffect } from 'react';
import { ArrowUp, FileText, Send, Sparkles } from 'lucide-react';

export default function ScrollProgressDock({ onOpenResume }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrolled);
      setShowBackToTop(totalScroll > 350);

      // Identify active section
      const sections = ['about', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scroll Indicator Line */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-forest-bg/40">
        <div 
          className="h-full bg-gradient-to-r from-olive-700 via-olive-500 to-sage-400 shadow-[0_0_12px_rgba(163,217,91,0.6)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating Bottom Quick Navigation Dock */}
      <div 
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 transition-all duration-300 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass-panel px-3.5 py-2 rounded-2xl border border-olive-700/60 shadow-2xl backdrop-blur-xl flex items-center gap-3">
          
          {/* Active section tag */}
          <div className="hidden sm:flex items-center gap-2 border-r border-olive-800/80 pr-3">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-ping"></span>
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">
              #{activeSection}
            </span>
          </div>

          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="p-2 rounded-xl bg-forest-card hover:bg-olive-900/60 text-slate-300 hover:text-sage-300 border border-olive-800/60 transition-all text-xs font-mono flex items-center gap-1.5"
            title="Open Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-sage-400" />
            <span className="hidden md:inline">Resume</span>
          </button>

          {/* Quick Contact Button */}
          <a
            href="#contact"
            className="p-2 rounded-xl bg-forest-card hover:bg-olive-900/60 text-slate-300 hover:text-sage-300 border border-olive-800/60 transition-all text-xs font-mono flex items-center gap-1.5"
            title="Contact Biswaranjan"
          >
            <Send className="w-3.5 h-3.5 text-sage-400" />
            <span className="hidden md:inline">Contact</span>
          </a>

          {/* Scroll to Top with Circular Progress */}
          <button
            onClick={scrollToTop}
            className="relative w-9 h-9 rounded-xl bg-olive-600 hover:bg-olive-500 text-white flex items-center justify-center shadow-lg shadow-olive-900/50 hover:scale-105 transition-all group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </>
  );
}
