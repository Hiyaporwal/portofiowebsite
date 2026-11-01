import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  const publicRepos = [
    {
      name: 'finsight-ai',
      desc: 'AI-powered financial analyst for NSE stocks integrating machine learning, LSTM/GRU deep learning, FinBERT sentiment, document RAG, and MLOps.',
      lang: 'Python / Flask / DL / FinBERT',
      url: 'https://github.com/Hiyaporwal/finsight-ai',
    },
    {
      name: 'RecovAI',
      desc: 'AI decision support for Hindustan Copper’s Malanjkhand flotation plant: recovery prediction, reagent optimization, anomaly detection, and shift insights.',
      lang: 'Python / XGBoost / Streamlit',
      url: 'https://github.com/Hiyaporwal/RecovAI',
    },
    {
      name: 'rag-doc-assistant',
      desc: 'RAG application to upload PDFs and ask questions using LangChain, ChromaDB vector store, HuggingFace embeddings, and Groq LLM with Streamlit.',
      lang: 'Python / LangChain / Chroma',
      url: 'https://github.com/Hiyaporwal/rag-doc-assistant',
    },
    {
      name: 'uber-Power-bi-dashboard',
      desc: 'Interactive Power BI dashboard for Uber ride booking data analyzing trends, revenue by vehicle type, location density, and cancellation KPIs.',
      lang: 'Power BI / DAX / Power Query',
      url: 'https://github.com/Hiyaporwal/uber-Power-bi-dashboard',
    },
    {
      name: 'blinkit-Analysis',
      desc: 'Exploratory data analysis of Blinkit sales dataset in Jupyter Notebook, identifying outlet performance and customer demand patterns.',
      lang: 'Python / Pandas / Seaborn',
      url: 'https://github.com/Hiyaporwal/blinkit-Analysis',
    },
    {
      name: 'netflixanalysis',
      desc: 'Exploratory analysis of Netflix catalog analyzing movie vs TV distributions, release trends, genres, and geographic production hubs.',
      lang: 'Python / EDA / Matplotlib',
      url: 'https://github.com/Hiyaporwal/netflixanalysis',
    },
  ];

  return (
    <section className="py-24 relative bg-[#F5F0E8] border-t border-[#D8CEBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="bg-[#EAE2D7] rounded-3xl p-8 sm:p-12 border border-[#D8CEBF] relative overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F0E8] border border-[#D8CEBF] text-xs text-[#641E2B] font-mono mb-3">
                <GithubIcon className="w-3.5 h-3.5" />
                <span className="font-semibold tracking-wider">OPEN SOURCE &amp; REPOSITORIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252321] tracking-tight">
                More experiments, more code.
              </h2>
              <p className="text-[#5C554E] text-sm sm:text-base mt-3 leading-relaxed">
                I learn by building. Explore my repositories, predictive models, interactive dashboards, and open source work on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/Hiyaporwal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#641E2B] hover:bg-[#4F1722] text-[#F5F0E8] transition-all shadow-md w-fit group"
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
                className="p-5 rounded-2xl bg-[#F5F0E8] hover:bg-[#FFFFFF] border border-[#D8CEBF] hover:border-[#641E2B]/40 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#252321] group-hover:text-[#641E2B] transition-colors font-mono">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8C827A] group-hover:text-[#641E2B] transition-colors" />
                  </div>
                  <p className="text-xs text-[#5C554E] line-clamp-3 leading-relaxed mb-4">
                    {repo.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8CEBF] flex items-center justify-between text-[11px] font-mono text-[#8C827A]">
                  <span className="text-[#641E2B] font-semibold">{repo.lang}</span>
                  <span className="text-[#8C827A]">Public Repo</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
