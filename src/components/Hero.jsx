import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.jpeg";
import { profile } from "../data/profile";

const strengths = [
  "Full-stack & backend",
  "AI evaluation & benchmarks",
  "Technical QA & security",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="shell hero__grid">
        <div className="hero__content">
          <motion.div className="availability" {...enter()}>
            <span aria-hidden="true" />
            Software engineering · AI evaluation · Technical quality
          </motion.div>

          <motion.p className="hero__eyebrow" {...enter(0.04)}>
            {profile.title} · {profile.location}
          </motion.p>
          <motion.h1 id="hero-title" {...enter(0.08)}>
            I build dependable software—and <em>evaluate AI with evidence.</em>
          </motion.h1>
          <motion.p className="hero__lede" {...enter(0.14)}>
            I&apos;m {profile.publicName}, a software engineer and AI evaluator with {profile.experience} of
            experience building web and backend systems. I currently develop full-stack
            and backend products at {profile.currentCompany}. My AI evaluation work spans
            coding-agent benchmarking, trajectory review, factuality research, and prompt
            and rubric auditing.
          </motion.p>

          <motion.div className="hero__actions" {...enter(0.2)}>
            <Link className="button button--primary" to="/projects">
              Explore selected work <FiArrowUpRight aria-hidden="true" />
            </Link>
            <a
              className="button button--secondary"
              href={profile.resumePath}
              download={profile.resumeFileName}
            >
              Résumé <FiDownload aria-hidden="true" />
            </a>
          </motion.div>

          <motion.ul className="hero__strengths" aria-label="Engineering strengths" {...enter(0.26)}>
            {strengths.map((strength, index) => (
              <motion.li
                key={strength}
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.48,
                  delay: reduceMotion ? 0 : 0.3 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {strength}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div className="hero-portrait" {...enter(0.12)}>
          <div className="hero-portrait__frame">
            <img
              src={profileImage}
              alt="Arinze Ugwu"
              width="1079"
              height="1080"
              fetchPriority="high"
            />
            <div className="hero-portrait__caption">
              <span>Software engineer &amp; AI evaluator</span>
              <strong>Build. Evaluate. Verify. Secure.</strong>
            </div>
          </div>
          <motion.div
            className="hero-portrait__badge"
            aria-hidden="true"
            animate={reduceMotion ? undefined : {
              y: [0, -8, 0],
              rotate: [-9, -6, -9],
            }}
            transition={reduceMotion ? undefined : {
              duration: 3.6,
              ease: "easeInOut",
            }}
          >
            <span>Build</span>
            <FiArrowDownRight />
            <span>Refine</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
