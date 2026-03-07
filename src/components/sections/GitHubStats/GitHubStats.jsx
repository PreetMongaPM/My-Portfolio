import { ExternalLink } from "lucide-react";
import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import SIcon from "../../ui/SIcon/SIcon";
import { PERSONAL } from "../../../constants/data";
import "./GitHubStats.css";

const USERNAME = PERSONAL.socials.github.replace("https://github.com/", "");

const STATS_URL  = `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${USERNAME}&theme=transparent`;
const LANGS_URL  = `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${USERNAME}&theme=transparent`;
const STREAK_URL = `https://streak-stats.demolab.com?user=${USERNAME}&hide_border=true&theme=transparent&ring=34d399&fire=34d399&currStreakLabel=34d399&sideLabels=707070&dates=707070&stroke=ffffff10&sideNums=f0f0f0&currStreakNum=34d399`;
const GRAPH_URL  = `https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&bg_color=080808&color=34d399&line=34d399&point=ffffff&area=true&area_color=34d39915&hide_border=true&custom_title=Contribution%20Activity`;

export default function GitHubStats() {
  const profileUrl = `https://github.com/${USERNAME}`;

  return (
    <section id="github" className="gh-section">
      <div className="gh-container">

        <Reveal>
          <SectionLabel label="GitHub" />
          <AnimatedHeading text="Open Source" highlight="Activity" />
          <p className="gh-desc">
            Live stats pulled directly from GitHub —{" "}
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="gh-desc-link"
              data-interactive
            >
              @{USERNAME} ↗
            </a>
          </p>
        </Reveal>

        <div className="gh-grid-top">
          <Reveal delay={0} from="left">
            <GhCard className="gh-card-streak">
              <CardHeader icon="github" title="Streak Stats" href={profileUrl} />
              <img src={STREAK_URL} alt="GitHub streak" className="gh-img" />
            </GhCard>
          </Reveal>

          <Reveal delay={150} from="left">
            <GhCard className="gh-card-stats">
              <CardHeader icon="github" title="Overall Stats" href={profileUrl} />
              <img src={STATS_URL} alt="GitHub stats" className="gh-img" />
            </GhCard>
          </Reveal>

          <Reveal delay={300} from="left">
            <GhCard className="gh-card-langs">
              <CardHeader icon="github" title="Top Languages" href={profileUrl} />
              <img src={LANGS_URL} alt="Top languages" className="gh-img" />
            </GhCard>
          </Reveal>
        </div>

        <Reveal delay={200} from="bottom">
          <GhCard className="gh-card-graph">
            <CardHeader icon="github" title="Contribution Graph" href={profileUrl} />
            <img src={GRAPH_URL} alt="GitHub contribution graph" className="gh-img gh-img-graph" />
          </GhCard>
        </Reveal>

        <Reveal delay={400} from="bottom">
          <div className="gh-footer">
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              data-interactive
              className="gh-profile-btn"
            >
              <SIcon name="github" size={15} color="#080808" />
              View GitHub Profile
              <ExternalLink size={13} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function GhCard({ children, className = "" }) {
  return (
    <div className={`gh-card ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ icon, title, href }) {
  return (
    <div className="gh-card-header">
      <SIcon name={icon} size={15} color="#f0f0f0" />
      <span className="gh-card-title">{title}</span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        data-interactive
        className="gh-card-link"
        aria-label={`Open ${title}`}
      >
        <ExternalLink size={12} />
      </a>
    </div>
  );
}
