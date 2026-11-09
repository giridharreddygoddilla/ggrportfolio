import React from 'react';
import { educationList, certificationsAndAwards } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 border-b border-sand-300 bg-white" aria-label="Education and Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            <span>SECTION 05</span>
            <span>//</span>
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-obsidian-950 tracking-tight">
            Education, Certifications & Honors
          </h2>
          <p className="mt-3 text-base text-obsidian-600 leading-relaxed">
            Formal postgraduate credentials in Data Science and undergraduate foundations in Computer Science Engineering, both completed with Distinction.
          </p>
        </div>

        {/* Two-Column Grid: Degrees (7 cols) vs Certifications & Awards (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Formal Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-400 flex items-center">
              <GraduationCap className="w-4 h-4 mr-2 text-cobalt-700" />
              Academic Degrees (Distinction)
            </h3>

            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBF9] border border-sand-300 rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-sand-400 transition-all space-y-4"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 border-b border-sand-200">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-cobalt-100 text-cobalt-800 uppercase">
                        {edu.classification}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-display font-bold text-obsidian-950">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-semibold text-obsidian-700 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-obsidian-500 flex flex-col sm:items-end gap-1">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-obsidian-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-obsidian-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Coursework & Focus */}
                <div>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-obsidian-700 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-obsidian-400" />
                    <span>Core Academic Modules:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-obsidian-800 border border-sand-200 shadow-2xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.thesisTitle && (
                  <div className="p-3 rounded-lg bg-white border border-sand-200 text-xs text-obsidian-700">
                    <span className="font-mono font-semibold uppercase text-cobalt-700 block mb-0.5 text-[10px]">
                      Postgraduate Research Thesis:
                    </span>
                    <span className="font-medium italic">{edu.thesisTitle}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications & Awards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-400 flex items-center">
              <Award className="w-4 h-4 mr-2 text-amber-600" />
              Certifications & Industry Honors
            </h3>

            <div className="bg-[#FBFBF9] border border-sand-300 rounded-2xl p-6 shadow-2xs space-y-5">
              {certificationsAndAwards.map((item, idx) => (
                <div
                  key={idx}
                  className={`pb-5 ${
                    idx !== certificationsAndAwards.length - 1 ? 'border-b border-sand-200' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                            item.type === 'award'
                              ? 'bg-amber-100 text-amber-900 border border-amber-200'
                              : 'bg-sand-200 text-obsidian-800 border border-sand-300'
                          }`}
                        >
                          {item.type}
                        </span>
                        {item.date && (
                          <span className="text-[11px] font-mono text-obsidian-500">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-obsidian-950 font-display">
                        {item.title}
                      </h4>
                      <div className="text-xs font-semibold text-cobalt-700 mt-0.5">
                        {item.issuer}
                      </div>
                      <p className="text-xs text-obsidian-600 mt-1.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2 text-center">
                <span className="text-[11px] text-obsidian-500 font-mono">
                  Official certificates and transcripts verified on request.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
