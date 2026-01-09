// Mock data for Donald Junior Fotso Portfolio
// This file will be replaced with backend API calls later

export const personalInfo = {
  name: "Donald Junior Fotso",
  title: "Full Stack Developer | Business Analyst",
  tagline: "Building data-driven solutions that bridge technology and business impact",
  email: "donaldstephen146@gmail.com",
  phone: "+27 71 775 1605",
  location: "Johannesburg, South Africa",
  linkedin: "https://www.linkedin.com/in/donald-junior-fotso-4737481b1/",
  github: "https://github.com/St10135518",
  cvUrl: "https://customer-assets.emergentagent.com/job_donald-developer/artifacts/69k9zui9_Donald_Fotso_Junior_CV_2025.pdf",
  summary: "Honours-level Informatics graduate with specialized expertise in business analytics, data science, and software engineering. Proficient in statistical modeling, machine learning (scikit-learn, TensorFlow), and full-stack development (Python, Java, SQL). Demonstrated experience building data-driven solutions through hackathons and research projects, including AI-powered predictive systems and mobile applications. Strong foundation in software engineering principles, database optimization, and agile project management."
};

export const education = [
  {
    id: 1,
    institution: "University of Johannesburg",
    degree: "BScHons in Informatics (Honours)",
    period: "Jan 2025 - Dec 2025",
    status: "current"
  },
  {
    id: 2,
    institution: "IIE Rosebank College",
    degree: "Bachelor of Information Systems",
    period: "2022 - 2024",
    status: "completed"
  },
  {
    id: 3,
    institution: "Africa International School",
    degree: "National Senior Certificate (Matric)",
    period: "2020",
    description: "Bachelor's Pass with Distinction",
    status: "completed"
  }
];

export const skills = {
  technical: [
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "FastAPI", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Git/GitHub", category: "Tools" }
  ],
  dataScience: [
    { name: "Machine Learning", category: "ML/AI" },
    { name: "TensorFlow", category: "ML/AI" },
    { name: "PyTorch", category: "ML/AI" },
    { name: "scikit-learn", category: "ML/AI" },
    { name: "Pandas", category: "Data" },
    { name: "NumPy", category: "Data" },
    { name: "Tableau", category: "Visualization" },
    { name: "Power BI", category: "Visualization" },
    { name: "Matplotlib", category: "Visualization" },
    { name: "Spark", category: "Big Data" },
    { name: "Hadoop", category: "Big Data" }
  ],
  business: [
    { name: "Requirements Gathering", category: "Analysis" },
    { name: "Business Process Analysis", category: "Analysis" },
    { name: "Stakeholder Management", category: "Management" },
    { name: "Agile/Scrum", category: "Methodology" },
    { name: "A/B Testing", category: "Testing" },
    { name: "User Acceptance Testing", category: "Testing" },
    { name: "System Integration", category: "Implementation" },
    { name: "CRM Implementation", category: "Implementation" }
  ],
  tools: [
    "VS Code", "Jupyter", "Microsoft Visio", "Lucidchart", "Draw.io", "Balsamiq"
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "French", level: "Native" },
    { name: "Spanish", level: "Beginner" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "KAMELEC Equipment - Business Management System",
    description: "Comprehensive multi-store electrical equipment management system with inventory tracking for 15,000+ products, POS, invoice generation, and real-time analytics.",
    features: [
      "Multi-store management with unlimited stores",
      "Inventory tracking (15,000+ products optimized)",
      "Point of Sale (POS) system",
      "Invoice generation with A4 printing",
      "Role-based access (Admin, Manager, Seller)",
      "Weekly/Monthly reports with Excel & PDF exports",
      "Bilingual support (English/French)",
      "Dark mode interface"
    ],
    techStack: ["React 18", "Tailwind CSS", "FastAPI", "Python", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/St10135518",
    image: null
  },
  {
    id: 2,
    title: "Financial Empowerment AI",
    description: "AI-driven platform providing personalized financial guidance, income generation opportunities, and investment advisory for users at any income level.",
    features: [
      "Income generation module with skills assessment",
      "Intelligent budgeting with expense analysis",
      "Investment advisor with risk tolerance assessment",
      "Opportunity scanner for grants and funding",
      "Gamified financial education hub",
      "Multi-language support"
    ],
    techStack: ["Python", "Machine Learning", "NLP", "FastAPI", "React"],
    category: "AI/ML",
    github: "https://github.com/St10135518",
    image: null
  },
  {
    id: 3,
    title: "SafeSteps - Mobile Safe-Route App",
    description: "Mobile application that helps users find safe walking routes, developed during Discovery Gradhack 2025.",
    features: [
      "Safe route calculation algorithm",
      "Real-time safety data integration",
      "Mobile-first design",
      "User-friendly interface"
    ],
    techStack: ["Mobile Development", "APIs", "Geolocation"],
    category: "Mobile",
    github: "https://github.com/St10135518",
    event: "Discovery Gradhack 2025",
    image: null
  },
  {
    id: 4,
    title: "AI-Powered Lung Disease Detection",
    description: "Machine learning system for detecting lung diseases from medical imaging, developed during Discovery Gradhack 2024.",
    features: [
      "Deep learning model for image analysis",
      "Medical imaging processing",
      "Predictive diagnostics",
      "Healthcare AI application"
    ],
    techStack: ["Python", "TensorFlow", "Computer Vision", "Medical AI"],
    category: "AI/ML",
    github: "https://github.com/St10135518",
    event: "Discovery Gradhack 2024",
    image: null
  },
  {
    id: 5,
    title: "Neuro-Affective AI Agent",
    description: "Research project exploring AI systems that can understand and respond to emotional cues.",
    features: [
      "Emotion recognition",
      "Natural language processing",
      "Affective computing",
      "Research-grade implementation"
    ],
    techStack: ["Python", "NLP", "Machine Learning", "TensorFlow"],
    category: "Research",
    github: "https://github.com/St10135518",
    event: "Research Project",
    image: null
  },
  {
    id: 6,
    title: "Graph Search Maze Pathfinding Agent",
    description: "AI agent implementing various graph search algorithms to solve maze pathfinding problems.",
    features: [
      "Multiple search algorithms (BFS, DFS, A*)",
      "Visual maze representation",
      "Algorithm comparison",
      "Performance metrics"
    ],
    techStack: ["Python", "AI Algorithms", "Graph Theory"],
    category: "AI/ML",
    github: "https://github.com/St10135518",
    event: "AI Course Project",
    image: null
  }
];

export const hackathons = [
  {
    id: 1,
    name: "Discovery Gradhack 2025",
    project: "SafeSteps - Mobile Safe-Route App",
    year: 2025
  },
  {
    id: 2,
    name: "Discovery Gradhack 2024",
    project: "AI-powered Lung Disease Detection System",
    year: 2024
  },
  {
    id: 3,
    name: "Motus & UJ Hackathon 2025",
    project: "Participant",
    year: 2025
  }
];

export const coreStrengths = [
  "Data Science",
  "Machine Learning",
  "Software Engineering",
  "Business Analytics",
  "Full-Stack Development"
];
