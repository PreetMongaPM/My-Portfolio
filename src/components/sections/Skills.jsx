import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import SIcon from "../ui/SIcon";
import { ACCENT, ACCENT_DIM, ACCENT_BORDER, SURFACE, BORDER, FONT_DISPLAY, FONT_BODY, RADIUS_MD } from "../../constants/theme";
import { SKILLS } from "../../constants/data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 2.5rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel  label="Skills" />
          <AnimatedHeading text="What I" highlight="work with" />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56 }}>
          {Object.entries(SKILLS).map(([category, items], colIndex) => (
            <Reveal key={category} delay={colIndex * 120} from="bottom">
              <SkillColumn category={category} items={items} colIndex={colIndex} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ category, items, colIndex }) {
  return (
    <div
      style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: RADIUS_MD, padding: "28px 24px", transition: "border-color 0.3s, background 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_BORDER; e.currentTarget.style.background = ACCENT_DIM; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER;        e.currentTarget.style.background = SURFACE; }}
    >
      <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>
        {category}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((skill, rowIndex) => (
          <Reveal key={skill.name} delay={colIndex * 120 + rowIndex * 50} from="left">
            <SkillRow skill={skill} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function SkillRow({ skill }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_BORDER; e.currentTarget.style.background = "rgba(52,211,153,0.05)"; e.currentTarget.style.transform = "translateX(4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "none"; }}
    >
      <SIcon name={skill.icon} size={17} color={skill.color} />
      <span style={{ fontFamily: FONT_BODY, fontSize: 14, color: "rgba(255,255,255,0.62)" }}>{skill.name}</span>
    </div>
  );
}