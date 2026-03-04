import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-9xl font-extrabold text-blue-600 dark:text-blue-400"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl mt-4 text-gray-700 dark:text-gray-300"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </Link>
        </motion.div>

      </section>
    </PageWrapper>
  );
}
