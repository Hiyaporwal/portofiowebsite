import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalStatement } from './components/PersonalStatement';
import { About } from './components/About';
import { Toolkit } from './components/Toolkit';
import { Experience } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DataProjects } from './components/DataProjects';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { PersonalitySection } from './components/PersonalitySection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { ALL_PROJECTS } from './data/portfolioData';
import type { Project } from './data/portfolioData';

export function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSelectProjectId = (projectId: string) => {
    const proj = ALL_PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedCaseStudy(proj);
    } else {
      const el = document.getElementById(`project-${projectId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#252321] selection:bg-[#641E2B]/18 selection:text-[#641E2B]">
      {/* Sticky Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Editorial Flow */}
      <main>
        {/* HERO */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* PERSONAL STATEMENT */}
        <PersonalStatement />

        {/* ABOUT */}
        <About />

        {/* TECHNICAL TOOLKIT */}
        <Toolkit />

        {/* EXPERIENCE */}
        <Experience onSelectProject={handleSelectProjectId} />

        {/* FEATURED PROJECTS (01 FinSight AI, 02 RecovAI, 03 RAG PDF Chat) */}
        <FeaturedProjects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

        {/* MORE PROJECTS & ANALYTICS (ParshvTrack, Uber, Blinkit, Netflix, etc.) */}
        <DataProjects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

        {/* EDUCATION */}
        <Education />

        {/* ACHIEVEMENTS */}
        <Achievements />

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* GITHUB REPOSITORIES */}
        <GitHubSection />

        {/* PERSONALITY: BEYOND THE CODE */}
        <PersonalitySection />

        {/* CONTACT CTA */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CASE STUDY MODAL */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* RESUME VIEWER MODAL */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
