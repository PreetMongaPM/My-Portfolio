import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import SIcon from "../../ui/SIcon/SIcon";
import { SKILLS } from "../../../constants/data";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <Reveal>
          <SectionLabel  label="Skills" />
          <AnimatedHeading text="What I" highlight="work with" />
        </Reveal>

        <div className="skills-grid">
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
    <div className="skill-column">
      <p className="skill-category-title">
        {category}
      </p>
      <div className="skill-list">
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
    <div className="skill-row">
      <SIcon name={skill.icon} size={17} color={skill.color} />
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}