import { skillGroups } from "../data/profile";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="shell capabilities-layout">
        <Reveal className="capabilities-copy">
          <p className="section-kicker">Capabilities</p>
          <h2 id="capabilities-title">A practical stack for dependable systems.</h2>
          <p>
            I work across web interfaces, backend services, data, testing, infrastructure,
            and security review—connecting product detail with the engineering foundations
            that keep systems resilient and maintainable.
          </p>
        </Reveal>

        <div className="capabilities-list">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05}>
              <section className="capability-group">
                <div className="capability-group__heading">
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{group.label}</h3>
                </div>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
