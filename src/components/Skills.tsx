import React from 'react';
import { skillGroups } from '../data/portfolioData';
import { Terminal, BarChart2, Database, Cpu, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-cobalt-700" />;
      case 1:
        return <BarChart2 className="w-4 h-4 text-emerald-700" />;
      case 2:
        return <Database className="w-4 h-4 text-amber-700" />;
      case 3:
        return <Cpu className="w-4 h-4 text-purple-700" />;
      case 4:
        return <Wrench className="w-4 h-4 text-obsidian-700" />;
      default:
        return <Terminal className="w-4 h-4 text-cobalt-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-sand-300 bg-[#FBFBF9]" aria-label="Technical Skills Matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            <span>SECTION 04</span>
            <span>//</span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-obsidian-950 tracking-tight">
            Technical Competencies & Analytics Matrix
          </h2>
          <p className="mt-3 text-base text-obsidian-600 leading-relaxed">
            Categorized strictly from verified production codebases, commercial internship outputs, and postgraduate coursework—without arbitrary percentage ratings.
          </p>
        </div>

        {/* 5-Category Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gIdx) => (
            <div
              key={group.category}
              className={`bg-white border border-sand-300 rounded-2xl p-6 shadow-2xs hover:border-sand-400 transition-all ${
                gIdx === 0 || gIdx === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-2.5 pb-3 border-b border-sand-200 mb-3">
                <div className="p-1.5 rounded-lg bg-sand-100 border border-sand-200">
                  {getCategoryIcon(gIdx)}
                </div>
                <h3 className="text-sm font-bold text-obsidian-950 font-display">
                  {group.category}
                </h3>
              </div>

              <p className="text-xs text-obsidian-500 mb-4 leading-relaxed font-sans">
                {group.description}
              </p>

              {/* Skills List with Context */}
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-sand-50/70 border border-sand-200/80 hover:bg-white hover:border-sand-300 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-obsidian-900">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sand-200 text-obsidian-700 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-obsidian-500 mt-1 leading-snug">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Verification Footer Pill */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-sand-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-obsidian-600 shadow-2xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All technologies are verified against GitHub repositories and commercial deliverables.</span>
          </div>
          <a
            href="https://github.com/giridharreddygoddilla"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-cobalt-700 hover:text-cobalt-800 transition-colors uppercase tracking-wider text-[11px] font-mono"
          >
            Review GitHub Commit Records →
          </a>
        </div>

      </div>
    </section>
  );
};
