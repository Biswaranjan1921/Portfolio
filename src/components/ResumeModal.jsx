import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { personalDetails, experiences, projects, education, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Header */}
        <div className="p-4 px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="font-mono text-sm font-bold text-slate-200">
              Biswaranjan_Panda_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-slate-950 print:bg-white print:text-black font-sans text-sm">
          
          {/* Header section */}
          <div className="text-center pb-6 border-b border-slate-800 print:border-slate-300 space-y-2">
            <h1 className="text-3xl font-extrabold font-mono tracking-tight text-white print:text-black">
              BISWARANJAN PANDA
            </h1>
            <p className="text-sm font-semibold text-cyan-400 print:text-blue-600 font-mono">
              Java Developer | Software Engineer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 print:text-slate-700 font-mono pt-1">
              <span>+91-9861944502</span>
              <span>•</span>
              <span>biswaranjanpanda101@gmail.com</span>
              <span>•</span>
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/biswaranjanpanda</a>
              <span>•</span>
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/Biswaranjan1921</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              SUMMARY
            </h2>
            <p className="text-slate-300 print:text-slate-800 text-xs leading-relaxed">
              Final-year Computer Science student (CGPA 8.5) with strong skills in Java, Spring Boot, REST APIs, JDBC, Oracle DB, and Firebase. Built 5+ end-to-end projects, improving ML accuracy by 18% and reducing processing time by 25%. Proficient in OOP, DSA, and scalable backend development, with multiple hackathon wins and a focus on delivering high-impact solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-300 print:text-slate-800">
              <div><strong className="text-slate-100 print:text-black font-mono">Languages:</strong> Java (OOP, Collections, Multithreading), SQL, Python</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Web:</strong> HTML5, CSS3, JavaScript</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Databases:</strong> Oracle DB, Firebase Realtime DB / Firestore</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Backend:</strong> Spring Boot, REST APIs, JDBC</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Build &amp; Quality:</strong> JUnit, Mockito, JMeter, SonarQube</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Logging/Tools:</strong> SLF4J, ELK Stack, Git, GitHub, Postman</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              WORK EXPERIENCE
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <strong className="text-slate-100 print:text-black text-sm">{exp.role} — {exp.company}</strong>
                  <span className="text-slate-400 print:text-slate-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1 pt-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              KEY PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-mono">
                    <strong className="text-slate-100 print:text-black text-sm">{proj.title}</strong>
                    <span className="text-cyan-400 print:text-blue-600 text-[11px]">{proj.tech.slice(0, 4).join(' · ')}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-0.5">
                    {proj.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-1.5 text-xs font-mono">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-center text-slate-300 print:text-slate-800">
                  <div>
                    <strong className="text-slate-100 print:text-black">{edu.degree}</strong> — {edu.institution}
                  </div>
                  <div className="text-cyan-300 print:text-blue-600 font-bold">
                    {edu.grade} | {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              CERTIFICATIONS &amp; ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1">
              {achievements.map((item) => (
                <li key={item.id}>
                  <strong className="text-slate-100 print:text-black font-mono">{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
