import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function PageWrapper({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <motion.main
      id="main-content"
      ref={mainRef}
      tabIndex={-1}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
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
