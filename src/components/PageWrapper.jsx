import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const focusFrame = window.requestAnimationFrame(() => {
      const targetId = location.hash.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;

      if (target) {
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: "start", behavior: "auto" });
        return;
      }

      mainRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [location.hash, location.pathname]);

  return (
    <motion.main
      id="main-content"
      ref={mainRef}
      tabIndex={-1}
      className={className}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.36, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
