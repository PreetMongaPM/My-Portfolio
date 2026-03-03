import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import { ACCENT, ACCENT_BORDER, SURFACE, BORDER, FONT_DISPLAY, FONT_BODY, RADIUS_MD } from "../../constants/theme";
import { EDUCATION } from "../../constants/data";

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 2.5rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel  label="Education" />
          <AnimatedHeading text="Background &" highlight="Certs" />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 56 }}>
          {EDUCATION.map((item, i) => (
            <Reveal key={i} delay={i * 120} from="scale">
              <EducationCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item }) {
  return (
    <div
      style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: RADIUS_MD, padding: "26px 22px", transition: "all 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_BORDER; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER;        e.currentTarget.style.transform = "none"; }}
    >
      <p style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(255,255,255,0.22)", margin: "0 0 10px", letterSpacing: "0.08em" }}>{item.year}</p>
      <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 15, color: "#f0f0f0", margin: "0 0 7px", letterSpacing: "-0.01em" }}>{item.degree}</p>
      <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: ACCENT, margin: "0 0 9px" }}>{item.school}</p>
      <p style={{ fontFamily: FONT_BODY, fontSize: 12, color: "rgba(255,255,255,0.22)", margin: 0 }}>{item.note}</p>
    </div>
  );
}