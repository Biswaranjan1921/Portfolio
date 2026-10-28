import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  FileText, 
  Award, 
  Code2, 
  Terminal, 
  Sparkles,
  Database,
  Cpu
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenResume, darkMode }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/60 dark:bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Final-Year CSE @ BCET Balasore (CGPA 8.5)</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                Hi, I'm <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {personalDetails.name}
                </span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-300 font-mono flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span> Java Developer / Software Developer
              </p>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Building robust <span className="text-slate-200 font-medium">Spring Boot enterprise services</span>, <span className="text-slate-200 font-medium">Oracle DB architectures</span>, and <span className="text-slate-200 font-medium">applied ML systems</span>. Research Intern at <strong className="text-cyan-400">DRDO Balasore</strong> &amp; 5x Hackathon &amp; Robotics Winner.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 shadow-md transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  title="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  title="Call Me"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Code Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-slate-800/90 relative overflow-hidden group">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>DeveloperService.java</span>
                </div>
              </div>

              {/* IDE Code Snippet Display */}
              <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto p-2">
                <code>
<span className="text-purple-400">@Service</span>{'\n'}
<span className="text-purple-400">@Transactional</span>{'\n'}
<span className="text-blue-400">public class</span> <span className="text-cyan-300">DeveloperService</span> &#123;{'\n\n'}
{'  '}<span className="text-slate-500">// DRDO Research & 5x Hackathon Winner</span>{'\n'}
{'  '}<span className="text-blue-400">private final</span> String engineer = <span className="text-emerald-300">"Biswaranjan Panda"</span>;{'\n'}
{'  '}<span className="text-blue-400">private final</span> double cgpa = <span className="text-amber-300">8.5</span>;{'\n\n'}
{'  '}<span className="text-purple-400">@Autowired</span>{'\n'}
{'  '}<span className="text-blue-400">public</span> TechStack getCoreCompetencies() &#123;{'\n'}
{'    '}return TechStack.builder(){'\n'}
{'      '}.primaryLanguage(<span className="text-emerald-300">"Java (OOP, Collections)"</span>){'\n'}
{'      '}.framework(<span className="text-emerald-300">"Spring Boot / REST APIs"</span>){'\n'}
{'      '}.database(<span className="text-emerald-300">"Oracle DB, Firebase"</span>){'\n'}
{'      '}.researchInternship(<span className="text-emerald-300">"DRDO Balasore"</span>){'\n'}
{'      '}.hackathonWins(<span className="text-amber-300">5</span>){'\n'}
{'      '}.build();{'\n'}
{'  '}&#125;{'\n'}
&#125;
                </code>
              </pre>

              {/* Glowing Badge Floating Overlay */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Cpu className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span>Spring Boot + JDBC Engine</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  BUILD SUCCESSFUL
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
