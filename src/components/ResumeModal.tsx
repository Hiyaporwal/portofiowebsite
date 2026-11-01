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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#252321]/65 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#F5F0E8] border border-[#D8CEBF] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#EAE2D7]/95 border-b border-[#D8CEBF] backdrop-blur-md print:hidden">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#641E2B] bg-[#641E2B]/10 px-2.5 py-1 rounded-lg border border-[#641E2B]/20">
              OFFICIAL RESUME
            </span>
            <span className="text-xs font-mono text-[#5C554E]">Hiya Porwal · Updated 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#641E2B] hover:bg-[#4F1722] text-[#F5F0E8] transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#5C554E] hover:text-[#252321] border border-[#D8CEBF] transition-colors cursor-pointer shadow-xs"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Content */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#F5F0E8] print:p-0 print:bg-white">
          <div className="max-w-3xl mx-auto p-6 sm:p-10 space-y-7 bg-white text-[#252321] border border-[#D8CEBF] rounded-2xl shadow-sm print:border-none print:shadow-none print:p-0 print:m-0 font-sans">
            {/* Header */}
            <div className="border-b border-[#D8CEBF] pb-5 print:border-black">
              <h1 className="text-3xl font-serif font-bold text-[#252321] print:text-black tracking-tight">
                HIYA PORWAL
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#641E2B] print:text-gray-800 mt-1 font-mono tracking-wide">
                Computational Data Science | Data • AI/ML • Financial Analytics • Software
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#5C554E] print:text-gray-600 mt-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#641E2B]" />
                  hiyaporwal89@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <LinkedinIcon className="w-3 h-3 text-[#0077b5]" />
                  linkedin.com/in/hiya-porwal
                </span>
                <span className="flex items-center gap-1">
                  <GithubIcon className="w-3 h-3 text-[#252321]" />
                  github.com/Hiyaporwal
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#641E2B]" />
                  VIT Bhopal / Rajasthan, India
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-2 border-b border-[#D8CEBF] pb-1 print:border-black">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-[13px] text-[#252321] print:text-gray-800 leading-relaxed">
                Integrated M.Tech Computational Data Science student at VIT Bhopal University. Experienced across AI/ML, financial analytics, business intelligence, and software engineering through 4 industry internships. Strong track record in developing multi-horizon deep learning financial models (LSTM/GRU/FinBERT), standardizing industrial mineral process datasets, engineering Power BI dashboards, and building full-stack applications with Flask, React, and PostgreSQL.
              </p>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-3 border-b border-[#D8CEBF] pb-1 print:border-black">
                Featured Projects
              </h2>
              <div className="space-y-4">
                {FEATURED_PROJECTS.map((p) => (
                  <div key={p.id} className="space-y-1">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-[#252321] print:text-black">
                        {p.title} — <span className="font-medium text-[#641E2B] print:text-gray-700">{p.subtitle}</span>
                      </span>
                      <span className="font-mono text-[#8C827A] text-[11px]">{p.label}</span>
                    </div>
                    <p className="text-xs text-[#5C554E] print:text-gray-800 leading-relaxed">
                      {p.description}
                    </p>
                    <p className="text-[11px] text-[#252321] print:text-gray-900 font-mono bg-[#F5F0E8] p-1.5 rounded border border-[#D8CEBF] print:bg-transparent print:border-none print:p-0">
                      <strong className="text-[#641E2B] print:text-black">Implementation: </strong>
                      {p.myContribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-3 border-b border-[#D8CEBF] pb-1 print:border-black">
                Work Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-[#252321] print:text-black">
                        {exp.company} — <span className="font-medium text-[#641E2B] print:text-gray-700">{exp.role}</span>
                      </span>
                      <span className="font-mono text-[#8C827A] print:text-gray-600 text-xs">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C554E] print:text-gray-800 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {exp.metrics.map((m, i) => (
                        <span key={i} className="text-[10px] font-mono bg-[#F5F0E8] print:bg-gray-100 text-[#252321] print:text-gray-900 px-2 py-0.5 rounded border border-[#D8CEBF]">
                          {m.label}: <strong>{m.value}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-3 border-b border-[#D8CEBF] pb-1 print:border-black">
                Education
              </h2>
              <div className="space-y-2.5">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-[#252321] print:text-black">{edu.institution}</div>
                      <div className="text-[#5C554E] print:text-gray-700 text-xs">{edu.degree}</div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="text-[#641E2B] print:text-black font-semibold text-xs">{edu.grade}</div>
                      <div className="text-[#8C827A] print:text-gray-500 text-[11px]">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-2 border-b border-[#D8CEBF] pb-1 print:border-black">
                Technical Toolkit
              </h2>
              <div className="text-xs space-y-1 text-[#252321] print:text-gray-800 font-mono">
                <div><strong className="text-[#641E2B] print:text-black">AI &amp; Deep Learning:</strong> PyTorch, TensorFlow, LSTM, GRU, Transformers, FinBERT, Scikit-learn, XGBoost, LangChain, FAISS, ChromaDB, Feature Engineering</div>
                <div><strong className="text-[#641E2B] print:text-black">Data &amp; Analytics:</strong> Python, SQL, Power BI, DAX, Power Query, Pandas, NumPy, Matplotlib, Seaborn, yfinance, Excel</div>
                <div><strong className="text-[#641E2B] print:text-black">Software &amp; MLOps:</strong> Flask, React.js, Node.js, REST APIs, HTML/CSS, PostgreSQL, SQLite, MySQL, Docker, Alembic, GitHub Actions CI</div>
                <div><strong className="text-[#641E2B] print:text-black">Tools &amp; Languages:</strong> Git, GitHub, Jira, n8n, MATLAB, C++, Java, JavaScript</div>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-1.5 border-b border-[#D8CEBF] pb-1 print:border-black">
                  Honors &amp; Milestones
                </h2>
                <ul className="text-xs text-[#5C554E] print:text-gray-800 space-y-1 list-disc list-inside">
                  <li>Smart India Hackathon (SIH) — College Nominee</li>
                  <li>Inter-College Research Paper Competition — Winner (1st Place)</li>
                  <li>Completed 4 Internships (3 Technical + 1 Non-Technical)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#641E2B] print:text-black mb-1.5 border-b border-[#D8CEBF] pb-1 print:border-black">
                  Certifications
                </h2>
                <ul className="text-xs text-[#5C554E] print:text-gray-800 space-y-1 list-disc list-inside">
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
    </div>
  );
};
