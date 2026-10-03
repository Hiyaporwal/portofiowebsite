import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  const publicRepos = [
    {
      name: 'RecovAI',
      desc: 'AI decision support for Hindustan Copper’s Malanjkhand flotation plant: recovery prediction, reagent optimization, anomaly detection, and shift insights.',
      lang: 'Python / ML',
      url: 'https://github.com/Hiyaporwal/RecovAI',
    },
    {
      name: 'rag-doc-assistant',
      desc: 'RAG application to upload PDFs and ask questions using LangChain, ChromaDB vector store, HuggingFace embeddings, and Groq LLM with Streamlit.',
      lang: 'Python / LangChain',
      url: 'https://github.com/Hiyaporwal/rag-doc-assistant',
    },
    {
      name: 'uber-Power-bi-dashboard',
      desc: 'Interactive Power BI dashboard for Uber ride booking data analyzing trends, revenue by vehicle type, location density, and KPIs.',
      lang: 'Power BI / DAX',
      url: 'https://github.com/Hiyaporwal/uber-Power-bi-dashboard',
    },
    {
      name: 'blinkit-Analysis',
      desc: 'Exploratory data analysis of Blinkit sales dataset in Jupyter Notebook, identifying outlet performance and customer demand patterns.',
      lang: 'Jupyter Notebook',
      url: 'https://github.com/Hiyaporwal/blinkit-Analysis',
    },
    {
      name: 'netflixanalysis',
      desc: 'Exploratory analysis of Netflix catalog analyzing movie vs TV distributions, release trends, genres, and geographic production hubs.',
      lang: 'Jupyter Notebook',
      url: 'https://github.com/Hiyaporwal/netflixanalysis',
    },
    {
      name: 'ai-financial_analyst',
      desc: 'AI-powered stock analysis dashboard integrating Alpha Vantage API, XGBoost trend prediction, and technical momentum indicators.',
      lang: 'Python / XGBoost',
      url: 'https://github.com/Hiyaporwal/ai-financial_analyst',
    },
  ];

  return (
    <section className="py-24 relative bg-[#090b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/90 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-mono mb-3">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>OPEN SOURCE &amp; EXPERIMENTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                More experiments, more code.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                I learn by building. Explore my repositories, experiments and projects on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/Hiyaporwal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 w-fit group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Repos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {publicRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-mono">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {repo.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="text-amber-400/90 font-medium">{repo.lang}</span>
                  <span className="text-slate-400">Public Repo</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
