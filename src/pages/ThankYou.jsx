import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Thank You! 🎉
        </h1>

        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Your message has been sent successfully. I’ll get back to you as soon as possible.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 dark:bg-blue-200 hover:bg-blue-700 dark:hover:bg-blue-500 text-white dark:text-gray-900 px-6 py-3 rounded font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
