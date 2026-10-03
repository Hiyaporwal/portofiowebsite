export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'DATA & BI' | 'SOFTWARE' | 'GENAI';
  label: string;
  description: string;
  image: string;
  gallery?: string[];
  pipeline?: string[];
  features?: string[];
  technologies: string[];
  myContribution: string;
  problem: string;
  approach: string;
  results: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  metrics: { label: string; value: string }[];
  skills: string[];
  connectedProject?: {
    name: string;
    targetId: string;
    badge: string;
  };
}

export interface SkillItem {
  name: string;
  category: 'DATA & ANALYTICS' | 'AI / ML' | 'SOFTWARE' | 'DATABASES' | 'TOOLS' | 'LANGUAGES';
  icon: string;
  description: string;
  usedIn: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  details?: string;
  badge?: string;
}

export interface AchievementItem {
  title: string;
  role: string;
  period?: string;
  description: string;
  badge: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  year?: string;
  credentialBadge?: string;
}

export const PERSONAL_INFO = {
  name: 'Hiya Porwal',
  title: 'Computational Data Science | Data • AI/ML • Software',
  tagline: 'I build with Data, AI & Software.',
  heroBio:
    'Integrated M.Tech Computational Data Science student building practical solutions across analytics, business intelligence, machine learning, generative AI and software development.',
  statement: {
    headline: 'I like turning messy data and real-world problems into useful systems.',
    detail:
      'My experience spans business intelligence, data analysis, machine learning, generative AI and software development. I enjoy working from raw data and problem definition all the way to dashboards, predictive models and usable applications.',
  },
  about: {
    title: 'A little about me',
    paragraphs: [
      'I am an Integrated M.Tech Computational Data Science student at VIT Bhopal University (2023–2028).',
      'My work sits at the active intersection of data analytics, business intelligence, AI/ML, and software engineering. I have worked with multi-source business datasets, industrial process sensor logs, interactive Power BI dashboards, machine learning models, REST APIs, PostgreSQL databases, and generative AI systems.',
      'I enjoy learning by building and prefer projects where technology directly addresses an operational or practical problem.',
    ],
    interests: [
      {
        title: 'Speaking & Storytelling',
        detail: 'Presenting technical insights and bridging engineering concepts for diverse stakeholders.',
        icon: 'Mic',
      },
      {
        title: 'Social Service',
        detail: 'Active involvement in community initiatives, social engagement, and collaborative welfare.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Dancing',
        detail: 'A rhythmic and creative reset that cultivates discipline, expressiveness, and focus.',
        icon: 'Sparkles',
      },
      {
        title: 'Collaborative Learning',
        detail: 'Pair debugging, mentorship, and building knowledge by working through real code with peers.',
        icon: 'Users',
      },
      {
        title: 'Fitness & Yoga',
        detail: 'Daily running and yoga practice to maintain physical endurance and mental clarity.',
        icon: 'Activity',
      },
    ],
  },
  contact: {
    email: 'hiyaporwal89@gmail.com',
    linkedin: 'https://linkedin.com/in/hiya-porwal',
    github: 'https://github.com/Hiyaporwal',
    location: 'Bhopal / Rajasthan, India',
    status: 'Open to Technical Internships & Roles (Data • AI/ML • Software)',
  },
};

export const SKILLS_DATA: SkillItem[] = [
  // DATA & ANALYTICS
  {
    name: 'Python',
    category: 'DATA & ANALYTICS',
    icon: 'Terminal',
    description: 'Core scripting for data manipulation, statistical analysis, and machine learning pipelines.',
    usedIn: ['RecovAI', 'Netflix Analysis', 'Blinkit Analysis', 'RAG PDF Chat', 'AI Financial Analyst'],
  },
  {
    name: 'SQL',
    category: 'DATA & ANALYTICS',
    icon: 'Database',
    description: 'Complex querying, CTEs, window functions, aggregation, and relational schema modeling.',
    usedIn: ['SVS Datalytics', 'ParshvTrack', 'Hindustan Copper Preprocessing'],
  },
  {
    name: 'Power BI',
    category: 'DATA & ANALYTICS',
    icon: 'BarChart3',
    description: 'Enterprise dashboards, dynamic KPIs, drill-through reports, and data modeling.',
    usedIn: ['SVS Datalytics', 'Uber Ride Bookings Dashboard'],
  },
  {
    name: 'DAX',
    category: 'DATA & ANALYTICS',
    icon: 'FunctionSquare',
    description: 'Calculated measures, time-intelligence functions, and parameter-driven metrics.',
    usedIn: ['Uber Ride Bookings Dashboard', 'SVS Datalytics'],
  },
  {
    name: 'Power Query',
    category: 'DATA & ANALYTICS',
    icon: 'Layers',
    description: 'Automated ETL, data shaping, schema unpivoting, and multi-source dataset cleaning.',
    usedIn: ['SVS Datalytics', 'Uber Ride Bookings Dashboard'],
  },
  {
    name: 'Pandas & NumPy',
    category: 'DATA & ANALYTICS',
    icon: 'Binary',
    description: 'High-performance vector operations, array transformations, and dataframe cleaning.',
    usedIn: ['RecovAI', 'Blinkit Analysis', 'Netflix Analysis'],
  },
  {
    name: 'Matplotlib & Seaborn',
    category: 'DATA & ANALYTICS',
    icon: 'PieChart',
    description: 'Exploratory data analysis, distribution plotting, heatmaps, and trend visualizations.',
    usedIn: ['Netflix Analysis', 'Blinkit Analysis'],
  },
  {
    name: 'Excel',
    category: 'DATA & ANALYTICS',
    icon: 'Sheet',
    description: 'Pivot tables, VLOOKUP/XLOOKUP, quick ad-hoc analysis, and stakeholder reporting.',
    usedIn: ['SVS Datalytics', 'HCL Preprocessing'],
  },

  // AI / ML
  {
    name: 'Scikit-learn',
    category: 'AI / ML',
    icon: 'Cpu',
    description: 'Supervised & unsupervised learning pipelines, regression, clustering, and cross-validation.',
    usedIn: ['RecovAI', 'Healthcare Prediction System'],
  },
  {
    name: 'XGBoost',
    category: 'AI / ML',
    icon: 'Zap',
    description: 'Gradient boosted trees for high-precision tabular regression and prediction.',
    usedIn: ['RecovAI', 'AI Financial Analyst'],
  },
  {
    name: 'Predictive Modeling',
    category: 'AI / ML',
    icon: 'TrendingUp',
    description: 'End-to-end model training, hyperparameter tuning, and cross-validation workflows.',
    usedIn: ['RecovAI', 'AI Financial Analyst'],
  },
  {
    name: 'Feature Engineering',
    category: 'AI / ML',
    icon: 'Workflow',
    description: 'Creating domain-specific ratios, handling collinearity, and feature encoding.',
    usedIn: ['RecovAI', 'Data-drift-detection'],
  },
  {
    name: 'SHAP (Explainable AI)',
    category: 'AI / ML',
    icon: 'Search',
    description: 'Shapley values to quantify feature contributions and interpret model predictions.',
    usedIn: ['RecovAI'],
  },
  {
    name: 'RAG & LangChain',
    category: 'AI / ML',
    icon: 'Network',
    description: 'Document chunking, prompt engineering, chain orchestration, and context injection.',
    usedIn: ['RAG PDF Chat'],
  },
  {
    name: 'Groq & Llama 3.3',
    category: 'AI / ML',
    icon: 'Sparkles',
    description: 'High-speed LLM inference with ultra-low latency for contextual generation.',
    usedIn: ['RAG PDF Chat', 'RecovAI Assistant'],
  },
  {
    name: 'ChromaDB',
    category: 'AI / ML',
    icon: 'Boxes',
    description: 'Vector store for cosine-similarity semantic retrieval and chunk indexing.',
    usedIn: ['RAG PDF Chat'],
  },

  // SOFTWARE
  {
    name: 'React.js',
    category: 'SOFTWARE',
    icon: 'Atom',
    description: 'Component architecture, responsive state management, and modern interactive UI.',
    usedIn: ['ParshvTrack ERP', 'Portfolio Website'],
  },
  {
    name: 'Node.js',
    category: 'SOFTWARE',
    icon: 'Server',
    description: 'Backend runtime, asynchronous service handlers, and middleware.',
    usedIn: ['ParshvTrack ERP'],
  },
  {
    name: 'REST APIs',
    category: 'SOFTWARE',
    icon: 'ArrowLeftRight',
    description: 'Contract-first API design, CRUD endpoints, token authentication, and data transfer.',
    usedIn: ['ParshvTrack ERP', 'FastAPI Backend for RecovAI'],
  },
  {
    name: 'JavaScript / HTML / CSS',
    category: 'SOFTWARE',
    icon: 'Code',
    description: 'Modern ES6+, responsive layouts, Flexbox/Grid, and dynamic interactions.',
    usedIn: ['ParshvTrack ERP', 'ToxiGuard AI'],
  },

  // DATABASES
  {
    name: 'PostgreSQL',
    category: 'DATABASES',
    icon: 'Database',
    description: 'Production relational database design, indexing, transactions, and foreign keys.',
    usedIn: ['ParshvTrack ERP', 'ParshWebCraft Internships'],
  },
  {
    name: 'MySQL',
    category: 'DATABASES',
    icon: 'Table',
    description: 'Relational data structures, normalized schemas, and structured storage.',
    usedIn: ['Academic Projects', 'VIT Labs'],
  },
  {
    name: 'SQLite',
    category: 'DATABASES',
    icon: 'HardDrive',
    description: 'Lightweight embedded storage for standalone applications and local persistence.',
    usedIn: ['RecovAI'],
  },

  // TOOLS
  {
    name: 'Git & GitHub',
    category: 'TOOLS',
    icon: 'GitBranch',
    description: 'Version control, branch workflows, pull requests, and collaborative codebases.',
    usedIn: ['All Projects & Repositories'],
  },
  {
    name: 'Jira',
    category: 'TOOLS',
    icon: 'Kanban',
    description: 'Agile sprint tracking, task dispatch, backlog management, and team workflows.',
    usedIn: ['ParshWebCraft', 'Academic Team Projects'],
  },
  {
    name: 'n8n',
    category: 'TOOLS',
    icon: 'Workflow',
    description: 'Workflow automation, webhook integration, and service-to-service connectors.',
    usedIn: ['Operational Workflows'],
  },
  {
    name: 'MATLAB',
    category: 'TOOLS',
    icon: 'Calculator',
    description: 'Mathematical modeling, matrix computations, and algorithm simulation.',
    usedIn: ['MATLAB Onramp', 'Academic Coursework'],
  },

  // LANGUAGES
  {
    name: 'C++',
    category: 'LANGUAGES',
    icon: 'FileCode',
    description: 'Core object-oriented programming, data structures, and algorithmic foundations.',
    usedIn: ['Data Structures & Algorithms Coursework'],
  },
  {
    name: 'Java',
    category: 'LANGUAGES',
    icon: 'Coffee',
    description: 'Object-oriented software principles, classes, and enterprise programming fundamentals.',
    usedIn: ['Academic Coursework'],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'svs-datalytics',
    company: 'SVS Datalytics',
    role: 'Data Analyst Intern',
    period: 'June 2026 – Present',
    location: 'Remote',
    description:
      'Build and maintain Power BI dashboards, clean and transform multi-source datasets using SQL and Power Query, and support recurring reporting and business analytics across cross-functional operations.',
    metrics: [
      { label: 'KPIs Tracked', value: '15+' },
      { label: 'Business Functions', value: '5' },
      { label: 'Multi-Source Feeds', value: '6+' },
      { label: 'Data-Prep Time Saved', value: '30%' },
      { label: 'Turnaround Time', value: '3d → <4h' },
    ],
    skills: ['Power BI', 'SQL', 'Power Query', 'DAX', 'Business Analytics', 'Reporting Automation'],
  },
  {
    id: 'hindustan-copper',
    company: 'Hindustan Copper Limited (HCL)',
    role: 'Data Analytics Intern',
    period: 'May 2026 – June 2026',
    location: 'Malanjkhand Copper Project',
    description:
      'Analyzed industrial process data from concentrator flotation operations, conducted data cleaning and exploratory analysis, digitized structured handwritten shift records, developed predictive models, and investigated metallurgical drivers influencing copper recovery.',
    metrics: [
      { label: 'Historical Timeline', value: '18+ Mos' },
      { label: 'Shift Logs Processed', value: '1,640' },
      { label: 'Data Quality Uplift', value: '25%' },
    ],
    skills: ['Industrial Analytics', 'Data Preprocessing', 'Feature Engineering', 'EDA', 'Predictive Modeling'],
    connectedProject: {
      name: 'RecovAI System',
      targetId: 'recovai',
      badge: 'Direct Foundation of RecovAI Project',
    },
  },
  {
    id: 'parshwebcraft',
    company: 'ParshWebCraft',
    role: 'Data Analyst Intern / Technical Intern',
    period: 'February 2026 – April 2026',
    location: 'Hybrid',
    description:
      'Worked with operational and business data, created reports and performance dashboards, and collaborated with the engineering team on enterprise ERP modules using React, Node.js, and PostgreSQL.',
    metrics: [
      { label: 'Active Field Users', value: '50+' },
      { label: 'Modules Supported', value: '4' },
      { label: 'Stack Integration', value: 'Full Stack' },
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'ERP Workflows', 'Performance Dashboards'],
    connectedProject: {
      name: 'ParshvTrack ERP',
      targetId: 'parshvtrack',
      badge: 'Collaborated on Enterprise ERP Architecture',
    },
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'recovai',
    number: '01',
    title: 'RecovAI',
    subtitle: 'Copper Recovery Prediction & Monitoring System',
    category: 'AI / ML',
    label: 'AI / ML · Industrial Analytics',
    description:
      'An AI-powered decision-support system developed around copper flotation operations at Hindustan Copper Limited’s Malanjkhand Copper Project. It combines machine learning, rigorous data preprocessing, explainable AI, anomaly detection, and operational monitoring to help analyze copper recovery conditions.',
    image: '/images/recovai-dashboard.png',
    gallery: [
      '/images/recovai-dashboard.png',
      '/images/recovai-predict.png',
      '/images/recovai-shap.png',
    ],
    pipeline: [
      'Industrial Shift Logs',
      'Data Cleaning & Standardization',
      'Feature Engineering',
      'XGBoost Regression',
      'SHAP Explainability',
      'Decision Support Dashboard',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'SHAP',
      'FastAPI',
      'Streamlit',
      'SQLite',
    ],
    myContribution:
      'My contribution focused strictly on data manipulation, cleaning, unit standardization, and feature transformation: converting raw, handwritten industrial shift logs (1,640 records across 18+ months) into clean, model-ready datasets.',
    problem:
      'Copper flotation recovery depends on highly variable inputs: head grade, feed rate, pH balance, pulp density, and chemical reagents (SIPX, frother, lime). Shift operators previously relied on manual inspection and retrospective reports, making real-time recovery optimization reactive and prone to variance.',
    approach:
      'Collected and standardized 1,640 shift records from handwritten logs at the HCL Malanjkhand concentrator plant. Standardized numerical units, resolved missing entries, eliminated outliers, engineered key interaction ratios, and fed clean feature vectors into machine learning models accompanied by SHAP explainability and drift monitoring.',
    results: [
      'Successfully processed 1,640 shift records spanning 18+ months of plant operations.',
      'Achieved a 25% improvement in model-ready data quality through standardized preprocessing.',
      'Enabled interpretability for flotation drivers using SHAP feature importance attribution.',
      'Constructed a functional decision-support architecture linking industrial data to actionable predictions.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/RecovAI',
    isFeatured: true,
  },
  {
    id: 'parshvtrack',
    number: '02',
    title: 'ParshvTrack',
    subtitle: 'Field Workforce Management ERP',
    category: 'SOFTWARE',
    label: 'SOFTWARE · ERP · FULL STACK',
    description:
      'A robust workforce management ERP designed for distributed field teams, combining real-time GPS tracking, geo-tagged attendance verification, employee roster management, task dispatch workflows, and database-backed operational reporting.',
    image: '/images/parshvtrack-preview.svg',
    pipeline: [
      'Field Employee Device',
      'React UI Client',
      'Node.js REST API',
      'PostgreSQL Relational DB',
      'Operational Dashboard',
    ],
    features: [
      'Live GPS fleet location tracking',
      'Geo-tagged attendance verification (±3m perimeter)',
      'Employee directory and roster workflows',
      'Field task assignment and status lifecycles',
      'Payroll-related attendance summaries',
      'Secure REST APIs with database-backed reporting',
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'PostgreSQL', 'REST APIs', 'Express', 'Tailwind CSS'],
    myContribution:
      'Collaborated on full-stack web engineering and business reporting: built dynamic UI components in React, integrated backend REST endpoints with PostgreSQL schemas, and developed operational performance dashboards for managerial oversight.',
    problem:
      'Field service teams operated with fragmented reporting: attendance was recorded on paper or messaging groups, field routes were unverified, and managerial reporting lagged by several days, creating operational blind spots and payroll discrepancies.',
    approach:
      'Built a centralized, modular ERP platform with a responsive React interface connected via structured REST APIs to a PostgreSQL database. Implemented geo-tagged check-ins, automated status transitions for tasks, and structured database queries for rapid report generation.',
    results: [
      'Actively deployed and verified across 50+ field employees.',
      'Unified attendance, task dispatch, and location validation into a single workflow.',
      'Eliminated manual attendance spreadsheets and reduced operational verification lag.',
      'Demonstrated production-grade software engineering and relational database design.',
    ],
    githubUrl: 'https://github.com/parshwebcraft/parshvtrack',
    isFeatured: true,
  },
  {
    id: 'rag-pdf-chat',
    number: '03',
    title: 'RAG PDF Chat',
    subtitle: 'Ask questions. Retrieve context. Generate answers.',
    category: 'GENAI',
    label: 'GENERATIVE AI · RAG',
    description:
      'A Retrieval-Augmented Generation application that allows users to upload complex PDF documents and ask questions in natural language. Powered by LangChain, ChromaDB vector store, HuggingFace embeddings, and high-speed Groq LLM inference.',
    image: '/images/rag-pdf-preview.svg',
    pipeline: [
      'PDF Document',
      'Chunk & Partition',
      'HuggingFace Embed',
      'ChromaDB Vector Index',
      'Cosine Retrieval',
      'Groq Llama 3.3 70B',
      'Cited Answer',
    ],
    features: [
      'Multi-document PDF parsing with PyPDF',
      'Semantic chunking with token overlap preservation',
      'Persistent local ChromaDB vector database',
      'Local embedding computation via sentence-transformers',
      'Sub-second inference via Groq Llama 3.3 70B API',
      'Interactive Streamlit chat interface with citation provenance',
    ],
    technologies: [
      'Python',
      'LangChain',
      'Groq',
      'Llama 3.3 70B',
      'HuggingFace Embeddings',
      'ChromaDB',
      'Streamlit',
    ],
    myContribution:
      'Designed and implemented the complete RAG pipeline: document loading, chunk optimization, embedding vector storage in ChromaDB, similarity retrieval orchestration via LangChain, and Streamlit conversational interface.',
    problem:
      'Standard LLMs hallucinate or lack access to private, lengthy PDF reports, manuals, and technical documents. Users need rapid, verifiable question-answering with exact source citations without uploading sensitive data to expensive closed APIs.',
    approach:
      'Configured local embedding generation using all-MiniLM-L6-v2 to embed partitioned document chunks into ChromaDB. Upon receiving a query, calculated cosine similarity to extract the top-k most relevant chunks, bound the context into structured prompts, and streamed high-throughput answers via Groq.',
    results: [
      'Sub-second query response times powered by Groq’s high-throughput LPU inference.',
      'Zero-cost local vector embeddings running entirely on CPU via HuggingFace.',
      'Accurate document-grounded responses with verifiable context extraction.',
      'Clean modular codebase ready for cloud or local deployment.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/rag-doc-assistant',
    isFeatured: true,
  },
];

export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'uber-power-bi',
    number: '04',
    title: 'Uber Ride Bookings Dashboard',
    subtitle: 'Operational & Revenue Analytics Dashboard',
    category: 'DATA & BI',
    label: 'BUSINESS INTELLIGENCE · POWER BI',
    description:
      'An interactive Power BI dashboard analyzing Uber ride booking trends, revenue generated across vehicle types, customer behavior, and driver performance to assist operational decision-making.',
    image: '/images/uber-dashboard-1.png',
    gallery: ['/images/uber-dashboard-1.png', '/images/uber-dashboard-2.png'],
    features: [
      'Completed vs lost bookings analysis',
      'Total revenue and distance metrics tracking',
      'Average trip distance and duration breakdowns',
      'Revenue contribution by vehicle category (Auto, Premier, Sedan, Go)',
      'Month and Quarter trend switching via dynamic Field Parameters',
      'Top pickup and drop location density analysis',
      'Customer and driver rating distributions',
    ],
    technologies: ['Power BI Desktop', 'Power Query', 'DAX', 'Field Parameters', 'Data Modeling'],
    myContribution:
      'Cleaned and modeled ride-booking datasets in Power Query, authored custom DAX measures for operational KPIs, configured dynamic Field Parameters for time-scale switching, and designed executive visualization layouts.',
    problem:
      'Ride-sharing operations generate multi-dimensional transaction logs. Fleet managers need unified visibility into booking completion rates, lost ride causes, revenue distributions by vehicle type, and localized customer satisfaction without digging into raw spreadsheets.',
    approach:
      'Imported and transformed raw booking logs in Power Query. Built a star-schema relational model, engineered DAX measures for dynamic KPIs (completion rate, average fare, driver score), and created interactive slicers for instant slicing by vehicle category and time period.',
    results: [
      'Engineered interactive time-series switching between monthly and quarterly executive views.',
      'Identified revenue performance variations across ride tiers.',
      'Provided transparent tracking of completed vs canceled bookings for operational reviews.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/uber-Power-bi-dashboard',
  },
  {
    id: 'blinkit-analysis',
    number: '05',
    title: 'Blinkit Data Analysis',
    subtitle: 'Exploratory Data Analysis on Quick-Commerce Sales',
    category: 'DATA & BI',
    label: 'EXPLORATORY DATA ANALYSIS · PYTHON',
    description:
      'In-depth exploratory data analysis of Blinkit quick-commerce sales records using Python to uncover item category distributions, outlet tier revenue patterns, and consumer purchasing behavior.',
    image: '/images/blinkit-preview.svg',
    features: [
      '8,500+ product sales records analyzed',
      'Item visibility and fat content sales segmentation',
      'Outlet size, tier, and establishment year comparisons',
      'Distribution visualization using Seaborn and Matplotlib',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    myContribution:
      'Conducted end-to-end data cleaning, handled missing values across outlet attributes, executed descriptive statistics, and constructed analytical visual charts in Jupyter Notebook.',
    problem:
      'Quick-commerce platforms manage thousands of SKUs across heterogeneous store formats. Understanding which outlet characteristics and item visibility factors drive gross revenue requires granular statistical inspection.',
    approach:
      'Performed systematic data hygiene in Pandas: cleaned item identifiers, handled null values in item weight and outlet size, encoded categorical variables, and synthesized correlation heatmaps and boxplots in Seaborn to isolate revenue drivers.',
    results: [
      'Analyzed 8,500+ product records across Tier 1, Tier 2, and Tier 3 quick-commerce outlets.',
      'Identified top revenue-generating item categories and outlet format performance drivers.',
      'Provided documented analytical notebooks detailing statistical methodology and insights.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/blinkit-Analysis',
  },
  {
    id: 'netflix-analysis',
    number: '06',
    title: 'Netflix Data Analysis',
    subtitle: 'Catalog Content & Streaming Trends EDA',
    category: 'DATA & BI',
    label: 'EXPLORATORY DATA ANALYSIS · PYTHON',
    description:
      'Comprehensive data analysis of Netflix content library covering global content distribution, movie vs TV show proportions, country-specific production trends, and maturity rating patterns.',
    image: '/images/netflix-preview.svg',
    features: [
      '8,800+ titles cleaned and parsed',
      'Historical release year trajectory (2000–2021)',
      'Cross-country content production analysis (US, India, UK leading)',
      'Maturity rating classification and genre segmentation',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    myContribution:
      'Parsed multi-valued string columns (genres, country listings, directors), handled missing data, and plotted comprehensive distribution charts to tell a visual story of Netflix’s catalog evolution.',
    problem:
      'Streaming platforms must continually balance content investments. Analyzing how content mixes shift over time and which geographies produce the highest volume reveals commercial strategies and audience targeting.',
    approach:
      'Ingested catalog metadata, parsed nested comma-separated attributes for directors and countries, converted date formats for longitudinal analysis, and plotted stacked distributions highlighting the dramatic rise in international original productions.',
    results: [
      'Cleaned and evaluated 8,807 streaming titles.',
      'Revealed the 70/30 split between movie and TV series acquisitions.',
      'Documented peak catalog expansion years and geographic concentration shifts.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/netflixanalysis',
  },
  {
    id: 'ai-financial-analyst',
    number: '07',
    title: 'AI Financial Analyst',
    subtitle: 'Stock Trend & Market Sentiment Prediction',
    category: 'AI / ML',
    label: 'FINTECH · PREDICTIVE MODELING',
    description:
      'An AI-driven equity analysis web dashboard combining market data APIs, XGBoost predictive modeling, and technical indicators to evaluate stock trends and volatility patterns.',
    image: '/images/recovai-predict.png',
    features: [
      'Alpha Vantage API integration for live market series',
      'Technical indicator calculations (RSI, Moving Averages)',
      'XGBoost model for trend direction prediction',
      'Interactive Flask web interface',
    ],
    technologies: ['Python', 'Flask', 'XGBoost', 'Pandas', 'Alpha Vantage API', 'HTML/CSS'],
    myContribution:
      'Implemented data ingestion from financial APIs, calculated rolling technical indicators, trained predictive gradient boosting models, and built the lightweight Flask UI.',
    problem:
      'Retail investors often struggle to interpret conflicting technical chart indicators and financial time series without structured algorithmic summarization.',
    approach:
      'Streamed stock prices, engineered rolling feature windows (volatility, momentum, volume changes), and generated probability predictions for directional price shifts with clean visual graphs.',
    results: [
      'Connected live equity feeds with algorithmic feature engineering.',
      'Demonstrated time-series data processing and model deployment via Flask.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/ai-financial_analyst',
  },
  {
    id: 'toxiguard-ai',
    number: '08',
    title: 'ToxiGuard AI',
    subtitle: 'Real-Time Web Content Moderation Extension',
    category: 'AI / ML',
    label: 'NLP · CHROME EXTENSION',
    description:
      'A client-side Chrome extension that detects and highlights toxic, abusive, or harmful comments in real time while browsing websites, using a local FastAPI NLP inference backend.',
    image: '/images/rag-pdf-preview.svg',
    features: [
      'Real-time DOM text parsing and sentiment scoring',
      'Local privacy-preserving NLP model inference',
      'FastAPI lightweight backend server',
      'Visual toxicity warning highlights directly in web browser',
    ],
    technologies: ['JavaScript', 'Chrome Extension API', 'Python', 'FastAPI', 'Detoxify NLP', 'REST APIs'],
    myContribution:
      'Developed the browser extension content script to intercept page text, built the FastAPI inference server endpoint, and designed visual in-page toxicity warnings.',
    problem:
      'Online harassment and toxic comments pollute web forums and social platforms. Users need client-side protection without sending their private browsing history to third-party commercial trackers.',
    approach:
      'Created a lightweight extension that parses visible DOM elements and asynchronously queries a local FastAPI service hosting a quantized NLP model, flagging offending content dynamically.',
    results: [
      'Built a fully functional real-time browser extension and backend API.',
      'Achieved local zero-latency classification with complete user privacy.',
    ],
    githubUrl: 'https://github.com/Hiyaporwal/toxiguard-ai',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'VIT Bhopal University',
    degree: 'Integrated M.Tech — Computational Data Science',
    period: '2023 – 2028',
    grade: 'CGPA: 8.25 / 10',
    details:
      'Rigorous 5-year curriculum integrating computational mathematics, machine learning, distributed systems, statistical analysis, database architecture, and advanced software engineering.',
    badge: 'Undergraduate + Master’s Integrated Program',
  },
  {
    institution: "St. Mary's Convent Sr. Sec. School, Teetardi",
    degree: 'Class XII — Senior Secondary (CBSE)',
    period: '2023',
    grade: '85.4%',
    details: 'Focus on Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
  },
  {
    institution: "St. Mary's Convent Sr. Sec. School, Teetardi",
    degree: 'Class X — Secondary School (CBSE)',
    period: '2021',
    grade: '83.6%',
    details: 'Strong academic foundation in science, mathematics, and analytical reasoning.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'Smart India Hackathon (SIH)',
    role: 'College Nominee',
    period: 'National Innovation Competition',
    description:
      'Selected and nominated by VIT Bhopal to represent the institute at the prestigious national-level innovation hackathon, developing technical solutions for real-world governance and industry challenges.',
    badge: 'National Level',
  },
  {
    title: 'Inter-College Research Paper Competition',
    role: 'Winner (1st Place)',
    period: 'Academic Research Forum',
    description:
      'Won first place for authored research paper presentation evaluating computational methodologies, analytical depth, and practical technical application.',
    badge: '1st Place Award',
  },
  {
    title: 'Undergraduate Internship Milestone',
    role: '4 Internships Completed',
    period: 'Professional Experience',
    description:
      'Secured and successfully delivered 4 internships during undergraduate studies: 3 technical internships (SVS Datalytics, Hindustan Copper Limited, ParshWebCraft) plus 1 non-technical internship, demonstrating hands-on industry engagement.',
    badge: '3 Technical + 1 Non-Technical',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    category: 'IT Systems & Networking',
    year: 'Certified',
    credentialBadge: 'Google Verified',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    category: 'Software Engineering',
    year: 'Certified',
    credentialBadge: 'Full Stack Engineering',
  },
  {
    title: 'MATLAB Onramp',
    issuer: 'MathWorks',
    category: 'Computational Modeling',
    year: 'Certified',
    credentialBadge: 'MathWorks Verified',
  },
  {
    title: 'Vityarthi Essentials of Python',
    issuer: 'VIT Bhopal University',
    category: 'Programming & Data',
    year: 'Certified',
    credentialBadge: 'Academic Distinction',
  },
  {
    title: 'Salesforce Badges & Trailhead Modules',
    issuer: 'Salesforce',
    category: 'Enterprise CRM & Cloud',
    year: 'Active',
    credentialBadge: 'Trailhead Badges',
  },
  {
    title: 'Microsoft Badges & Technical Learning Paths',
    issuer: 'Microsoft',
    category: 'Cloud & Fundamentals',
    year: 'Active',
    credentialBadge: 'Microsoft Learn',
  },
];

export const PERSONALITY_CARDS = [
  {
    title: 'Dance',
    headline: 'Creative reset & rhythmic discipline',
    description:
      'Dance has always been my creative outlet outside the screen. It teaches balance, bodily expression, and the discipline of repetitive practice until movement looks effortless.',
    icon: 'Sparkles',
    tag: 'Artistic Discipline',
  },
  {
    title: 'Speaking',
    headline: 'Clear communication & presentations',
    description:
      'I genuinely enjoy public speaking, presenting complex ideas in simple terms, and walking people through technical solutions. Good engineering only creates impact when stakeholders understand it.',
    icon: 'Mic',
    tag: 'Technical Storytelling',
  },
  {
    title: 'Learning',
    headline: 'Collaborative problem solving',
    description:
      'I learn best by building with others. Exploring new libraries, discussing architecture trade-offs, and debugging alongside peers turns abstract documentation into working intuition.',
    icon: 'Users',
    tag: 'Hands-on Growth',
  },
  {
    title: 'Fitness & Yoga',
    headline: 'Physical consistency & mental stamina',
    description:
      'Daily running and yoga are my anchors. Maintaining physical consistency builds the mental endurance needed to sit with difficult debugging problems and complex datasets.',
    icon: 'Activity',
    tag: 'Daily Grounding',
  },
];
