import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#F5F0E8] border-t border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
            Education
          </h2>
          <p className="text-[#5C554E] text-sm sm:text-base mt-2 max-w-xl">
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
                    ? 'border-[#641E2B]/40 bg-[#EAE2D7] md:col-span-1 shadow-md'
                    : 'border-[#D8CEBF]'
                }`}
              >
                {/* Subtle Glow on University Card */}
                {isUniversity && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#641E2B]/5 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Top Bar with Badge & Period */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-[#641E2B] bg-[#641E2B]/10 px-2.5 py-1 rounded-md border border-[#641E2B]/20">
                      {edu.period}
                    </span>

                    {isUniversity && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#641E2B]/10 text-[#641E2B] border border-[#641E2B]/20 font-bold">
                        CURRENT ENROLLMENT
                      </span>
                    )}
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-lg font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-[#5C554E] mt-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#641E2B]" />
                    <span>{edu.institution}</span>
                  </div>

                  {/* Details */}
                  {edu.details && (
                    <p className="text-xs text-[#5C554E] mt-4 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                {/* Score / Grade Callout */}
                <div className="mt-6 pt-4 border-t border-[#D8CEBF] flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase text-[#736B63] font-semibold">
                    Grade / CGPA
                  </span>
                  <span className="text-sm font-bold font-mono text-[#641E2B] bg-[#F5F0E8] px-3 py-1 rounded-lg border border-[#D8CEBF] shadow-xs">
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
