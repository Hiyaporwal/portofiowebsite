import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#EAE2D7] border-t border-[#D8CEBF] text-[#5C554E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif font-bold text-[#252321] text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-[#5C554E] mt-0.5">
              Computational Data Science | Data • AI/ML • Financial Analytics • Software
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href="https://github.com/Hiyaporwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#5C554E] hover:text-[#641E2B] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/hiya-porwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#5C554E] hover:text-[#641E2B] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="text-[#5C554E] hover:text-[#641E2B] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Scroll to top */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#5C554E]">
            <span>© 2026 {PERSONAL_INFO.name}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#252321] hover:text-[#641E2B] border border-[#D8CEBF] transition-colors cursor-pointer shadow-xs"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
