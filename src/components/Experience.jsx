import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { experienceEntries, experienceProof, profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-title"
      tabIndex={-1}
    >
      <div className="shell">
        <Reveal className="experience-intro" direction="left" distance={32}>
          <div>
            <p className="section-kicker">Selected experience</p>
            <h2 id="experience-title">Engineering depth across products, AI evaluation, quality, and security.</h2>
          </div>
          <div className="experience-intro__copy">
            <p>
              From product features and backend services to coding-agent evaluation, benchmark
              validation, and security review, I bring an evidence-led approach to building and
              improving dependable software.
            </p>
            <a
              className="experience-resume-link"
              href={profile.resumePath}
              download={profile.resumeFileName}
            >
              Download full résumé <FiDownload aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="experience-proof" aria-label="Experience highlights">
          {experienceProof.map((proof, index) => (
            <Reveal
              key={proof.label}
              className="experience-proof__item"
              direction="scale"
              index={index}
              stagger={0.07}
            >
              <strong>{proof.value}</strong>
              <span>{proof.label}</span>
            </Reveal>
          ))}
        </div>

        <ol className="experience-timeline">
          {experienceEntries.map((entry, index) => (
            <Reveal
              key={entry.id}
              as="li"
              className="experience-item"
              direction="right"
              distance={32}
              delay={Math.min(index * 0.025, 0.12)}
            >
              <p className="experience-item__date">{entry.dates}</p>
              <span className="experience-item__marker" aria-hidden="true" />
              <article className="experience-item__content">
                <h3>{entry.title}</h3>
                <p className="experience-item__meta">{entry.organization} · {entry.meta}</p>
                <p>{entry.summary}</p>
                {entry.highlights.length > 0 ? (
                  <ul className="experience-item__highlights">
                    {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal className="education-card" direction="scale">
          <p className="section-kicker">Education</p>
          <div>
            <h3>{profile.education.degree}</h3>
            <p>{profile.education.institution} · {profile.education.result}</p>
          </div>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            View professional profile <FiArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
