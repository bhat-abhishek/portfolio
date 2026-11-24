export const profile = {
  name: "Abhishek Bhat",
  role: "Senior Engineer",
  tagline:
    "I build production infrastructure for agentic AI — agent runtime, observability, cloud-agnostic infra, identity, and multi-tenancy.",
};

export const highlights = [
  { label: "Focus", value: "Agent runtime & platform infra" },
  { label: "Stack", value: "Python · TypeScript · Go" },
  { label: "Scale", value: "10M+ agent runs / month traced" },
  { label: "Status", value: "Open to opportunities" },
];

export const terminalMeta = { port: "UART0 · 115200 baud", status: "Online" };

export const terminalScript = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "abhishek, senior core platform engineer @ lyzr ai" },
  { kind: "cmd", text: "cat focus.txt" },
  { kind: "out", text: "agent runtime · observability · multi-tenancy" },
  { kind: "cmd", text: "deploy --cloud aws,azure,gcp" },
  { kind: "ok", text: "20+ environments, zero app code changes" },
] as const;

export const about = {
  paragraphs: [
    "I'm a platform engineer building the production backbone of an enterprise agentic AI platform at Lyzr AI — the runtime every agent executes on, the tracing that makes it observable, and the identity and tenancy layers that make it enterprise-ready.",
    "I started out as a founding engineer, building backends from the ground up. Today I spend my time on inference loops, LLM gateways, OpenTelemetry pipelines, and cloud-agnostic abstractions — clean interfaces, sensible trade-offs, and systems that hold up at scale.",
  ],
};

export const experiences = [
  {
    company: "Lyzr AI",
    role: "Senior Core Platform Engineer",
    period: "Feb 2025 — Present",
    location: "Bangalore, India",
    current: true,
    bullets: [
      "Designed and shipped the agent runtime every platform agent executes on — an inference loop wiring RAG retrieval, a tool gateway for tool/MCP registration, schema validation and execution, and a pluggable LLM gateway that swaps providers without agent code changes.",
      "Cut token usage and time-to-first-token on multi-turn runs via prompt caching in the runtime's LLM layer, reusing stable system prompts and tool schemas.",
      "Shipped the Lyzr MCP server, letting developers create, invoke, and interact with agents from Claude Code, Codex, and any MCP client.",
      "Owned end-to-end agent observability — tracing 10M+ agent invocations a month on SaaS with OpenTelemetry GenAI-conformant spans and a ClickHouse analytics pipeline for tokens, P95/P99 latency, and per-agent cost, cutting debugging time 60%.",
      "Led the cloud-agnostic abstraction running 20+ environments across AWS, Azure, and GCP with zero application code changes, released as the open-source lyzr-cloudrift package on PyPI.",
      "Built usage metering and RBAC with per-tenant LLM token and invocation tracking to power cost attribution, monetization, and enterprise access control.",
      "Federated enterprise identity providers via a SAML/OIDC brokering layer and enabled authenticated agent tool calls through unified SSO and OAuth token brokering.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "MCP",
      "OpenTelemetry",
      "ClickHouse",
      "AWS",
      "Azure",
      "GCP",
      "Redis",
    ],
  },
  {
    company: "FWC Inc",
    role: "Founding Engineer",
    period: "May 2023 — Sep 2024",
    location: "Bangalore, India",
    bullets: [
      "Architected the platform's end-to-end backend with Node.js and MongoDB, owning service reliability and schema design for the core APIs.",
      "Cut notification latency under 100ms with real-time WebSockets and Redis Pub/Sub.",
      "Reduced incident response time 40% with Prometheus, Grafana, and Loki monitoring for queries, API performance, and memory.",
      "Automated CI/CD with GitHub Actions and AWS, cutting deploys from 1 hour to 15 minutes.",
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
    hidden: true,
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

export const skills = [
  { name: "Python", icon: "python" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Go", icon: "go" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Kafka", icon: "kafka" },
  { name: "Redis", icon: "redis" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "ClickHouse", icon: "clickhouse" },
  { name: "OpenTelemetry", icon: "opentelemetry" },
  { name: "Docker", icon: "docker" },
  { name: "Terraform", icon: "terraform" },
] as const;

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
];

// Section headings. `refdes` is printed like a PCB silkscreen reference designator.
export const sections = {
  about: { refdes: "U1", label: "About", title: "A bit about me" },
  experience: { refdes: "U2", label: "Career", title: "Experience" },
  projects: { refdes: "U3", label: "Work", title: "Selected projects" },
  skills: { refdes: "U4", label: "Toolkit", title: "Tech I work with" },
  writing: { refdes: "U5", label: "Writing", title: "Latest writing" },
  blog: { refdes: "U5", label: "Writing", title: "Thoughts & notes" },
  contact: { refdes: "J1", label: "I/O", title: "Get in touch" },
} as const;

export type SectionKey = keyof typeof sections;

// Hero chip: the platform drawn as a package with a labelled pinout.
export const chip = {
  part: "AB-01",
  name: "CORE PLATFORM",
  marking: "LYZR · BLR · 2026",
  pins: {
    left: ["RUNTIME", "LLM_GW", "TOOL_GW", "MCP"],
    right: ["OTEL", "METER", "RBAC", "SSO"],
    top: ["AWS", "AZURE", "GCP"],
  },
};
