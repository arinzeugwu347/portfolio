import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import portfolioImage from "../assets/images/portfolio.png";
import ecommerceImage from "../assets/images/ecommerce.png";
import chatbotImage from "../assets/images/chatbot.png";
import weatherAppImage from "../assets/images/weatherapp.png";

export default function ProjectsPage() {
  const [openModal, setOpenModal] = useState(null);

  const projects = [  
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React + Tailwind",
      link: "https://arinze-portfolio.vercel.app/",
      github: "https://github.com/arinzeugwu347/portfolio",
      image: portfolioImage,
    },
    {
      name: "E-Commerce Web App",
      description: "Shopping app with cart, payment UI & admin panel",
      link: "#",
      github: "https://github.com/arinzeugwu347/ecommerce-project",
      image: ecommerceImage,
    },
    {
      name: "AI Chatbot Dashboard",
      description: "Interactive chatbot interface with AI capabilities",
      link: "https://ariwandoski.github.io/chatbot-project/",
      github: "https://github.com/arinzeugwu347/chatbot-project",
      image: chatbotImage,
    },
    {
      name: "A Weather API App",
      description: "Get real-time weather updates for any location",
      link: "https://weather-app-five-rouge-57.vercel.app/",
      github: "https://github.com/arinzeugwu347/weather-app",
      image: weatherAppImage,
    },
  ];

  return (
    <PageWrapper>
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Web Applications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Explore the applications I’ve built using modern web technologies.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition flex flex-col"
              >
                {/* Preview Click -> Opens Modal */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setOpenModal(project)}
                />

                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mt-4">
                    {/* LIVE LINK */}
                    <a
                      href={project.link}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-blue-500 dark:bg-blue-300 text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-400 transition"
                    >
                      Live Demo
                    </a>

                    {/* GITHUB LINK */}
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 dark:text-black hover:bg-blue-500 hover:text-white dark:hover:bg-blue-300 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-xl w-full overflow-hidden shadow-lg relative">
            <img
              src={openModal.image}
              alt="project preview"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {openModal.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{openModal.description}</p>

              <div className="flex justify-center gap-4">
                <a
                  href={openModal.link}
                  target="_blank"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Live Demo
                </a>
                <a
                  href={openModal.github}
                  target="_blank"
                  className="px-4 py-2 border border-blue-500 text-blue-500 dark:text-blue-300 rounded-lg hover:bg-blue-500 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-500"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
