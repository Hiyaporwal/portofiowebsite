import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Cpu,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveImageIndex(0);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage =
    project.gallery && project.gallery.length > 0
      ? project.gallery[activeImageIndex]
      : project.image;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#252321]/65 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop Click Dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#F5F0E8] border border-[#D8CEBF] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#EAE2D7]/95 border-b border-[#D8CEBF] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#641E2B] bg-[#641E2B]/10 px-2.5 py-1 rounded-lg border border-[#641E2B]/20">
              {project.number} / {project.category}
            </span>
            <div className="hidden sm:block">
              <span className="text-xs font-mono text-[#5C554E]">{project.label}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#252321] border border-[#D8CEBF] transition-colors shadow-xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#5C554E]" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#FFFFFF] text-[#5C554E] hover:text-[#252321] border border-[#D8CEBF] transition-colors cursor-pointer shadow-xs"
              aria-label="Close case study dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#252321] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#641E2B] mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Showcase / Screenshot Switcher */}
          <div className="rounded-2xl overflow-hidden border border-[#D8CEBF] bg-[#EAE2D7]">
            <div className="aspect-[16/9] w-full bg-[#EAE2D7] flex items-center justify-center overflow-hidden">
              <img
                src={currentImage}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/parshvtrack-preview.svg';
                }}
              />
            </div>

            {project.gallery && project.gallery.length > 1 && (
              <div className="p-3 bg-[#EAE2D7] border-t border-[#D8CEBF] flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#5C554E] mr-2">
                  Views:
                </span>
                {project.gallery.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImageIndex(i)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                      activeImageIndex === i
                        ? 'bg-[#641E2B] text-[#F5F0E8] font-bold shadow-xs'
                        : 'bg-[#F5F0E8] text-[#5C554E] hover:bg-[#FFFFFF] border border-[#D8CEBF]'
                    }`}
                  >
                    Preview {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 1. The Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#641E2B] uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-[#641E2B]" />
              <span>01. The Problem</span>
            </div>
            <p className="text-sm text-[#252321] leading-relaxed bg-[#EAE2D7] p-5 rounded-2xl border border-[#D8CEBF]">
              {project.problem}
            </p>
          </div>

          {/* 2. Architecture & Approach */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#641E2B] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#641E2B]" />
              <span>02. Approach &amp; System Flow</span>
            </div>
            <p className="text-sm text-[#252321] leading-relaxed bg-[#EAE2D7] p-5 rounded-2xl border border-[#D8CEBF]">
              {project.approach}
            </p>

            {project.pipeline && (
              <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF]">
                <div className="text-[10px] font-mono text-[#5C554E] uppercase mb-2 font-semibold">
                  Sequential Pipeline Flow
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  {project.pipeline.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-2.5 py-1 rounded-md bg-[#EAE2D7] text-[#252321] border border-[#D8CEBF] font-mono text-[11px] font-medium">
                        {step}
                      </span>
                      {idx < project.pipeline!.length - 1 && (
                        <ChevronRight className="w-3.5 h-3.5 text-[#641E2B] flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. My Exact Personal Contribution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#641E2B] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#641E2B]" />
              <span>03. My Exact Individual Contribution</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#641E2B]/8 border border-[#641E2B]/25 text-sm text-[#252321] leading-relaxed">
              {project.myContribution}
            </div>
          </div>

          {/* 4. Technologies Used */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#641E2B] uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#641E2B]" />
              <span>04. Technologies Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#EAE2D7] text-[#252321] border border-[#D8CEBF] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Documented Results */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#641E2B] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#641E2B]" />
              <span>05. Documented Results &amp; Deliverables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#EAE2D7] border border-[#D8CEBF] flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#641E2B] mt-2 flex-shrink-0" />
                  <span className="text-xs text-[#252321] leading-relaxed font-sans">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#D8CEBF] flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#641E2B] text-[#F5F0E8] hover:bg-[#4F1722] transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Open Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#EAE2D7] text-[#252321] hover:bg-[#FFFFFF] border border-[#D8CEBF] cursor-pointer shadow-xs"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
