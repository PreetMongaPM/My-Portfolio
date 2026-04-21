export const NAV_LINKS = [
  "About",
  "Skills",
  "Coding",
  "GitHub",
  "Resume",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

export const PERSONAL = {
  name: { first: "Preet", last: "Monga" },
  title: "Full Stack Developer",
  tagline:
    "Building reliable web applications and continuously leveling up as a full-stack engineer..",
  email: "preetmongapm1@gmail.com",
  status: "Available for hire",
  resumeUrl: "/Preet_Monga_Resume.pdf",
  socials: {
    github: "https://github.com/preetmongapm",
    linkedin: "https://linkedin.com/in/preetmongapm",
  },
};

export const CODING_PROFILES = {
  codolio: "preetmongapm",
  github: "preetmongapm",
  leetcode: "preetmongapm",
  codeforces: "preetmongapm",
  codechef: "preet_monga",
  geeksforgeeks: "preet_monga_pm",
};

export const SKILLS = {
  Languages: [
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "C++", icon: "c++", color: "#6a9dd3" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css", color: "#1572B6" },
    { name: "SQL", icon: "postgresql", color: "#4169E1" },
  ],
  Frameworks: [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Next.js", icon: "nextdotjs", color: "#ffffff" },
    { name: "Node.js", icon: "nodedotjs", color: "#339933" },
    { name: "Express", icon: "express", color: "#ffffff" },
    { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4" },
  ],
  Tools: [
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
    { name: "Postman", icon: "postman", color: "#FF6C37" },
  ],
};

export const EXPERIENCE = [
  {
    role: "Software Engineer (MERN Stack)",
    company: "Clerisy Solutions",
    period: "March 2026— Present",
    bullets: [
      "Promoted from MERN Stack Trainee to Software Engineer based on performance and consistent contributions.",
      "Build and deliver features for a pharma research platform with complex workflows using React",
      "Integrated Ketcher (EPAM) for chemical structure editing within a scalable React architecture.",
      "Integrated and optimized Mol* (MolStar) for 3D molecular visualization",
      "Develop backend services using Node.js and Express.",
      "Design and consume REST APIs with a focus on scalability and clean architecture.",
      "Work with Docker, Git, and Postman to ensure consistent development and deployment workflows.",
    ],
  },
  {
    role: "SDE Intern (MERN Stack)",
    company: "Clerisy Solutions",
    period: "Dec 2025— March 2026",
    bullets: [
      "Contributed to a production-scale MERN codebase, building features and fixing bugs.",
      "Developed REST APIs and React components in a full-stack environment.",
      "Developed reusable components and maintained stable backend integrations in a modular codebase.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Trackify",
    desc: "Built a full-stack SaaS admin dashboard using React, Node.js, Express, and MongoDB with JWT authentication and RBAC. Enabled real-time updates using WebSockets.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.io", "Recharts"],
    liveUrl: "https://trackifypm.vercel.app",
    repoUrl: "https://github.com/preetmongapm/trackify",
  },
  {
    title: "Web App",
    desc: "Built a real-time weather forecasting platform with optimized API integration and a clean, responsive UI.",
    stack: ["JavaScript", "HTML", "CSS", "REST API"],
    liveUrl: "https://weather-app-preet-monga.netlify.app/",
    repoUrl: "https://github.com/PreetMongaPM/WeatherApp",
  },
];

export const EDUCATION = [
  {
    degree: "B.E. Computer Science with DevOps",
    school: "Chandigarh University",
    year: "2022-2026",
    note: "9.15 CGPA - Rank 1 in Department",
  },
  {
    degree: "JEE MAIN",
    school: "Maths - 99 Percentile",
    year: "2022",
    note: "95 Percentile",
  },
];

export const RESUME_HIGHLIGHTS = [
  { label: "Contest Rating - Top 7% Leetcode Worldwide", value: "1805" },
  { label: "DSA Questions", value: "1100+" },
];

export const RESUME_BIO = `Backend / MERN-focused Software Engineer with strong foundations in Data Structures, System Design fundamentals, and scalable web architecture. Experienced in building production-ready applications using Node.js, React, and REST APIs, with hands-on exposure to Docker, authentication systems, and performance-focused development. Passionate about solving complex problems and building reliable systems.`;
