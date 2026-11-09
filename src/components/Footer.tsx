import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-sand-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-obsidian-600">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left gap-1">
            <span className="font-display font-bold text-obsidian-950 text-sm">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline text-sand-400">•</span>
            <span className="font-mono text-obsidian-500">
              © {currentYear} · Professional Portfolio · All Evidence Verified
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-semibold">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-obsidian-700 hover:text-obsidian-950 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-obsidian-700 hover:text-cobalt-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-obsidian-700 hover:text-obsidian-950 transition-colors"
              aria-label="Email"
            >
              Email
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-obsidian-500 hover:text-obsidian-950 transition-colors focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
