import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.jpeg";

const strengths = ["Accessible interfaces", "Reliable data flows", "Polished delivery"];

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
            Available for thoughtful product work
          </motion.div>

          <motion.p className="hero__eyebrow" {...enter(0.04)}>
            Full-stack engineering · Lagos, Nigeria
          </motion.p>
          <motion.h1 id="hero-title" {...enter(0.08)}>
            I turn complex workflows into <em>calm, high-trust</em> products.
          </motion.h1>
          <motion.p className="hero__lede" {...enter(0.14)}>
            I&apos;m Arinze Ugwu, a product-minded engineer building responsive web
            experiences where thoughtful interaction design meets dependable software.
          </motion.p>

          <motion.div className="hero__actions" {...enter(0.2)}>
            <Link className="button button--primary" to="/projects">
              Explore selected work <FiArrowUpRight aria-hidden="true" />
            </Link>
            <a className="button button--secondary" href="/my-resume.pdf" download>
              Résumé <FiDownload aria-hidden="true" />
            </a>
          </motion.div>

          <motion.ul className="hero__strengths" aria-label="Engineering strengths" {...enter(0.26)}>
            {strengths.map((strength) => <li key={strength}>{strength}</li>)}
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
              <span>Product-minded engineer</span>
              <strong>Design clarity. Engineering depth.</strong>
            </div>
          </div>
          <div className="hero-portrait__badge" aria-hidden="true">
            <span>Build</span>
            <FiArrowDownRight />
            <span>Refine</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
