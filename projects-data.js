const portfolioData = {
  profile: {
    name: "Areddy Vedhavihith Reddy",
    titles: ["AI/ML Engineer", "Prompt Designer", "Web Developer"],
    bio: "Final-year B.Tech CS (AI & ML) student with hands-on experience in machine learning, generative AI, and GCP cloud computing. Currently deploying LLM-based solutions as a Google Cloud Gen AI intern, focusing on optimizing ML pipelines and building full-stack web applications.",
    location: "Hyderabad, Telangana, India",
    email: "areddyvedhavihithreddy06@gmail.com",
    github: "https://github.com/vedhavihith",
    linkedin: "https://linkedin.com/in/areddy-vedhavihith-reddy-20076a380",
    leetcode: "https://leetcode.com/u/vedhavihith",
    phone: "+91 8309323130"
  },
  skills: [
    // Frontend
    { name: "HTML5 / CSS3", category: "frontend" },
    { name: "JavaScript (ES6+)", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "PHP", category: "frontend" },
    
    // Backend & ML
    { name: "Python", category: "backend" },
    { name: "SQL", category: "backend" },
    { name: "MySQL / SQLite", category: "backend" },
    { name: "Scikit-learn", category: "backend" },
    { name: "Pandas / NumPy", category: "backend" },
    { name: "Deep Learning & NLP", category: "backend" },
    { name: "Generative AI / LLMs", category: "backend" },
    
    // Tools
    { name: "Google Cloud Platform (GCP)", category: "tools" },
    { name: "Python Flask", category: "tools" },
    { name: "Git & GitHub", category: "tools" },
    { name: "VS Code", category: "tools" }
  ],
  experience: [
    {
      role: "Gen AI & ACE Intern",
      company: "Google Cloud",
      duration: "Apr 2026 – Present",
      description: "Architecting Generative AI solutions on GCP under the ACE framework. Deployed large language models (LLMs) to optimize machine learning pipelines, reducing infrastructure latency by 15% and improving system throughput by 20%.",
      type: "work"
    },
    {
      role: "Web Developer Intern",
      company: "ApexPlanet Software Pvt Ltd",
      duration: "Apr 2026 – May 2026",
      description: "Engineered full-stack PHP/MySQL applications serving 3+ business modules, cutting manual data entry effort by 40%. Converted complex business requirements into REST-style APIs and normalized relational schemas across an intensive 6-week sprint.",
      type: "work"
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Internz Learn",
      duration: "Nov 2025 – Dec 2025",
      description: "Applied machine learning and generative AI techniques across 5+ structured program tasks, successfully completing all milestones and project deliverables within 30 days (ID: IL105200).",
      type: "work"
    },
    {
      role: "B.Tech – CS (Artificial Intelligence & Machine Learning)",
      company: "CMRCET, Hyderabad",
      duration: "2023 – 2027",
      description: "Acquiring strong foundations in artificial intelligence, machine learning, deep learning, cloud platforms, and data structures. Academic CGPA: 7.57/10.",
      type: "education"
    },
    {
      role: "Intermediate (MPC)",
      company: "NSR Impulse, Bachupally, Hyderabad",
      duration: "2021 – 2023",
      description: "Completed intermediate education under TSBIE State Board with a score of 96.1%.",
      type: "education"
    },
    {
      role: "SSC",
      company: "Sachdeva School of Excellence, Godavarikhani",
      duration: "2021",
      description: "Completed secondary education under SSC State Board with a perfect 10/10 GPA.",
      type: "education"
    }
  ],
  projects: [
    {
      id: "varahi-automotives",
      title: "Varahi Automotives",
      category: "web-apps",
      tags: ["Python Flask", "SQLite", "HTML5", "CSS3"],
      shortDescription: "Full-stack automobile spare parts catalog and inventory management portal.",
      summary: "Web storefront with product CRUD operations, brand filtering, and WhatsApp ordering integration.",
      features: [
        "18+ products catalog across 4 auto brands",
        "Secure admin portal for CRUD stock management"
      ],
      codeLink: null
    },
    {
      id: "customer-churn",
      title: "Customer Churn Analytics Engine",
      category: "ai-ml",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      shortDescription: "End-to-end ML pipeline evaluating credit churn risk on 5,000+ customer profiles.",
      summary: "Predictive behavioral analytics model identifying primary churn triggers with risk scores.",
      features: [
        "88% prediction accuracy & 85% ROC-AUC score",
        "Feature importance isolation for risk management"
      ],
      codeLink: null
    },
    {
      id: "genai-analytics",
      title: "GenAI Data Analytics",
      category: "analytics",
      tags: ["Generative AI", "Python", "EDA", "Data Storytelling"],
      shortDescription: "AI-driven delinquency forecasting and financial collection strategy dashboard.",
      summary: "Tata Forage collaboration merging Exploratory Data Analysis with Generative AI narratives.",
      features: [
        "AI delinquency prediction & forecasting model",
        "Automated narrative data storytelling dashboards"
      ],
      codeLink: null
    },
    {
      id: "secure-blog",
      title: "Secure CRUD Blog Application",
      category: "web-apps",
      tags: ["PHP", "MySQL", "Bootstrap", "Security"],
      shortDescription: "Secure content management application with bcrypt authentication & SQL safety.",
      summary: "Backend web app engineered with password hashing, XSS protection, and normalized tables.",
      features: [
        "Normalized MySQL relational database schemas",
        "Bcrypt hashing & protection against SQL injection"
      ],
      codeLink: "https://github.com/vedhavihith/crud_app"
    },
    {
      id: "jarvis-ai",
      title: "JARVIS - OS Assistant",
      category: "ai-ml",
      tags: ["Python Flask", "SQLite", "PyAutoGUI", "OS Automation"],
      shortDescription: "Desktop virtual assistant executing local OS controls, screenshots, and telemetry.",
      summary: "Local Python backend service automating system volume, diagnostic metrics, and PowerShell screens.",
      features: [
        "Real-time CPU, RAM, Disk & battery monitoring",
        "Native PowerShell screen capture & volume automations"
      ],
      codeLink: null
    },
    {
      id: "scientific-calculator",
      title: "Scientific Calculator Android",
      category: "web-apps",
      tags: ["Java", "Android Studio", "XML", "Math Engine"],
      shortDescription: "Native Android scientific calculator supporting complex mathematical expressions.",
      summary: "Android mobile application performing trigonometric, logarithmic, and expression evaluation.",
      features: [
        "Trigonometric, logarithmic & exponential engine",
        "Real-time expression parsing with calculation history"
      ],
      codeLink: "https://github.com/vedhavihith/Scientific-Calculator-Android"
    }
  ],
  certifications: [
    {
      title: "Google Cloud Certified — Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Sep 25, 2026",
      link: "assets/cert-associate-cloud-engineer.png"
    },
    {
      title: "Google Cloud Certified — Generative AI Leader",
      issuer: "Google Cloud",
      date: "Jul 17, 2026",
      link: "assets/cert-generative-ai-leader.png"
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "2026",
      link: null
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      date: "2026",
      link: null
    },
    {
      title: "Apply AI: Analyze Customer Reviews",
      issuer: "Cisco Networking Academy",
      date: "2026",
      link: null
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2026",
      link: null
    },
    {
      title: "GenAI Data Analytics",
      issuer: "Tata Forage",
      date: "Feb 2026",
      link: null
    },
    {
      title: "Web Development (APSPL2631233)",
      issuer: "ApexPlanet",
      date: "May 2026",
      link: null
    },
    {
      title: "Artificial Intelligence (IL105200)",
      issuer: "Internz Learn",
      date: "Dec 2025",
      link: null
    }
  ],
  achievements: [
    { title: "Google Cloud Gen AI Intern", desc: "Selected for Google Cloud's generative AI internship (Apr 2026)" },
    { title: "LeetCode Problem Solving", desc: "Solved 50+ DSA problems, validating core algorithmic proficiency" }
  ]
};

window.portfolioData = portfolioData;

// Export for node or browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
