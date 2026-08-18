import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section
      className="projects-section projects-section--featured"
      aria-labelledby="featured-projects-title"
    >
      <div className="projects-section__inner">
        <header className="section-heading section-heading--projects">
          <p className="section-kicker">Selected work</p>
          <h2 id="featured-projects-title">Featured projects</h2>
          <p>
            Product-minded web applications shaped around clear interaction,
            dependable engineering, and thoughtful delivery.
          </p>
        </header>

        <div className="projects-grid projects-grid--featured">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={index === 0 ? "featured" : "standard"}
            />
          ))}
        </div>

        <div className="projects-section__footer">
          <Link className="project-link project-link--all" to="/projects">
            Explore all projects
            <FiArrowRight aria-hidden="true" focusable="false" />
          </Link>
        </div>
      </div>
    </section>
  );
}
