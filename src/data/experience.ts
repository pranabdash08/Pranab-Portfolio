export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    id: "0",
    title: "Business Strategy Analyst",
    company: "Ezerx Health tech Pvt Ltd",
    location: "Bhubaneswar, OD, India",
    period: "May 2025 - Now",
    description: "Driving business strategy and analytics initiatives to support organizational growth and data-driven decision-making at Ezerx Health tech.",
    achievements: [],
    skills: ["Business Strategy", "Analytics", "Healthcare", "Data Analysis"]
  },
  {
    id: "00",
    title: "Project Consultant- Analytics",
    company: "Freelancing",
    location: "Delhi, India",
    period: "February 2025 - April 2025",
    description: "Consulted for a leading automobile manufacturer, automating service analytics dashboards and transforming large-scale register data into actionable insights.",
    achievements: [
      "Led the automation of service analytics dashboards using Power BI and Qlik Sense, transforming large-scale register data into actionable insights for a leading automobile manufacturer.",
      "Developed dynamic, interactive dashboards to monitor service penetration (72%), no-show customer trends (28%), and machine parc analytics across zones, dealers, and branches.",
      "Integrated real-time data processing from logs to enhance predictive service tracking, warranty analysis, and customer engagement strategies.",
      "Utilized advanced calculations and multi-dimensional filtering to enable deep-dive analysis of service trends, optimizing resource allocation and efficiency."
    ],
    skills: ["Power BI", "Qlik Sense", "Dashboard Automation", "Service Analytics", "Predictive Analysis", "Data Processing"]
  },
  {
    id: "1",
    title: "Consultant – Analytics",
    company: "University of Birmingham",
    location: "Birmingham, England, United Kingdom",
    period: "June 2024 - September 2024",
    description: "Developed machine learning models and analytics solutions to enhance member retention strategies for the University of Birmingham Sports Centre.",
    achievements: [
      "Developed machine learning models that achieved 73% accuracy in predicting member attendance and retention within the first 90 days, enhancing retention strategies.",
      "Analyzed over 15,000 member records using Python, Power BI, and advanced ML techniques (CatBoost, K-Means).",
      "Identified key factors influencing retention, with price level contributing 65% to predictions, informing strategies projected to reduce churn by 15%.",
      "Designed and implemented a real-time prediction interface with Streamlit, enabling non-technical staff to receive instant predictions and improving engagement by 20%."
    ],
    skills: ["Python", "Power BI", "Machine Learning", "CatBoost", "K-Means", "Streamlit", "Data Analysis", "Predictive Modeling"]
  },
  {
    id: "2",
    title: "BI Analyst Intern",
    company: "Globtier Infotech",
    location: "New Delhi, DL, India",
    period: "June 2023 - September 2023",
    description: "Developed advanced Power BI dashboards and analytics for JCB India, driving operational efficiency and data-driven decision-making.",
    achievements: [
      "Developed three advanced Power BI dashboards for JCB India, analyzing over 50,000 data points to identify operational inefficiencies and minimize resource allocation errors.",
      "Provided performance analytics that led to a 20% improvement in workflow efficiency for JCB India.",
      "Streamlined data visualization techniques, reducing reporting time by 30% and enabling swift executive decision-making."
    ],
    skills: ["Power BI", "Data Visualization", "Performance Analytics", "Workflow Optimization", "Reporting"]
  },
  {
    id: "3",
    title: "Business Analyst Intern",
    company: "Ezerx Health tech Pvt Ltd",
    location: "Bhubaneswar, OD, India",
    period: "May 2022 - July 2022",
    description: "Designed and deployed Power BI dashboards for health analytics, focusing on anemia and pregnancy-related conditions, and improved data integrity and processing.",
    achievements: [
      "Designed and deployed six interactive Power BI dashboards visualizing health metrics for over 3,000 patient records.",
      "Integrated automated real-time data feeds, addressing data integrity challenges and enhancing analysis accuracy.",
      "Led the dashboard development lifecycle, boosting data processing speeds by 25% and increasing user engagement.",
      "Conducted validation tests, improving health analytics quality and reducing discrepancies by 20%."
    ],
    skills: ["Power BI", "Health Analytics", "Data Validation", "Dashboard Development", "Data Processing"]
  },
  {
    id: "4",
    title: "Department Head (Volunteer)",
    company: "Christ University",
    location: "Bengaluru, KA, India",
    period: "May 2022 - May 2022",
    description: "Led the marketing team for the IMPERIO Business Fest, planning and executing campaigns to boost event visibility and participant engagement.",
    achievements: [
      "Led the marketing team to plan and execute campaigns for the IMPERIO Business Fest, significantly increasing event visibility and participant engagement.",
      "Mentored and guided marketing students in campaign management and collaborative problem-solving, ensuring seamless event execution.",
      "Implemented innovative marketing techniques, resulting in higher participation and greater engagement across event activities."
    ],
    skills: ["Marketing", "Team Leadership", "Event Management", "Campaign Planning", "Mentoring"]
  }
]; 