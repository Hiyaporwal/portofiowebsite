import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative bg-[#F5F0E8] border-t border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Nav buttons */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-2">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>CONTINUOUS UPSKILLING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252321] tracking-tight">
              Certifications &amp; Credentials
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-xl bg-[#EAE2D7] text-[#252321] hover:text-[#641E2B] hover:bg-[#F5F0E8] border border-[#D8CEBF] transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-xl bg-[#EAE2D7] text-[#252321] hover:text-[#641E2B] hover:bg-[#F5F0E8] border border-[#D8CEBF] transition-colors cursor-pointer shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Strip */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.title}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start glass-card rounded-2xl p-5 border border-[#D8CEBF] flex flex-col justify-between group hover:border-[#641E2B]/40 transition-all shadow-[0_2px_10px_-2px_rgba(37,35,33,0.04)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#641E2B] bg-[#F5F0E8] px-2.5 py-1 rounded-md border border-[#D8CEBF]">
                    {cert.issuer}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#641E2B]" />
                </div>

                <h3 className="text-sm font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D8CEBF] flex items-center justify-between text-[11px] font-mono text-[#736B63]">
                <span>{cert.category}</span>
                <span className="text-[#252321] font-bold">{cert.credentialBadge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
