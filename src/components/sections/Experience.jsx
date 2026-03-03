import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import { ACCENT, FONT_DISPLAY, FONT_BODY } from "../../constants/theme";
import { EXPERIENCE } from "../../constants/data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 2.5rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel  label="Experience" />
          <AnimatedHeading text="Where I've" highlight="worked" />
        </Reveal>

        <div style={{ marginTop: 56 }}>
          {EXPERIENCE.map((job, index) => (
            <Reveal key={index} delay={index * 100} from="bottom">
              <ExperienceRow job={job} index={index} isLast={index === EXPERIENCE.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ job, isLast }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, padding: "36px 0", borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)" }}>
      <div>
        <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: "rgba(255,255,255,0.25)", margin: "0 0 8px", letterSpacing: "0.05em" }}>{job.period}</p>
        <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: ACCENT, margin: 0 }}>{job.company}</p>
      </div>
      <div>
        <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 18, color: "#f0f0f0", margin: "0 0 18px", letterSpacing: "-0.015em" }}>{job.role}</p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {job.bullets.map((bullet, i) => (
            <Reveal key={i} delay={i * 60} from="left">
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: ACCENT, marginTop: 7, fontSize: 5, flexShrink: 0 }}>◆</span>
                <span style={{ fontFamily: FONT_BODY, fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.78 }}>{bullet}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}