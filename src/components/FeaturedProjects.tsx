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
    <section id="projects" className="py-24 relative bg-[#090b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>PRIMARY PORTFOLIO WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Things I've built
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A collection of major projects across data, AI, and software. Detailed architectures, reproducible pipelines, and honest individual contributions.
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
                className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-2xl"
              >
                {/* Top Metabar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
                      FEATURED {project.number} / 03
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {project.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>

                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
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
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-amber-300/90 mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Visual Pipeline Flow */}
                    {project.pipeline && (
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-amber-400" />
                          System Architecture Pipeline
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          {project.pipeline.map((step, sIdx) => (
                            <React.Fragment key={step}>
                              <span className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-200 border border-slate-800 font-mono text-[11px] shadow-sm">
                                {step}
                              </span>
                              {sIdx < project.pipeline!.length - 1 && (
                                <ChevronRight className="w-3 h-3 text-amber-400/80 flex-shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Verified Individual Contribution Callout */}
                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs">
                      <div className="flex items-center gap-1.5 font-mono text-amber-400 font-semibold mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        My Exact Contribution
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>

                    {/* Technology Stack Tags */}
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview & Screenshot Switcher */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl group/img">
                      {/* Image Viewer */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 flex items-center justify-center">
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
                          className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover/img:opacity-100 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                          title="Open full case study view"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Detail</span>
                        </button>
                      </div>

                      {/* RecovAI Screenshot Thumbnails Gallery */}
                      {project.gallery && project.gallery.length > 1 && (
                        <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-400 mr-1 hidden sm:inline">
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
                                    ? 'bg-amber-500 text-slate-950 font-bold'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
