import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const motionElements = {
  div: motion.div,
  li: motion.li,
};

export default function Reveal({ as = "div", children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motionElements[as];

  return (
    <MotionElement
      className={`reveal${className ? ` ${className}` : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionElement>
  );
}

Reveal.propTypes = {
  as: PropTypes.oneOf(["div", "li"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};
