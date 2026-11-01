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
    <section id="contact" className="py-28 relative bg-[#F5F0E8] border-t border-[#D8CEBF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wider">LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#252321] tracking-tight leading-tight mb-4">
            Have an opportunity in mind?
          </h2>

          <p className="text-base sm:text-lg text-[#5C554E] max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking opportunities where I can build impactful systems across Data Analytics, Financial Intelligence, AI/ML, and Software Development.
          </p>
        </div>

        {/* Contact Hub Container */}
        <div className="max-w-3xl mx-auto bg-[#EAE2D7] rounded-3xl p-6 sm:p-10 border border-[#D8CEBF] shadow-sm space-y-8">
          {/* Direct Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#641E2B] hover:bg-[#4F1722] text-[#F5F0E8] transition-all shadow-md group cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#252321] border border-[#D8CEBF] transition-all cursor-pointer shadow-xs"
              title="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span className="text-emerald-700 font-mono text-xs font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8C827A]" />
                  <span className="font-mono text-xs text-[#252321]">{PERSONAL_INFO.contact.email}</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#252321] border border-[#D8CEBF] transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#252321] border border-[#D8CEBF] transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4 text-[#252321]" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Recruiter Dispatch Form */}
          <div className="pt-6 border-t border-[#D8CEBF]">
            <div className="text-left mb-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#252321] uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#641E2B]" />
                Quick Message Composer
              </span>
              <span className="text-[11px] font-mono text-[#8C827A]">Opens your mail client</span>
            </div>

            <form onSubmit={handleSendDraft} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-mono text-[#5C554E] mb-1.5 uppercase font-semibold">
                  Position / Area of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Data Analytics & BI',
                    'AI / Machine Learning',
                    'Financial Analytics',
                    'Full Stack Software',
                  ].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setRoleFocus(role)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-center cursor-pointer ${
                        roleFocus === role
                          ? 'bg-[#641E2B] text-[#F5F0E8] border border-[#641E2B] font-semibold shadow-xs'
                          : 'bg-[#F5F0E8] text-[#5C554E] border border-[#D8CEBF] hover:text-[#252321] hover:border-[#641E2B]/30'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#5C554E] mb-1.5 uppercase font-semibold">
                  Optional Note / Team Context
                </label>
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. We are hiring for our financial data & analytics team..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] text-xs placeholder-[#8C827A] focus:outline-none focus:border-[#641E2B] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-xs bg-[#641E2B] hover:bg-[#4F1722] text-[#F5F0E8] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Prepare &amp; Send Email Draft</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
