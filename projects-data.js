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
      title: "Varahi Automotives - Business Web App",
      category: "web-apps",
      tags: ["Python Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
      shortDescription: "A full-stack automobile spare parts catalog and business management portal with product CRUD operations.",
      longDescription: "Varahi Automotives is a professional web-based storefront and catalog created to streamline operations. The application hosts a complete parts list, dynamic filtering by brand/category, and a WhatsApp call-to-action integration for placing orders. It features a password-protected administrator portal for managing stock levels and product details in real-time.",
      features: [
        "Interactive catalog displaying 18+ high-demand products across 4 premier auto brands",
        "Complete secure admin dashboard with CRUD functionalities for product inventory management",
        "WhatsApp CTA API integration to instantly initiate orders with pre-filled product details"
      ],
      image: "assets/project-varahi.png",
      demoLink: "#",
      codeLink: "https://github.com/vedhavihith"
    },
    {
      id: "customer-churn",
      title: "Customer Churn & Credit Risk Analytics Engine",
      category: "ai-ml",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      shortDescription: "An end-to-end machine learning pipeline analyzing churn risk on over 5,000 customer profiles.",
      longDescription: "This analytics platform utilizes predictive modeling to evaluate credit risk and identify potential customer attrition. By processing large-scale behavioral data, the system evaluates core indicators and generates actionable risk scores.",
      features: [
        "Engineered a robust preprocessing pipeline for 5,000+ customer entries, handling missing values and scaling",
        "Achieved an 88% churn prediction accuracy and 85% ROC-AUC score with advanced ensemble classifiers",
        "Implemented feature importance techniques to isolate primary churn triggers for business strategy"
      ],
      image: "assets/project-churn.png",
      demoLink: "#",
      codeLink: "https://github.com/vedhavihith"
    },
    {
      id: "genai-analytics",
      title: "GenAI Powered Data Analytics",
      category: "analytics",
      tags: ["Generative AI", "Python", "EDA", "Data Storytelling"],
      shortDescription: "AI-driven delinquency prediction and collections strategy, paired with data storytelling dashboards.",
      longDescription: "Developed in collaboration with Tata Forage, this system merges exploratory data analysis (EDA) with generative AI techniques to build predictive delinquency models. The platform outputs visual data stories that help financial teams tailor collection strategies.",
      features: [
        "Conducted thorough Exploratory Data Analysis (EDA) on historical financial datasets",
        "Created an AI-driven delinquency prediction model for credit collections forecasting",
        "Built automated, narrative-based data storytelling dashboards summarizing core trends"
      ],
      image: "assets/project-analytics.png",
      demoLink: "#",
      codeLink: "https://github.com/vedhavihith"
    },
    {
      id: "secure-blog",
      title: "Secure CRUD Blog Application",
      category: "web-apps",
      tags: ["PHP", "MySQL", "Bootstrap", "Web Security"],
      shortDescription: "A secure web application for content management featuring authentication and SQL injection protection.",
      longDescription: "This blog application showcases secure backend web development practices. Built with raw PHP and MySQL, it incorporates authentication systems, request sanitization, and structured relational queries.",
      features: [
        "Designed database schemas with normalized relational tables for users, posts, and comments",
        "Implemented secure user authentication utilizing password hashing (bcrypt) and session validation",
        "Enforced security guards against SQL injection, XSS attacks, and CSRF vulnerabilities"
      ],
      image: "assets/project-blog.png",
      demoLink: "#",
      codeLink: "https://github.com/vedhavihith/crud_app"
    },
    {
      id: "jarvis-ai",
      title: "JARVIS - OS Automation Assistant",
      category: "ai-ml",
      tags: ["Python Flask", "SQLite", "Automation", "PyAutoGUI", "OS Control"],
      shortDescription: "A custom desktop virtual assistant exposing web endpoints to automate volume, screens, and stats.",
      longDescription: "JARVIS (Just A Rather Very Intelligent System) is a bespoke local virtual assistant and system management app built in Python. Designed to run as a backend service, it features system integration hooks (psutil, pyautogui) to control system volume, capture screen displays via PowerShell forms, record diagnostic metrics, and save custom toggles to a local database.",
      features: [
        "Real-time system diagnostics dashboard tracking CPU, memory load, disk usage, and battery indicators",
        "Reliable automated screen capture engine utilizing PowerShell native form graphics and PIL fallbacks",
        "Complete OS volume and playback control utilizing WScript.Shell COM scripts and ctypes keyboard events"
      ],
      image: "assets/project-jarvis.png",
      demoLink: "#",
      codeLink: "https://github.com/vedhavihith"
    },
    {
      id: "scientific-calculator",
      title: "Scientific Calculator Android App",
      category: "web-apps",
      tags: ["Java", "Android Studio", "XML", "Math Engine"],
      shortDescription: "Native Android scientific calculator supporting complex mathematical expressions.",
      longDescription: "A mobile application built natively for Android using Java and Android Studio. Features advanced trigonometric, logarithmic, and algebraic functions alongside real-time expression evaluation and interactive history logging.",
      features: [
        "Trigonometric, logarithmic, and exponential calculation engine",
        "Real-time expression parsing and operator precedence execution",
        "Clean responsive mobile UI layout with mathematical history logging"
      ],
      image: "assets/project-calculator.png",
      demoLink: "#",
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
