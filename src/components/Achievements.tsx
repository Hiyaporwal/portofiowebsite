import React from 'react';
import { Trophy, Award, Briefcase } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-[#F5F0E8] border-t border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
            Key Achievements
          </h2>
          <p className="text-[#5C554E] text-sm sm:text-base mt-2 max-w-xl">
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
                className="glass-card rounded-2xl p-6 sm:p-7 border border-[#D8CEBF] flex flex-col justify-between group hover:border-[#641E2B]/40 transition-all duration-300 relative overflow-hidden shadow-[0_2px_10px_-2px_rgba(37,35,33,0.05)]"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] flex items-center justify-center text-[#641E2B] group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#F5F0E8] text-[#641E2B] border border-[#D8CEBF] font-bold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-lg font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#641E2B] font-mono mt-1">
                    {item.role}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#5C554E] mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Sub context */}
                <div className="mt-6 pt-4 border-t border-[#D8CEBF] flex items-center justify-between text-[11px] font-mono text-[#736B63]">
                  <span>Scope:</span>
                  <span className="text-[#252321] font-bold">{item.period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
