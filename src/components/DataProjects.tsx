import React, { useState, useMemo } from 'react';
import { BarChart2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ALL_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

type FilterCategory = 'ALL' | 'DATA & BI' | 'AI / ML' | 'SOFTWARE' | 'GENAI';

interface DataProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const DataProjects: React.FC<DataProjectsProps> = ({ onOpenCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('ALL');

  const filterOptions: FilterCategory[] = [
    'ALL',
    'DATA & BI',
    'AI / ML',
    'SOFTWARE',
    'GENAI',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') {
      return ALL_PROJECTS;
    }
    return ALL_PROJECTS.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="all-projects" className="py-24 relative bg-[#0a0d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>DATA IN ACTION &amp; EXPLORATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curated Technical Portfolio
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Filter through verified projects across Business Intelligence, machine learning systems, full-stack tools, and exploratory data analysis.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            {filterOptions.map((f) => {
              const isSelected = selectedFilter === f;
              const count =
                f === 'ALL'
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.category === f).length;

              return (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{f}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-amber-600 text-amber-100' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Visual Thumbnail Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/parshvtrack-preview.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                      {project.number} / {ALL_PROJECTS.length.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-slate-300 border border-slate-700/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                    {project.label}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
                  title="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
