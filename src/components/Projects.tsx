import React, { useState, useEffect } from 'react';
import { caseStudies } from '../data/portfolioData';
import { CaseStudy, VisualAsset } from '../types';
import {
  ArrowUpRight,
  CheckCircle2,
  Maximize2,
  X,
  AlertTriangle,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  // Visual tab selection per project
  const [activeVisuals, setActiveVisuals] = useState<{ [projectId: string]: number }>({
    'fake-job-detection': 0,
    'uber-trip-analysis': 0,
    'bank-loan-analysis': 0,
  });

  // Modal deep dive state
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [modalVisualIndex, setModalVisualIndex] = useState<number>(0);

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<VisualAsset | null>(null);

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    if (selectedCaseStudy || lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCaseStudy, lightboxImage]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (selectedCaseStudy) {
          setSelectedCaseStudy(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, selectedCaseStudy]);

  const setProjectVisual = (projectId: string, index: number) => {
    setActiveVisuals((prev) => ({ ...prev, [projectId]: index }));
  };

  const openDeepDive = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    setModalVisualIndex(0);
  };

  return (
    <section id="case-studies" className="border-b border-sand-300" aria-label="Featured Project Showcases">
      
      {/* Editorial Section Introduction */}
      <div className="bg-[#FAF9F5] py-14 sm:py-16 border-b border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-2">
              <span>SECTION 02</span>
              <span>//</span>
              <span>FLAGSHIP CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-obsidian-950 tracking-tight">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-base sm:text-lg text-obsidian-600 leading-relaxed">
              Three flagship analytical projects presented as individual, in-depth case studies — demonstrating imbalance-aware machine learning, executive Power BI intelligence, and financial risk modeling.
            </p>
          </div>
        </div>
      </div>

      {/* THREE INDIVIDUAL FULL-SCREEN PROJECT SHOWCASES */}
      <div className="divide-y divide-obsidian-900">
        {caseStudies.map((study: CaseStudy, idx: number) => {
          const currentVisualIdx = activeVisuals[study.id] || 0;
          const currentVisual = study.visuals[currentVisualIdx] || study.visuals[0];
          const primaryVisual = study.visuals[0];

          // Distinct background nuances for each showcase
          const bgThemeClass =
            idx === 0
              ? 'bg-obsidian-950'
              : idx === 1
              ? 'bg-[#0B101A]'
              : 'bg-[#0E1322]';

          return (
            <article
              key={study.id}
              id={study.id}
              className={`relative min-h-[640px] lg:min-h-[760px] flex items-center py-14 sm:py-16 lg:py-20 text-white overflow-hidden scroll-mt-20 ${bgThemeClass}`}
              aria-label={`${study.title} Case Study`}
            >
              {/* Full-bleed subtle background visual with high-contrast gradient overlay */}
              {primaryVisual && (
                <div className="absolute inset-0 pointer-events-none opacity-20 lg:opacity-25 transition-opacity duration-700">
                  <img
                    src={primaryVisual.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center filter blur-xs scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/95 to-obsidian-950/80"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Architectural Grid pattern */}
              <div
                className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                
                {/* Asymmetrical 2-Column Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* LEFT COLUMN: Narrative, Metrics, Bullets & Tech (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Top Case Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-white text-obsidian-950 uppercase tracking-wider shadow-xs">
                        CASE {study.number}
                      </span>
                      <span className="text-sand-400 font-mono hidden sm:inline">//</span>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cobalt-400">
                        {study.category}
                      </span>
                      <span className="text-sand-400 font-mono hidden sm:inline">•</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-sand-300 border border-white/15">
                        {study.badge}
                      </span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                        {study.title}
                      </h3>
                      <div className="text-sm sm:text-base font-mono text-cobalt-300 font-medium tracking-tight">
                        {study.subtitle}
                      </div>
                    </div>

                    {/* Verified Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                      {study.keyMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs shadow-2xs"
                        >
                          <div className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                            {metric.value}
                          </div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-sand-200 mt-0.5">
                            {metric.label}
                          </div>
                          <div className="text-[10px] font-mono text-sand-400 truncate mt-0.5">
                            {metric.subtext}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Concise Project Overview */}
                    <p className="text-sm sm:text-base text-sand-300 leading-relaxed max-w-2xl">
                      {study.executiveSummary}
                    </p>

                    {/* Professional Resume-Aligned Bullet Points */}
                    <div className="space-y-2.5 pt-1">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-sand-400">
                        Key Responsibilities & Technical Outcomes:
                      </div>
                      <div className="space-y-2">
                        {study.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start space-x-3 text-xs sm:text-sm text-sand-200 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Labels */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/10 text-white/90 border border-white/15 backdrop-blur-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Primary & Secondary Actions */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-3">
                      {study.githubUrl && (
                        <a
                          href={study.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-obsidian-950 hover:bg-sand-100 hover:text-black transition-all shadow-md active:scale-[0.98]"
                          aria-label={`Explore ${study.title} on GitHub (opens in a new tab)`}
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => openDeepDive(study)}
                        className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/15 border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
                        aria-label={`View deep-dive methodology and benchmark table for ${study.title}`}
                      >
                        <Layers className="w-4 h-4 text-cobalt-400" />
                        <span>Deep Dive & Visuals</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                      </button>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Interactive Visual Frame & Gallery (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="bg-obsidian-900/90 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md space-y-4">
                      
                      {/* Visual Header with Gallery Tabs */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-sand-300 flex items-center space-x-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-cobalt-400" />
                          <span>Project Visual Evidence</span>
                        </span>

                        {study.visuals.length > 1 && (
                          <div className="flex items-center space-x-1">
                            {study.visuals.map((v, vIdx) => (
                              <button
                                key={vIdx}
                                type="button"
                                onClick={() => setProjectVisual(study.id, vIdx)}
                                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                                  currentVisualIdx === vIdx
                                    ? 'bg-white text-obsidian-950 font-bold'
                                    : 'bg-white/10 text-sand-300 hover:bg-white/20'
                                }`}
                                aria-label={`Switch to visual ${vIdx + 1}`}
                              >
                                {v.tag || `0${vIdx + 1}`}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actual Project Screenshot Display Frame */}
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-[16/11] group">
                        <img
                          src={currentVisual.image}
                          alt={currentVisual.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                          loading="lazy"
                        />

                        {/* Expand View Overlay Button */}
                        <button
                          type="button"
                          onClick={() => setLightboxImage(currentVisual)}
                          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-obsidian-950/85 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-obsidian-950 transition-all flex items-center space-x-1.5 text-xs font-mono cursor-pointer shadow-lg"
                          title="Expand Full-Resolution Visual"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Expand</span>
                        </button>
                      </div>

                      {/* Visual Caption Box */}
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs space-y-1">
                        <div className="font-semibold text-white">
                          {currentVisual.title}
                        </div>
                        <p className="text-sand-300 text-[11px] leading-relaxed">
                          {currentVisual.caption}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* ========================================================
          FULL DEEP-DIVE MODAL FOR CHOSEN CASE STUDY
          ======================================================== */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-obsidian-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCaseStudy(null);
          }}
        >
          <div className="relative w-full max-w-5xl bg-[#FBFBF9] border border-sand-300 rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-sand-300">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-obsidian-900 text-white uppercase tracking-wider">
                  CASE STUDY {selectedCaseStudy.number}
                </span>
                <span className="text-xs font-bold text-cobalt-700 bg-cobalt-50 border border-cobalt-200 px-2.5 py-0.5 rounded">
                  {selectedCaseStudy.badge}
                </span>
                <span className="text-sand-400 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-obsidian-600 truncate max-w-xs sm:max-w-md">
                  {selectedCaseStudy.category}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {selectedCaseStudy.githubUrl && (
                  <a
                    href={selectedCaseStudy.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sand-100 text-obsidian-800 hover:bg-sand-200 hover:text-black border border-sand-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 rounded-lg text-obsidian-600 hover:text-obsidian-950 hover:bg-sand-100 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
              
              {/* Title & Executive Summary */}
              <div className="space-y-2">
                <h3 id="modal-case-title" className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-obsidian-950 tracking-tight">
                  {selectedCaseStudy.title}
                </h3>
                <div className="text-sm sm:text-base text-cobalt-700 font-semibold font-mono">
                  {selectedCaseStudy.subtitle}
                </div>
                <p className="text-sm sm:text-base text-obsidian-700 leading-relaxed pt-2">
                  {selectedCaseStudy.executiveSummary}
                </p>
              </div>

              {/* Key Metrics Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {selectedCaseStudy.keyMetrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-xl bg-white border border-sand-300 text-center shadow-2xs"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-obsidian-950 tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-obsidian-800 mt-1">
                      {metric.label}
                    </div>
                    <div className="text-[11px] font-mono text-obsidian-500 mt-0.5">
                      {metric.subtext}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Asset Gallery */}
              {selectedCaseStudy.visuals.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-500">
                      Visual Evidence & Dashboard Dashboards
                    </h4>
                    {selectedCaseStudy.visuals.length > 1 && (
                      <div className="flex items-center space-x-1">
                        {selectedCaseStudy.visuals.map((v, vIdx) => (
                          <button
                            key={vIdx}
                            type="button"
                            onClick={() => setModalVisualIndex(vIdx)}
                            className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
                              modalVisualIndex === vIdx
                                ? 'bg-obsidian-900 text-white'
                                : 'bg-sand-200 text-obsidian-700 hover:bg-sand-300'
                            }`}
                          >
                            {v.tag || `View 0${vIdx + 1}`}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Active Visual Container */}
                  {selectedCaseStudy.visuals[modalVisualIndex] && (
                    <div className="relative rounded-2xl overflow-hidden border border-sand-300 bg-obsidian-950 group">
                      <img
                        src={selectedCaseStudy.visuals[modalVisualIndex].image}
                        alt={selectedCaseStudy.visuals[modalVisualIndex].title}
                        className="w-full h-auto max-h-[500px] object-contain mx-auto bg-obsidian-900"
                        loading="lazy"
                      />
                      <button
                        type="button"
                        onClick={() => setLightboxImage(selectedCaseStudy.visuals[modalVisualIndex])}
                        className="absolute bottom-3 right-3 p-2 rounded-lg bg-obsidian-900/80 backdrop-blur-md text-white hover:bg-obsidian-950 transition-colors flex items-center space-x-1 text-xs cursor-pointer"
                        title="View Fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono">Expand View</span>
                      </button>
                      <div className="p-4 bg-white border-t border-sand-300 text-xs">
                        <div className="font-bold text-obsidian-900">
                          {selectedCaseStudy.visuals[modalVisualIndex].title}
                        </div>
                        <p className="text-obsidian-600 mt-0.5">
                          {selectedCaseStudy.visuals[modalVisualIndex].caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Analytical Challenge & Objective Box */}
              <div className="p-6 rounded-2xl bg-white border border-sand-300 space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>The Problem & Analytical Challenge</span>
                  </div>
                  <p className="text-sm text-obsidian-700 leading-relaxed">
                    {selectedCaseStudy.problem}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand-200">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt-700 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Core Objective & Scope</span>
                  </div>
                  <p className="text-sm text-obsidian-700 leading-relaxed">
                    {selectedCaseStudy.objective}
                  </p>
                </div>
              </div>

              {/* 3-Phase Methodology */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-500">
                  Technical Methodology & Workflow
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedCaseStudy.methodology.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-white border border-sand-300 space-y-1.5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[11px] font-mono font-semibold uppercase text-cobalt-700">
                          {m.phase}
                        </div>
                        <div className="text-sm font-bold text-obsidian-950 mt-1">
                          {m.title}
                        </div>
                        <p className="text-xs text-obsidian-600 leading-relaxed mt-1">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benchmark Table (if present) */}
              {selectedCaseStudy.benchmarkTable && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-500">
                    Empirical Model Benchmark Under Severe Imbalance (4.84% Fraud)
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-sand-300 bg-white">
                    <table className="min-w-full divide-y divide-sand-200 text-xs">
                      <thead className="bg-[#FAF9F5] font-mono text-[11px] text-obsidian-700 uppercase">
                        <tr>
                          <th className="px-4 py-3 text-left">Model Candidate</th>
                          <th className="px-4 py-3 text-left">PR-AUC</th>
                          <th className="px-4 py-3 text-left">Fraud F1</th>
                          <th className="px-4 py-3 text-left">Precision</th>
                          <th className="px-4 py-3 text-left">Recall</th>
                          <th className="px-4 py-3 text-left">Strategic Role</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sand-200">
                        {selectedCaseStudy.benchmarkTable.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={row.highlight ? 'bg-cobalt-50/50 font-semibold text-obsidian-950' : 'text-obsidian-700'}
                          >
                            <td className="px-4 py-3">{row.model}</td>
                            <td className="px-4 py-3 font-mono">{row.prAuc}</td>
                            <td className="px-4 py-3 font-mono">{row.f1Score}</td>
                            <td className="px-4 py-3 font-mono">{row.precision}</td>
                            <td className="px-4 py-3 font-mono">{row.recall}</td>
                            <td className="px-4 py-3 text-obsidian-600">{row.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Results & Findings List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-500">
                  Key Findings & Analytical Results
                </h4>
                <div className="space-y-2">
                  {selectedCaseStudy.resultsAndFindings.map((finding, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 rounded-xl bg-white border border-sand-300 text-xs sm:text-sm text-obsidian-800 flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack Breakdown */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-obsidian-500">
                  Full Technical Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedCaseStudy.technicalImplementation.map((tech, tIdx) => (
                    <div key={tIdx} className="p-3.5 rounded-xl bg-white border border-sand-300 text-xs space-y-1.5">
                      <div className="font-mono font-semibold uppercase text-cobalt-700 text-[11px]">
                        {tech.category}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tech.items.map((item) => (
                          <span key={item} className="px-1.5 py-0.5 rounded bg-sand-100 text-obsidian-800 text-[10px] font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-t border-sand-300">
              <span className="text-xs font-mono text-obsidian-500 hidden sm:inline">
                Press ESC or click outside to dismiss
              </span>
              <div className="flex items-center space-x-3 ml-auto">
                {selectedCaseStudy.githubUrl && (
                  <a
                    href={selectedCaseStudy.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-obsidian-900 text-white hover:bg-cobalt-800 transition-colors shadow-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-sand-200 text-obsidian-800 hover:bg-sand-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL
          ======================================================== */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div className="absolute top-4 right-4 flex items-center space-x-3">
            <span className="text-white/60 text-xs font-mono hidden sm:inline">Click anywhere to close</span>
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <img
            src={lightboxImage.image}
            alt={lightboxImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="mt-4 text-center text-white max-w-2xl px-4">
            <div className="font-bold text-sm sm:text-base">{lightboxImage.title}</div>
            <p className="text-xs sm:text-sm text-sand-300 mt-1">{lightboxImage.caption}</p>
          </div>
        </div>
      )}

    </section>
  );
};
