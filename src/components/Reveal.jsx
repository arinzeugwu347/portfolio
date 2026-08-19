import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const motionElements = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  li: motion.li,
  section: motion.section,
  ul: motion.ul,
};

const easing = [0.22, 1, 0.36, 1];

function getHiddenState(direction, distance) {
  const offsets = {
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.96 },
    up: { y: distance },
  };

  return {
    opacity: 0,
    ...(offsets[direction] ?? {}),
  };
}

export default function Reveal({
  amount = 0.18,
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.64,
  index = 0,
  once = true,
  stagger = 0.06,
}) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motionElements[as];
  const resolvedDelay = delay + Math.max(0, index) * stagger;

  return (
    <MotionElement
      className={`reveal${className ? ` ${className}` : ""}`}
      initial={reduceMotion ? false : getHiddenState(direction, distance)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : resolvedDelay,
        ease: easing,
      }}
    >
      {children}
    </MotionElement>
  );
}

Reveal.propTypes = {
  amount: PropTypes.number,
  as: PropTypes.oneOf(["article", "aside", "div", "li", "section", "ul"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(["down", "fade", "left", "right", "scale", "up"]),
  distance: PropTypes.number,
  duration: PropTypes.number,
  index: PropTypes.number,
  once: PropTypes.bool,
  stagger: PropTypes.number,
};
