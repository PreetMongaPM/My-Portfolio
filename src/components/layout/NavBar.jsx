import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { ACCENT, ACCENT_DIM, ACCENT_BORDER, FONT_DISPLAY, FONT_BODY } from "../../constants/theme";
import { NAV_LINKS } from "../../constants/data";

/**
 * Sticky top navigation bar.
 * - Becomes frosted-glass on scroll
 * - Highlights the active section link
 * - "Resume" button scrolls to the Resume section
 *
 * @param {string} activeSection  Currently visible section ID (lowercase)
 */
export default function NavBar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position:        "fixed",
        top:             0,
        left:            0,
        right:           0,
        zIndex:          100,
        backdropFilter:  isScrolled ? "blur(20px) saturate(160%)" : "none",
        backgroundColor: isScrolled ? "rgba(8,8,8,0.9)" : "transparent",
        borderBottom:    isScrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition:      "all 0.4s ease",
        padding:         "0 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth:      1120,
          margin:        "0 auto",
          height:        64,
          display:       "flex",
          alignItems:    "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 20, color: "#f0f0f0", letterSpacing: "-0.02em" }}>
          PM<span style={{ color: ACCENT }}>.</span>
        </span>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 30 }}>
          {NAV_LINKS.map((label) => {
            const sectionId = label.toLowerCase();
            const isActive  = activeSection === sectionId;

            return (
              <button
                key={label}
                onClick={() => scrollTo(label)}
                data-interactive
                style={{
                  background:     "none",
                  border:         "none",
                  cursor:         "none",
                  fontFamily:     FONT_BODY,
                  fontSize:       11,
                  fontWeight:     500,
                  color:          isActive ? ACCENT : "rgba(255,255,255,0.38)",
                  letterSpacing:  "0.09em",
                  textTransform:  "uppercase",
                  transition:     "color 0.2s",
                  padding:        "4px 0",
                  position:       "relative",
                }}
              >
                {label}
                {/* Active underline */}
                {isActive && (
                  <span
                    style={{
                      position:    "absolute",
                      bottom:      -2,
                      left:        0,
                      right:       0,
                      height:      1,
                      background:  ACCENT,
                      borderRadius: 1,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Resume CTA */}
        <button
          onClick={() => scrollTo("resume")}
          data-interactive
          style={{
            background:    ACCENT_DIM,
            color:         ACCENT,
            border:        `1px solid ${ACCENT_BORDER}`,
            cursor:        "none",
            fontFamily:    FONT_DISPLAY,
            fontWeight:    700,
            fontSize:      11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding:       "8px 16px",
            borderRadius:  6,
            display:       "flex",
            alignItems:    "center",
            gap:           6,
            transition:    "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(52,211,153,0.18)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT_DIM)}
        >
          <Download size={11} /> Resume
        </button>
      </div>
    </nav>
  );
}