import React, { useState, useMemo } from 'react';
import {
  Wrench,
  Search,
  Database,
  Cpu,
  Code2,
  HardDrive,
  Settings2,
  Terminal,
  FileCode,
  Sparkles,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

type CategoryFilter =
  | 'ALL'
  | 'DATA & ANALYTICS'
  | 'AI / ML'
  | 'SOFTWARE'
  | 'DATABASES'
  | 'TOOLS'
  | 'LANGUAGES';

export const Toolkit: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: CategoryFilter; icon: React.ElementType }[] = [
    { label: 'All Tech', value: 'ALL', icon: Wrench },
    { label: 'Data & Analytics', value: 'DATA & ANALYTICS', icon: Database },
    { label: 'AI / Machine Learning', value: 'AI / ML', icon: Cpu },
    { label: 'Software & Web', value: 'SOFTWARE', icon: Code2 },
    { label: 'Databases', value: 'DATABASES', icon: HardDrive },
    { label: 'Tools & DevOps', value: 'TOOLS', icon: Settings2 },
    { label: 'Languages', value: 'LANGUAGES', icon: FileCode },
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'ALL' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.usedIn.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-[#0a0d16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRACTICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              My Toolkit
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Technologies I use to turn ideas into working solutions. Grounded in real project implementations — no fabricated percentages.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, tool, or project..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                {cat.value !== 'ALL' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected ? 'bg-amber-600 text-amber-100' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {SKILLS_DATA.filter((s) => s.category === cat.value).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between group hover:border-amber-500/40 relative overflow-hidden"
            >
              <div>
                {/* Card Top: Name & Category Tag */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-500/30 transition-all font-mono font-bold text-xs">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Used In Projects */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-[10px] font-mono uppercase text-slate-500 mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  Used in Projects:
                </div>
                <div className="flex flex-wrap gap-1">
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No technologies match "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
