import { Github, ExternalLink } from "lucide-react";
import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import { PROJECTS } from "../../../constants/data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <Reveal>
          <SectionLabel label="Projects" />
          <AnimatedHeading text="Selected" highlight="work" />
        </Reveal>

        <div className="projects-grid">
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
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" data-interactive className="project-link">
                <Github size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" data-interactive className="project-link project-link-accent">
                <ExternalLink size={15} />
              </a>
            )}
          </div>
      </div>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tech-list">
        {project.stack.map((tech) => (
          <span key={tech} className="project-tech-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}