import { useEffect, useRef, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../theme.js";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [openPath, setOpenPath] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const isOpen = openPath === location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 52.01rem)");
    const closeAtDesktop = (event) => {
      if (event.matches) setOpenPath(null);
    };

    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    const closeOnHistoryNavigation = () => setOpenPath(null);
    window.addEventListener("popstate", closeOnHistoryNavigation);
    return () => window.removeEventListener("popstate", closeOnHistoryNavigation);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableElements = mobileMenuRef.current?.querySelectorAll("a[href], button:not([disabled])") ?? [];
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    const focusFrame = window.requestAnimationFrame(() => firstFocusable?.focus());

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }

      if (event.key === "Tab" && focusableElements.length > 0) {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenuAndRestoreFocus = () => {
    setOpenPath(null);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  const closeMenuForNavigation = (targetPath) => {
    setOpenPath(null);
    if (targetPath === location.pathname) {
      window.requestAnimationFrame(() => {
        document.querySelector("#main-content")?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="Arinze Ugwu, home" onClick={() => setOpenPath(null)}>
          <span className="brand__mark" aria-hidden="true">AU</span>
          <span className="brand__copy">
            <strong>Arinze Ugwu</strong>
            <span>Full-stack engineer</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </button>
          <Link className="header-cta" to="/contact">Let&apos;s talk</Link>
          <button
            ref={menuButtonRef}
            type="button"
            className={`icon-button menu-button${isOpen ? " menu-button--dialog-open" : ""}`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-hidden={isOpen ? "true" : undefined}
            tabIndex={isOpen ? -1 : 0}
            disabled={isOpen}
            onClick={() => setOpenPath((current) => (
              current === location.pathname ? null : location.pathname
            ))}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="mobile-menu-shell"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-navigation-title"
        >
          <div
            className="mobile-menu-backdrop"
            aria-hidden="true"
            onClick={closeMenuAndRestoreFocus}
          />
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav__header">
              <p id="mobile-navigation-title" className="mobile-nav__label">Navigate</p>
              <button
                type="button"
                className="mobile-nav__close"
                aria-label="Close navigation"
                onClick={closeMenuAndRestoreFocus}
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            {navigation.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`}
              onClick={() => closeMenuForNavigation(item.to)}
            >
                <span aria-hidden="true">0{index + 1}</span>
                {item.label}
              </NavLink>
            ))}
            <a className="mobile-nav__resume" href="/my-resume.pdf" download>
              Download résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
