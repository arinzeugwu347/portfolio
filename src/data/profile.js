export const profile = Object.freeze({
  publicName: "Arinze Ugwu",
  fullName: "Arinze Ugwu Anslem",
  title: "Software Engineer",
  currentRole: "Full-Stack / Backend Engineer",
  currentCompany: "Nanocodes Programming Limited",
  experience: "5+ years",
  location: "Enugu, Nigeria",
  summary:
    "Software engineer with 5+ years of experience building web and backend systems, currently developing full-stack and backend products at Nanocodes Programming Limited. My work also spans technical QA, benchmark engineering, cybersecurity, fuzz-testing preparation, and smart-contract review.",
  resumePath: "/my-resume.pdf",
  resumeFileName: "Arinze_Ugwu_Anslem_Resume_2026.pdf",
  email: "arinzeugwu347@gmail.com",
  github: "https://github.com/arinzeugwu347",
  linkedIn: "https://www.linkedin.com/in/arinze-ugwu-854977244",
  education: Object.freeze({
    degree: "Bachelor of Engineering (B.Eng.), Electronic Engineering",
    institution: "University of Nigeria, Nsukka",
    result: "Second Class Upper Division",
  }),
});

export const experienceEntries = Object.freeze([
  Object.freeze({
    id: "nanocodes",
    dates: "February 2026 - Present",
    title: "Full-Stack / Backend Engineer",
    organization: "Nanocodes Programming Limited",
    meta: "Remote",
    summary:
      "Build and maintain backend services, REST and GraphQL APIs, database schemas, and React product features across the full delivery lifecycle.",
    highlights: Object.freeze([
      "Design and deliver TypeScript, Node.js, Express.js, NestJS, PostgreSQL, and MongoDB systems from requirements through deployment preparation.",
      "Implement JWT and RBAC authorization, request validation, structured errors, secure data flows, and third-party integrations.",
      "Improve query performance, data consistency, reliability, and maintainability through focused debugging, refactoring, and regression checks.",
    ]),
  }),
  Object.freeze({
    id: "mercor",
    dates: "April - July 2026",
    title: "Selected Software Engineering Evaluation Work",
    organization: "Mercor",
    meta: "Remote · Project-based portfolio",
    summary:
      "Reviewed repository-level software work, technical answers, search quality, prompts, rubrics, and command-line execution using reproducible evidence and project-specific quality frameworks.",
    highlights: Object.freeze([
      "Verified source changes, commands, configuration, APIs, Linux and CI workflows, test results, and final claims before writing concise quality rationales.",
      "Completed 20 approved repository tasks and received top-writer recognition, including several C, C++, and C# evaluations accepted on first submission.",
      "Progressed into reviewer responsibilities, approving defensible work and returning submissions only when material corrections were required.",
    ]),
  }),
  Object.freeze({
    id: "afterquery",
    dates: "2026",
    title: "Selected Benchmark Engineering & Repository QA Work",
    organization: "AfterQuery · Projects Pluto and Fenrir",
    meta: "Remote · Project engagements ended",
    summary:
      "Authored and validated software-engineering benchmarks while assessing Rust, C/C++, Python, and TypeScript repositories for reproducibility, input surfaces, and security-focused testing readiness.",
    highlights: Object.freeze([
      "Completed a 10-task production batch containing 144 deterministic tests, with an Oracle mean of 1.000 and no-op baseline mean of 0.000.",
      "Built clean-clone and offline validation workflows covering state, ordering, persistence, idempotency, error handling, and non-mutation requirements.",
      "Prepared or assessed fuzz harnesses, seed inputs, cargo-fuzz environments, crash reproduction, and triage workflows.",
    ]),
  }),
  Object.freeze({
    id: "security",
    dates: "September 2024 - 2026",
    title: "Selected Security & API Review Work",
    organization: "Independent and project-based contracts",
    meta: "Remote",
    summary:
      "Worked across backend and API testing, adversarial system review, and smart-contract auditing with evidence-led reproduction and remediation guidance.",
    highlights: Object.freeze([
      "Applied OWASP Top 10 principles to authentication, authorization, validation, data handling, configuration, and response-integrity testing.",
      "Reviewed six Solidity contracts totaling approximately 1,115 lines and documented 35 security, correctness, and maintainability findings.",
      "Used Hardhat, Foundry, Slither, structured API requests, logs, payload analysis, and realistic threat scenarios.",
    ]),
  }),
  Object.freeze({
    id: "aestart",
    dates: "July 2023 - February 2024",
    title: "Full-Stack Web Developer",
    organization: "AESTART",
    meta: "Remote",
    summary:
      "Developed and maintained an e-commerce platform spanning catalog, inventory, cart, checkout, content, authentication, sessions, and customer-account flows.",
    highlights: Object.freeze([
      "Integrated APIs and dynamic data flows across the frontend and backend while diagnosing application, data, integration, and usability defects.",
      "Improved responsive behavior, performance, SEO, reliability, and usability while contributing to architecture and feature planning.",
    ]),
  }),
  Object.freeze({
    id: "genesys",
    dates: "February 2022 - June 2023",
    title: "Frontend Web Developer",
    organization: "Genesys Tech Hub",
    meta: "Remote",
    summary:
      "Built responsive, data-driven interfaces with third-party APIs, authentication flows, client-side state, and collaborative product iteration.",
    highlights: Object.freeze([
      "Tested browser behavior, responsive layouts, usability, and performance while delivering production-facing features.",
    ]),
  }),
  Object.freeze({
    id: "foundations",
    dates: "December 2019 - December 2021",
    title: "Selected Early-Career Engineering Experience",
    organization: "ZURI · Andela - Gauteng Program · Freelance",
    meta: "Remote",
    summary:
      "Built Node.js, Express.js, PHP, MongoDB, and MySQL applications; completed backend and AWS internships; and developed practical foundations in APIs, authentication, validation, cloud services, debugging, and Git.",
    highlights: Object.freeze([]),
  }),
]);

export const skillGroups = Object.freeze([
  Object.freeze({
    label: "Frontend systems",
    skills: Object.freeze([
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive design",
      "Browser testing",
    ]),
  }),
  Object.freeze({
    label: "Backend & data",
    skills: Object.freeze([
      "Node.js",
      "Express.js",
      "NestJS",
      "REST",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Drizzle ORM",
      "JWT & RBAC",
    ]),
  }),
  Object.freeze({
    label: "Languages & systems",
    skills: Object.freeze([
      "Python",
      "PHP (5+ years)",
      "SQL",
      "Bash",
      "C++",
      "C & C# evaluation",
      "Rust workflows",
      "Solidity",
    ]),
  }),
  Object.freeze({
    label: "Testing & infrastructure",
    skills: Object.freeze([
      "pytest",
      "Unit, API & integration testing",
      "Deterministic verifiers",
      "Regression checks",
      "Docker & Docker Compose",
      "Linux & WSL",
      "AWS",
      "Git & GitHub",
      "Root-cause analysis",
    ]),
  }),
  Object.freeze({
    label: "Security & documentation",
    skills: Object.freeze([
      "OWASP Top 10",
      "API & access-control testing",
      "cargo-fuzz",
      "Malformed-input testing",
      "Hardhat",
      "Foundry",
      "Slither",
      "Audit findings & QC notes",
      "Technical reporting",
    ]),
  }),
]);

export const experienceProof = Object.freeze([
  Object.freeze({ value: "5+", label: "years building web and backend systems" }),
  Object.freeze({ value: "144", label: "tests in a validated benchmark batch" }),
  Object.freeze({ value: "35", label: "documented smart-contract findings" }),
]);
