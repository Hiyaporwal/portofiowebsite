import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Users,
  Mic,
  HeartHandshake,
  Activity,
  CheckCircle2,
  Compass,
} from 'lucide-react';

export const About: React.FC = () => {
  const quickFacts = [
    { label: 'Current Degree', value: 'Integrated M.Tech Computational Data Science' },
    { label: 'University', value: 'VIT Bhopal University (2023–2028)' },
    { label: 'Academic Standing', value: 'CGPA 8.25 / 10' },
    { label: 'Industry Exposure', value: '4 Internships (3 Technical + 1 Non-Technical)' },
  ];

  const personalityPills = [
    {
      title: 'Speaking',
      sub: 'Technical presentations & clear stakeholder communication',
      icon: Mic,
      color: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    },
    {
      title: 'Social Service',
      sub: 'Community initiatives & collaborative welfare projects',
      icon: HeartHandshake,
      color: 'border-rose-500/30 text-rose-300 bg-rose-500/10',
    },
    {
      title: 'Dancing',
      sub: 'Creative artistic reset & bodily discipline',
      icon: Sparkles,
      color: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
    },
    {
      title: 'Collaborative Learning & Team Guidance',
      sub: 'Peer debugging, mentoring, and group problem solving',
      icon: Users,
      color: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
    },
    {
      title: 'Yoga & Running / Fitness',
      sub: 'Daily endurance routines that anchor mental clarity',
      icon: Activity,
      color: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A little about me
          </h2>
          <div className="w-16 h-1 bg-amber-500/80 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am an <strong className="text-white font-semibold">Integrated M.Tech Computational Data Science student</strong> at{' '}
                <span className="text-amber-300 font-medium">VIT Bhopal University</span>.
              </p>
              <p>
                My work sits across data analytics, business intelligence, AI/ML, and software development. I have worked with business datasets, industrial process data, Power BI dashboards, machine learning models, REST APIs, PostgreSQL, and generative AI applications.
              </p>
              <p>
                I enjoy learning by building and prefer projects where technology solves a practical problem — whether that means cleaning 18 months of handwritten industrial logs for copper flotation prediction, streamlining field team workflows through a custom ERP, or designing document search with retrieval-augmented generation.
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Data Cleaning &amp; Feature Prep
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Business Intelligence &amp; DAX
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Explainable AI &amp; SHAP
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Full Stack React &amp; PostgreSQL
                </span>
              </div>
            </div>

            {/* Small Personal Interests */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Interests &amp; Personal Energies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalityPills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={pill.title}
                      className={`p-3 rounded-xl border flex items-start gap-3 backdrop-blur-sm transition-all hover:scale-[1.01] ${pill.color}`}
                    >
                      <div className="p-1.5 rounded-lg bg-black/40 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">{pill.title}</div>
                        <div className="text-[11px] text-slate-300 leading-snug mt-0.5">{pill.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Highlights & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Snapshot Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Academic Credentials</h3>
                  <p className="text-xs text-slate-400 font-mono">VIT Bhopal University</p>
                </div>
              </div>

              <div className="space-y-4">
                {quickFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold text-white mt-1">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Credentials
                </span>
                <span className="text-slate-400">2023 – 2028 Cohort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
