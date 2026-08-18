const capabilityGroups = [
  {
    label: "Frontend systems",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Responsive CSS", "Accessibility"],
  },
  {
    label: "Backend & data",
    skills: ["Node.js", "Express", "PHP", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    label: "Product quality",
    skills: ["Vitest", "Testing Library", "Jest", "Validation", "Performance", "UX detail"],
  },
  {
    label: "Delivery",
    skills: ["Git & GitHub", "Vercel", "AWS", "CI workflows", "Production debugging", "Technical writing"],
  },
];

export default function Skills() {
  return (
    <section id="capabilities" className="capabilities-section" aria-labelledby="capabilities-title">
      <div className="shell capabilities-layout">
        <div className="capabilities-copy">
          <p className="section-kicker">Capabilities</p>
          <h2 id="capabilities-title">From first interaction to production release.</h2>
          <p>
            I work across the product surface, connecting frontend craft with the
            engineering foundations that keep an application fast, resilient and easy to evolve.
          </p>
        </div>

        <div className="capabilities-list">
          {capabilityGroups.map((group, index) => (
            <section key={group.label} className="capability-group">
              <div className="capability-group__heading">
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{group.label}</h3>
              </div>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
