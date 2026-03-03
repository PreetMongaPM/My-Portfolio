import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import { ACCENT, ACCENT_DIM, ACCENT_BORDER, FONT_DISPLAY, FONT_BODY, RADIUS_LG } from "../../constants/theme";
import { PERSONAL } from "../../constants/data";

const SOCIAL_LINKS = [
  { label: "GitHub",   icon: <Github   size={13} />, href: (s) => s.github   },
  { label: "LinkedIn", icon: <Linkedin size={13} />, href: (s) => s.linkedin },
  { label: "Twitter",  icon: <Twitter  size={13} />, href: (s) => s.twitter  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 2.5rem 80px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

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
  return (
    <div style={{ textAlign: "center", padding: "80px 40px", background: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}`, borderRadius: RADIUS_LG, position: "relative", overflow: "hidden" }}>
      {/* Ambient glow center */}
      <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(52,211,153,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <SectionLabel label="Contact" />
      </div>

      <AnimatedHeading text="Let's build something" highlight="great together." style={{ fontSize: "clamp(34px, 5vw, 56px)", textAlign: "center" }} />

      <Reveal delay={300}>
        <p style={{ fontFamily: FONT_BODY, fontSize: 15, color: "rgba(255,255,255,0.32)", margin: "18px auto 44px", maxWidth: 380, lineHeight: 1.8 }}>
          Open to senior roles, consulting, and interesting side projects. I reply within 24 hours.
        </p>
      </Reveal>

      <Reveal delay={450}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <EmailButton email={PERSONAL.email} />
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.label} label={social.label} icon={social.icon} href={social.href(PERSONAL.socials)} />
          ))}
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
      style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ACCENT, color: "#080808", fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "13px 24px", borderRadius: 6, transition: "all 0.25s" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#6ee7b7"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(52,211,153,0.28)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = ACCENT;    e.currentTarget.style.transform = "none";          e.currentTarget.style.boxShadow = "none"; }}
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
      style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "transparent", color: "rgba(255,255,255,0.4)", fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "13px 20px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.25s" }}
      onMouseEnter={(e) => { e.currentTarget.style.color = "#f0f0f0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "none"; }}
    >
      {icon} {label}
    </a>
  );
}

function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 44, paddingTop: 26, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 15, color: "rgba(255,255,255,0.14)" }}>
        PM<span style={{ color: "rgba(52,211,153,0.28)" }}>.</span>
      </span>
      <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(255,255,255,0.14)", letterSpacing: "0.06em" }}>
        © 2026 Preet Monga — Built with Love
      </span>
    </div>
  );
}
