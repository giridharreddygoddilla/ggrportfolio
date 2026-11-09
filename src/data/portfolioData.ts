import { CaseStudy, ExperienceRole, EducationEntry, CertificationOrAward, SkillGroup, AdditionalProject } from '../types';

export const personalInfo = {
  name: "Giridhar Reddy Goddilla",
  title: "Data Analyst & Applied Data Science Specialist",
  roleTagline: "Data Analyst | Business Intelligence | Applied Data Science",
  location: "Luton, United Kingdom (London Area)",
  workEligibility: "Eligible for UK Data Roles",
  phone: "+44 7765508654",
  email: "giridharreddygoddilla@gmail.com",
  github: "https://github.com/giridharreddygoddilla",
  linkedin: "https://www.linkedin.com/in/giridharreddygoddilla/",
  resumeUrl: "./Giridhar_Reddy_Goddilla_Resume.pdf",
  photoUrl: "./profile-real-clean.webp",
  cleanPhotoUrl: "./portrait-420.webp",
  headline: "Turning complex transactional & relational data into verified commercial impact.",
  executiveSummary: "Data Analyst with an MSc in Data Science (Distinction) and 2+ years of experience across software engineering, SQL-based data handling and analytics. Analysed 197K+ sales transactions in Power BI, Tableau and Excel to uncover revenue patterns by day and city, and built Pandas workflows cleaning 180K+ order lines for forecasting and reporting. Skilled in SQL, Python, Power BI and Excel.",
};

export const heroStats = [
  { value: "197K+", label: "Sales Records Modeled", sub: "Food & retail transactions" },
  { value: "$435.8M", label: "Loan Capital Audited", sub: "38.5K credit accounts" },
  { value: "$1.55M", label: "Mobility Booking Value", sub: "103K+ Uber trips" },
  { value: "0.706", label: "Fraud F1-Score", sub: "LightGBM benchmark" }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "fake-job-detection",
    number: "01",
    title: "Fake Job Posting Detection",
    subtitle: "Imbalanced Classification & Hybrid NLP Feature Engineering Pipeline",
    category: "Machine Learning · NLP · Fraud Analytics",
    badge: "MSc Research · Distinction Level",
    executiveSummary: "Designed an end-to-end machine learning pipeline to identify fraudulent recruitment listings under severe class imbalance, where fraudulent postings represented just 4.84% of the dataset. Engineered 20 domain-specific behavioural features and integrated TF-IDF representations to capture textual and recruitment-related fraud signals.",
    problem: "Recruitment scams pose severe legal and reputational risks. However, legitimate job listings vastly outnumber fraudulent ads (95.16% vs 4.84%). Traditional classifiers optimizing for standard accuracy default to predicting the majority legitimate class, resulting in dangerously high false-negative rates where fraudulent postings slip through unnoticed.",
    objective: "Establish an imbalance-aware machine learning architecture capable of distinguishing fraudulent postings through structural missingness, linguistic richness, and text patterns, optimizing fraud-class recall and precision without relying on misleading accuracy metrics.",
    bullets: [
      "Analysed 17,880 job postings and investigated fraudulent recruitment patterns, missing information and textual characteristics.",
      "Engineered 20 domain-specific features capturing text richness, scam-related keywords, missing information and writing patterns, integrating TF-IDF for unstructured job descriptions.",
      "Benchmarked LightGBM, XGBoost, SVM and Gradient Boosting using fraud-class precision, recall, F1-score and PR-AUC.",
      "Achieved a fraud-class F1-score of 0.706 and PR-AUC of 0.793 with LightGBM, demonstrating its effectiveness in identifying the minority fraud class."
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "TF-IDF",
      "NLP",
      "Feature Engineering",
      "Classification"
    ],
    methodology: [
      {
        phase: "Phase 1: Exploratory Imbalance & Missingness Audit",
        title: "Discovered Class-Informative Structural Signals",
        description: "Audited 17,880 listings. Revealed that missing fields (such as company profile, salary range, and job requirements) are systematically higher in fraudulent postings, acting as a powerful non-textual fraud signal."
      },
      {
        phase: "Phase 2: Hybrid Feature Engineering (Dense + Sparse)",
        title: "Engineered 20 Domain Signals + TF-IDF Representations",
        description: "Formulated 20 custom numeric features capturing text length ratios, lexical scam keywords, and missing attribute counts, combined with TF-IDF vectorization to capture sparse semantic patterns without data leakage."
      },
      {
        phase: "Phase 3: Imbalance-Aware Model Benchmarking",
        title: "Evaluated Under Precision-Recall Trade-offs",
        description: "Trained and compared LightGBM, XGBoost, SVM, and Gradient Boosting under stratified train/test splits. Tuned decision thresholds against Precision-Recall curves rather than misleading ROC-AUC."
      }
    ],
    keyMetrics: [
      { value: "0.706", label: "Fraud F1-Score", subtext: "Optimal harmonic balance on minority class", accent: "cobalt" },
      { value: "0.793", label: "Fraud PR-AUC", subtext: "LightGBM top precision-recall area", accent: "cobalt" },
      { value: "4.84%", label: "Fraud Prevalence", subtext: "866 fraud in 17,880 total postings", accent: "amber" },
      { value: "20 Signals", label: "Engineered Features", subtext: "Text richness + lexical scan indicators", accent: "slate" }
    ],
    resultsAndFindings: [
      "LightGBM achieved the strongest fraud-class performance with an F1-score of 0.706 and PR-AUC of 0.793, accurately identifying fraudulent ads under extreme class imbalance.",
      "XGBoost served as an effective high-precision benchmark (0.770 PR-AUC), suitable for operational settings where false alarms carry substantial reviewer costs.",
      "Support Vector Machines demonstrated strong recall-oriented behavior (AP=0.780), ideal for zero-tolerance fraud screening tiers.",
      "Structural missingness in company profile and requirements accounted for major predictive importance across tree-based splits."
    ],
    benchmarkTable: [
      {
        model: "LightGBM (Balanced Model)",
        accuracy: "97.32%",
        f1Score: "0.706",
        prAuc: "0.793",
        precision: "75.16%",
        recall: "66.47%",
        highlight: true,
        role: "Primary Production Candidate"
      },
      {
        model: "XGBoost (High-Precision)",
        accuracy: "96.59%",
        f1Score: "0.670",
        prAuc: "0.770",
        precision: "62.94%",
        recall: "71.68%",
        highlight: false,
        role: "Precision Benchmark"
      },
      {
        model: "SVM (TF-IDF + Engineered)",
        accuracy: "97.46%",
        f1Score: "0.646",
        prAuc: "0.780",
        precision: "98.81%",
        recall: "47.98%",
        highlight: false,
        role: "High-Confidence Triage"
      },
      {
        model: "Gradient Boosting (Baseline)",
        accuracy: "96.31%",
        f1Score: "0.421",
        prAuc: "0.616",
        precision: "87.27%",
        recall: "27.75%",
        highlight: false,
        role: "Weak Baseline Model"
      }
    ],
    technicalImplementation: [
      { category: "Algorithms", items: ["LightGBM", "XGBoost", "Support Vector Machines (SVM)", "Gradient Boosting (GBM)"] },
      { category: "Feature Engineering", items: ["TF-IDF Vectorization", "Scam Lexicon Indicators", "Class-Informative Missingness", "Text Richness"] },
      { category: "Validation Design", items: ["Stratified Holdout", "Precision-Recall Curves", "Decision Threshold Tuning", "PR-AUC"] },
      { category: "Stack", items: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"] }
    ],
    githubUrl: "https://github.com/giridharreddygoddilla/MSc-Data-Science-Project",
    visuals: [
      {
        title: "Precision–Recall Curves Under Severe Imbalance",
        caption: "Empirical PR curves across all 4 benchmarked models, highlighting LightGBM's superior area under curve (AP=0.793) over the baseline (0.048 prevalence).",
        image: "./projects/fake-job-pr-curve.png",
        tag: "Empirical Model Comparison"
      },
      {
        title: "Target Class Distribution (Imbalance Verification)",
        caption: "Audit confirming the real-world minority distribution: 17,014 legitimate job listings versus 866 fraudulent listings (4.84% fraud rate).",
        image: "./projects/fake-job-imbalance.png",
        tag: "Dataset Architecture"
      },
      {
        title: "Class-Informative Attribute Missingness",
        caption: "Missingness distribution across 18 dataset columns, isolating company_profile, salary_range, and requirements as key discriminatory signals.",
        image: "./projects/fake-job-missingness.png",
        tag: "Exploratory Data Analysis"
      }
    ]
  },
  {
    id: "uber-trip-analysis",
    number: "02",
    title: "Uber Trip Mobility Analysis",
    subtitle: "Executive Business Intelligence, DAX Modelling & Geospatial Demand Analysis",
    category: "Business Intelligence · Power BI · DAX · Geospatial Analytics",
    badge: "Interactive Power BI Report",
    executiveSummary: "Developed a multi-page Power BI executive intelligence dashboard analysing 103,728 Uber bookings from June 2024, representing $1.55M in booking value. Built dynamic DAX measures and interactive reporting to investigate vehicle-category performance, temporal demand patterns and geographic booking distributions.",
    problem: "Urban mobility platforms face complex dispatch challenges due to localized demand spikes, varying vehicle margins, and payment method friction. Fleet operations managers require immediate multidimensional drill-down to allocate driver supply and identify operational anomalies.",
    objective: "Construct a production-grade business intelligence dashboard enabling dynamic metric switching across bookings, gross booking value, and trip distance, while identifying leading transit hubs and night revenue concentration.",
    bullets: [
      "Processed and analysed 103,728 booking records, establishing core KPIs for booking volume and booking value.",
      "Developed interactive Power BI dashboards with data modelling, advanced DAX measures, dynamic KPI selection and interactive slicers.",
      "Analysed booking trends across time periods, vehicle categories, payment methods and geographic locations.",
      "Identified high-demand periods, vehicle-category patterns and geographic booking hotspots to support operational insights."
    ],
    technologies: [
      "Microsoft Power BI",
      "DAX",
      "Power BI Service",
      "Excel",
      "Data Modelling",
      "Geospatial Analysis",
      "KPI Development",
      "Interactive Dashboards"
    ],
    methodology: [
      {
        phase: "Phase 1: Star-Schema Modeling & Outlier Audit",
        title: "Cleaned 103,728 Trips & Documented Data Boundaries",
        description: "Extracted and validated trip-level records for June 2024. Audited data hygiene and quarantined extreme anomalies (such as 144-mile and 24-hour durations) that inflate average trip times."
      },
      {
        phase: "Phase 2: Advanced DAX & Disconnected Tables",
        title: "Engineered Single-Control Dynamic Visual Switching",
        description: "Developed custom DAX measures linked to a disconnected measure-selector table with dynamic title generation, allowing users to toggle visual charts across bookings, booking value, and distance with one click."
      },
      {
        phase: "Phase 3: Multi-Page Executive Reporting",
        title: "Structured 3 Synchronized Analytical Views",
        description: "Built dedicated pages for Executive Overview, Temporal Analysis (hour/weekday trends), and Trip-Level Details with synchronized slicers, bookmarks, and detailed drill-through grids."
      }
    ],
    keyMetrics: [
      { value: "103,728", label: "Audited Bookings", subtext: "June 2024 trip dataset", accent: "cobalt" },
      { value: "$1.55M", label: "Gross Booking Value", subtext: "Verified total booking spend", accent: "cobalt" },
      { value: "37.4%", label: "UberX Fleet Share", subtext: "38,744 bookings ($583,880 value)", accent: "emerald" },
      { value: "4,475", label: "Penn Station Trips", subtext: "Top pickup transit hotspot", accent: "amber" }
    ],
    resultsAndFindings: [
      "UberX was identified as the leading vehicle category, accounting for 38,744 bookings (37.4% of total) and $583,880 in booking value.",
      "Night trips (17:00–05:59) accounted for 37% of total booking value, highlighting crucial revenue concentration outside traditional rush hours.",
      "Penn Station emerged as the single highest-frequency pickup hub with 4,475 trips, providing concrete driver positioning guidance.",
      "Average booking value stood at $14.98 across the metropolitan territory, with trip distance distributions showing tight urban clustering."
    ],
    technicalImplementation: [
      { category: "BI Platform", items: ["Microsoft Power BI", "Power BI Service", "Excel Data Modeling"] },
      { category: "Calculation Engine", items: ["Advanced DAX", "Time Intelligence", "Disconnected Table Dynamic Measures", "Dynamic Titles"] },
      { category: "UI/UX Modeling", items: ["Bookmark Navigation", "Synchronized Multi-Page Slicers", "Drill-Through Tables", "KPI Frameworks"] },
      { category: "Analytics Focus", items: ["Geospatial Hotspots", "Vehicle Tier Segmentation", "Temporal Hourly Demand", "Outlier Analysis"] }
    ],
    githubUrl: "https://github.com/giridharreddygoddilla/USA-Uber-Data-Analysis",
    visuals: [
      {
        title: "Power BI Executive Overview Dashboard",
        caption: "Interactive overview tracking total bookings (103.7K), gross booking value ($1.55M), average booking value ($14.98), and vehicle tier breakdown.",
        image: "./projects/uber-overview.png",
        tag: "Executive Dashboard"
      },
      {
        title: "Temporal & Hourly Demand Dashboard",
        caption: "Deep dive analyzing ride volume by hour of day, weekday peaks, and night-shift revenue concentration (37% from 17:00 to 05:59).",
        image: "./projects/uber-time.png",
        tag: "Time-Series Intelligence"
      }
    ]
  },
  {
    id: "bank-loan-analysis",
    number: "03",
    title: "Bank Loan & Credit Risk Analysis",
    subtitle: "Portfolio Composition, Lending Performance & Repayment Risk Analytics",
    category: "Financial Analytics · Microsoft Excel · Risk Analysis",
    badge: "Financial KPI Model",
    executiveSummary: "Developed an interactive financial analytics dashboard analysing 38,576 loan records across 25 attributes, covering $435.8M in funded loans and $473.1M in borrower repayments. Evaluated portfolio composition, lending performance, loan quality and repayment patterns through structured KPI reporting and interactive Excel visualisations.",
    problem: "Commercial credit teams need comprehensive monitoring across debt portfolios to track credit health, assess default rates, and project repayment cash flows. Without granular segmentation, non-performing loans erode profitability and mask credit risk exposure.",
    objective: "Develop a structured financial KPI dashboard in Microsoft Excel utilizing PivotTables, calculated fields, and dynamic segmentation to evaluate Good vs Bad loans, borrower intent, and month-to-date collections growth.",
    bullets: [
      "Analysed 38,576 loan applications across 25 attributes, establishing key lending, funding and repayment performance indicators.",
      "Developed an interactive Excel dashboard using PivotTables, calculated fields, dynamic filters and five core financial KPIs.",
      "Segmented Good and Bad loans to evaluate portfolio composition, charged-off applications and associated funded and repaid amounts.",
      "Investigated debt-consolidation lending patterns and month-to-date collection trends to identify changes in repayment performance."
    ],
    technologies: [
      "Microsoft Excel",
      "Advanced PivotTables",
      "Power Pivot",
      "Calculated Fields",
      "Interactive Slicers",
      "Financial KPIs",
      "Data Analysis",
      "Data Visualisation"
    ],
    methodology: [
      {
        phase: "Phase 1: Portfolio Attribution & Calculated Fields",
        title: "Modeled 38,576 Records Across $435.8M Capital",
        description: "Cleaned and structured lending records across 25 variables. Formulated key portfolio metrics including Average Interest Rate (12.05%) and Average Debt-to-Income (DTI: 13.33%)."
      },
      {
        phase: "Phase 2: Good vs Bad Loan Risk Segmentation",
        title: "Quantified $65.5M in Charged-Off Exposure",
        description: "Segmented credit applications into performing assets (Fully Paid, Current) and non-performing assets (Charged Off), isolating default loss parameters and repayment shortfalls."
      },
      {
        phase: "Phase 3: Multidimensional Pivot Intelligence",
        title: "Built Slicer-Driven Risk & Demographic Dashboards",
        description: "Constructed dynamic PivotTables with synchronized slicers analyzing loans by credit grade (A to G), employment duration (10+ years leading at 8.9K), home ownership, and loan term."
      }
    ],
    keyMetrics: [
      { value: "38,576", label: "Total Loan Records", subtext: "Cleaned credit applications evaluated", accent: "cobalt" },
      { value: "$435.8M", label: "Total Funded Loans", subtext: "Across 38,576 credit applications", accent: "cobalt" },
      { value: "$473.1M", label: "Total Amount Received", subtext: "Principal and interest recovered", accent: "emerald" },
      { value: "13.82%", label: "Charged-Off Bad Loans", subtext: "5,333 applications ($65.5M funded, $37.3M repaid)", accent: "amber" }
    ],
    resultsAndFindings: [
      "Good loans comprised 86.18% of portfolio volume (33.2K applications), generating $435.8M in borrower repayments on $370.2M funded capital.",
      "Bad loans represented 13.82% (5,333 charged-off loans) associated with $65.5M in funded capital and $37.3M recovered, quantifying portfolio default drag.",
      "Debt consolidation was the primary borrowing purpose, accounting for 18,214 applications (47.2% of total portfolio).",
      "December month-to-date collections showed a 15.8% surge against the comparable preceding period, reaching $58.1M received."
    ],
    technicalImplementation: [
      { category: "Analytics Tool", items: ["Microsoft Excel", "Advanced PivotTables", "Power Pivot"] },
      { category: "Financial Calculations", items: ["Calculated Fields", "Debt-to-Income (DTI)", "Interest Rate Modeling", "MoM / MTD Ratios"] },
      { category: "Risk Segmentation", items: ["Good vs Bad Loans", "Charged-Off Recovery Rates", "Credit Grade Scoring (A-G)"] },
      { category: "Visual Framework", items: ["Interactive Slicers", "State Map Geo-Charts", "Term Donut Charts", "Purpose Distribution"] }
    ],
    githubUrl: "https://github.com/giridharreddygoddilla/Bank_Loan_Analysis",
    visuals: [
      {
        title: "Bank Loan Overview Dashboard",
        caption: "Executive dashboard monitoring 38.6K applications, $435.8M funded, $473.1M received, monthly loan velocity, state geographic spread, and borrowing purpose.",
        image: "./projects/bank-loan-overview.png",
        tag: "Financial Overview"
      },
      {
        title: "Summary & Good vs Bad Loan Segmentation",
        caption: "Risk management breakdown isolating Good Loans (86.18% / $435.8M received) from Bad Loans (13.82% / $65.5M funded charged-off exposure).",
        image: "./projects/bank-loan-summary.png",
        tag: "Credit Risk Segmentation"
      }
    ]
  }
];

export const additionalProjects: AdditionalProject[] = [
  {
    id: "amazon-bestsellers-pyspark",
    title: "Amazon Bestsellers Analysis with PySpark",
    subtitle: "Distributed Big Data Processing & Pricing Analytics",
    category: "Big Data · PySpark · Distributed Systems",
    description: "Built distributed PySpark workflows to process and analyse Amazon bestseller records across product categories. Applied schema transformations, data cleaning, genre-level pricing aggregations and rating analysis to investigate patterns across the bestseller catalogue.",
    technologies: ["Python", "PySpark", "Spark SQL", "Distributed DataFrames", "Data Aggregation", "Pandas", "Jupyter Notebook"],
    metricsSummary: "Distributed processing across high-volume catalog records with Spark SQL aggregations",
    githubUrl: "https://github.com/giridharreddygoddilla/Amazon-Bestsellers-Analysis-with-PySpark"
  },
  {
    id: "multimodal-imdb-keras",
    title: "Multimodal IMDb Analysis with Keras",
    subtitle: "Deep Learning Evaluation for Image & Text Modalities",
    category: "Deep Learning · Computer Vision · NLP · Keras",
    description: "Evaluated deep learning approaches for movie genre prediction using two independent data modalities. Extracted visual features from movie posters using Convolutional Neural Networks and processed textual plot summaries using Long Short-Term Memory networks.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "NLP", "Computer Vision", "Pandas"],
    metricsSummary: "Comparative evaluation of independent CNN poster feature extraction and LSTM text representation",
    githubUrl: "https://github.com/giridharreddygoddilla/Multimodal-IMDB-Analysis-with-Keras",
    constraintNote: "The project compares independent CNN-based image feature extraction and LSTM-based text representation. It is not a jointly trained, end-to-end multimodal fusion model."
  },
  {
    id: "time-series-crude-oil",
    title: "Time Series Modelling Case Study",
    subtitle: "Econometric & Deep Learning Crude Oil Price Forecasting",
    category: "Time Series · Econometrics · Deep Learning",
    description: "Investigated crude oil price forecasting through statistical time-series modelling and deep learning. Evaluated stationarity using ADF diagnostics, modelled autoregressive patterns using ARIMA/SARIMAX and compared LSTM forecasting against a Random Walk with Drift benchmark.",
    technologies: ["Python", "ARIMA", "SARIMAX", "LSTM", "Statsmodels", "Time-Series Diagnostics", "Pandas", "NumPy"],
    metricsSummary: "Evaluated against Random Walk with Drift benchmark; classical ARIMA models achieved competitive forecasting performance",
    githubUrl: "https://github.com/giridharreddygoddilla/Time-Series-Modelling-Case-Study",
    constraintNote: "Empirical benchmark established that the Random Walk with Drift benchmark and classical ARIMA models achieved competitive forecasting performance against recurrent neural networks."
  },
  {
    id: "road-accident-analysis",
    title: "Road Accident Data Analysis",
    subtitle: "Public Safety Analytics & Casualty Pattern Dashboard",
    category: "Data Analytics · Microsoft Excel · Public Safety",
    description: "Analysed a road-accident dataset containing 307,973 records across 23 attributes using Microsoft Excel. Investigated accident and casualty patterns across severity, time, road conditions, weather and location through data cleaning, exploratory analysis and dashboard visualisation.",
    technologies: ["Microsoft Excel", "PivotTables", "Excel Formulas", "Data Cleaning", "Exploratory Data Analysis", "Data Visualisation"],
    metricsSummary: "307,973 casualty records audited across 23 categorical and environmental variables",
    githubUrl: "https://github.com/giridharreddygoddilla/Road_Accident_Analysis",
    dashboardImage: "./projects/road-accident-dashboard.png",
    constraintNote: "Descriptive exploratory data analysis examining casualty distribution patterns without asserting unverified causal risk relationships."
  }
];

export const experienceRoles: ExperienceRole[] = [
  {
    id: "victoria-solutions",
    role: "Data Analyst Intern",
    company: "Victoria Solutions",
    location: "London, UK",
    period: "Oct 2025 – Nov 2025",
    employmentType: "Internship",
    summary: "Led exploratory data analysis and executive dashboard development on large-scale e-commerce and retail transaction datasets.",
    achievements: [
      "Identified Saturday as the highest-sales day (INR 7.78M, 14.7% of sales) and five cities contributing 33% of revenue by analysing 197,430 food-delivery transactions (INR 53.01M sales, INR 268.51 average order value).",
      "Segmented orders by day of week and city using Excel PivotTables, and defined KPIs including total sales, order volume and average order value.",
      "Cleaned and validated the dataset using Excel formulas and filters, resolving inconsistencies to improve reliability before analysis.",
      "Built Power BI and Tableau dashboards presenting sales, order volume and average order value by day and city."
    ],
    technologies: ["Power BI", "Tableau", "Microsoft Excel", "PivotTables", "Data Cleaning", "KPI Reporting"],
    impactMetric: {
      value: "197K+",
      label: "Transactions Modeled (INR 53M Sales)"
    }
  },
  {
    id: "fourp-technology",
    role: "Software Engineer",
    company: "FOURP Technology Solutions Pvt. Ltd.",
    location: "Chennai, India",
    period: "Jun 2022 – Aug 2024",
    employmentType: "Full-Time (2+ Years)",
    summary: "Engineered distributed ETL pipelines, data warehouse architectures, and executive BI reporting systems supporting commercial client operations.",
    achievements: [
      "Engineered end-to-end ETL pipelines using SQL and PySpark, integrating multi-source e-commerce data through distributed processing, complex joins, data cleansing and validation to deliver analysis-ready datasets across assigned product categories and regional markets.",
      "Designed data warehouse architectures using relational and dimensional modelling, implementing fact and dimension tables, data aggregation and transformation workflows to establish centralised datasets for historical sales analysis and business reporting.",
      "Developed interactive Power BI and Tableau dashboards incorporating advanced DAX measures, KPI frameworks, time-intelligence calculations and product-region segmentation to analyse revenue trends, sales performance and operational metrics.",
      "Applied YoY analysis, revenue trend analysis and performance benchmarking to identify product-level and regional growth opportunities, contributing to a 14% sales increase across assigned product categories and geographical markets compared with the previous year."
    ],
    technologies: ["SQL", "PySpark", "Data Warehousing", "Dimensional Modeling", "Power BI", "DAX", "Tableau", "Python"],
    impactMetric: {
      value: "+14%",
      label: "YoY Sales Growth via Regional Analytics"
    }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Data Processing",
    description: "Core languages and scalable libraries for manipulating, cleaning, and validating large datasets.",
    skills: [
      { name: "Python", level: "Production", context: "Data pipelines, ML modeling, and text processing" },
      { name: "Pandas", level: "Production", context: "DataFrame transformations, cleaning, and aggregation" },
      { name: "NumPy", level: "Production", context: "Vectorized computations and numerical arrays" },
      { name: "SQL", level: "Production", context: "Complex joins, CTEs, window functions, and indexing" },
      { name: "PySpark", level: "Distributed", context: "Large-scale distributed ETL and big data processing" }
    ]
  },
  {
    category: "BI & Visualisation",
    description: "Transforming raw tables into intuitive, executive-ready decision dashboards.",
    skills: [
      { name: "Power BI", level: "Advanced", context: "Multi-page interactive reports, star-schema data models" },
      { name: "DAX", level: "Advanced", context: "Calculated measures, disconnected tables, time-intelligence" },
      { name: "Tableau", level: "Proficient", context: "Visual analytics, interactive filters, trend charts" },
      { name: "Advanced Excel", level: "Advanced", context: "PivotTables, calculated fields, dynamic formulas" },
      { name: "Matplotlib & Seaborn", level: "Proficient", context: "Statistical plots, precision-recall curves, distributions" }
    ]
  },
  {
    category: "Data Engineering & Analytics",
    description: "End-to-end workflows from raw extraction to structured warehouse schemas.",
    skills: [
      { name: "ETL / ELT Pipelines", level: "Applied", context: "Data ingestion, multi-source joins, cleaning workflows" },
      { name: "Data Cleaning & QA", level: "Expert", context: "Missingness audits, outlier quarantine, integrity checks" },
      { name: "Data Warehousing", level: "Applied", context: "Fact and dimension tables, relational modeling" },
      { name: "Data Modelling", level: "Applied", context: "Star-schema architectures and relational constraints" },
      { name: "Exploratory Data Analysis (EDA)", level: "Applied", context: "Hypothesis testing, trend decomposition, distributions" },
      { name: "KPI Reporting", level: "Applied", context: "Formulating business-critical metrics with clear denominators" }
    ]
  },
  {
    category: "Machine Learning & Forecasting",
    description: "Empirical statistical modeling, class-imbalance classification, and time-series.",
    skills: [
      { name: "Scikit-learn", level: "Applied", context: "Pipelines, preprocessing, model evaluation" },
      { name: "LightGBM & XGBoost", level: "Applied", context: "Gradient boosting for tabular & imbalanced data" },
      { name: "NLP & TF-IDF", level: "Applied", context: "Text vectorization, token cleaning, linguistic signals" },
      { name: "ARIMA & SARIMAX", level: "Academic", context: "Time-series forecasting and seasonal decomposition" },
      { name: "Streamlit", level: "Applied", context: "Interactive data application deployment" }
    ]
  },
  {
    category: "Development Tools & Environment",
    description: "Modern developer tooling for reliable version control and reproducible analysis.",
    skills: [
      { name: "Git & GitHub", level: "Daily Use", context: "Branching, PRs, semantic commit history" },
      { name: "Jupyter Notebook", level: "Daily Use", context: "Interactive exploration, documentation, and reporting" }
    ]
  }
];

export const educationList: EducationEntry[] = [
  {
    degree: "MSc in Data Science",
    institution: "University of Hertfordshire",
    location: "Hatfield, United Kingdom",
    period: "Sep 2024 – Sep 2026",
    classification: "Classification: Distinction",
    coursework: [
      "Data Analytics",
      "Statistical Modelling",
      "Database Management",
      "Data Mining",
      "Machine Learning",
      "Neural Networks",
      "PySpark"
    ],
    thesisTitle: "Imbalance-Aware Fraud Detection in Recruitment Postings Using Machine Learning and Natural Language Processing"
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2019 – Aug 2023",
    classification: "Classification: Distinction",
    coursework: [
      "Probability and Statistics",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "SQL",
      "Python",
      "Data Science Foundations"
    ]
  }
];

export const certificationsAndAwards: CertificationOrAward[] = [
  {
    title: "Machine Learning, Data Science & Python Programming",
    issuer: "DataCamp",
    type: "certification",
    detail: "Comprehensive training in statistical data analysis, machine learning pipelines, and Python programming."
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    type: "certification",
    detail: "Rigorous specialization covering gradient descent, logistic regression, regularization, and model evaluation."
  },
  {
    title: "Certificate of Excellence (Internship)",
    issuer: "Victoria Solutions",
    type: "award",
    date: "Nov 2025",
    detail: "Recognized for outstanding analytical contributions and interactive dashboard delivery on high-volume commercial retail datasets."
  },
  {
    title: "Best Internship Project Award",
    issuer: "360DigiTMG",
    type: "award",
    date: "2023",
    detail: "Awarded top project honors for end-to-end data analytics and predictive modeling execution."
  }
];
