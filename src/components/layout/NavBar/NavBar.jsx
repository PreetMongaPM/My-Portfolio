import { useState, useEffect, useRef } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../../constants/data";
import "./NavBar.css";

export default function NavBar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const activeEl = navLinksRef.current?.querySelector(".nav-link.active");
      if (activeEl) {
        setPillStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1,
        });
      }
    };
    const raf = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
    };
  }, [activeSection]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <span className="nav-logo">
          PM<span className="nav-logo-accent">.</span>
        </span>

        <div className="nav-links" ref={navLinksRef}>
          {NAV_LINKS.map((label) => {
            const sectionId = label.toLowerCase();
            const isActive  = activeSection === sectionId;
            return (
              <button
                key={label}
                onClick={() => scrollTo(label)}
                data-interactive
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {label}
              </button>
            );
          })}
          <span
            className="nav-underline-pill"
            style={{
              transform: `translateX(${pillStyle.left}px)`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />
        </div>

        <button
          onClick={() => scrollTo("resume")}
          data-interactive
          className="nav-resume-cta"
        >
          <Download size={11} /> Resume
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map((label) => {
            const isActive = activeSection === label.toLowerCase();
            return (
              <button
                key={label}
                onClick={() => scrollTo(label)}
                className={`nav-mobile-link ${isActive ? "active" : ""}`}
              >
                {label}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("resume")}
            className="nav-mobile-resume"
          >
            <Download size={13} /> Download Resume
          </button>
        </div>
      )}
    </nav>
  );
}