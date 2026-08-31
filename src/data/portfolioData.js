export const personalDetails = {
  name: "Biswaranjan Panda",
  title: "Java Developer & Backend Specialist",
  tagline: "Building High-Impact Scalable Backends, REST APIs & Intelligent Data Systems",
  location: "Balasore / Odisha, India",
  email: "biswaranjanpanda101@gmail.com",
  phone: "+91-9861944502",
  github: "https://github.com/Biswaranjan1921",
  linkedin: "https://linkedin.com/in/biswaranjanpanda",
  status: "Open for Full-time Roles & Internships",
  cgpa: "8.5 / 10",
  college: "BCET Balasore (BPUT)",
  degree: "B.Tech in Computer Science & Engineering (2022 - 2026)",
  summary: `Final-year Computer Science student (CGPA 8.5) with strong expertise in Java, Spring Boot, REST APIs, JDBC, Oracle DB, and Firebase. Built 5+ end-to-end production-ready projects, improving ML forecast accuracy by 18% during research at DRDO and reducing data processing time by 25%. Proven competitive hackathon winner with a focus on scalable backend architecture, OOP, and data-driven solutions.`,
  bio: [
    "I am a results-driven backend developer and Computer Science student passionate about crafting clean, efficient, and reliable software architectures.",
    "My journey spans core Java enterprise development with Spring Boot to applied Machine Learning research at DRDO Balasore. I thrive in competitive environments, having secured multiple top titles in national hackathons and robotics contests.",
    "Whether designing role-based database access, optimizing query pipelines, or building QR-based automation systems, I focus on delivering tangible real-world impact."
  ]
};

export const stats = [
  { label: "B.Tech CGPA", value: "8.5", subtext: "BCET Balasore (BPUT)" },
  { label: "Hackathons Won", value: "4+", subtext: "1st Place & Champions" },
  { label: "End-to-End Projects", value: "5+", subtext: "Full Stack & ML Solutions" },
  { label: "Accuracy Boost", value: "18%", subtext: "DRDO Meteorological ML" },
];

export const experiences = [
  {
    id: "drdo",
    role: "Research Intern",
    company: "DRDO (Defence Research and Development Organisation)",
    location: "PXE Balasore, Odisha",
    period: "May 2025 – Jun 2025",
    type: "Research & Development",
    description: "Engaged in high-level meteorological data analysis and predictive ML model development for defence research operations.",
    highlights: [
      "Built an advanced Rainfall Prediction System ('DROP') utilizing regression machine learning models, improving forecast accuracy by 18%.",
      "Designed an automated Python data cleaning, transformation, and visualization pipeline handling 10,000+ complex meteorological records.",
      "Reduced processing overhead by 25% through vectorized data processing and efficient Pandas pipeline architecture.",
      "Presented empirical accuracy benchmarks and model evaluation matrices to senior DRDO research scientists."
    ],
    skills: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Data Visualization", "Meteorological Analytics"]
  }
];

export const projects = [
  {
    id: "drop-ml",
    title: "DROP — Rainfall Prediction System",
    category: "ML & Data Science",
    featured: true,
    tagline: "ML pipeline achieving 85% accuracy on 10,000+ data points built during DRDO research.",
    description: "An end-to-end Machine Learning data and prediction pipeline engineered to process large-scale atmospheric datasets and deliver accurate precipitation forecasts.",
    details: [
      "Trained and cross-validated multiple regression and ensemble ML models on over 10,000 meteorological records.",
      "Attained 85% predictive accuracy with enhanced precision metrics over baseline models.",
      "Automated feature engineering and missing data imputation to streamline raw dataset ingestion."
    ],
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    githubLink: "https://github.com/Biswaranjan1921/DROP-Rainfall-Prediction",
    demoLink: "#",
    metrics: "85% Forecast Accuracy | +18% Improvement over Baseline"
  },
  {
    id: "student-result",
    title: "Student Result Management System",
    category: "Java & Backend",
    featured: true,
    tagline: "Full CRUD web platform with role-based access control and Oracle DB integration.",
    description: "A robust enterprise web application automating academic record management, course enrollment, grade calculations, and transcript generation.",
    details: [
      "Implemented role-based authentication (Admin vs. Student) with session security.",
      "Designed and optimized relational schema on Oracle DB using raw JDBC and indexed SQL queries for fast fetch operations.",
      "Built clean HTML5/CSS3 frontend interfaces with dynamic backend data binding."
    ],
    tech: ["Java", "JDBC", "Oracle SQL", "HTML5", "CSS3", "JavaScript", "Servlets"],
    githubLink: "https://github.com/Biswaranjan1921/Student-Result-Management",
    demoLink: "#",
    metrics: "Role-Based Authentication | Sub-100ms Query Latency"
  },
  {
    id: "smart-hostel",
    title: "Smart Hostel Management System",
    category: "Java & Full Stack",
    featured: true,
    tagline: "Centralized campus automation system with QR-based meal verification.",
    description: "A comprehensive digital solution automating hostel operations including room allocation, fee payment tracking, attendance monitoring, and maintenance ticketing.",
    details: [
      "Pioneered a QR-code meal verification system reducing mess queue wait times and eliminating food wastage.",
      "Streamlined administrative communication between students and wardens via dynamic complaint resolution boards.",
      "Integrated real-time room inventory availability and automated fee status tracking."
    ],
    tech: ["Java", "HTML5", "CSS3", "JavaScript", "SQL", "QR Scanner Integration"],
    githubLink: "https://github.com/Biswaranjan1921/Smart-Hostel-Management",
    demoLink: "#",
    metrics: "QR Verification | 100% Digital Workflow"
  },
  {
    id: "spring-api-gateway",
    title: "Scalable Microservices REST Backend",
    category: "Java & Backend",
    featured: false,
    tagline: "Modular Spring Boot REST APIs with JWT Auth and Firebase Realtime Sync.",
    description: "A high-concurrency microservice backend architecture built for enterprise data syncing and stateless authentication.",
    details: [
      "Architected clean multi-tier layers (Controller, Service, Repository, DTO).",
      "Integrated SLF4J structured logging and SonarQube code quality standards.",
      "Tested API endpoints and load handling using Postman and JMeter stress tests."
    ],
    tech: ["Spring Boot", "REST API", "Firebase Firestore", "JUnit 5", "Mockito", "JMeter"],
    githubLink: "https://github.com/Biswaranjan1921",
    demoLink: "#",
    metrics: "100% Code Coverage via JUnit/Mockito"
  }
];

export const skillCategories = [
  {
    name: "Languages & Core",
    icon: "Code2",
    skills: [
      { name: "Java (OOP, Multithreading, Collections)", level: 92 },
      { name: "SQL & Relational Design", level: 88 },
      { name: "Python", level: 82 },
      { name: "JavaScript (ES6+)", level: 78 },
      { name: "HTML5 / CSS3", level: 85 }
    ]
  },
  {
    name: "Backend & Databases",
    icon: "Database",
    skills: [
      { name: "Spring Boot", level: 86 },
      { name: "REST APIs & JSON", level: 90 },
      { name: "JDBC & ORM concepts", level: 88 },
      { name: "Oracle Database", level: 85 },
      { name: "Firebase Realtime DB / Firestore", level: 80 }
    ]
  },
  {
    name: "Testing, Quality & DevOps",
    icon: "ShieldCheck",
    skills: [
      { name: "JUnit & Mockito", level: 82 },
      { name: "JMeter Performance Testing", level: 75 },
      { name: "SonarQube Code Quality", level: 80 },
      { name: "SLF4J & ELK Stack", level: 78 },
      { name: "Git & GitHub Workflow", level: 90 }
    ]
  },
  {
    name: "IDEs & Developer Tools",
    icon: "Wrench",
    skills: [
      { name: "VS Code & Eclipse & STS", level: 90 },
      { name: "Postman API Testing", level: 88 },
      { name: "Linux / Command Line", level: 80 },
      { name: "Build Tools (Maven/Gradle basics)", level: 82 }
    ]
  }
];

export const achievements = [
  {
    id: "bput-tech-carnival",
    title: "Winner — BPUT Tech Carnival 2025–26",
    organization: "Biju Patnaik University of Technology",
    year: "2025 – 2026",
    badge: "Champion",
    description: "Secured top overall position by developing an innovative, high-impact technical solution under tight competition deadlines."
  },
  {
    id: "iit-robotics",
    title: "1st Place — Line Following Robot",
    organization: "IIT Bhubaneswar",
    year: "2024",
    badge: "1st Position",
    description: "Designed and programmed an autonomous high-speed robot featuring optimized PID path detection algorithms and real-time sensor control."
  },
  {
    id: "bput-hackathon",
    title: "Winner — BPUT Hackathon 2025",
    organization: "BPUT State Level Hackathon",
    year: "2025",
    badge: "First Place",
    description: "Led team development of a scalable software prototype under 36-hour sprint conditions, demonstrating rapid problem-solving and clean architecture."
  },
  {
    id: "insprano-hackathon",
    title: "Winner — InspraNo Hackathon",
    organization: "Government College of Engineering Kalahandi (GCEK)",
    year: "2024",
    badge: "Winner",
    description: "Built and delivered a creative, real-world software solution within strict time limits, winning accolades for teamwork and code execution."
  },
  {
    id: "nit-iot",
    title: "IoT Specialist Certification",
    organization: "NIT Rourkela",
    year: "2024",
    badge: "Specialist",
    description: "Hands-on engineering of IoT-based smart automation systems featuring multi-sensor data integration and real-time processing."
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "BCET Balasore (Biju Patnaik University of Technology - BPUT)",
    period: "2022 – 2026",
    grade: "CGPA: 8.5 / 10",
    details: "Focus on Data Structures & Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, Software Engineering, and Web Backends."
  },
  {
    degree: "Higher Secondary (+2 Science)",
    institution: "Council of Higher Secondary Education (CHSE Odisha)",
    period: "2020 – 2022",
    grade: "Score: 83.56%",
    details: "Core focus on Physics, Chemistry, Mathematics, and Computer Fundamentals."
  },
  {
    degree: "Matriculation (10th Standard)",
    institution: "Board of Secondary Education (BSE Odisha)",
    period: "2018 – 2020",
    grade: "Score: 81.65%",
    details: "Foundational academic excellence with high distinction in Mathematics and Science."
  }
];
