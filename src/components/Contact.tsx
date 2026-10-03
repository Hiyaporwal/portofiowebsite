import React, { useState } from 'react';
import {
  Mail,
  ArrowRight,
  Copy,
  Check,
  Send,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [roleFocus, setRoleFocus] = useState('Data Analytics & BI');
  const [customNote, setCustomNote] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity regarding ${roleFocus} role — Hiya Porwal`);
    const body = encodeURIComponent(
      `Hi Hiya,\n\nI came across your portfolio and would love to discuss an opportunity regarding ${roleFocus}.\n\n${
        customNote ? `Note: ${customNote}\n\n` : ''
      }Looking forward to connecting!\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 relative bg-[#090b12] border-t border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Have an opportunity in mind?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm open to opportunities where I can work with data, AI/ML, software, and real-world technical problems.
          </p>
        </div>

        {/* Contact Hub Container */}
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl space-y-8">
          {/* Direct Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 transition-all shadow-lg shadow-amber-500/20 group cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all cursor-pointer"
              title="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="font-mono text-xs">{PERSONAL_INFO.contact.email}</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Recruiter Dispatch Form */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="text-left mb-4 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                Quick Message Composer
              </span>
              <span className="text-[11px] font-mono text-slate-500">Opens your mail app</span>
            </div>

            <form onSubmit={handleSendDraft} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                  Position / Area of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Data Analytics & BI',
                    'AI / Machine Learning',
                    'Full Stack Software',
                    'Technical Internship',
                  ].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setRoleFocus(role)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-center cursor-pointer ${
                        roleFocus === role
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                          : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                  Optional Note / Team Context
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. We are hiring for our data platform team..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer hover:border-amber-500/40"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Prepare &amp; Send Email Draft</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
