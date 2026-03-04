import { useState, useEffect } from "react";
import { Download, Mail } from "lucide-react";
import PhotoCard from "../../ui/PhotoCard/PhotoCard";
import { PERSONAL } from "../../../constants/data";
import "./Hero.css";
import ProfilePhoto from "../../../assets/images/PM Formal.jpg";


export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delayMs, fromY = 20) => ({
    opacity:    isLoaded ? 1 : 0,
    transform:  isLoaded ? "none" : `translateY(${fromY}px)`,
    transition: `opacity 0.9s var(--ease-spring) ${delayMs}ms, transform 0.9s var(--ease-spring) ${delayMs}ms`,
  });

  const handleDownload = () => {
    const link     = document.createElement("a");
    link.href      = PERSONAL.resumeUrl;
    link.download  = "Preet_Monga_Resume.pdf";
    link.click();
  };

  const { first, last } = PERSONAL.name;

  return (
    <section id="about" className="hero-section">
      {/* Ambient background glows */}
      <AmbientGlow top="15%" right="8%"  size={500} />
      <AmbientGlow bottom="8%" left="-4%" size={320} opacity={0.04} />

      <div className="hero-grid">

        <div>
          <div className="hero-status-container" style={fadeIn(0)}>
            <span className="hero-status-dot" />
            <span className="hero-status-text">
              {PERSONAL.status}
            </span>
          </div>

          <div className="hero-name-container">
            <LetterByLetter text={first} className="hero-letter-default" color="var(--text-primary)"  isLoaded={isLoaded} startDelay={100} />
            <LetterByLetter text={last}  className="hero-letter-accent" color="var(--accent)"   isLoaded={isLoaded} startDelay={340} glowText />
          </div>
          <div style={fadeIn(600)}>
            <p className="hero-title">
              {PERSONAL.title}
            </p>
            <p className="hero-tagline">
              {PERSONAL.tagline}
            </p>
          </div>

          <div className="hero-ctas" style={fadeIn(780)}>
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

        <div style={fadeIn(400)}>
          <PhotoCard imageSrc={ProfilePhoto} />
        </div>
      </div>
    </section>
  );
}

function LetterByLetter({ text, color, isLoaded, startDelay, glowText }) {
  return (
    <div className="hero-letter-container">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{
            color,
            opacity:    isLoaded ? 1 : 0,
            transform:  isLoaded ? "none" : "translateY(30px) rotate(-4deg)",
            transition: `opacity 0.6s var(--ease-spring) ${startDelay + i * 65}ms, transform 0.6s var(--ease-spring) ${startDelay + i * 65}ms`,
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
  return (
    <button
      onClick={onClick}
      data-interactive
      className={`hero-button ${variant}`}
    >
      {icon}{label}
    </button>
  );
}

function AmbientGlow({ top, right, bottom, left, size = 400, opacity = 0.07 }) {
  return (
    <div
      aria-hidden
      className="ambient-glow"
      style={{
        top, right, bottom, left,
        width:         size,
        height:        size,
        background:    `radial-gradient(circle, rgba(52,211,153,${opacity}) 0%, transparent 65%)`,
      }}
    />
  );
}