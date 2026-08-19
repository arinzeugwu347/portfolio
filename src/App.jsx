import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import RouteTransition from "./components/RouteTransition";
import SocialFooter from "./components/SocialFooter";

const Home = lazy(() => import("./pages/Home"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

const siteUrl = "https://arinze-portfolio.vercel.app";

const pageMetadata = {
  "/": {
    title: "Arinze Ugwu — Software engineer & AI evaluator",
    description:
      "Portfolio of Arinze Ugwu: 5+ years building web and backend systems, plus coding-agent evaluation, technical QA, and security experience.",
    indexable: true,
  },
  "/projects": {
    title: "Selected work — Arinze Ugwu",
    description:
      "Explore selected full-stack platforms, local-first tools, backend systems, and responsive product experiences built or contributed to by Arinze Ugwu.",
    indexable: true,
  },
  "/contact": {
    title: "Contact — Arinze Ugwu",
    description:
      "Start a conversation with Arinze Ugwu about software engineering, backend systems, AI evaluation, product interfaces, and technical quality.",
    indexable: true,
  },
  "/thank-you": {
    title: "Message received — Arinze Ugwu",
    description: "Your message to Arinze Ugwu has been received.",
    indexable: false,
  },
};

const notFoundMetadata = {
  title: "Page not found — Arinze Ugwu",
  description: "The requested portfolio page could not be found.",
  indexable: false,
};

function updateMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? notFoundMetadata;
    const canonicalUrl = new URL(location.pathname, siteUrl).href;

    document.title = metadata.title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    updateMetaContent('meta[name="description"]', metadata.description);
    updateMetaContent('meta[name="robots"]', metadata.indexable ? "index, follow" : "noindex, nofollow");
    updateMetaContent('meta[property="og:title"]', metadata.title);
    updateMetaContent('meta[property="og:description"]', metadata.description);
    updateMetaContent('meta[property="og:url"]', canonicalUrl);
    updateMetaContent('meta[name="twitter:title"]', metadata.title);
    updateMetaContent('meta[name="twitter:description"]', metadata.description);
  }, [location.pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <RouteTransition key={location.pathname}>
        <Suspense
          fallback={(
            <main id="main-content" tabIndex={-1} className="route-loading">
              <p role="status">Loading the next page…</p>
            </main>
          )}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </RouteTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <RouteEffects />
        <Header />
        <AnimatedRoutes />
        <SocialFooter />
      </Router>
    </MotionConfig>
  );
}
