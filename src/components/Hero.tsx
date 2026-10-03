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
      color: 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40',
      glow: 'rgba(6, 182, 212, 0.25)',
      tools: ['SQL', 'PostgreSQL', 'Power Query', 'Pandas'],
      highlight: '1,640 shift records cleaned · Multi-source ETL',
      x: '15%',
      y: '20%',
    },
    {
      id: 'ai-ml',
      label: 'AI / ML',
      sub: 'Predictive & Explainable',
      icon: Cpu,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/40',
      glow: 'rgba(245, 158, 11, 0.25)',
      tools: ['XGBoost', 'Scikit-learn', 'SHAP', 'Feature Engineering'],
      highlight: 'RecovAI copper flotation optimization · Drift monitoring',
      x: '80%',
      y: '22%',
    },
    {
      id: 'software',
      label: 'SOFTWARE',
      sub: 'Full Stack & APIs',
      icon: Code2,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/40',
      glow: 'rgba(16, 185, 129, 0.25)',
      tools: ['React', 'Node.js', 'REST APIs', 'PostgreSQL'],
      highlight: 'ParshvTrack workforce ERP · 50+ live field users',
      x: '18%',
      y: '78%',
    },
    {
      id: 'analytics',
      label: 'ANALYTICS',
      sub: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/40',
      glow: 'rgba(99, 102, 241, 0.25)',
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
      {/* Background Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Storytelling & Hero Statement */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-xs text-slate-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-mono text-slate-300">
                Hi, I'm Hiya · Available for 2026 Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              I build with <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                Data, AI & Software.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Integrated M.Tech Computational Data Science student building practical solutions
              across analytics, business intelligence, machine learning, generative AI, and software
              development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-md group cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Verified Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Hiyaporwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/hiya-porwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hiyaporwal89@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-amber-400 hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>VIT Bhopal · CGPA 8.25/10</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technical Node System */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[460px] aspect-square rounded-2xl p-4 glass-panel border border-slate-800/90 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Dynamic Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="lineGrad3" x1="0%" y1="100%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="lineGrad4" x1="100%" y1="100%" x2="50%" y2="50%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Connection lines to central core */}
                <line x1="90" y1="90" x2="230" y2="230" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="370" y1="95" x2="230" y2="230" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="95" y1="360" x2="230" y2="230" stroke="url(#lineGrad3)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="370" y1="350" x2="230" y2="230" stroke="url(#lineGrad4)" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Center orbital rings */}
                <circle cx="230" cy="230" r="60" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6 6" opacity="0.25" />
                <circle cx="230" cy="230" r="110" fill="none" stroke="#334155" strokeWidth="1" opacity="0.4" />
              </svg>

              {/* Central Core Node: HIYA */}
              <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 rounded-full bg-[#0d111e] border-2 border-amber-500/70 shadow-xl shadow-amber-500/10 text-center p-2 group hover:scale-105 transition-all cursor-default">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-semibold">
                  Core
                </span>
                <span className="text-xl font-extrabold tracking-tight text-white">HIYA</span>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-[9px] font-mono text-slate-300">M.Tech CDS</span>
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
                      className={`px-3 py-2.5 rounded-xl bg-slate-900/90 border backdrop-blur-md flex items-center gap-2 shadow-lg ${node.color}`}
                    >
                      <div className="p-1.5 rounded-lg bg-black/40">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold font-mono tracking-wide">{node.label}</div>
                        <div className="text-[9px] text-slate-400 font-sans">{node.sub}</div>
                      </div>
                    </div>

                    {/* Popover Card on Hover */}
                    {isHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-2.5 rounded-lg bg-slate-950/95 border border-slate-700 shadow-2xl text-left pointer-events-none z-40 backdrop-blur-md">
                        <div className="text-[10px] text-amber-400 font-mono font-semibold mb-1">
                          {node.highlight}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {node.tools.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono"
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
                <span className="text-[10px] font-mono text-slate-400 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
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
