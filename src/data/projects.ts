export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features?: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Healthcare Service Insights Dashboard",
    description: "Developed comprehensive healthcare analytics dashboard with NHS UK Data, providing insights into patient demographics, appointment trends, and service efficiency across the UK healthcare system.",
    category: "Healthcare Analytics",
    technologies: ["Tableau", "SQL", "Python", "Statistical Analysis"],
    features: [
      "Public-facing dashboard highlighting demographic trends in patient appointments",
      "Director-level dashboard for strategic decision making",
      "Integration with multiple NHS datasets including outpatient records",
      "Real-time monitoring of waiting times and consultant efficiency",
      "Geographic distribution analysis of healthcare services"
    ]
  },
  {
    id: "2",
    title: "Operations Analytics Dashboard",
    description: "Created advanced Power BI dashboards for a renowned vechile manufacturer, transforming over 50,000 data points into interactive visualizations to optimize operational workflows and resource allocation.",
    category: "Business Intelligence",
    technologies: ["Power BI", "SQL", "Python", "Data Visualization"],
    features: [
      "Real-time operational data monitoring",
      "Resource allocation optimization insights",
      "Workflow efficiency analysis",
      "Automated data processing and visualization",
      "Executive-level reporting capabilities"
    ]
  },
  {
    id: "3",
    title: "Sales Performance Analytics Platform",
    description: "Built interactive sales performance dashboard using Tableau and Power BI with SAP HANA integration, providing real-time insights into sales metrics across different regions and products.",
    category: "Sales Analytics",
    technologies: ["Tableau", "Power BI", "SAP HANA", "SQL"],
    features: [
      "Real-time sales metrics monitoring",
      "Regional performance analysis",
      "Product performance tracking",
      "Executive dashboard for strategic insights",
      "SAP HANA integration for live data"
    ]
  },
  {
    id: "4",
    title: "Customer Sentiment Analysis Model",
    description: "Implemented sentiment analysis model using Python's Natural Language Processing (NLP) libraries to analyze customer reviews and social media mentions for consumer electronics brand.",
    category: "Machine Learning",
    technologies: ["Python", "NLP", "Scikit-learn", "Pandas"],
    features: [
      "Automated sentiment classification",
      "Social media monitoring",
      "Customer feedback analysis",
      "Brand sentiment tracking",
      "Real-time sentiment scoring"
    ]
  },
  {
    id: "5",
    title: "Member Retention Prediction Model",
    description: "Developed and deployed predictive models using Python and Power BI to forecast member retention and engagement within the first 90 days, achieving 73% accuracy using CatBoost and K-Means algorithms.",
    category: "Predictive Analytics",
    technologies: ["Python", "Power BI", "CatBoost", "K-Means"],
    features: [
      "90-day retention prediction",
      "Member segmentation using K-Means",
      "Behavior pattern analysis",
      "Engagement forecasting",
      "Automated model deployment"
    ]
  },
  {
    id: "6",
    title: "Demand Forecasting Model",
    description: "Developed demand forecasting model for a manufacturing company using Python and R, incorporating historical data to forecast demand and optimize inventory levels.",
    category: "Supply Chain Analytics",
    technologies: ["Python", "R", "Statistical Modeling", "Time Series Analysis"],
    features: [
      "Historical demand pattern analysis",
      "Seasonal trend identification",
      "Inventory optimization recommendations",
      "Forecast accuracy improvement",
      "Automated reporting system"
    ]
  }
]; 