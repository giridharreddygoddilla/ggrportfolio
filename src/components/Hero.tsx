import React from 'react';
import { Download, ArrowDown, Mail, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroStats } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 border-b border-sand-300 overflow-hidden"
      aria-label="Professional Introduction"
    >
      {/* Subtle architectural background grid / tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E7E0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center px-2.5 py-1 rounded bg-sand-200 text-obsidian-800 text-[11px] font-mono font-medium tracking-wide border border-sand-300">
            PORTFOLIO // 2026 EDITION
          </span>
          <span className="text-sand-400 hidden sm:inline">/</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-cobalt-700">
            {personalInfo.roleTagline}
          </span>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Candidate Identity & Distinction Highlight */}
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-obsidian-600 bg-white border border-sand-300 px-3 py-1 rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>MSc in Data Science · <strong className="text-obsidian-900 font-bold">Distinction</strong> (Univ of Hertfordshire)</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-obsidian-950 tracking-tight leading-[1.08]">
                Giridhar Reddy Goddilla
              </h1>
            </div>

            {/* Core Value Proposition */}
            <p className="text-lg sm:text-xl text-obsidian-700 font-normal leading-relaxed">
              Transforming complex transactional and relational data into <span className="font-semibold text-obsidian-950 underline decoration-cobalt-200 decoration-2 underline-offset-4">verifiable commercial intelligence</span>, automated Python/SQL ETL workflows, and imbalanced machine learning models.
            </p>

            {/* Accurate Background Narrative */}
            <p className="text-sm sm:text-base text-obsidian-600 leading-relaxed max-w-2xl">
              Backed by <span className="font-semibold text-obsidian-800">2+ years of professional engineering</span> and an MSc in Data Science with Distinction. Experienced auditing multi-hundred-thousand transaction records, designing production Power BI & Tableau dashboards, and engineering precision-recall tuned fraud classifiers.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Giridhar_Reddy_Goddilla_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white hover:bg-cobalt-800 transition-all shadow-sm active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-obsidian-900 border border-sand-300 hover:bg-sand-100 hover:border-sand-400 transition-all"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 text-obsidian-500" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-obsidian-700 hover:text-obsidian-950 hover:bg-sand-100 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-sand-300/80 text-xs font-semibold text-obsidian-600">
              <span className="text-[11px] font-mono uppercase tracking-wider text-obsidian-400">CONNECT:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 hover:text-cobalt-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-sand-400">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 hover:text-obsidian-950 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5 text-obsidian-900" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
              <span className="text-sand-400">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-1 hover:text-cobalt-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5 text-obsidian-500" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Portrait & Candidate Credentials Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm flex flex-col items-center">
              
              {/* LinkedIn & GitHub Icons: Horizontally centred in a single row directly above the photo with 4-6px gap */}
              <div className="flex items-center justify-center gap-2.5 mb-1.5 z-20">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="Connect with Giridhar on LinkedIn"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-sand-300 text-[#0A66C2] hover:text-[#004182] hover:border-obsidian-900 hover:shadow-md transition-all duration-200 flex items-center justify-center shadow-2xs active:scale-95 group focus:outline-none focus:ring-2 focus:ring-cobalt-500"
                  aria-label="Connect with Giridhar on LinkedIn (opens in a new tab)"
                >
                  <LinkedinIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  title="View Giridhar's GitHub Repositories"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-sand-300 text-obsidian-900 hover:text-black hover:border-obsidian-900 hover:shadow-md transition-all duration-200 flex items-center justify-center shadow-2xs active:scale-95 group focus:outline-none focus:ring-2 focus:ring-cobalt-500"
                  aria-label="View Giridhar's GitHub Repositories (opens in a new tab)"
                >
                  <GithubIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Card Container */}
              <div className="w-full bg-white border border-sand-300 rounded-2xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
                
                {/* Studio Portrait Frame */}
                <div className="relative rounded-xl overflow-hidden bg-obsidian-900 aspect-[4/4.2] border border-sand-200">
                  <img
                    src={personalInfo.photoUrl}
                    alt="Giridhar Reddy Goddilla - Data Analyst"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    width="360"
                    height="378"
                  />
                  
                  {/* Location Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-obsidian-900/85 backdrop-blur-md rounded-lg p-2.5 text-white border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-medium tracking-tight">Luton / London Area, UK</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold uppercase">
                      Work Eligible
                    </span>
                  </div>
                </div>

                {/* Verified Profile Attribution */}
                <div className="pt-1 px-1 flex items-center justify-between text-xs border-t border-sand-200">
                  <div className="flex items-center space-x-1.5 text-obsidian-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified Candidate Record</span>
                  </div>
                  <span className="font-mono text-[11px] text-obsidian-500">+44 7765508654</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Editorial Data Proof Strip */}
        <div className="mt-14 pt-8 border-t border-sand-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-obsidian-950 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-obsidian-700">
                  {stat.label}
                </div>
                <div className="text-xs text-obsidian-500 font-mono">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
