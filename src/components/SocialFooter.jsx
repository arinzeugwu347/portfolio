import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

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
      <motion.div
        className="shell site-footer__cta"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: reduceMotion ? 0 : 0.66,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div>
          <p className="section-kicker">A strong product starts with a clear conversation.</p>
          <h2>Let&apos;s make the next version better.</h2>
        </div>
        <Link className="button button--light" to="/contact">Start a project</Link>
      </motion.div>

      <motion.div
        className="shell site-footer__bottom"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.08 }}
      >
        <div className="footer-brand">
          <span className="brand__mark" aria-hidden="true">AU</span>
          <div>
            <strong>{profile.publicName}</strong>
            <p>Software engineering, AI evaluation, and technical quality.</p>
          </div>
        </div>

        <div className="footer-links" aria-label="Professional profiles">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} {profile.publicName}</p>
          <button type="button" onClick={scrollToTop}>
            Back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
