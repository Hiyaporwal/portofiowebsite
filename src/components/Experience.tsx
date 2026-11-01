import React from 'react';
import {
  Briefcase,
  TrendingUp,
  ArrowRight,
  Calendar,
  Building2,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

interface ExperienceProps {
  onSelectProject: (projectId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectProject }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
            Where I've worked
          </h2>
          <p className="text-[#5C554E] text-sm sm:text-base mt-2 max-w-xl">
            Real industry internships with verifiable operational and analytical impact across data analytics, enterprise ERP, and industrial optimization.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#D8CEBF] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp) => {
            const isPresent = exp.period.includes('Present');

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node bullet */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center ${
                    isPresent
                      ? 'border-[#641E2B] bg-[#F5F0E8] shadow-sm'
                      : 'border-[#B78B79] bg-[#F5F0E8]'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isPresent ? 'bg-[#641E2B] animate-ping' : 'bg-[#736B63]'
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#D8CEBF] group-hover:border-[#641E2B]/40 transition-all">
                  {/* Top Bar: Company, Role & Duration */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#641E2B]" />
                        <h3 className="text-lg sm:text-xl font-bold text-[#252321] tracking-tight">
                          {exp.company}
                        </h3>
                        {isPresent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#641E2B]/10 text-[#641E2B] border border-[#641E2B]/20">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-[#641E2B] mt-0.5">
                        {exp.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#5C554E] bg-[#F5F0E8] px-3 py-1.5 rounded-lg border border-[#D8CEBF] w-fit shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#736B63]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metrics Badges Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 my-5">
                    {exp.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] flex flex-col justify-between shadow-xs"
                      >
                        <span className="text-base sm:text-lg font-black text-[#641E2B] font-mono tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[10px] font-mono text-[#736B63] uppercase mt-1 leading-tight font-semibold">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#453F3B] leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Connected Project Banner (RecovAI or ParshvTrack) */}
                  {exp.connectedProject && (
                    <div className="mt-4 pt-4 border-t border-[#D8CEBF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-[#5C554E]">
                        <TrendingUp className="w-4 h-4 text-[#641E2B]" />
                        <span className="font-medium">{exp.connectedProject.badge}</span>
                      </div>

                      <button
                        onClick={() => onSelectProject(exp.connectedProject!.targetId)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#641E2B] hover:text-[#4F1722] hover:underline cursor-pointer group/link"
                      >
                        <span>View {exp.connectedProject.name} Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
