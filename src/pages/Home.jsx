import About from "../components/About";
import AiEvaluation from "../components/AiEvaluation";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import PageWrapper from "../components/PageWrapper";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <AiEvaluation />
      <Experience />
      <FeaturedProjects />
      <Skills />
    </PageWrapper>
  );
}
