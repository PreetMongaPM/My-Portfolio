import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import { EXPERIENCE } from "../../../constants/data";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <Reveal>
          <SectionLabel  label="Experience" />
          <AnimatedHeading text="Where I've" highlight="worked" />
        </Reveal>

        <div className="experience-list">
          {EXPERIENCE.map((job, index) => (
            <Reveal key={index} delay={index * 100} from="bottom">
              <ExperienceRow job={job} isLast={index === EXPERIENCE.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ job, isLast }) {
  return (
    <div className={`experience-row ${isLast ? "last" : ""}`}>
      <div>
        <p className="experience-period">{job.period}</p>
        <p className="experience-company">{job.company}</p>
      </div>
      <div>
        <p className="experience-role">{job.role}</p>
        <ul className="experience-bullets">
          {job.bullets.map((bullet, i) => (
            <Reveal key={i} delay={i * 60} from="left">
              <li className="experience-bullet-item">
                <span className="experience-bullet-icon">◆</span>
                <span className="experience-bullet-text">{bullet}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}