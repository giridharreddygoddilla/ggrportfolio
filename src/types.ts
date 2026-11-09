export interface VisualAsset {
  title: string;
  caption: string;
  image: string;
  tag?: string;
}

export interface MetricHighlight {
  value: string;
  label: string;
  subtext: string;
  accent?: 'cobalt' | 'emerald' | 'amber' | 'slate';
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  executiveSummary: string;
  problem: string;
  objective: string;
  bullets: string[];
  methodology: {
    phase: string;
    title: string;
    description: string;
  }[];
  keyMetrics: MetricHighlight[];
  resultsAndFindings: string[];
  technicalImplementation: {
    category: string;
    items: string[];
  }[];
  technologies: string[];
  githubUrl?: string;
  visuals: VisualAsset[];
  benchmarkTable?: {
    model: string;
    accuracy: string;
    f1Score: string;
    prAuc: string;
    precision: string;
    recall: string;
    highlight?: boolean;
    role: string;
  }[];
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  impactMetric?: {
    value: string;
    label: string;
  };
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  classification: string;
  coursework: string[];
  thesisTitle?: string;
}

export interface CertificationOrAward {
  title: string;
  issuer: string;
  type: 'certification' | 'award';
  date?: string;
  detail: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface AdditionalProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  metricsSummary: string;
  githubUrl: string;
  dashboardImage?: string;
  constraintNote?: string;
}
