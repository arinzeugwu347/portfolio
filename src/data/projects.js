import ecommerceImage from "../assets/images/yourstore.webp";
import eliteGlobalImage from "../assets/images/eliteglobal.webp";
import fieldNoteImage from "../assets/images/fieldnote-triage.png";
import solidFmImage from "../assets/images/solid.webp";
import taskBoardImage from "../assets/images/taskboard.webp";
import weatherAppImage from "../assets/images/weatherapp.webp";

export const projects = [
  {
    id: "fieldnote-triage",
    title: "FieldNote Triage",
    eyebrow: "Local-first research operations",
    description:
      "A privacy-conscious workspace for turning raw field observations into dependable research records, with focused triage, duplicate review, atomic history, and portable data workflows.",
    liveUrl: "https://fieldnote-triage.vercel.app/",
    sourceUrl: null,
    image: fieldNoteImage,
    imageAlt:
      "FieldNote Triage overview showing the product introduction, queue metrics, and browser-save panel.",
    imageWidth: 1425,
    imageHeight: 990,
    techStack: [
      "React 18",
      "TypeScript",
      "Vite 6",
      "Vitest",
      "Testing Library",
      "Web Storage API",
      "ESLint",
      "Vercel",
    ],
    proofPoints: [
      "570 tests across 34 files",
      "Atomic 20-step history",
      "Versioned local persistence",
    ],
    featured: true,
  },
  {
    id: "task-board",
    title: "Task Board",
    eyebrow: "Full-stack workflow platform",
    description:
      "A responsive Kanban workspace with fluid drag-and-drop, authenticated accounts, persistent boards, rich task details, and synchronized full-stack state.",
    liveUrl: "https://ari-task-board-app.vercel.app/",
    sourceUrl: "https://github.com/arinzeugwu347/task-board-app",
    image: taskBoardImage,
    imageAlt:
      "Task Board application showing a multi-column Kanban workflow with task cards.",
    imageWidth: 1600,
    imageHeight: 859,
    techStack: [
      "React 19",
      "Vite 7",
      "Tailwind CSS 3",
      "dnd-kit",
      "React Router 7",
      "Express",
      "MongoDB",
      "JWT",
    ],
    featured: true,
  },
  {
    id: "ecommerce-web-app",
    title: "E-Commerce Web App",
    eyebrow: "Production commerce experience",
    description:
      "A full-stack storefront with product discovery, secure customer accounts, cart and checkout flows, Stripe payments, and practical administration tools.",
    liveUrl: "https://your-store-6yoa.vercel.app/",
    sourceUrl: "https://github.com/arinzeugwu347/ecommerce-client",
    image: ecommerceImage,
    imageAlt:
      "E-Commerce Web App storefront displaying products and shopping controls.",
    imageWidth: 1600,
    imageHeight: 909,
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "React Hook Form",
      "Zustand",
      "Stripe",
    ],
    featured: true,
  },
  {
    id: "solid-fm-football",
    title: "Solid FM 5-Aside Football",
    eyebrow: "Real-time sports operations",
    description:
      "A full-stack match and team management platform with live score updates, structured team workflows, media uploads, and resilient form validation.",
    liveUrl: "https://codejudesolidfm-frontend.vercel.app/",
    sourceUrl: null,
    image: solidFmImage,
    imageAlt:
      "Solid FM football application showing match information and team management controls.",
    imageWidth: 1600,
    imageHeight: 861,
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express 5",
      "MongoDB",
      "Socket.IO",
      "Zustand",
      "Jest",
    ],
    featured: true,
  },
  {
    id: "elite-global-construction",
    title: "Elite Global Construction",
    eyebrow: "Construction business platform",
    description:
      "A polished construction company platform that brings service discovery, project presentation, secure administration, and customer enquiries into one responsive experience.",
    liveUrl: "https://eliteglobalconstruction.vercel.app/",
    sourceUrl: "https://github.com/arinzeugwu347/eliteglobalconstruction",
    image: eliteGlobalImage,
    imageAlt:
      "Elite Global Construction website showing project imagery and company services.",
    imageWidth: 1600,
    imageHeight: 860,
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Nodemailer",
    ],
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather App",
    eyebrow: "Real-time data utility",
    description:
      "A focused weather experience that turns live forecast data into a clear, responsive view for quickly checking conditions in any location.",
    liveUrl: "https://weather-app-five-rouge-57.vercel.app/",
    sourceUrl: "https://github.com/arinzeugwu347/weather-app",
    image: weatherAppImage,
    imageAlt:
      "Weather application showing current conditions and forecast information.",
    imageWidth: 1600,
    imageHeight: 844,
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "Jotai",
      "Axios",
      "Weather API",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
