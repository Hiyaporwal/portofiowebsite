import React from 'react';
import { Trophy, Award, Briefcase } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-[#0a0d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Verifiable milestones across national innovation challenges, academic research, and industry experience.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const icons = [Trophy, Award, Briefcase];
            const Icon = icons[idx] || Trophy;

            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/90 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400 font-mono mt-1">
                    {item.role}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Sub context */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Scope:</span>
                  <span className="text-slate-300 font-semibold">{item.period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
