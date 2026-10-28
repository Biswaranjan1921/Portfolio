export const personalDetails = {
  name: "Biswaranjan Panda",
  title: "Java Developer / Software Developer",
  tagline: "Building Reliable Software Solutions, Scalable Backends, REST APIs & High-Impact Systems",
  location: "Balasore / Odisha, India",
  email: "biswaranjanpanda101@gmail.com",
  phone: "+91-9861944502",
  github: "https://github.com/Biswaranjan1921",
  linkedin: "https://linkedin.com/in/biswaranjanpanda",
  status: "Open for Java Developer / Software Developer Roles",
  cgpa: "8.5 / 10",
  college: "BCET Balasore (BPUT)",
  degree: "B.Tech in Computer Science & Engineering (2022 - 2026)",
  summary: `B.Tech Computer Science graduate with strong foundations in Java, Object-Oriented Programming, Data Structures & Algorithms, SQL, Spring Boot, REST APIs, JDBC, and Oracle Database. Hands-on experience developing backend and full-stack applications through academic and personal projects, along with practical exposure to machine learning during a DRDO research internship. Demonstrated problem-solving and teamwork skills through multiple hackathon and robotics competition wins. Seeking an entry-level Java Developer / Software Developer role to apply technical skills and contribute to building reliable software solutions.`,
  bio: [
    "I am an entry-level Java Developer and Software Developer with strong foundations in Java, Object-Oriented Programming, Data Structures & Algorithms, SQL, Spring Boot, REST APIs, JDBC, and Oracle Database.",
    "My hands-on experience includes developing full-stack and backend applications through academic and personal projects, alongside practical exposure to machine learning during my research internship at DRDO Balasore.",
    "I have proven problem-solving, rapid prototyping, and teamwork capabilities demonstrated through multiple prestigious hackathon and robotics competition championships across IIT Bhubaneswar, NIT Rourkela, BPUT, and GCEK."
  ]
};

export const stats = [
  { label: "B.Tech CGPA", value: "8.5", subtext: "BCET Balasore (BPUT)" },
  { label: "Competitions Won", value: "5", subtext: "Championships & 1st Places" },
  { label: "Featured Projects", value: "3+", subtext: "Full Stack, Java & ML" },
  { label: "Forecast Accuracy", value: "85%", subtext: "DRDO Rainfall ML (+18% boost)" },
];

export const experiences = [
  {
    id: "drdo",
    role: "Research Intern",
    company: "DRDO, Balasore",
    location: "Balasore, Odisha",
    period: "May 2025 – Jun 2025",
    type: "Research Internship",
    description: "Built a rainfall prediction system using regression ML models during research internship, delivering significant forecast precision improvements.",
    highlights: [
      "Built a rainfall prediction system using regression ML models; improved forecast accuracy by 18%.",
      "Engineered data pipelines analyzing 10,000+ data points with 85% predictive accuracy.",
      "Collaborated on meteorological data transformation, regression modeling, and performance evaluation."
    ],
    skills: ["Machine Learning", "Regression Models", "React", "JavaScript", "Python", "Data Analysis"]
  }
];

export const projects = [
  {
    id: "drop-ml",
    title: "DROP — Rainfall Prediction System",
    category: "Web Development · React",
    featured: true,
    tagline: "Interactive React dashboard for visualising rainfall data and ML predictions.",
    description: "Developed an interactive React dashboard for visualising rainfall data and ML predictions, supporting analysis of 10,000+ data points with 85% prediction accuracy.",
    details: [
      "Developed an interactive React dashboard for visualising rainfall data and ML predictions.",
      "Supporting analysis of 10,000+ data points with 85% prediction accuracy.",
      "Built responsive UI visualizations with React, HTML, CSS, and JavaScript connected to regression ML models."
    ],
    tech: ["React", "HTML5", "CSS3", "JavaScript", "Machine Learning", "Regression Models"],
    githubLink: "https://github.com/Biswaranjan1921",
    demoLink: "#",
    metrics: "85% Prediction Accuracy · 10,000+ Data Points"
  },
  {
    id: "student-result",
    title: "Student Result Management System",
    category: "Java & Oracle SQL",
    featured: true,
    tagline: "Full CRUD web app for student records, courses, and grades with role-based login.",
    description: "Full CRUD web application for managing student records, courses, and grades with secure role-based login (Admin/Student).",
    details: [
      "Full CRUD web app for student records, courses, and grades — role-based login (Admin/Student).",
      "Oracle DB backend via JDBC; HTML/CSS frontend with session-based authentication.",
      "Engineered relational database schema and optimized SQL queries for high reliability."
    ],
    tech: ["Java", "JDBC", "Oracle SQL", "HTML/CSS", "Session Authentication"],
    githubLink: "https://github.com/Biswaranjan1921",
    demoLink: "#",
    metrics: "Role-Based Login (Admin/Student) · Oracle JDBC"
  },
  {
    id: "smart-hostel",
    title: "Smart Hostel Management System",
    category: "Java & Full Stack",
    featured: true,
    tagline: "Web-based automation system for hostel operations with QR-based meal verification.",
    description: "Web-based automation system for hostel operations: room allocation, fee payment, attendance, complaints, and visitor management.",
    details: [
      "Web-based automation system for hostel operations: room allocation, fee payment, attendance, complaints, and visitor management.",
      "QR-based meal verification; streamlined administrative processes and improved student–Warden communication through a centralised platform.",
      "Automated hostel administrative workflows to ensure transparency, real-time tracking, and zero food wastage."
    ],
    tech: ["Java", "HTML", "CSS", "QR Verification", "Hostel Operations"],
    githubLink: "https://github.com/Biswaranjan1921",
    demoLink: "#",
    metrics: "QR Meal Verification · Centralised Platform"
  }
];

export const skillCategories = [
  {
    name: "Languages & Core",
    icon: "Code2",
    skills: [
      { name: "Java (OOP, Collections, Multithreading, Exception Handling)", level: 95 },
      { name: "SQL", level: 90 },
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "Object-Oriented Programming (OOP)", level: 92 }
    ]
  },
  {
    name: "Web & Backend",
    icon: "Database",
    skills: [
      { name: "Spring Boot & REST APIs", level: 88 },
      { name: "JDBC", level: 90 },
      { name: "Oracle DB", level: 88 },
      { name: "Firebase Realtime DB / Firestore", level: 82 },
      { name: "HTML5, CSS3, JavaScript", level: 86 }
    ]
  },
  {
    name: "Build Tools, Testing & Quality",
    icon: "ShieldCheck",
    skills: [
      { name: "Maven & Gradle", level: 85 },
      { name: "JUnit & Mockito", level: 84 },
      { name: "JMeter Performance Testing", level: 78 },
      { name: "SonarQube (Code Quality)", level: 82 },
      { name: "SLF4J & ELK Stack (Logging & Monitoring)", level: 80 }
    ]
  },
  {
    name: "CI/CD, Tools & IDEs",
    icon: "Wrench",
    skills: [
      { name: "Docker & Jenkins (CI/CD Tools)", level: 80 },
      { name: "Git & GitHub", level: 92 },
      { name: "Postman API Testing", level: 90 },
      { name: "VS Code, Eclipse, STS", level: 92 }
    ]
  }
];

export const achievements = [
  {
    id: "iit-robotics",
    title: "1st Place — Line Following Robot",
    organization: "IIT Bhubaneswar",
    year: "Competition Winner",
    badge: "1st Place",
    description: "Designed, built, and programmed an autonomous Line Following Robot securing 1st Place at IIT Bhubaneswar."
  },
  {
    id: "nit-iot",
    title: "IoT Specialist",
    organization: "NIT Rourkela",
    year: "Specialist",
    badge: "IoT Specialist",
    description: "Built IoT solutions using sensors and automation, certified by NIT Rourkela."
  },
  {
    id: "bput-hackathon",
    title: "Winner — BPUT Hackathon 2025",
    organization: "BPUT",
    year: "2025",
    badge: "Winner",
    description: "Led a scalable solution, demonstrating strong problem-solving and rapid prototyping skills."
  },
  {
    id: "insprano-hackathon",
    title: "Winner — InspraNo Hackathon, GCEK",
    organization: "GCEK",
    year: "Winner",
    badge: "Winner",
    description: "Developed and delivered an innovative real-world solution under tight deadlines, demonstrating strong teamwork and technical expertise."
  },
  {
    id: "bput-tech-carnival",
    title: "Winner — BPUT Tech Carnival 2025–26",
    organization: "BPUT",
    year: "2025 – 2026",
    badge: "Winner",
    description: "Secured top position by developing an innovative, high-impact solution under competitive conditions."
  }
];

export const education = [
  {
    degree: "B.Tech in CSE",
    institution: "BCET Balasore (BPUT)",
    period: "2022 – 2026",
    grade: "CGPA: 8.5 / 10",
    details: "Foundations in Java, Object-Oriented Programming, Data Structures & Algorithms, SQL, Operating Systems, Database Management Systems, and Software Engineering."
  },
  {
    degree: "Higher Secondary (+2 Science)",
    institution: "CHSE Odisha",
    period: "2020 – 2022",
    grade: "Score: 83.56%",
    details: "Focus on Physics, Chemistry, Mathematics, and Computer Fundamentals."
  },
  {
    degree: "Matriculation (10th)",
    institution: "BSE Odisha",
    period: "2018 – 2020",
    grade: "Score: 81.65%",
    details: "Foundational secondary education with distinction in Mathematics and Science."
  }
];
