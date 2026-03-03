import { Github, ExternalLink } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import { ACCENT, ACCENT_DIM, ACCENT_BORDER, SURFACE, BORDER, FONT_DISPLAY, FONT_BODY, RADIUS_MD } from "../../constants/theme";
import { PROJECTS } from "../../constants/data";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 2.5rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel label="Projects" />
          <AnimatedHeading text="Selected" highlight="work" />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18, marginTop: 56 }}>
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={index * 100} from={index % 2 === 0 ? "left" : "right"}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: RADIUS_MD, padding: 30, display: "flex", flexDirection: "column", height: "100%", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_BORDER; e.currentTarget.style.background = ACCENT_DIM; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(52,211,153,0.08)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = SURFACE; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 19, color: "#f0f0f0", margin: 0, letterSpacing: "-0.02em" }}>{project.title}</h3>
        <div style={{ display: "flex", gap: 12 }}>
          <a href={project.repoUrl} data-interactive style={{ color: "rgba(255,255,255,0.28)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}><Github size={15} /></a>
          <a href={project.liveUrl} data-interactive style={{ color: ACCENT }}><ExternalLink size={15} /></a>
        </div>
      </div>
      <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "rgba(255,255,255,0.38)", lineHeight: 1.78, margin: "0 0 20px", flex: 1 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map((tech) => (
          <span key={tech} style={{ fontFamily: FONT_BODY, fontSize: 11, color: ACCENT, background: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}`, borderRadius: 4, padding: "3px 10px", letterSpacing: "0.04em" }}>{tech}</span>
        ))}
      </div>
    </div>
  );
}