import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      className="projects-section projects-section--archive"
      aria-labelledby="projects-page-title"
    >
      <div className="projects-section__inner">
        <Reveal>
          <header className="section-heading section-heading--projects-page">
            <p className="section-kicker">Project archive</p>
            <h1 id="projects-page-title">Digital products built with purpose.</h1>
            <p>
              Explore full-stack platforms, focused utilities, and responsive web
              experiences built from product thinking through production delivery.
            </p>
          </header>
        </Reveal>

        <div className="projects-grid projects-grid--archive">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} headingAs="h2" />
          ))}
        </div>
      </div>
    </section>
  );
}
