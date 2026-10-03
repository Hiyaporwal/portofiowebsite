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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where I've worked
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Real industry internships with verifiable operational and analytical impact across data analytics, enterprise ERP, and industrial optimization.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800/90 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp) => {
            const isPresent = exp.period.includes('Present');

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node bullet */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 flex items-center justify-center ${
                    isPresent
                      ? 'border-amber-400 bg-amber-500/20 shadow-lg shadow-amber-500/30'
                      : 'border-slate-700 bg-slate-900'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isPresent ? 'bg-amber-400 animate-ping' : 'bg-slate-400'
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 group-hover:border-amber-500/30 transition-all">
                  {/* Top Bar: Company, Role & Duration */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-amber-400" />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        {isPresent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-amber-300/90 mt-0.5">
                        {exp.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metrics Badges Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 my-5">
                    {exp.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 flex flex-col justify-between"
                      >
                        <span className="text-base sm:text-lg font-black text-amber-400 font-mono tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase mt-1 leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Connected Project Banner (RecovAI or ParshvTrack) */}
                  {exp.connectedProject && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span>{exp.connectedProject.badge}</span>
                      </div>

                      <button
                        onClick={() => onSelectProject(exp.connectedProject!.targetId)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline cursor-pointer group/link"
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
