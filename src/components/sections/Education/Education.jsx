import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import { EDUCATION } from "../../../constants/data";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <Reveal>
          <SectionLabel  label="Education" />
          <AnimatedHeading text="Degree &" highlight="Exams" />
        </Reveal>

        <div className="education-grid">
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
    <div className="education-card">
      <p className="education-year">{item.year}</p>
      <p className="education-degree">{item.degree}</p>
      <p className="education-school">{item.school}</p>
      <p className="education-note">{item.note}</p>
    </div>
  );
}