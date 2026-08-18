import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SocialFooter() {
  const reduceMotion = useReducedMotion();
  const scrollToTop = () => {
    document.querySelector("#main-content")?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="shell site-footer__cta">
        <div>
          <p className="section-kicker">A strong product starts with a clear conversation.</p>
          <h2>Let&apos;s make the next version better.</h2>
        </div>
        <Link className="button button--light" to="/contact">Start a project</Link>
      </div>

      <div className="shell site-footer__bottom">
        <div className="footer-brand">
          <span className="brand__mark" aria-hidden="true">AU</span>
          <div>
            <strong>Arinze Ugwu</strong>
            <p>Full-stack engineering with product care.</p>
          </div>
        </div>

        <div className="footer-links" aria-label="Professional profiles">
          <a href="https://github.com/arinzeugwu347" target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/arinze-ugwu-854977244" target="_blank" rel="noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} Arinze Ugwu</p>
          <button type="button" onClick={scrollToTop}>
            Back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
