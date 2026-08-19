import { FiCheckCircle } from "react-icons/fi";
import { aiEvaluationPractice } from "../data/profile";
import Reveal from "./Reveal";

const reviewSequence = ["Inspect", "Reproduce", "Compare", "Explain"];

export default function AiEvaluation() {
  return (
    <section
      id="ai-evaluation"
      className="ai-evaluation-section"
      aria-labelledby="ai-evaluation-title"
      tabIndex={-1}
    >
      <div className="shell">
        <div className="ai-evaluation-intro">
          <Reveal direction="left" distance={32}>
            <p className="section-kicker">{aiEvaluationPractice.eyebrow}</p>
            <h2 id="ai-evaluation-title">{aiEvaluationPractice.title}</h2>
          </Reveal>

          <Reveal direction="right" distance={32} delay={0.08}>
            <p className="ai-evaluation-intro__copy">
              {aiEvaluationPractice.introduction}
            </p>
            <ol className="evaluation-sequence" aria-label="Evaluation review sequence">
              {reviewSequence.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="ai-practice-grid">
          {aiEvaluationPractice.practices.map((practice, index) => (
            <Reveal
              key={practice.number}
              as="article"
              className="ai-practice-card"
              direction={index === 1 ? "scale" : index === 0 ? "right" : "left"}
              distance={28}
              index={index}
              stagger={0.08}
            >
              <span className="ai-practice-card__number">{practice.number}</span>
              <h3>{practice.title}</h3>
              <p>{practice.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="ai-evidence" direction="fade" duration={0.8}>
          <p className="ai-evidence__label">CV-backed evidence</p>
          <ul>
            {aiEvaluationPractice.evidence.map((item) => (
              <li key={item}>
                <FiCheckCircle aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
