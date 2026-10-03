import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { EXPERIENCE_DATA, FEATURED_PROJECTS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hiya Porwal Resume Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0e111c] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090b13]/95 border-b border-slate-800 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
              OFFICIAL RESUME
            </span>
            <span className="text-xs font-mono text-slate-400">Hiya Porwal · Updated 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090b12] text-slate-300 font-sans print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              HIYA PORWAL
            </h1>
            <p className="text-sm font-semibold text-amber-400 print:text-gray-800 mt-1 font-mono">
              Computational Data Science | Data • AI/ML • Software
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-gray-600 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-400" />
                hiyaporwal89@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3 text-cyan-400" />
                linkedin.com/in/hiya-porwal
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3 text-slate-400" />
                github.com/Hiyaporwal
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                VIT Bhopal / Rajasthan, India
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              Integrated M.Tech Computational Data Science student at VIT Bhopal University. Experienced across data analytics, business intelligence, machine learning, and software engineering through 4 industry internships. Strong track record in standardizing industrial process datasets, building interactive Power BI dashboards, and developing full-stack database-backed applications.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.degree} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-white print:text-black">{edu.institution}</div>
                    <div className="text-slate-400 print:text-gray-700">{edu.degree}</div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-amber-400 print:text-black font-semibold">{edu.grade}</div>
                    <div className="text-slate-500 print:text-gray-500 text-xs">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-4">
              Work Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">
                      {exp.company} — <span className="font-medium text-amber-300 print:text-gray-700">{exp.role}</span>
                    </span>
                    <span className="font-mono text-slate-400 print:text-gray-600 text-xs">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.metrics.map((m, i) => (
                      <span key={i} className="text-[10px] font-mono bg-slate-900 print:bg-gray-100 text-amber-300 print:text-gray-900 px-2 py-0.5 rounded border border-slate-800">
                        {m.label}: {m.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-4">
              Key Projects
            </h2>
            <div className="space-y-4">
              {FEATURED_PROJECTS.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">
                      {p.title} — <span className="font-medium text-slate-300 print:text-gray-700">{p.subtitle}</span>
                    </span>
                    <span className="font-mono text-slate-500 text-[11px]">{p.label}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {p.description}
                  </p>
                  <p className="text-[11px] text-amber-300/90 print:text-gray-900 font-mono">
                    {p.myContribution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-2">
              Technical Toolkit
            </h2>
            <div className="text-xs space-y-1 text-slate-300 print:text-gray-800 font-mono">
              <div><strong className="text-white print:text-black">Data &amp; Analytics:</strong> Python, SQL, Power BI, DAX, Power Query, Pandas, NumPy, Matplotlib, Seaborn, Excel</div>
              <div><strong className="text-white print:text-black">AI &amp; Machine Learning:</strong> Scikit-learn, XGBoost, SHAP, RAG, LangChain, Groq, ChromaDB, Feature Engineering</div>
              <div><strong className="text-white print:text-black">Software &amp; Web:</strong> React.js, Node.js, JavaScript, REST APIs, HTML/CSS, PostgreSQL, SQLite, MySQL</div>
              <div><strong className="text-white print:text-black">Tools &amp; Languages:</strong> Git, GitHub, Jira, n8n, MATLAB, C++, Java</div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-2">
                Honors &amp; Milestones
              </h2>
              <ul className="text-xs text-slate-300 print:text-gray-800 space-y-1 list-disc list-inside">
                <li>Smart India Hackathon (SIH) — College Nominee</li>
                <li>Inter-College Research Paper Competition — Winner (1st Place)</li>
                <li>Completed 4 Undergraduate Internships (3 Technical + 1 Non-Technical)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-black mb-2">
                Certifications
              </h2>
              <ul className="text-xs text-slate-300 print:text-gray-800 space-y-1 list-disc list-inside">
                <li>Google IT Support Professional Certificate</li>
                <li>Full Stack Web Development — Udemy</li>
                <li>MATLAB Onramp — MathWorks</li>
                <li>Vityarthi Essentials of Python — VIT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
