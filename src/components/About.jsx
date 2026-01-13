import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about"
             className="px-10 py-24 max-w-8xl mx-auto text-center
                        bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm Arinze Ugwu, a passionate frontend developer focused on creating elegant, performant, and user-friendly digital experiences.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        My goal is to craft seamless web experiences that are both visually captivating and highly accessible.
      </p>
    </section>
  );
}
