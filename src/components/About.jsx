const principles = [
  {
    number: "01",
    title: "Clarity before cleverness",
    body: "Interfaces should make the next decision obvious while keeping complex rules trustworthy underneath.",
  },
  {
    number: "02",
    title: "Quality at every boundary",
    body: "Validation, accessible states, failure recovery and maintainable code are product features—not cleanup work.",
  },
  {
    number: "03",
    title: "Ship with evidence",
    body: "I pair visual polish with practical testing, performance checks and deliberate production delivery.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="shell">
        <div className="section-intro section-intro--split">
          <div>
            <p className="section-kicker">How I work</p>
            <h2 id="about-title">Useful software should feel considered from every angle.</h2>
          </div>
          <p>
            My work spans interface architecture, application state, backend integration,
            data integrity and deployment. I care about the small details because they are
            what turn a functioning build into a product people can trust.
          </p>
        </div>

        <ol className="principles-grid">
          {principles.map((principle) => (
            <li key={principle.number} className="principle-card">
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
