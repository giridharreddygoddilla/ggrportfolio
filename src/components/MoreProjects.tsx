import React from 'react';
import { additionalProjects } from '../data/portfolioData';
import { AdditionalProject } from '../types';
import { ArrowUpRight, Code2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const MoreProjects: React.FC = () => {
  return (
    <section
      id="more-projects"
      className="py-16 sm:py-24 border-b border-sand-300 bg-[#F6F5EE]"
      aria-label="Additional Technical Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-2">
              <span>SECTION 03</span>
              <span>//</span>
              <span>ADDITIONAL TECHNICAL WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-obsidian-950 tracking-tight">
              More Projects & Code Repositories
            </h2>
            <p className="mt-4 text-base sm:text-lg text-obsidian-600 leading-relaxed">
              Targeted open-source investigations demonstrating distributed PySpark computing, deep learning computer vision and NLP with Keras, econometric time-series forecasting, and public safety analytics.
            </p>
          </div>

          <a
            href="https://github.com/giridharreddygoddilla"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white hover:bg-cobalt-800 transition-all shadow-sm active:scale-[0.98] shrink-0 self-start md:self-auto"
            aria-label="Explore All Repositories on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore All Projects on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {additionalProjects.map((project: AdditionalProject, index: number) => (
            <article
              key={project.id}
              className="bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-obsidian-900 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group"
            >
              <div>
                {/* Header row: Index & Category */}
                <div className="flex items-center justify-between pb-4 border-b border-sand-200 gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-sand-200 text-obsidian-800 tracking-wider">
                      PROJECT 0{index + 5}
                    </span>
                    <span className="text-xs font-mono text-obsidian-500 uppercase tracking-wide truncate">
                      {project.category}
                    </span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-obsidian-700 hover:text-cobalt-700 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Optional visual thumbnail preview for Road Accident or others */}
                {project.dashboardImage && (
                  <div className="mt-5 rounded-xl overflow-hidden border border-sand-300 aspect-[16/9] bg-obsidian-900 group-hover:border-obsidian-500 transition-colors">
                    <img
                      src={project.dashboardImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Title & Subtitle */}
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-obsidian-950 tracking-tight group-hover:text-cobalt-800 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-cobalt-700 font-medium">
                    {project.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-obsidian-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics / Scope Summary */}
                <div className="mt-4 p-3 rounded-lg bg-[#FAF9F5] border border-sand-200 flex items-start space-x-2 text-xs text-obsidian-800">
                  <Sparkles className="w-4 h-4 text-cobalt-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{project.metricsSummary}</span>
                </div>

                {/* Analytical Rigor / Constraint Note */}
                {project.constraintNote && (
                  <div className="mt-3 p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-start space-x-2 text-xs text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="leading-snug">{project.constraintNote}</span>
                  </div>
                )}
              </div>

              {/* Bottom footer: Tech pills and link */}
              <div className="mt-6 pt-4 border-t border-sand-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-sand-100 text-obsidian-700 border border-sand-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-obsidian-900 hover:text-cobalt-700 transition-colors ml-auto pt-2 sm:pt-0"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-sand-300 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-display font-bold text-obsidian-950">
              Want to explore more of my work?
            </h4>
            <p className="text-xs sm:text-sm text-obsidian-600">
              All repository codebases, SQL routines, DAX data models, and Jupyter analytical notebooks are publicly available on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/giridharreddygoddilla"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white hover:bg-cobalt-800 transition-all shadow-xs shrink-0 active:scale-[0.98]"
            aria-label="Explore all my projects on GitHub (opens in a new tab)"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore all my projects on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
};
