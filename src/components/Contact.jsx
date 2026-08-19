import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { profile } from "../data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FiGithub },
  { label: "LinkedIn", href: profile.linkedIn, icon: FiLinkedin },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState("idle");
  const requestRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => () => requestRef.current?.abort(), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const response = await fetch("https://formspree.io/f/mvzgkvlw", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("Contact request failed");
      if (controller.signal.aborted) return;
      setStatus("sent");
      navigate("/thank-you");
    } catch {
      if (!controller.signal.aborted) setStatus("error");
    } finally {
      if (requestRef.current === controller) requestRef.current = null;
    }
  };

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <motion.div
          className="contact-copy"
          initial={reduceMotion ? false : { opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.62,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="section-kicker">Start a conversation</p>
          <h1 id="contact-title">Need dependable software—or rigorous AI evaluation?</h1>
          <p className="contact-copy__lede">
            Tell me what you&apos;re building, what needs to improve, or what technical output
            needs an evidence-led review. I&apos;ll respond with care and practical next steps.
          </p>

          <div className="contact-details">
            <div>
              <span>Based in</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span>Current role</span>
              <strong>{profile.currentRole}</strong>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>

          <div className="contact-socials" aria-label="Professional profiles">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                {label}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
          initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.985 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.68,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <input
            type="text"
            name="_gotcha"
            className="honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="field-group">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" type="text" name="name" autoComplete="name" required />
          </div>

          <div className="field-group">
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" type="email" name="email" autoComplete="email" required />
          </div>

          <div className="field-group">
            <label htmlFor="contact-project">What would you like to build or improve?</label>
            <textarea id="contact-project" name="message" rows="6" required />
          </div>

          <button className="button button--primary contact-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send project note"}
            <FiSend aria-hidden="true" />
          </button>

          <div
            className="contact-status"
            aria-live={status === "error" ? "assertive" : "polite"}
            aria-atomic="true"
          >
            {status === "sending" && <p>Sending your project note…</p>}
            {status === "error" && (
              <p>The message could not be sent. Please check your connection and try again.</p>
            )}
            {status === "idle" && <p>Your details are used only to respond to this message.</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
