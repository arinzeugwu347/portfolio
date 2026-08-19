import { motion, useIsPresent, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const easing = [0.22, 1, 0.36, 1];

export default function RouteTransition({ children, className = "" }) {
  const isPresent = useIsPresent();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`route-transition${className ? ` ${className}` : ""}`}
      aria-hidden={isPresent ? undefined : true}
      data-exiting={isPresent ? undefined : "true"}
      inert={!isPresent}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.38,
        ease: easing,
      }}
    >
      {children}
    </motion.div>
  );
}

RouteTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
