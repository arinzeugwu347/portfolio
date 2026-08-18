import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
    </PageWrapper>
  );
}
