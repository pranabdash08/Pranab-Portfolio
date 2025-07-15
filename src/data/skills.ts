export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: JSX.Element;
  color?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    level: 95,
    category: "Programming"
  },
  {
    name: "SQL",
    level: 90,
    category: "Database"
  },
  {
    name: "R",
    level: 85,
    category: "Programming"
  },

  // Data Visualization
  {
    name: "Tableau",
    level: 92,
    category: "Visualization"
  },
  {
    name: "Power BI",
    level: 90,
    category: "Visualization"
  },
  {
    name: "Qlik Sense",
    level: 80,
    category: "Visualization"
  },

  // Data Analysis & ML
  {
    name: "Pandas",
    level: 88,
    category: "Data Analysis"
  },
  {
    name: "NumPy",
    level: 85,
    category: "Data Analysis"
  },
  {
    name: "Scikit-learn",
    level: 82,
    category: "Machine Learning"
  },
  {
    name: "Matplotlib",
    level: 80,
    category: "Visualization"
  },
  {
    name: "Seaborn",
    level: 78,
    category: "Visualization"
  },

  // Business Intelligence
  {
    name: "Business Analytics",
    level: 95,
    category: "Business"
  },
  {
    name: "Statistical Analysis",
    level: 90,
    category: "Statistics"
  },
  {
    name: "Predictive Modeling",
    level: 85,
    category: "Machine Learning"
  },
  {
    name: "Data Mining",
    level: 80,
    category: "Data Analysis"
  },

  // Tools & Platforms
  {
    name: "Excel",
    level: 90,
    category: "Tools"
  },
  {
    name: "SAP HANA",
    level: 75,
    category: "Database"
  },
  {
    name: "A/B Testing",
    level: 85,
    category: "Statistics"
  },
  {
    name: "Process Optimization",
    level: 88,
    category: "Business"
  },

  // Additional Skills
  {
    name: "Data Cleaning",
    level: 92,
    category: "Data Analysis"
  },
  {
    name: "Data Visualization",
    level: 90,
    category: "Visualization"
  },
  {
    name: "Machine Learning",
    level: 85,
    category: "Machine Learning"
  },
  {
    name: "NLP",
    level: 80,
    category: "Machine Learning"
  },
  {
    name: "Time Series Analysis",
    level: 82,
    category: "Statistics"
  }
];

export const skillCategories = [
  "Programming",
  "Visualization", 
  "Analysis",
  "Statistics",
  "Business",
  "Tools"
] 