import Reveal from "./Reveal";

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
        <Reveal className="section-intro section-intro--split" direction="fade" duration={0.8}>
          <div>
            <p className="section-kicker">How I work</p>
            <h2 id="about-title">Useful software should feel considered from every angle.</h2>
          </div>
          <p>
            My experience spans full-stack products, backend services, AI evaluation,
            technical QA, benchmark validation, API and access-control testing, fuzzing
            preparation, and smart-contract review. I care about the small details because
            they turn a functioning build into software people can trust.
          </p>
        </Reveal>

        <ol className="principles-grid">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              as="li"
              className="principle-card"
              direction={index === 1 ? "scale" : index === 0 ? "right" : "left"}
              index={index}
              stagger={0.08}
            >
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
