import React from 'react';
import { experienceRoles } from '../data/portfolioData';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-sand-300 bg-[#FBFBF9]" aria-label="Professional Experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            <span>SECTION 01</span>
            <span>//</span>
            <span>INDUSTRY TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-obsidian-950 tracking-tight">
            Professional Experience & Engineering Impact
          </h2>
          <p className="mt-3 text-base text-obsidian-600 leading-relaxed">
            Over 2 years of full-time software engineering and commercial data analytics experience delivering distributed ETL pipelines, data warehouse architectures, and executive BI dashboards.
          </p>
        </div>

        {/* Editorial Experience Narrative */}
        <div className="space-y-10">
          {experienceRoles.map((role, idx) => (
            <div
              key={role.id}
              className="bg-white border border-sand-300 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition-all hover:border-sand-400"
            >
              {/* Top metadata strip */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-sand-200 gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-sand-100 text-obsidian-800 border border-sand-200">
                      {role.employmentType}
                    </span>
                    <span className="text-xs font-semibold text-cobalt-700 bg-cobalt-50 px-2 py-0.5 rounded">
                      Role 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-obsidian-950">
                    {role.role}
                  </h3>
                  <div className="text-base font-semibold text-obsidian-700 mt-0.5">
                    {role.company}
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 lg:gap-1 text-xs font-mono text-obsidian-600">
                  <div className="flex items-center space-x-1.5 bg-sand-50 px-2.5 py-1 rounded border border-sand-200">
                    <Calendar className="w-3.5 h-3.5 text-obsidian-400" />
                    <span>{role.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-sand-50 px-2.5 py-1 rounded border border-sand-200">
                    <MapPin className="w-3.5 h-3.5 text-obsidian-400" />
                    <span>{role.location}</span>
                  </div>
                </div>
              </div>

              {/* Impact Metric Banner (if applicable) */}
              {role.impactMetric && (
                <div className="my-6 p-4 rounded-xl bg-sand-50 border border-sand-200/90 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-100/80 text-emerald-800">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-obsidian-500 block">
                        Verified Business Outcome
                      </span>
                      <span className="text-sm font-semibold text-obsidian-900">
                        {role.impactMetric.label}
                      </span>
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-obsidian-950">
                    {role.impactMetric.value}
                  </div>
                </div>
              )}

              {/* Achievements and Responsibilities */}
              <div className="space-y-3 mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-obsidian-400 font-mono">
                  Verified Responsibilities & Analytical Contributions:
                </h4>
                <ul className="space-y-3">
                  {role.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start text-sm sm:text-base text-obsidian-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600 mt-2.5 mr-3 shrink-0" aria-hidden="true"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Footer */}
              <div className="mt-8 pt-5 border-t border-sand-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-obsidian-400 uppercase tracking-wider mr-2">
                  Environment:
                </span>
                {role.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-sand-100 text-obsidian-800 border border-sand-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
