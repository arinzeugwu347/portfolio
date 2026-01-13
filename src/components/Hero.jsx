import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6">
            <div className="text-center">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl font-extrabold mb-6"
                >
                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">Arinze Ugwu</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl mb-10 text-gray-600 dark:text-gray-300"
                >
                    Frontend Developer • React • Tailwind • Animations
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="flex justify-center gap-4"
                >
                    <Link to="/projects" className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white dark:text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600">View Projects</Link>
                    <Link to="/contact" className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">Contact</Link>
                    <a
                        href="/file-sample_150kB.pdf"
                        download
                        className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                        Download CV
                    </a>

                </motion.div>
            </div>
        </section>
    );
}
