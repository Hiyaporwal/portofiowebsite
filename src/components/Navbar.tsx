import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F0E8]/92 backdrop-blur-md border-b border-[#D8CEBF] py-3 shadow-[0_4px_20px_-4px_rgba(37,35,33,0.06)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 text-[#252321] hover:text-[#641E2B] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#641E2B] text-[#F5F0E8] flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:bg-[#4F1722] transition-all">
              HP
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-base text-[#252321] group-hover:text-[#641E2B] transition-colors">
                HIYA PORWAL
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#736B63] hidden sm:inline-block">
                Data · AI/ML · Financial Analytics · Software
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EAE2D7]/90 p-1.5 rounded-full border border-[#D8CEBF] backdrop-blur-sm shadow-[0_2px_8px_rgba(37,35,33,0.04)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#641E2B] text-[#F5F0E8] shadow-sm'
                      : 'text-[#5C554E] hover:text-[#252321] hover:bg-[#F5F0E8]/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#EAE2D7] hover:bg-[#E3D9CC] text-[#252321] border border-[#D8CEBF] hover:border-[#641E2B]/40 transition-all shadow-sm cursor-pointer"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#641E2B]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#B78B79]" />
            </button>

            <a
              href="https://github.com/Hiyaporwal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#641E2B] hover:bg-[#4F1722] text-[#F5F0E8] transition-all shadow-sm cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#EAE2D7]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-[#EAE2D7] border border-[#D8CEBF] text-[#641E2B] text-xs font-medium"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#EAE2D7] border border-[#D8CEBF] text-[#252321] hover:text-[#641E2B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F0E8]/98 border-b border-[#D8CEBF] backdrop-blur-xl px-4 pt-4 pb-6 mt-2 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#5C554E] hover:text-[#641E2B] bg-[#EAE2D7]/70 border border-[#D8CEBF]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-lg text-xs font-semibold bg-[#EAE2D7] text-[#252321] border border-[#D8CEBF] flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#641E2B]" />
              View Resume
            </button>
            <a
              href="https://github.com/Hiyaporwal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-lg text-xs font-semibold bg-[#641E2B] text-[#F5F0E8] flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              Visit GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
