import { useState, useEffect } from "react";
import { Download, Mail } from "lucide-react";
import PhotoCard from "../ui/PhotoCard";
import { ACCENT, ACCENT_DIM, ACCENT_BORDER, EASE_SPRING, FONT_DISPLAY, FONT_BODY } from "../../constants/theme";
import { PERSONAL } from "../../constants/data";

/**
 * Hero section — the first thing visitors see.
 *
 * Animations:
 *  — Page-load staggered fade-in for each element
 *  — Letter-by-letter name entrance with a slight rotate
 *  — Photo card with 3D tilt, spotlight, scanline, and code symbols on hover
 */
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Brief delay so CSS transition fires after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delayMs, fromY = 20) => ({
    opacity:    isLoaded ? 1 : 0,
    transform:  isLoaded ? "none" : `translateY(${fromY}px)`,
    transition: `opacity 0.9s ${EASE_SPRING} ${delayMs}ms, transform 0.9s ${EASE_SPRING} ${delayMs}ms`,
  });

  const handleDownload = () => {
    const link     = document.createElement("a");
    link.href      = PERSONAL.resumeUrl;
    link.download  = "JohnDoe_Resume.pdf";
    link.click();
  };

  const { first, last } = PERSONAL.name;

  return (
    <section
      id="about"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 2.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient background glows */}
      <AmbientGlow top="15%" right="8%"  size={500} />
      <AmbientGlow bottom="8%" left="-4%" size={320} opacity={0.04} />

      <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 290px", gap: 80, alignItems: "center" }}>

        {/* ── Left column: text ──────────────────────────────────────────── */}
        <div>
          {/* Status badge */}
          <div style={{ ...fadeIn(0), display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px rgba(34,197,94,0.7)", display: "inline-block" }} />
            <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: "rgba(255,255,255,0.32)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {PERSONAL.status}
            </span>
          </div>

          {/* Name — letter by letter */}
          <div style={{ marginBottom: 32 }}>
            <LetterByLetter text={first} color="#f0f0f0"  isLoaded={isLoaded} startDelay={100} />
            <LetterByLetter text={last}  color={ACCENT}   isLoaded={isLoaded} startDelay={340} glowText />
          </div>

          {/* Title + tagline */}
          <div style={fadeIn(600)}>
            <p style={{ fontFamily: FONT_BODY, fontSize: 18, color: "rgba(255,255,255,0.42)", margin: "0 0 12px" }}>
              {PERSONAL.title}
            </p>
            <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: "rgba(255,255,255,0.28)", margin: "0 0 48px", maxWidth: 460, lineHeight: 1.85 }}>
              {PERSONAL.tagline}
            </p>
          </div>

          {/* CTAs */}
          <div style={{ ...fadeIn(780), display: "flex", gap: 12, flexWrap: "wrap" }}>
            <HeroButton
              label="Get in Touch"
              icon={<Mail size={12} />}
              variant="primary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            />
            <HeroButton
              label="Download CV"
              icon={<Download size={12} />}
              variant="outline"
              onClick={handleDownload}
            />
            <HeroButton
              label="View Work →"
              variant="ghost"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
        </div>

        {/* ── Right column: photo ────────────────────────────────────────── */}
        <div style={fadeIn(400)}>
          {/* Pass imageSrc="/your-photo.jpg" to replace the placeholder */}
          <PhotoCard imageSrc={null} />
        </div>
      </div>
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LetterByLetter({ text, color, isLoaded, startDelay, glowText }) {
  return (
    <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: "clamp(52px, 7.5vw, 88px)", lineHeight: 1.0, letterSpacing: "-0.035em", marginBottom: 2 }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display:    "inline-block",
            color,
            opacity:    isLoaded ? 1 : 0,
            transform:  isLoaded ? "none" : "translateY(30px) rotate(-4deg)",
            transition: `opacity 0.6s ${EASE_SPRING} ${startDelay + i * 65}ms, transform 0.6s ${EASE_SPRING} ${startDelay + i * 65}ms`,
            textShadow: glowText && isLoaded ? "0 0 40px rgba(52,211,153,0.3)" : "none",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function HeroButton({ label, icon, variant, onClick }) {
  const styles = {
    primary: { background: ACCENT,        color: "#080808",                  border: "none" },
    outline: { background: ACCENT_DIM,    color: ACCENT,                     border: `1px solid ${ACCENT_BORDER}` },
    ghost:   { background: "transparent", color: "rgba(255,255,255,0.38)",   border: "1px solid rgba(255,255,255,0.1)" },
  };

  const base = styles[variant] ?? styles.ghost;

  return (
    <button
      onClick={onClick}
      data-interactive
      style={{
        ...base,
        cursor:        "none",
        fontFamily:    FONT_DISPLAY,
        fontWeight:    variant === "ghost" ? 600 : 700,
        fontSize:      12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding:       "13px 24px",
        borderRadius:  6,
        display:       "flex",
        alignItems:    "center",
        gap:           7,
        transition:    "all 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform  = "translateY(-3px)";
        e.currentTarget.style.boxShadow  = variant === "primary" ? "0 8px 24px rgba(52,211,153,0.25)" : "none";
        if (variant === "primary") e.currentTarget.style.background = "#6ee7b7";
        if (variant === "outline") e.currentTarget.style.background = "rgba(52,211,153,0.18)";
        if (variant === "ghost")   e.currentTarget.style.color      = "#f0f0f0";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform  = "none";
        e.currentTarget.style.boxShadow  = "none";
        if (variant === "primary") e.currentTarget.style.background = ACCENT;
        if (variant === "outline") e.currentTarget.style.background = ACCENT_DIM;
        if (variant === "ghost")   e.currentTarget.style.color      = "rgba(255,255,255,0.38)";
      }}
    >
      {icon}{label}
    </button>
  );
}

function AmbientGlow({ top, right, bottom, left, size = 400, opacity = 0.07 }) {
  return (
    <div
      aria-hidden
      style={{
        position:      "absolute",
        top, right, bottom, left,
        width:         size,
        height:        size,
        borderRadius:  "50%",
        background:    `radial-gradient(circle, rgba(52,211,153,${opacity}) 0%, transparent 65%)`,
        pointerEvents: "none",
      }}
    />
  );
}