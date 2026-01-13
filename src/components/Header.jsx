import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ name = "AU" }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Shrink header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu with ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "h-14" : "h-16"}
        bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex justify-between items-center h-full">

          {/* Logo + Avatar */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {name}
            </h2>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt={name}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400 shadow group-hover:scale-105 transition"
              />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                View Profile
              </span>
            </div>
          </Link>

          {/* Desktop Nav (spacing FIXED here) */}
          <nav className="hidden md:flex items-center space-x-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition-colors
                  ${isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-screen py-6" : "max-h-0"}`}
        >
          <div className="flex flex-col items-center space-y-2 px-6 py-6 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors
                    ${isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
