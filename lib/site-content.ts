export const site = {
  name: "MohammadAli Mahboobi",
  shortName: "MohammadAli",
  title: "Software Engineer",
  availability: "SYSTEM ONLINE // AVAILABLE FOR HIRE",
  tagline:
    "Software engineer with deep Laravel experience, shipping production web apps and APIs end to end. Also working with Node.js on newer products. High-concurrency systems at national scale.",
  projectsIntro:
    "Highest-impact work first. Live products where a public URL exists.",
  activeProjectCount: 12,
  resumePath: "/resume.pdf",
  resumeLabel: "resume.pdf",
  phone: "+09046731047",
  email: "mahboobimohamadali@gmail.com",
  socials: {
    github: "https://github.com/themo1224",
    linkedin: "https://www.linkedin.com/in/mohamadali-mahboobi",
    website: "https://mahboobi.ir",
  },
} as const;

export const projects = [
  {
    title: "National campus card, payment & inquiry",
    description:
      "Confidential. High-concurrency card issuance, fee payment, document review, and inquiry APIs for Islamic Azad University. Multi-role ops, bank gateway, load-balanced production.",
    tags: ["Laravel", "Payments", "JWT", "Redis", "Docker"],
    image: "/project-placeholder-1.jpg",
    link: "",
    repo: "",
  },
  {
    title: "BNPL & installment credit platform",
    description:
      "Confidential. Buy-now-pay-later product: credit, checkout, and repayment flows. Production fintech, not a demo.",
    tags: ["Laravel", "Fintech", "Payments", "React"],
    image: "/project-placeholder-2.jpg",
    link: "",
    repo: "",
  },
  {
    title: "Organizational budget & credit allocation",
    description:
      "Confidential. Capital and operating credit pipelines across a financial year: plans, allocations, receipts, reporting, year-scoped auth.",
    tags: ["Laravel", "REST", "RBAC", "MariaDB"],
    image: "/project-placeholder-3.jpg",
    link: "",
    repo: "",
  },
  {
    title: "Ditamin",
    description:
      "Live Persian RTL PWA. Offline UI, OTP. Node.js API (newer stack for me).",
    tags: ["PWA", "React", "Node.js", "Fastify", "PostgreSQL"],
    image: "/project-placeholder-1.jpg",
    link: "https://ditamin.ir/",
    repo: "",
  },
  {
    title: "ReezAmooz",
    description:
      "Multi-org learning panel: staged courses, quizzes, users, rewards.",
    tags: ["React", "TypeScript", "Laravel", "S3"],
    image: "/project-placeholder-2.jpg",
    link: "https://reezamooz.ir/",
    repo: "",
  },
  {
    title: "Zaanin",
    description: "Merchant SMS payment links, settlements, gateway setup.",
    tags: ["React", "Laravel", "JWT", "Redis"],
    image: "/project-placeholder-3.jpg",
    link: "https://zaanin.ir",
    repo: "",
  },
] as const;

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "PWA", "Vite", "Tailwind", "Zustand"],
  },
  {
    category: "Server",
    items: ["Laravel", "PHP", "REST APIs", "MySQL", "Redis", "Node.js"],
  },
  {
    category: "Tools",
    items: ["Docker", "GitLab CI", "JWT", "S3", "PHPUnit"],
  },
] as const;

export const experience = [
  {
    company: "Zhikan",
    role: "Software Engineer",
    period: "2025 – present",
    summary:
      "Fintech. National campus-card, payment, and inquiry platform for Islamic Azad University (high concurrency, load-balanced APIs). BNPL / installment credit. Organizational budget and credit allocation. Zaanin payment links.",
  },
  {
    company: "Plannet",
    role: "Software Engineer",
    period: "Dec 2025 – present",
    summary:
      "Insurance and health. ReezAmooz multi-org learning platform. Ditamin (ditamin.ir) — vitamin D PWA with Node API, live in production.",
  },
  {
    company: "Spad Server",
    role: "Software Engineer",
    period: "Apr 2024 – Jan 2025",
    summary:
      "Marketplaces and ops tools: APIs, admin, caching, client integration.",
  },
  {
    company: "Geev Server",
    role: "Software Engineer",
    period: "Apr 2023 – Apr 2024",
    summary:
      "Intern to engineer. APIs and data access, shipped with the product team.",
  },
] as const;
