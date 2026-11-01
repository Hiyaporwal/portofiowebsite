import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Database,
  Cpu,
  Code2,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'data',
      label: 'DATA',
      sub: 'Pipelines & Engineering',
      icon: Database,
      color: 'text-[#252321] border-[#D8CEBF] hover:border-[#641E2B]',
      tools: ['SQL', 'PostgreSQL', 'Power Query', 'Pandas'],
      highlight: '1,640 shift records cleaned · Multi-source ETL',
      x: '15%',
      y: '20%',
    },
    {
      id: 'ai-ml',
      label: 'AI / ML',
      sub: 'Predictive & Deep Learning',
      icon: Cpu,
      color: 'text-[#252321] border-[#D8CEBF] hover:border-[#641E2B]',
      tools: ['LSTM / GRU', 'FinBERT', 'XGBoost', 'SHAP', 'Scikit-learn'],
      highlight: 'FinSight AI & RecovAI · Financial & Industrial Intelligence',
      x: '80%',
      y: '22%',
    },
    {
      id: 'software',
      label: 'SOFTWARE',
      sub: 'Full Stack & APIs',
      icon: Code2,
      color: 'text-[#252321] border-[#D8CEBF] hover:border-[#641E2B]',
      tools: ['Flask', 'React', 'Node.js', 'REST APIs', 'Docker'],
      highlight: 'ParshvTrack workforce ERP · 50+ live field users',
      x: '18%',
      y: '78%',
    },
    {
      id: 'analytics',
      label: 'ANALYTICS',
      sub: 'Business Intelligence',
      icon: BarChart3,
      color: 'text-[#252321] border-[#D8CEBF] hover:border-[#641E2B]',
      tools: ['Power BI', 'DAX', 'KPI Dashboards', 'Turnaround <4h'],
      highlight: '15+ operational KPIs · Uber ride telemetry',
      x: '82%',
      y: '75%',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-bg"
    >
      {/* Background Ambient Warm Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[620px] h-[340px] bg-[#641E2B]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#B78B79]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Storytelling & Hero Statement */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#252321] mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#641E2B] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#641E2B]"></span>
              </span>
              <span className="font-mono text-xs text-[#5C554E] font-medium">
                Hi, I'm Hiya · Available for Technical Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#252321] tracking-tight leading-[1.12] mb-6">
              I build with <br />
              <span className="bg-gradient-to-r from-[#641E2B] via-[#8E2C3D] to-[#B78B79] bg-clip-text text-transparent">
                Data, AI & Software.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed max-w-2xl mb-8">
              Integrated M.Tech Computational Data Science student building practical solutions
              across analytics, business intelligence, machine learning, financial intelligence, generative AI, and software
              engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#641E2B] hover:bg-[#4F1722] text-[#F5F0E8] transition-all shadow-md shadow-[#641E2B]/20 hover:shadow-[#641E2B]/30 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#EAE2D7] hover:bg-[#E3D9CC] text-[#252321] border border-[#D8CEBF] hover:border-[#641E2B]/40 transition-all shadow-sm group cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#641E2B] group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Verified Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-[#D8CEBF] w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Hiyaporwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#EAE2D7] text-[#5C554E] hover:text-[#641E2B] hover:bg-[#E3D9CC] border border-[#D8CEBF] transition-all shadow-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/hiya-porwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#EAE2D7] text-[#5C554E] hover:text-[#641E2B] hover:bg-[#E3D9CC] border border-[#D8CEBF] transition-all shadow-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hiyaporwal89@gmail.com"
                  className="p-2.5 rounded-lg bg-[#EAE2D7] text-[#5C554E] hover:text-[#641E2B] hover:bg-[#E3D9CC] border border-[#D8CEBF] transition-all shadow-xs"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs text-[#5C554E] flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#641E2B]"></span>
                <span className="font-semibold text-[#252321]">VIT Bhopal</span>
                <span className="text-[#847C74]">·</span>
                <span>CGPA 8.25/10</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technical Node System */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[460px] aspect-square rounded-2xl p-4 bg-[#EAE2D7]/90 border border-[#D8CEBF] shadow-[0_12px_40px_-8px_rgba(37,35,33,0.08)] flex items-center justify-center overflow-hidden">
              {/* Dynamic Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#B78B79" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#641E2B" stopOpacity="0.75" />
                  </linearGradient>
                  <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#641E2B" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#641E2B" stopOpacity="0.75" />
                  </linearGradient>
                  <linearGradient id="lineGrad3" x1="0%" y1="100%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#252321" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#641E2B" stopOpacity="0.75" />
                  </linearGradient>
                  <linearGradient id="lineGrad4" x1="100%" y1="100%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#8E2C3D" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#641E2B" stopOpacity="0.75" />
                  </linearGradient>
                </defs>

                {/* Connection lines to central core */}
                <line x1="90" y1="90" x2="230" y2="230" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="370" y1="95" x2="230" y2="230" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="95" y1="360" x2="230" y2="230" stroke="url(#lineGrad3)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="370" y1="350" x2="230" y2="230" stroke="url(#lineGrad4)" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Center orbital rings */}
                <circle cx="230" cy="230" r="60" fill="none" stroke="#641E2B" strokeWidth="1" strokeDasharray="6 6" opacity="0.25" />
                <circle cx="230" cy="230" r="110" fill="none" stroke="#B78B79" strokeWidth="1" opacity="0.3" />
              </svg>

              {/* Central Core Node: HIYA */}
              <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 rounded-full bg-[#F5F0E8] border-2 border-[#641E2B] shadow-lg shadow-[#641E2B]/15 text-center p-2 group hover:scale-105 transition-all cursor-default">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#641E2B] font-bold">
                  Core
                </span>
                <span className="text-xl font-black tracking-tight text-[#252321]">HIYA</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#641E2B] animate-pulse"></span>
                  <span className="text-[9px] font-mono text-[#5C554E] font-semibold">M.Tech CDS</span>
                </div>
              </div>

              {/* 4 Surrounding Nodes */}
              {nodes.map((node) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    style={{
                      position: 'absolute',
                      left: node.x,
                      top: node.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`z-20 cursor-pointer transition-all duration-300 ${
                      isHovered ? 'scale-110 z-30' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`px-3 py-2.5 rounded-xl bg-[#F5F0E8] border shadow-sm flex items-center gap-2.5 ${node.color}`}
                    >
                      <div className="p-1.5 rounded-lg bg-[#EAE2D7] text-[#641E2B]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold font-mono tracking-wide text-[#252321]">{node.label}</div>
                        <div className="text-[9px] text-[#6B635B] font-sans font-medium">{node.sub}</div>
                      </div>
                    </div>

                    {/* Popover Card on Hover */}
                    {isHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 p-3 rounded-xl bg-[#FFFFFF] border border-[#641E2B]/30 shadow-2xl text-left pointer-events-none z-40">
                        <div className="text-[10px] text-[#641E2B] font-mono font-bold mb-1.5">
                          {node.highlight}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {node.tools.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-[#EAE2D7] text-[#252321] font-mono font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Bottom Node Guide Indicator */}
              <div className="absolute bottom-2.5 left-0 right-0 text-center">
                <span className="text-[10px] font-mono text-[#6B635B] flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#641E2B]" />
                  Hover nodes to inspect engineering stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
