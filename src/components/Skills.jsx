import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Code2, Database, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const categoryIcons = {
    "Languages & Core": Code2,
    "Backend & Databases": Database,
    "Testing, Quality & DevOps": ShieldCheck,
    "IDEs & Developer Tools": Wrench
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
              /technical-skills
            </h2>
            <p className="text-xs text-slate-400 font-mono">Languages, Frameworks, DBs & Build Tools</p>
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Code2;
            return (
              <div 
                key={category.name}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 font-mono">
                    {category.name}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-200 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
