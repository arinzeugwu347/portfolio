import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React", 
    "JavaScript", 
    "Tailwind CSS", 
    "PHP", 
    "Node.js", 
    "Git / GitHub", 
    "HTML5", 
    "CSS3", 
    "Responsive Design",
    "MySQL",
    "MongoDB", 
    "AWS Cloud-Practitioner"
  ];

  return (
    <section id="skills" className="py-24 px-10 bg-gray-50 dark:bg-gray-900 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="px-6 py-3 bg-white dark:bg-gray-800 shadow-md rounded-full text-gray-700 dark:text-gray-200 font-medium hover:shadow-lg transition cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
