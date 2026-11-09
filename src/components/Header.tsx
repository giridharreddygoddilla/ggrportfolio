import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Featured Projects', href: '#case-studies' },
    { label: 'More Projects', href: '#more-projects' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-sand-300/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3'
          : 'bg-[#FBFBF9] border-b border-sand-200 py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Identity & Status */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Giridhar Reddy Goddilla - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-obsidian-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-tight shadow-xs group-hover:bg-cobalt-700 transition-colors">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-obsidian-900 tracking-tight text-sm sm:text-base group-hover:text-cobalt-700 transition-colors">
                Giridhar Reddy Goddilla
              </span>
              <div className="flex items-center space-x-1.5 text-[11px] text-obsidian-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Data Analyst · UK Work Eligible</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isProjectSection = ['case-studies', 'fake-job-detection', 'uber-trip-analysis', 'bank-loan-analysis'].includes(activeSection);
              const isActive = sectionId === 'case-studies' ? isProjectSection : activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-cobalt-700 bg-cobalt-50'
                      : 'text-obsidian-600 hover:text-obsidian-900 hover:bg-sand-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Direct Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-semibold text-obsidian-600 hover:text-obsidian-900 transition-colors px-2.5 py-1.5"
            >
              Get in Touch
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Giridhar_Reddy_Goddilla_Resume.pdf"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white hover:bg-cobalt-800 transition-all shadow-xs active:scale-[0.98]"
              aria-label="Download Official CV (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={personalInfo.resumeUrl}
              download="Giridhar_Reddy_Goddilla_Resume.pdf"
              className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white"
              aria-label="Download CV"
            >
              <Download className="w-3 h-3 mr-1" />
              <span>CV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-obsidian-700 hover:text-obsidian-950 hover:bg-sand-200 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-sand-300 pb-3 space-y-1 bg-[#FBFBF9]">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isProjectSection = ['case-studies', 'fake-job-detection', 'uber-trip-analysis', 'bank-loan-analysis'].includes(activeSection);
              const isActive = sectionId === 'case-studies' ? isProjectSection : activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-semibold tracking-wide ${
                    isActive
                      ? 'text-cobalt-700 bg-cobalt-50 font-bold'
                      : 'text-obsidian-700 hover:bg-sand-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 flex flex-col space-y-2 px-1">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-sand-400 text-obsidian-800 hover:bg-sand-100"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full CV (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
