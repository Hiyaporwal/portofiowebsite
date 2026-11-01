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
    <section id="all-projects" className="py-24 relative bg-[#F5F0E8] border-t border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>DATA IN ACTION &amp; EXPLORATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
              Curated Technical Portfolio
            </h2>
            <p className="text-[#5C554E] text-sm sm:text-base mt-2 max-w-xl">
              Filter through verified projects across Financial Analytics, Business Intelligence, machine learning systems, full-stack tools, and exploratory data analysis.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#EAE2D7] p-1.5 rounded-2xl border border-[#D8CEBF] shadow-xs">
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#641E2B] text-[#F5F0E8] shadow-sm'
                      : 'text-[#5C554E] hover:text-[#252321] hover:bg-[#F5F0E8]/70'
                  }`}
                >
                  <span>{f}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-semibold ${
                      isSelected ? 'bg-[#4F1722] text-[#F5F0E8]' : 'bg-[#D8CEBF] text-[#252321]'
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
              className="glass-card rounded-2xl overflow-hidden border border-[#D8CEBF] flex flex-col justify-between group hover:border-[#641E2B]/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_-2px_rgba(37,35,33,0.05)]"
            >
              <div>
                {/* Visual Thumbnail Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE2D7] border-b border-[#D8CEBF]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/parshvtrack-preview.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252321]/40 via-transparent to-transparent opacity-60" />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#252321]/90 text-[#F5F0E8] backdrop-blur-sm shadow-xs">
                      {project.number} / {ALL_PROJECTS.length.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F5F0E8]/95 text-[#252321] border border-[#D8CEBF] backdrop-blur-sm shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-mono text-[#641E2B] uppercase tracking-wider mb-1 font-bold">
                    {project.label}
                  </div>
                  <h3 className="text-lg font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#5C554E] mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#736B63] font-semibold">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-[#D8CEBF] mt-4 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#F5F0E8] text-[#5C554E] hover:text-[#641E2B] hover:bg-[#FFFFFF] border border-[#D8CEBF] transition-all shadow-xs"
                  title="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#641E2B] hover:text-[#4F1722] group-hover:translate-x-0.5 transition-all cursor-pointer"
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
