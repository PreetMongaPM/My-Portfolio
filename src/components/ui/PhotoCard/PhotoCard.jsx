import { useRef, useState } from "react";
import "./PhotoCard.css";

const CODE_SYMBOLS = ["</>", "( )", "{ }", "=>", "[ ]", "&&", "??", "++"];

export default function PhotoCard({ imageSrc }) {
  const cardRef      = useRef(null);
  const spotlightRef = useRef(null);
  const [isHovered, setIsHovered]     = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top)  / rect.height;

    const rotY =  (relX - 0.5) * 22;
    const rotX = -(relY - 0.5) * 22;

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;

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
      className={`photo-card-container ${isHovered ? "hovered" : "default"}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Profile"
          className="photo-card-img"
        />
      ) : (
        <div className="photo-card-placeholder">
          <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="44" r="26" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" />
            <ellipse cx="60" cy="105" rx="44" ry="30" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.22)" strokeWidth="1.5" />
          </svg>
          <p className="photo-card-placeholder-text">
            Your Photo Here
          </p>
        </div>
      )}

      <div ref={spotlightRef} className="photo-card-spotlight" />

      <div className={`photo-card-scanline ${isHovered ? "hovered" : "default"}`} />

      {isHovered && CODE_SYMBOLS.slice(0, 5).map((symbol, index) => (
        <FloatingSymbol key={symbol} symbol={symbol} index={index} />
      ))}

      <CornerBracket position="topRight"    expanded={isHovered} />
      <CornerBracket position="bottomLeft"  expanded={isHovered} />
    </div>
  );
}

function FloatingSymbol({ symbol, index }) {
  const leftPct  = 10 + index * 18;
  const duration = 1.8 + index * 0.25;
  const delay    = index * 100;

  return (
    <span
      className="photo-card-floating-symbol"
      style={{
        left:       `${leftPct}%`,
        animation:  `symbolFloat ${duration}s ease-out ${delay}ms forwards`,
      }}
    >
      {symbol}
    </span>
  );
}

function CornerBracket({ position, expanded }) {
  const isTopRight = position === "topRight";

  return (
    <div
      className={`photo-card-corner-bracket ${isTopRight ? "top-right" : "bottom-left"}`}
      style={{
        width:  expanded ? 36 : 26,
        height: expanded ? 36 : 26,
      }}
    />
  );
}