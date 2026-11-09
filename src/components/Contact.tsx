import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Download, Check, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FBFBF9] border-b border-sand-300" aria-label="Contact and Recruitment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            <span>SECTION 06</span>
            <span>//</span>
            <span>ENGAGEMENT & AVAILABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-obsidian-950 tracking-tight">
            Ready to contribute analytical rigor to your team.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-obsidian-600 leading-relaxed">
            I am based in Luton (London Metropolitan Area) and actively interviewing for <strong className="text-obsidian-900 font-semibold">Data Analyst, Business Intelligence, and Applied Data Science roles</strong> across the United Kingdom (onsite, hybrid, or remote).
          </p>
        </div>

        {/* Action Grid (Two columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Contact Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-sand-300 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-cobalt-50 text-cobalt-700 flex items-center justify-center shrink-0 border border-cobalt-200/60">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-obsidian-400 font-semibold block">
                    Direct Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-display font-bold text-obsidian-950 hover:text-cobalt-700 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-sand-100 hover:bg-sand-200 text-obsidian-800 transition-colors border border-sand-200"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-obsidian-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white hover:bg-cobalt-800 transition-colors shadow-2xs"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-5 rounded-2xl bg-white border border-sand-300 shadow-2xs flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-obsidian-400 font-semibold block">
                    Phone / WhatsApp (UK)
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-base font-display font-bold text-obsidian-950 hover:text-emerald-700 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <span className="text-xs font-mono text-obsidian-500 hidden sm:inline-block">
                UK Time (GMT)
              </span>
            </div>

            {/* Work Eligibility & Location */}
            <div className="p-5 rounded-2xl bg-white border border-sand-300 shadow-2xs flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-sand-100 text-obsidian-700 flex items-center justify-center shrink-0 border border-sand-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-obsidian-400 font-semibold block">
                    Location & Mobility
                  </span>
                  <div className="text-sm sm:text-base font-bold text-obsidian-950 font-display">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-100/80 text-emerald-800 font-bold uppercase tracking-wider">
                Work Eligible
              </span>
            </div>

          </div>

          {/* CV Download & Network Profiles (5 cols) */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-white border border-sand-300 shadow-2xs flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 block mb-1">
                Recruiter Quick Access
              </span>
              <h3 className="text-lg font-display font-bold text-obsidian-950 mb-2">
                Download Official Curriculum Vitae
              </h3>
              <p className="text-xs text-obsidian-600 leading-relaxed mb-6">
                Latest comprehensive 1-page CV updated with MSc Distinction coursework, Victoria Solutions internship, FOURP engineering outcomes, and project results.
              </p>

              <a
                href={personalInfo.resumeUrl}
                download="Giridhar_Reddy_Goddilla_Resume.pdf"
                className="w-full inline-flex items-center justify-center space-x-2.5 py-3.5 px-5 rounded-xl bg-obsidian-950 hover:bg-cobalt-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.99]"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified CV (PDF)</span>
              </a>
            </div>

            <div className="pt-6 border-t border-sand-200 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-obsidian-400 block font-semibold">
                Professional Verification Links:
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-sand-50 border border-sand-200 hover:border-cobalt-300 hover:text-cobalt-700 transition-all text-xs font-bold text-obsidian-800"
                >
                  <div className="flex items-center space-x-2">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-obsidian-400" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-sand-50 border border-sand-200 hover:border-obsidian-400 hover:text-obsidian-950 transition-all text-xs font-bold text-obsidian-800"
                >
                  <div className="flex items-center space-x-2">
                    <GithubIcon className="w-4 h-4 text-obsidian-900" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-obsidian-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
