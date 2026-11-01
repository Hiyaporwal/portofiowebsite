import React from 'react';
import { Database, BarChart3, BrainCircuit, AppWindow } from 'lucide-react';

export const PersonalStatement: React.FC = () => {
  const pillars = [
    {
      step: '01',
      title: 'Raw Data & Ingestion',
      desc: 'Standardizing messy handwritten shift logs, resolving missing values, and building automated ETL pipelines.',
      icon: Database,
      highlight: '1,640 records cleaned',
    },
    {
      step: '02',
      title: 'BI & Dashboards',
      desc: 'Translating business questions into dynamic Power BI dashboards, DAX measures, and executive KPI reports.',
      icon: BarChart3,
      highlight: '3d → <4h reporting speed',
    },
    {
      step: '03',
      title: 'Predictive Models & AI',
      desc: 'Training machine learning models (XGBoost, Scikit-learn), explaining outputs with SHAP, and building RAG pipelines.',
      icon: BrainCircuit,
      highlight: 'SHAP explainability',
    },
    {
      step: '04',
      title: 'Usable Applications',
      desc: 'Packaging models and data into reliable software interfaces using Flask, React, REST APIs, and PostgreSQL.',
      icon: AppWindow,
      highlight: '50+ active field users',
    },
  ];

  return (
    <section className="py-20 relative border-y border-[#D8CEBF] bg-[#EAE2D7]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Statement Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#641E2B] bg-[#641E2B]/10 border border-[#641E2B]/20 px-3.5 py-1.5 rounded-full">
              Philosophy & Engineering Approach
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#252321] tracking-tight leading-snug mb-6">
            “I like turning messy data and real-world problems into useful systems.”
          </h2>

          <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed max-w-3xl mx-auto">
            My experience spans business intelligence, data analysis, machine learning, financial analytics, generative AI,
            and software development. I enjoy working from raw data and problem definition all the way
            to dashboards, predictive models, and production-ready applications.
          </p>
        </div>

        {/* 4 End-to-End Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background number watermark */}
                <span className="absolute -right-2 -bottom-4 text-6xl font-black font-mono text-[#B78B79]/20 select-none pointer-events-none group-hover:text-[#641E2B]/15 transition-colors">
                  {item.step}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#D8CEBF] flex items-center justify-center text-[#641E2B] group-hover:scale-105 group-hover:border-[#641E2B]/40 transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#641E2B] bg-[#F5F0E8] px-2 py-0.5 rounded border border-[#D8CEBF]">
                      STAGE {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#252321] mb-2 group-hover:text-[#641E2B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5C554E] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8CEBF] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6B635B]">Evidence:</span>
                  <span className="text-[#641E2B] font-bold">{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
