import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { User, CheckCircle2, MapPin, GraduationCap, Building2, Flame } from 'lucide-react';

export default function About() {
  const highlights = [
    "Expertise in Java (OOP, Collections, Multithreading, Exception Handling)",
    "Backend engineering with Spring Boot, REST APIs, JDBC & Oracle Database",
    "Hands-on ML Research experience at DRDO Balasore (+18% accuracy boost)",
    "4x Hackathon Winner (BPUT Tech Carnival, IIT Bhubaneswar Robot Race 1st place)",
    "Clean code practices with SonarQube, JUnit/Mockito testing, & ELK logging",
    "Strong foundation in Data Structures, Algorithms & Database Systems"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              /about-me
            </h2>
            <p className="text-xs text-slate-400 font-mono">Background, Philosophy & Core Strengths</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Content */}
          <div className="lg:col-span-7 space-y-6 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>Passionate Java Developer & Backend Architect</span>
            </h3>

            {personalDetails.bio.map((paragraph, i) => (
              <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">
                Key Strengths & Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary Info Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Specs */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-wider">
                Quick Facts
              </h4>
              
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    Degree:
                  </span>
                  <span className="font-semibold text-slate-200">B.Tech CSE (2022-2026)</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    University:
                  </span>
                  <span className="font-semibold text-slate-200">BCET Balasore (BPUT)</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    Location:
                  </span>
                  <span className="font-semibold text-slate-200">{personalDetails.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">CGPA:</span>
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 font-mono font-bold border border-cyan-500/30">
                    8.5 / 10
                  </span>
                </div>
              </div>
            </div>

            {/* DRDO Research Highlight Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-500/30">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>RESEARCH SPOTLIGHT</span>
              </div>
              <h5 className="font-bold text-sm text-slate-100">
                DRDO Rainfall Prediction System ('DROP')
              </h5>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Applied regression ML models to over 10,000 meteorological records at DRDO PXE Balasore, improving prediction accuracy by <strong>18%</strong>.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
