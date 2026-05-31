export const profile = {
  name: "Abhishek Bhat",
  role: "Full Stack Developer",
  tagline: "I build scalable backends and clean, fast web apps.",
};

export const highlights = [
  { label: "Focus", value: "Backend & scalable systems" },
  { label: "Stack", value: "Go · TypeScript · React" },
  { label: "Experience", value: "Founding engineer" },
  { label: "Status", value: "Open to opportunities" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer who started out as a founding engineer — building and scaling backend architecture from the ground up. I'm most at home designing systems that stay fast and reliable as they grow.",
    "My range runs from cloud infrastructure and DevOps pipelines to polished React and Next.js frontends. I care about clean abstractions, sensible trade-offs, and shipping work that holds up in production.",
  ],
};

export const experiences = [
  {
    company: "Lyzr AI",
    role: "Software Developer",
    period: "Feb 2025 — Present",
    location: "Bangalore, India",
    current: true,
    bullets: [
      "Owned agentic-framework observability end-to-end, cutting agent debugging time 60% with OpenTelemetry distributed tracing and a ClickHouse ingestion pipeline for real-time token and latency analytics.",
      "Led a cloud-agnostic abstraction enabling AWS + Azure deployment with zero application changes, shipped as the open-source lyzr-cloudrift package on PyPI.",
      "Built usage metering and RBAC with per-tenant LLM token and invocation tracking to power cost attribution, monetization, and enterprise access control.",
      "Federated enterprise identity through a SAML/OIDC brokering layer and enabled authenticated tool-calling via unified SSO and OAuth token brokering.",
      "Prototyped AI agents and RAG solutions for enterprise PoCs, contributing to $1M+ in closed multi-year deployments.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "OpenTelemetry",
      "ClickHouse",
      "AWS",
      "Azure",
      "Redis",
    ],
  },
  {
    company: "FWC Inc",
    role: "Founding Engineer",
    period: "May 2023 — Sep 2024",
    location: "Bangalore, India",
    bullets: [
      "Architected the platform's core backend with Node.js and MongoDB, owning service reliability and schema design.",
      "Cut notification latency under 100ms with a real-time WebSocket + Redis pub/sub system.",
      "Reduced incident response time 40% by adding observability with Prometheus, Grafana, and Loki.",
      "Automated CI/CD with GitHub Actions and AWS, cutting deploys from 1 hour to 15 minutes.",
      "Improved API response times 30% through caching, connection pooling, and schema optimization.",
    ],
    tech: ["Node.js", "MongoDB", "Redis", "WebSockets", "AWS", "GitHub Actions"],
  },
  {
    company: "Technolab Softwares",
    role: "Machine Learning Engineer Intern",
    period: "",
    location: "",
    bullets: [
      "Built a dataset of 10,000+ Spotify playlists through API-based web scraping.",
      "Processed and analyzed the data with cleaning and feature engineering to surface insights.",
      "Implemented cosine-similarity and collaborative-filtering algorithms for a playlist recommendation system.",
    ],
    tech: ["Python", "Pandas", "scikit-learn"],
  },
  {
    company: "Prakash Bharati",
    role: "Webmaster Intern",
    period: "",
    location: "",
    bullets: [
      "Developed and designed the website's frontend and backend for a user-friendly, robust interface.",
      "Managed content updates and maintenance, creating and editing pages to keep information current.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bhat-abhishek",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhatabhishek/",
    icon: "linkedin",
  },
  {
    label: "Medium",
    href: "https://medium.com/@bhatabhishek-ylp",
    icon: "medium",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Abhi-Bhat18/",
    icon: "leetcode",
  },
] as const;

export const projects = [
  {
    title: "Campster",
    description:
      "Open source marketing campaign tool built for cross functional teams",
    link: "mailman-nine.vercel.app",
  },
  {
    title: "Logwiz",
    description:
      "Javascript based logging library for frontend web frameworks for ReactJs, NextJs and etc. Supports batch update and failover mechanism",
    link: "https://www.npmjs.com/package/logwiz",
  },
  {
    title: "Juke Stream",
    description:
      "A simple implementation of browser for web scrapping which supports proxying",
    link: "https://github.com/bhat-abhishek/Juke-Stream",
  },
  // {
  //   title: "Verilog Compiler",
  //   description:
  //     "Browser based compiler for subset of Verilog( Hardware Description Language), which utilizes Web Assembly",
  //   link: "/",
  // },
  {
    title: "Chatting Application",
    description:
      "Highly scalable chatting application with MicroServices architecture",
    link: "https://github.com/bhat-abhishek/chat-app",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio websie",
    link: "https://abhishekbhat.com",
  },
];
