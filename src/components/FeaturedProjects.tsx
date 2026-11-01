import React, { useState } from 'react';
import {
  Code2,
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronRight,
  ShieldCheck,
  Maximize2,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenCaseStudy }) => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<{ [projectId: string]: number }>({
    recovai: 0,
  });

  return (
    <section id="projects" className="py-24 relative bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>PRIMARY PORTFOLIO WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
            Things I've built
          </h2>
          <p className="text-[#5C554E] text-sm sm:text-base mt-2 max-w-2xl">
            A collection of major projects across financial intelligence, industrial AI, and software systems. Detailed architectures, reproducible pipelines, and verified individual contributions.
          </p>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-20">
          {FEATURED_PROJECTS.map((project) => {
            const activeIndex = activeGalleryIndex[project.id] || 0;
            const currentImg =
              project.gallery && project.gallery.length > 0
                ? project.gallery[activeIndex]
                : project.image;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="glass-card rounded-3xl p-6 sm:p-10 border border-[#D8CEBF] relative overflow-hidden group hover:border-[#641E2B]/40 transition-all duration-300 shadow-[0_4px_24px_-4px_rgba(37,35,33,0.06)]"
              >
                {/* Top Metabar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D8CEBF]">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#641E2B] bg-[#641E2B]/10 px-2.5 py-1 rounded-lg border border-[#641E2B]/25">
                      FEATURED {project.number} / 03
                    </span>
                    <span className="text-xs font-mono text-[#736B63] uppercase tracking-wider font-semibold">
                      {project.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F5F0E8] text-[#252321] hover:text-[#641E2B] hover:bg-[#FFFFFF] border border-[#D8CEBF] transition-all shadow-xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3 text-[#736B63]" />
                    </a>

                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#641E2B] text-[#F5F0E8] hover:bg-[#4F1722] transition-all shadow-sm cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Main Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Narrative, Architecture Pipeline & Contribution */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#252321] tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#641E2B] mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#453F3B] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Visual Pipeline Flow */}
                    {project.pipeline && (
                      <div className="p-4 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] shadow-xs">
                        <div className="text-[11px] font-mono text-[#736B63] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
                          <Layers className="w-3.5 h-3.5 text-[#641E2B]" />
                          System Architecture Pipeline
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          {project.pipeline.map((step, sIdx) => (
                            <React.Fragment key={step}>
                              <span className="px-2.5 py-1 rounded-md bg-[#EAE2D7] text-[#252321] border border-[#D8CEBF] font-mono text-[11px] font-semibold shadow-xs">
                                {step}
                              </span>
                              {sIdx < project.pipeline!.length - 1 && (
                                <ChevronRight className="w-3 h-3 text-[#641E2B] flex-shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Verified Individual Contribution Callout */}
                    <div className="p-4 rounded-xl bg-[#641E2B]/6 border border-[#641E2B]/20 text-xs">
                      <div className="flex items-center gap-1.5 font-mono text-[#641E2B] font-bold mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        My Exact Contribution
                      </div>
                      <p className="text-[#36322E] leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>

                    {/* Technology Stack Tags */}
                    <div>
                      <div className="text-[10px] font-mono text-[#736B63] uppercase tracking-wider mb-2 font-semibold">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview & Screenshot Switcher */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden border border-[#D8CEBF] bg-[#F5F0E8] shadow-md group/img">
                      {/* Image Viewer */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE2D7] flex items-center justify-center">
                        <img
                          src={currentImg}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/parshvtrack-preview.svg';
                          }}
                        />

                        {/* Expand Button Overlay */}
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#252321]/80 hover:bg-[#252321] text-[#F5F0E8] backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover/img:opacity-100 flex items-center gap-1.5 text-xs font-mono cursor-pointer shadow-md"
                          title="Open full case study view"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Detail</span>
                        </button>
                      </div>

                      {/* Screenshot Thumbnails Gallery (if multiple) */}
                      {project.gallery && project.gallery.length > 1 && (
                        <div className="p-3 bg-[#EAE2D7] border-t border-[#D8CEBF] flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#736B63] mr-1 hidden sm:inline font-semibold">
                            Screenshots:
                          </span>
                          {project.gallery.map((thumb, tIdx) => {
                            const isSelected = activeIndex === tIdx;
                            const labels = ['Dashboard', 'Prediction Engine', 'SHAP Explainability'];
                            return (
                              <button
                                key={thumb}
                                onClick={() =>
                                  setActiveGalleryIndex({
                                    ...activeGalleryIndex,
                                    [project.id]: tIdx,
                                  })
                                }
                                className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#641E2B] text-[#F5F0E8] font-bold shadow-xs'
                                    : 'bg-[#F5F0E8] text-[#252321] border border-[#D8CEBF] hover:bg-[#FFFFFF]'
                                }`}
                              >
                                {labels[tIdx] || `View ${tIdx + 1}`}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
