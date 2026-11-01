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
    <section className="py-20 relative bg-[#F5F0E8] border-t border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-2">
            <Heart className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wider">PERSONALITY &amp; PERSPECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252321] tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-[#5C554E] text-xs sm:text-sm mt-1">
            Genuine personal habits that cultivate discipline, collaborative clarity, and creative resets.
          </p>
        </div>

        {/* 4 Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONALITY_CARDS.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.title}
                className="bg-[#EAE2D7] rounded-2xl p-6 border border-[#D8CEBF] flex flex-col justify-between group hover:border-[#641E2B]/40 hover:bg-[#F0E9DF] transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] flex items-center justify-center text-[#641E2B] group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#8C827A] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-medium text-[#641E2B] font-mono mt-0.5 mb-2">
                    {item.headline}
                  </div>

                  <p className="text-xs text-[#5C554E] leading-relaxed">
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
