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
      color: 'border-[#641E2B]/25 text-[#252321] bg-[#EAE2D7]/80',
    },
    {
      title: 'Social Service',
      sub: 'Community initiatives & collaborative welfare projects',
      icon: HeartHandshake,
      color: 'border-[#B78B79]/40 text-[#252321] bg-[#EAE2D7]/80',
    },
    {
      title: 'Dancing',
      sub: 'Creative artistic reset & bodily discipline',
      icon: Sparkles,
      color: 'border-[#641E2B]/25 text-[#252321] bg-[#EAE2D7]/80',
    },
    {
      title: 'Collaborative Learning & Team Guidance',
      sub: 'Peer debugging, mentoring, and group problem solving',
      icon: Users,
      color: 'border-[#B78B79]/40 text-[#252321] bg-[#EAE2D7]/80',
    },
    {
      title: 'Yoga & Running / Fitness',
      sub: 'Daily endurance routines that anchor mental clarity',
      icon: Activity,
      color: 'border-[#641E2B]/25 text-[#252321] bg-[#EAE2D7]/80',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D7] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252321] tracking-tight">
            A little about me
          </h2>
          <div className="w-16 h-1 bg-[#641E2B] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 text-[#453F3B] text-sm sm:text-base leading-relaxed">
              <p>
                I am an <strong className="text-[#252321] font-bold">Integrated M.Tech Computational Data Science student</strong> at{' '}
                <span className="text-[#641E2B] font-semibold">VIT Bhopal University</span>.
              </p>
              <p>
                My work sits across data analytics, business intelligence, AI/ML, financial intelligence, and software development. I have worked with business datasets, financial market series, industrial process data, Power BI dashboards, machine learning models (XGBoost, Random Forest), deep learning architectures (LSTM, GRU), FinBERT NLP pipelines, REST APIs, PostgreSQL, and generative AI applications.
              </p>
              <p>
                I enjoy learning by building and prefer projects where technology solves a practical problem — whether that means engineering multi-model financial forecast pipelines with FinBERT sentiment, cleaning 18 months of handwritten industrial logs for copper recovery prediction, streamlining field team workflows through a custom ERP, or designing document search with retrieval-augmented generation.
              </p>

              <div className="pt-4 border-t border-[#D8CEBF] flex flex-wrap gap-2 text-xs font-mono text-[#5C554E]">
                <span className="px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium">
                  Financial ML &amp; FinBERT NLP
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium">
                  Data Cleaning &amp; Feature Prep
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium">
                  Business Intelligence &amp; DAX
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium">
                  Explainable AI &amp; SHAP
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8CEBF] text-[#252321] font-medium">
                  Full Stack Flask/React &amp; PostgreSQL
                </span>
              </div>
            </div>

            {/* Small Personal Interests */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B635B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#641E2B]" />
                Interests &amp; Personal Energies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalityPills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={pill.title}
                      className={`p-3 rounded-xl border flex items-start gap-3 transition-all hover:scale-[1.01] ${pill.color}`}
                    >
                      <div className="p-1.5 rounded-lg bg-[#F5F0E8] text-[#641E2B] border border-[#D8CEBF] mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#252321] tracking-wide">{pill.title}</div>
                        <div className="text-[11px] text-[#5C554E] leading-snug mt-0.5">{pill.sub}</div>
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
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] flex items-center justify-center text-[#641E2B] shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#252321]">Academic Credentials</h3>
                  <p className="text-xs text-[#6B635B] font-mono">VIT Bhopal University</p>
                </div>
              </div>

              <div className="space-y-4">
                {quickFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-mono text-[#736B63] uppercase tracking-wider">
                      {fact.label}
                    </span>
                    <span className="text-sm font-bold text-[#252321] mt-1">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8CEBF] flex items-center justify-between text-xs font-mono text-[#5C554E]">
                <span className="flex items-center gap-1.5 text-[#641E2B] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Credentials
                </span>
                <span className="text-[#6B635B]">2023 – 2028 Cohort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
