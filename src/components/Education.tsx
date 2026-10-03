import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#090b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Formal computational training bridging mathematics, algorithms, distributed systems, machine learning, and software design.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => {
            const isUniversity = idx === 0;

            return (
              <div
                key={edu.degree}
                className={`glass-card rounded-2xl p-6 sm:p-7 border flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${
                  isUniversity
                    ? 'border-amber-500/40 bg-slate-900/80 md:col-span-1 shadow-xl'
                    : 'border-slate-800/90'
                }`}
              >
                {/* Subtle Glow on University Card */}
                {isUniversity && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Top Bar with Badge & Period */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      {edu.period}
                    </span>

                    {isUniversity && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        CURRENT ENROLLMENT
                      </span>
                    )}
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-amber-400" />
                    <span>{edu.institution}</span>
                  </div>

                  {/* Details */}
                  {edu.details && (
                    <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                {/* Score / Grade Callout */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase text-slate-400">
                    Grade / CGPA
                  </span>
                  <span className="text-sm font-bold font-mono text-amber-400 bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-800">
                    {edu.grade}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
