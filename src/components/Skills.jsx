import { skillGroups } from "../data/profile";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="shell capabilities-layout">
        <Reveal className="capabilities-copy" direction="left" distance={32}>
          <p className="section-kicker">Capabilities</p>
          <h2 id="capabilities-title">A practical stack for building—and evaluating—dependable systems.</h2>
          <p>
            I work across AI evaluation, web interfaces, backend services, data, testing,
            infrastructure, and security review—connecting evidence-led judgment with the
            engineering foundations that keep systems resilient and maintainable.
          </p>
        </Reveal>

        <div className="capabilities-list">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              direction={index % 2 === 0 ? "right" : "left"}
              distance={26}
              index={index % 2}
              stagger={0.08}
            >
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
