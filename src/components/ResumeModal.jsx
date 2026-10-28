import React from 'react';
import { X, Printer } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

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
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
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
              Java Developer / Software Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 print:text-slate-700 font-mono pt-1">
              <span>+91-9861944502</span>
              <span>|</span>
              <a href="mailto:biswaranjanpanda101@gmail.com" className="hover:underline">biswaranjanpanda101@gmail.com</a>
              <span>|</span>
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/biswaranjanpanda</a>
              <span>|</span>
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:underline">github.com/Biswaranjan1921</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              SUMMARY
            </h2>
            <p className="text-slate-300 print:text-slate-800 text-xs leading-relaxed">
              {personalDetails.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-300 print:text-slate-800">
              <div><strong className="text-slate-100 print:text-black font-mono">Language:</strong> Java (OOP, Collections, Multithreading, Exception Handling), SQL</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Web:</strong> HTML5, CSS3, JavaScript</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Database:</strong> Oracle DB, Firebase Realtime DB / Firestore</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Backend:</strong> Spring Boot</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Build Tools:</strong> Maven, Gradle, JUnit, Mockito, JMeter</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Logging &amp; Monitoring:</strong> SLF4J, ELK Stack</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Code Quality:</strong> SonarQube</div>
              <div><strong className="text-slate-100 print:text-black font-mono">Tools:</strong> Git, GitHub, Postman</div>
              <div><strong className="text-slate-100 print:text-black font-mono">CI &amp; CD Tools:</strong> Jenkins, Docker</div>
              <div><strong className="text-slate-100 print:text-black font-mono">IDE:</strong> VS Code, Eclipse, STS</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              EXPERIENCE
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline font-mono text-xs">
                <strong className="text-slate-100 print:text-black text-sm">Research Intern — DRDO, Balasore</strong>
                <span className="text-slate-400 print:text-slate-600">May 2025 – Jun 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1 pl-1">
                <li>Built a rainfall prediction system using regression ML models; improved forecast accuracy by 18%.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              
              {/* Project 1 */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-100 print:text-black text-sm">
                    DROP — Rainfall Prediction System
                  </span>
                  <span className="text-cyan-400 print:text-blue-600 text-[11px] font-mono">
                    Web Development · React · HTML · CSS · JavaScript
                  </span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-0.5 pl-1">
                  <li>Developed an interactive React dashboard for visualising rainfall data and ML predictions, supporting analysis of 10,000+ data points with 85% prediction accuracy.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-100 print:text-black text-sm">
                    Student Result Management System
                  </span>
                  <span className="text-cyan-400 print:text-blue-600 text-[11px] font-mono">
                    Java · JDBC · Oracle SQL · HTML/CSS
                  </span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-0.5 pl-1">
                  <li>Full CRUD web app for student records, courses, and grades — role-based login (Admin/Student).</li>
                  <li>Oracle DB backend via JDBC; HTML/CSS frontend with session-based authentication.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-100 print:text-black text-sm">
                    Smart Hostel Management System
                  </span>
                  <span className="text-cyan-400 print:text-blue-600 text-[11px] font-mono">
                    Java · HTML · CSS
                  </span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-0.5 pl-1">
                  <li>Web-based automation system for hostel operations: room allocation, fee payment, attendance, complaints, and visitor management.</li>
                  <li>QR-based meal verification; streamlined administrative processes and improved student–Warden communication through a centralised platform.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-300 print:text-slate-800 border-b border-slate-800/40 pb-1">
                <div>
                  <strong className="text-slate-100 print:text-black">B.Tech in CSE</strong> — BCET Balasore (BPUT)
                </div>
                <div className="text-cyan-300 print:text-blue-600 font-bold">
                  2022 – 2026 | CGPA: 8.5 / 10
                </div>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-800 border-b border-slate-800/40 pb-1">
                <div>
                  <strong className="text-slate-100 print:text-black">Higher Secondary (+2 Science)</strong> — CHSE Odisha
                </div>
                <div className="text-cyan-300 print:text-blue-600 font-bold">
                  2020 – 2022 | 83.56%
                </div>
              </div>
              <div className="flex justify-between items-center text-slate-300 print:text-slate-800">
                <div>
                  <strong className="text-slate-100 print:text-black">Matriculation (10th)</strong> — BSE Odisha
                </div>
                <div className="text-cyan-300 print:text-blue-600 font-bold">
                  2018 – 2020 | 81.65%
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase text-cyan-400 print:text-blue-600 tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
              CERTIFICATIONS &amp; ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1.5 pl-1">
              <li>
                <strong className="text-slate-100 print:text-black font-mono">1st Place — Line Following Robot, IIT Bhubaneswar</strong>
              </li>
              <li>
                <strong className="text-slate-100 print:text-black font-mono">IoT Specialist — NIT Rourkela:</strong> Built IoT solutions using sensors and automation.
              </li>
              <li>
                <strong className="text-slate-100 print:text-black font-mono">Winner — BPUT Hackathon 2025:</strong> Led a scalable solution, demonstrating strong problem-solving and rapid prototyping skills.
              </li>
              <li>
                <strong className="text-slate-100 print:text-black font-mono">Winner — InspraNo Hackathon, GCEK:</strong> Developed and delivered an innovative real-world solution under tight deadlines, demonstrating strong teamwork and technical expertise.
              </li>
              <li>
                <strong className="text-slate-100 print:text-black font-mono">Winner — BPUT Tech Carnival 2025–26:</strong> Secured top position by developing an innovative, high-impact solution under competitive conditions.
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
