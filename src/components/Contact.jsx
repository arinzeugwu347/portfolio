import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");
  return (
    <PageWrapper>
      <section className="min-h-screen pt-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

          <form
            action="https://formspree.io/f/mvzgkvlw"
            method="POST"
            onSubmit={() => setStatus("sending")}
            className="space-y-4"
          >
            {/* Honeypot (spam protection) */}
            <input type="text" name="_gotcha" className="hidden" />

            {/* Redirect after submit */}
            <input
              type="hidden"
              name="_next"
              // value="http://localhost:5173/thank-you"
              value="https://arinze-portfolio.vercel.app/thank-you"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none"
            />

            <textarea
              name="message"
              rows="3"
              required
              placeholder="Your Message"
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none resize-none overflow-hidden transition-all"
            />


            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {status === "sending" && (
            <p className="text-center mt-4 text-sm text-gray-500">
              Sending...
            </p>
          )}
        </div>

        {/* Social Icons */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Or reach me via:
          </p>

          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://arinze-portfolio.vercel.app/" target="_blank" className="hover:text-blue-500 transition"><FaGlobe /></a>
            <a href="https://github.com/arinzeugwu347" target="_blank" className="hover:text-blue-500 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arinze-ugwu-854977244" target="_blank" className="hover:text-blue-500 transition"><FaLinkedin /></a>
            <a href="#" target="_blank" className="hover:text-blue-500 transition"><FaTwitter /></a>
            <a href="#" target="_blank" className="hover:text-blue-500 transition"><FaInstagram /></a>
          </div>
        </div>
      </section>

    </PageWrapper>
  )
}



