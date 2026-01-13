import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import SocialFooter from "../components/SocialFooter";

export default function Home() {
    return (
        <>

            <main className="pt-00 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <Hero />
                <About />
                <Skills />
                <FeaturedProjects />
                <SocialFooter />
            </main>


        </>
    );
}
