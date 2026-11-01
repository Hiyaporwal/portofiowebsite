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
    <section id="skills" className="py-24 relative bg-[#F5F0E8] border-y border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRACTICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
              My Toolkit
            </h2>
            <p className="text-[#5C554E] text-sm sm:text-base mt-2 max-w-xl">
              Technologies I use to turn ideas into working solutions. Grounded in real project implementations — no fabricated percentages.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736B63]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, tool, or project..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#EAE2D7] border border-[#D8CEBF] text-[#252321] placeholder-[#847C74] focus:outline-none focus:border-[#641E2B] transition-colors shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#736B63] hover:text-[#252321]"
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#641E2B] text-[#F5F0E8] shadow-md shadow-[#641E2B]/20'
                    : 'bg-[#EAE2D7] text-[#5C554E] hover:text-[#252321] hover:bg-[#E3D9CC] border border-[#D8CEBF]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                {cat.value !== 'ALL' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-semibold ${
                      isSelected ? 'bg-[#4F1722] text-[#F5F0E8]' : 'bg-[#D8CEBF] text-[#252321]'
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
              className="glass-card rounded-2xl p-5 border flex flex-col justify-between group hover:border-[#641E2B]/40 relative overflow-hidden"
            >
              <div>
                {/* Card Top: Name & Category Tag */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F0E8] border border-[#D8CEBF] flex items-center justify-center text-[#641E2B] group-hover:scale-105 group-hover:border-[#641E2B]/40 transition-all font-mono font-bold text-xs shadow-xs">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#736B63] uppercase font-semibold">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#5C554E] leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Used In Projects */}
              <div className="pt-3 border-t border-[#D8CEBF]">
                <div className="text-[10px] font-mono uppercase text-[#736B63] mb-1.5 flex items-center gap-1 font-semibold">
                  <Sparkles className="w-2.5 h-2.5 text-[#641E2B]" />
                  Used in Projects:
                </div>
                <div className="flex flex-wrap gap-1">
                  {skill.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5F0E8] text-[#252321] border border-[#D8CEBF] font-mono font-medium group-hover:border-[#B78B79] transition-colors"
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
          <div className="text-center py-16 bg-[#EAE2D7]/60 rounded-2xl border border-[#D8CEBF]">
            <p className="text-[#5C554E] text-sm">No technologies match "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="mt-3 text-xs text-[#641E2B] hover:underline font-mono font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
