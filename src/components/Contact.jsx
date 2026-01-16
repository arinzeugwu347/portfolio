import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");
  const formAction = "https://formspree.io/f/mvzgkvlw";
  const redirectUrl = "https://arinze-portfolio.vercel.app/thank-you";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        window.location.href = redirectUrl;
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <PageWrapper>
      <section className="min-h-screen pt-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

          <form
            action={formAction}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Honeypot (spam protection) */}
            <input type="text" name="_gotcha" className="hidden" />

            {/* Redirect after submit (kept for fallback) */}
            <input type="hidden" name="_next" value={redirectUrl} />

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
            <p className="text-center mt-4 text-sm text-gray-500">Sending...</p>
          )}

          {status === "sent" && (
            <p className="text-center mt-4 text-sm text-green-600">Message sent — redirecting...</p>
          )}

          {status === "error" && (
            <p className="text-center mt-4 text-sm text-red-600">Failed to send. Please try again.</p>
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



