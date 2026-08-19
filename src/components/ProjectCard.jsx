import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({
  project,
  variant = "standard",
  headingAs = "h3",
  motionIndex = 0,
}) {
  const reduceMotion = useReducedMotion();
  const {
    id,
    title,
    eyebrow,
    description,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    liveUrl,
    sourceUrl,
    techStack,
    proofPoints = [],
  } = project;
  const Heading = headingAs;

  return (
    <motion.article
      className={`project-card project-card--${variant}`}
      aria-labelledby={`${id}-title`}
      initial={reduceMotion ? false : {
        opacity: 0,
        x: motionIndex % 2 === 0 ? -24 : 24,
        y: 18,
        scale: variant === "featured" ? 0.985 : 1,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : Math.min(motionIndex * 0.06, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <figure className="project-card__media">
        <img
          className="project-card__image"
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="project-card__body">
        <p className="project-card__eyebrow">{eyebrow}</p>
        <Heading className="project-card__title" id={`${id}-title`}>
          {title}
        </Heading>
        <p className="project-card__description">{description}</p>

        {proofPoints.length > 0 ? (
          <ul className="project-card__proof" aria-label={`${title} engineering proof points`}>
            {proofPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        ) : null}

        <div className="project-card__stack">
          <p className="project-card__stack-label">Built with</p>
          <ul
            className="project-card__tech-list"
            aria-label={`${title} technology stack`}
          >
            {techStack.map((technology) => (
              <li className="project-card__tech" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card__actions">
          <a
            className="project-link project-link--primary"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live (opens in a new tab)`}
          >
            View live project
            <FiArrowUpRight aria-hidden="true" focusable="false" />
          </a>

          {sourceUrl ? (
            <a
              className="project-link project-link--secondary"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source on GitHub (opens in a new tab)`}
            >
              <FaGithub aria-hidden="true" focusable="false" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageWidth: PropTypes.number.isRequired,
    imageHeight: PropTypes.number.isRequired,
    liveUrl: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    proofPoints: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  variant: PropTypes.oneOf(["standard", "featured"]),
  headingAs: PropTypes.oneOf(["h2", "h3"]),
  motionIndex: PropTypes.number,
};
