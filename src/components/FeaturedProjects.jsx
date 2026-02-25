import { FaGithub } from "react-icons/fa";
import ecommerceImage from "../assets/images/yourstore.png";
import taskBoardImage from "../assets/images/taskboard.png";
import weatherAppImage from "../assets/images/weatherapp.png";


const projects = [
  {
    name: "Task Board",
    description: "A full-stack Kanban board built from scratch - drag & drop, real backend sync, responsive design, dark/light mode, and rich card modals.",
    link: "https://ari-task-board-app.vercel.app",
    github: "https://github.com/arinzeugwu347/task-board-app",
    image: taskBoardImage,
    techStack: [
      "React + Vite ",
      "Tailwind CSS ",
      "@dnd-kit (Drag & Drop) ",
      "React Router ",
      "Node.js / Express ",
      "MongoDB + Mongoose ",
      "JWT Auth ",
      "Vercel (Frontend) ",
      "Render (Backend) ",
      "Resend (Emailing) "
    ],
  },
  {
    name: "E-Commerce Web App",
    description: "Shopping app with cart, payment & admin panel Super Production Ready",
    link: "https://your-store-6yoa.vercel.app",
    github: "https://github.com/arinzeugwu347/ecommerce-client",
    image: ecommerceImage,
    techStack: [
      "Next + Vercel ",
      "TailWindCSS ",
      "TypeScript ",
      "JWT Auth ",
      "Cursor Pagination ",
      "MongoDB + Mongoose ",
      "Stripe Payment Gateway",
      "Secure Password Hashing",
    ]
  },
  {
    name: "A Weather API App",
    description: "Get real-time weather updates for any location",
    link: "https://weather-app-five-rouge-57.vercel.app/",
    github: "https://github.com/arinzeugwu347/weather-app",
    image: weatherAppImage,
    techStack: [
      "Next + Vercel ",
      "TailWindCSS ",
      "TypeScript "
    ]
  },
];

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Some of the web applications I’ve built using React, Tailwind & modern frontend technologies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="bg-white dark:bg-gray-900 shadow rounded-xl overflow-hidden hover:scale-[1.03] hover:shadow-xl transition flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1 flex-grow">
                  {project.description}
                </p>

                <p className="text-blue-700 dark:text-blue-300 mt-2 flex-grow">Tech Stack</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1 flex-grow">
                  {project.techStack.join(', ')}
                </p>

                <div className="mt-3 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-3 py-1 rounded-lg border border-blue-500 text-blue-500 dark:text-blue-300 hover:bg-blue-500 dark:hover:bg-blue-300 transition"
                  >
                    <FaGithub className="inline mr-1" /> GitHub
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="px-3 py-1 rounded-lg bg-blue-500 dark:bg-blue-300 text-white dark:text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
