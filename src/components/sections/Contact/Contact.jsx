import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import { PERSONAL } from "../../../constants/data";
import "./Contact.css";

const SOCIAL_LINKS = [
  { label: "GitHub",   icon: <Github   size={13} />, href: (s) => s.github   },
  { label: "LinkedIn", icon: <Linkedin size={13} />, href: (s) => s.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <Reveal from="scale">
          <ContactHero />
        </Reveal>

        <Reveal delay={200}>
          <Footer />
        </Reveal>

      </div>
    </section>
  );
}

function ContactHero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-hero">
      <div aria-hidden className="contact-glow" />

      <div className="contact-label-wrapper">
        <SectionLabel label="Contact" />
      </div>

      <AnimatedHeading text="Let's build something" highlight="great together." style={{ fontSize: "clamp(34px, 5vw, 56px)", textAlign: "center" }} />

      <Reveal delay={300}>
        <p className="contact-desc">
        Interested in working together or discussing an opportunity? My inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={450}>
        <div className="contact-actions">
          <EmailButton email={PERSONAL.email} />
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.label} label={social.label} icon={social.icon} href={social.href(PERSONAL.socials)} />
          ))}
        </div>
      </Reveal>
      <Reveal delay={550}>
        <div className="contact-direct-email">
          <span className="contact-direct-email-text">Or reach out directly at</span>
          <div className="contact-email-wrapper">
            <a href={`mailto:${PERSONAL.email}`} className="contact-direct-email-link">
              {PERSONAL.email}
            </a>
            <button 
              onClick={handleCopy} 
              className="copy-email-btn" 
              title="Copy to clipboard"
              data-interactive
            >
              {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function EmailButton({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      data-interactive
      className="email-btn"
    >
      <Mail size={13} /> Send Email
    </a>
  );
}

function SocialButton({ label, icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-interactive
      className="social-btn"
    >
      {icon} {label}
    </a>
  );
}

function Footer() {
  return (
    <div className="contact-footer">
      <span className="footer-logo">
        PM<span className="footer-logo-dot">.</span>
      </span>
      <span className="footer-copy">
        © 2026 Preet Monga — Built with Love
      </span>
    </div>
  );
}
