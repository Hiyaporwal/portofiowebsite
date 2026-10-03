import React from 'react';
import { Sparkles, Mic, Users, Activity, Heart } from 'lucide-react';
import { PERSONALITY_CARDS } from '../data/portfolioData';

export const PersonalitySection: React.FC = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    Sparkles: Sparkles,
    Mic: Mic,
    Users: Users,
    Activity: Activity,
  };

  return (
    <section className="py-20 relative bg-[#0a0d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-2">
            <Heart className="w-3.5 h-3.5" />
            <span>PERSONALITY &amp; PERSPECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Small personal energies that cultivate consistency, creative resets, and clear thinking.
          </p>
        </div>

        {/* 4 Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONALITY_CARDS.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-medium text-amber-400/80 font-mono mt-0.5 mb-2">
                    {item.headline}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
