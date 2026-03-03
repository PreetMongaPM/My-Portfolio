import { useRef, useState } from "react";
import { ACCENT, ACCENT_BORDER } from "../../constants/theme";

// Code symbols that float up on hover
const CODE_SYMBOLS = ["</>", "( )", "{ }", "=>", "[ ]", "&&", "??", "++"];

/**
 * Animated photo card for the Hero section.
 *
 * Hover effects:
 *  — 3D perspective tilt following mouse position
 *  — Spotlight glow that tracks cursor inside the card
 *  — Corner brackets expand outward
 *  — Floating code symbols drift upward
 *  — Scanline sweep across the image
 *
 * @param {string} imageSrc   Path to your photo (optional — shows placeholder if omitted)
 */
export default function PhotoCard({ imageSrc }) {
  const cardRef      = useRef(null);
  const spotlightRef = useRef(null);
  const [isHovered, setIsHovered]     = useState(false);

  // ── 3D tilt on mouse move ──────────────────────────────────────────────────
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;   // 0 → 1
    const relY = (e.clientY - rect.top)  / rect.height;

    const rotY =  (relX - 0.5) * 22;   // tilt left/right ±11°
    const rotX = -(relY - 0.5) * 22;   // tilt up/down   ±11°

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;

    // Spotlight follows cursor
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(circle at ${relX * 100}% ${relY * 100}%, rgba(52,211,153,0.22), transparent 65%)`;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.background = "transparent";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width:         280,
        height:        340,
        borderRadius:  14,
        position:      "relative",
        overflow:      "hidden",
        background:    isHovered
          ? `linear-gradient(135deg, rgba(52,211,153,0.14) 0%, rgba(52,211,153,0.04) 100%)`
          : `linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(52,211,153,0.02) 100%)`,
        border:        `1px solid ${isHovered ? "rgba(52,211,153,0.35)" : ACCENT_BORDER}`,
        boxShadow:     isHovered ? `0 20px 60px rgba(52,211,153,0.12), 0 0 0 1px rgba(52,211,153,0.1)` : "none",
        transition:    "transform 0.08s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s",
        willChange:    "transform",
        cursor:        "none",
      }}
    >
      {/* ── Photo or placeholder ─────────────────────────────────────────── */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="44" r="26" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" />
            <ellipse cx="60" cy="105" rx="44" ry="30" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.22)" strokeWidth="1.5" />
          </svg>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
            Your Photo Here
          </p>
        </div>
      )}

      {/* ── Cursor spotlight ──────────────────────────────────────────────── */}
      <div ref={spotlightRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", transition: "background 0.05s" }} />

      {/* ── Scanline sweep ────────────────────────────────────────────────── */}
      <div
        style={{
          position:   "absolute",
          top:        isHovered ? "110%" : "-10%",
          left:       0,
          right:      0,
          height:     "30%",
          background: "linear-gradient(to bottom, transparent, rgba(52,211,153,0.06), transparent)",
          transition: isHovered ? "top 1.2s ease" : "none",
          pointerEvents: "none",
        }}
      />

      {/* ── Floating code symbols ─────────────────────────────────────────── */}
      {CODE_SYMBOLS.map((symbol, index) => {
        const leftPct   = 8 + (index % 4) * 24;
        const delayMs   = index * 120;
        const durationS = 2.0 + (index % 3) * 0.4;

        return (
          <span
            key={symbol}
            style={{
              position:   "absolute",
              bottom:     isHovered ? "105%" : "10%",
              left:       `${leftPct}%`,
              fontFamily: "'DM Sans', monospace",
              fontSize:   10,
              color:      ACCENT,
              opacity:    isHovered ? 0 : 0,
              transform:  `translateX(-50%)`,
              pointerEvents: "none",
              // Each symbol floats up with its own delay and duration
              animation:  isHovered ? `floatUp ${durationS}s ease-out ${delayMs}ms forwards` : "none",
              whiteSpace: "nowrap",
            }}
          />
        );
      })}

      {/* Simpler float: visible symbols on hover using CSS class */}
      {isHovered && CODE_SYMBOLS.slice(0, 5).map((symbol, index) => (
        <FloatingSymbol key={symbol} symbol={symbol} index={index} />
      ))}

      {/* ── Corner brackets ───────────────────────────────────────────────── */}
      <CornerBracket position="topRight"    expanded={isHovered} />
      <CornerBracket position="bottomLeft"  expanded={isHovered} />
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FloatingSymbol({ symbol, index }) {
  const leftPct  = 10 + index * 18;
  const duration = 1.8 + index * 0.25;
  const delay    = index * 100;

  return (
    <span
      style={{
        position:   "absolute",
        bottom:     0,
        left:       `${leftPct}%`,
        fontFamily: "'DM Sans', monospace",
        fontSize:   11,
        fontWeight: 600,
        color:      ACCENT,
        opacity:    0,
        pointerEvents: "none",
        animation:  `symbolFloat ${duration}s ease-out ${delay}ms forwards`,
        whiteSpace: "nowrap",
      }}
    >
      {symbol}
    </span>
  );
}

function CornerBracket({ position, expanded }) {
  const isTopRight    = position === "topRight";
  const cornerStyles  = isTopRight
    ? { top: -1, right: -1, borderTop:    `2px solid ${ACCENT}`, borderRight:  `2px solid ${ACCENT}`, borderRadius: "0 14px 0 0" }
    : { bottom: -1, left: -1, borderBottom: `2px solid ${ACCENT}`, borderLeft:  `2px solid ${ACCENT}`, borderRadius: "0 0 0 14px" };

  return (
    <div
      style={{
        position:   "absolute",
        width:      expanded ? 36 : 26,
        height:     expanded ? 36 : 26,
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        ...cornerStyles,
      }}
    />
  );
}