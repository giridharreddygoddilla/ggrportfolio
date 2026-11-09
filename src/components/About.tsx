import React from 'react';
import { BarChart3, Database, BrainCircuit, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200/70" aria-label="About Me">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Professional Profile
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Analytical rigor backed by computer science foundations and data science research.
          </p>
        </div>

        {/* Narrative Summary */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 text-base text-slate-600 space-y-4 leading-relaxed">
            <p>
              I am a data analyst and data science specialist currently pursuing an <strong className="text-slate-900 font-semibold">MSc in Data Science at the University of Hertfordshire (UK)</strong>, having previously earned a <strong className="text-slate-900 font-semibold">Bachelor of Technology in Computer Science and Engineering</strong>. My work bridges raw multi-table databases and strategic business intelligence.
            </p>
            <p>
              Across professional internships and full-time engineering roles, I have extracted key performance indicators from high-volume transaction datasets—such as auditing <strong className="text-slate-900 font-semibold">197,430 Swiggy food delivery records</strong> to uncover ₹53M in sales patterns, analyzing <strong className="text-slate-900 font-semibold">103,728 Uber bookings</strong> to isolate demand hubs, and examining <strong className="text-slate-900 font-semibold">307,973 UK road incidents</strong> to model roadway risk factors.
            </p>
            <p>
              My technical approach emphasizes <strong className="text-slate-900 font-semibold">verifiable data hygiene, metric precision, and interpretable modeling</strong>. Rather than treating accuracy as a vanity metric, I design pipelines specifically for real-world constraints—such as handling severe class imbalance in recruitment fraud screening with precision-recall trade-offs and isolating calendar distortions in commercial sales data.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
              Candidate Snapshot
            </h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-600 block">Current Status</span>
                <span className="font-medium text-slate-900">MSc Data Science (2024–2026)</span>
              </div>
              <div>
                <span className="text-xs text-slate-600 block">Target Roles</span>
                <span className="font-medium text-slate-900">Data Analyst, BI Analyst, Jr Data Scientist</span>
              </div>
              <div>
                <span className="text-xs text-slate-600 block">Core Competencies</span>
                <span className="font-medium text-slate-900">Power BI, SQL, Python, Excel, ML Pipelines</span>
              </div>
              <div>
                <span className="text-xs text-slate-600 block">Location & Mobility</span>
                <span className="font-medium text-slate-900">Luton / London Area (Eligible for UK roles)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={personalInfo.resumeUrl}
                download="Giridhar_Reddy_Goddilla_Resume.pdf"
                className="w-full text-center block py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-semibold transition-colors"
              >
                Download Complete Resume
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">Business Intelligence</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Power BI & Tableau reporting with dynamic DAX measures, disconnected tables, bookmark selectors, and multi-slicer Excel dashboards.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">SQL & ETL Workflows</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Relational 3NF database schema design, complex query optimization, SQLite modeling, and automated Python data cleaning routines.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">Machine Learning & NLP</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Imbalance-aware classification (LightGBM, XGBoost, SVM), TF-IDF text vectorization, decision-threshold tuning, and PR-AUC evaluation.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">KPI & Commercial Focus</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Translating operational metrics (AOV, delivery lateness rates, category margins, transit surges) into actionable stakeholder insights.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
