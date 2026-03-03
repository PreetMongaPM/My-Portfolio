// ─── Portfolio Data ─────────────────────────────────────────────────────
export const NAV_LINKS = [
  "About",
  "Skills",
  "Coding",
  "Resume",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

// ─── Personal ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: { first: "Preet", last: "Monga" },
  title: "Full Stack Developer",
  tagline:
    "I craft precise, performant interfaces people love using. 6 years shipping production software at Stripe, Notion, and Vercel.",
  email: "preetmongapm1@gmail.com",
  status: "Available for hire",
  resumeUrl: "/PreetMonga_Resume.pdf", // put your PDF in /public
  socials: {
    github: "https://github.com/preetmongapm",
    linkedin: "https://linkedin.com/in/preetmongapm",
    twitter: "https://twitter.com/preetmongapm",
  },
};

// ─── Coding Profiles ─────────────────────────────────────────────────────────
// Replace usernames with your own. Set to null to hide a platform.
export const CODING_PROFILES = {
  codolio: "preetmongapm",
  github: "preetmongapm",
  leetcode: "preetmongapm",
  codeforces: "",
  codechef: "preet__monga",
};

// ─── Skills ──────────────────────────────────────────────────────────────────
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
  ],
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Full Stack Intern",
    company: "Clerisy Solutions",
    period: "Dec 2025— Present",
    bullets: [
      "Led redesign of dashboard UI serving 2M+ merchants, reducing task completion time by 34%.",
      "Built component library adopted across 6 product teams, eliminating design inconsistencies.",
      "Mentored 4 junior engineers and introduced team-wide TypeScript migration.",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Synthr",
    desc: "AI-powered design-to-code tool that converts Figma frames into production React components with 90% accuracy.",
    stack: ["React", "OpenAI", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Pulse Dashboard",
    desc: "Real-time analytics dashboard for SaaS metrics with 50+ chart types, dark mode, and CSV export.",
    stack: ["Next.js", "D3.js", "WebSockets", "Redis"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Vaultify",
    desc: "End-to-end encrypted password manager with biometric auth and cross-device sync.",
    stack: ["React Native", "AES-256", "Supabase"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Threadline",
    desc: "Minimalist writing app that turns Twitter threads into long-form blog posts using LLMs.",
    stack: ["Next.js", "Anthropic API", "Prisma"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
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

// ─── Resume Highlights ────────────────────────────────────────────────────────
export const RESUME_HIGHLIGHTS = [
  { label: "Contest Rating - Top 7% Leetcode Worldwide", value: "1798" },
  { label: "DSA Questions", value: "1000+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Engineers Mentored", value: "8" },
];

export const RESUME_BIO = `Senior frontend engineer with 6 years of experience building high-scale products at Stripe, Notion, and Vercel. Specialized in React ecosystems, design systems, and performance optimization. Passionate about developer experience and building tools that multiply team output.`;
