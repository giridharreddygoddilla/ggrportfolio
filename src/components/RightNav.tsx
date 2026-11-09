import React from 'react';

interface RightNavProps {
  activeSection: string;
}

interface NavDot {
  id: string;
  label: string;
  number: string;
}

export const RightNav: React.FC<RightNavProps> = ({ activeSection }) => {
  const sections: NavDot[] = [
    { id: 'hero', label: 'Overview', number: '00' },
    { id: 'experience', label: 'Work Experience', number: '01' },
    { id: 'fake-job-detection', label: 'Case 01: Fraud ML', number: '02' },
    { id: 'uber-trip-analysis', label: 'Case 02: Uber Power BI', number: '03' },
    { id: 'bank-loan-analysis', label: 'Case 03: Bank Loan Excel', number: '04' },
    { id: 'more-projects', label: 'More Projects', number: '05' },
    { id: 'skills', label: 'Technical Skills', number: '06' },
    { id: 'education', label: 'Education & Honors', number: '07' },
    { id: 'contact', label: 'Contact & Resume', number: '08' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 bg-white/95 backdrop-blur-md px-2.5 py-4 rounded-full border border-sand-300 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all"
      aria-label="Section Quick Navigation"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={(e) => scrollToSection(e, sec.id)}
            aria-label={`Jump to ${sec.label}`}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
          >
            {/* Visual Indicator: Pill when active, circle when inactive */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-cobalt-700 shadow-[0_0_10px_rgba(29,78,216,0.35)]'
                  : 'w-2.5 h-2.5 bg-sand-400 group-hover:bg-obsidian-800 group-hover:scale-125'
              }`}
            />

            {/* Floating Left Tooltip */}
            <div
              className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950 text-white text-xs font-medium whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 pointer-events-none"
              role="tooltip"
            >
              <span className="font-mono text-[10px] text-cobalt-400 font-bold">{sec.number}</span>
              <span className="text-sand-200">•</span>
              <span className="font-sans text-xs tracking-tight">{sec.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"></span>
              )}
            </div>
          </a>
        );
      })}
    </aside>
  );
};
