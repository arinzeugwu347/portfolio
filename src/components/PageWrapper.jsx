import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children, className = "" }) {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    let realignFrame;
    let userInteracted = false;
    const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"];
    const markUserInteraction = () => {
      userInteracted = true;
    };

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, markUserInteraction, { passive: true });
    });

    const focusFrame = window.requestAnimationFrame(() => {
      const targetId = location.hash.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;

      if (target) {
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: "start", behavior: "auto" });
        return;
      }

      mainRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "auto" });
    });

    if (location.hash && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (cancelled || userInteracted || window.location.hash !== location.hash) return;

        realignFrame = window.requestAnimationFrame(() => {
          if (cancelled || userInteracted) return;
          document.getElementById(location.hash.slice(1))
            ?.scrollIntoView({ block: "start", behavior: "auto" });
        });
      });
    }

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(focusFrame);
      if (realignFrame) window.cancelAnimationFrame(realignFrame);
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, markUserInteraction);
      });
    };
  }, [location.hash, location.pathname]);

  return (
    <main
      id="main-content"
      ref={mainRef}
      tabIndex={-1}
      className={className}
    >
      {children}
    </main>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
