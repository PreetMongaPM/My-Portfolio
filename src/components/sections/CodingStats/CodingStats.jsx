import { ExternalLink } from "lucide-react";
import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import SIcon from "../../ui/SIcon/SIcon";
import { CODING_PROFILES } from "../../../constants/data";
import "./CodingStats.css";
import codolio from "../../../assets/images/Codolio.png";

export default function CodingStats() {

  return (
    <section id="coding" className="coding-section">
      <div className="coding-container">
        <Reveal>
          <SectionLabel label="Coding" />
          <AnimatedHeading text="Competitive" highlight="Programming" />
          <p className="coding-desc">
            Tracked across platforms via{" "}
            <a
              href={`https://codolio.com/profile/${CODING_PROFILES.codolio}`}
              target="_blank"
              rel="noreferrer"
              className="coding-desc-link"
              data-interactive
            >
              Codolio ↗
            </a>
          </p>
        </Reveal>

        <div className="coding-grid-row-1">
          <Reveal delay={0} from="left">
            <CodolioCard username={CODING_PROFILES.codolio} />
          </Reveal>
          <Reveal delay={200} from="left">
            <LeetCodeCard username={CODING_PROFILES.leetcode} />
          </Reveal>
        </div>

        <Reveal delay={400} from="bottom">
          <PlatformLinks />
        </Reveal>
      </div>
    </section>
  );
}

function CodolioCard({ username }) {
  const profileUrl = `https://codolio.com/profile/${username}`;

  return (
    <StatCard
      glowOnHover
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 220,
      }}
    >
      <div className="codolio-card-inner">
        <div>
          <p className="codolio-label">
            All Platforms
          </p>
          <p className="codolio-title">
            Codolio Profile
          </p>
          <img src={codolio} alt="" width={160} height={160} style={{ borderRadius: 10 }} className="codolio-img" onClick={() => window.open(profileUrl, "_blank")} />
          <p className="codolio-desc">
            LeetCode · Codeforces · CodeChef · GeeksForGeeks — all in one place
          </p>
        </div>
      </div>

      <div className="codolio-icons">
        {[
          { icon: "leetcode", color: "#FFA116" },
          { icon: "codeforces", color: "#1F8ACB" },
          { icon: "codechef", color: "#5B4638" },
          { icon: "geeksforgeeks", color: "#2F8D46" },
          { icon: "hackerrank", color: "#2EC866" },
        ].map((p) => (
          <div key={p.icon} className="codolio-icon-box">
            <SIcon name={p.icon} size={18} color={p.color} />
          </div>
        ))}
      </div>

      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        data-interactive
        className="codolio-btn"
      >
        View on Codolio <ExternalLink size={13} />
      </a>
    </StatCard>
  );
}

function LeetCodeCard({ username }) {
  const cardUrl = `https://leetcard.jacoblin.cool/${username}?theme=dark&ext=heatmap`;

  return (
    <StatCard>
      <div className="leetcode-header">
        <SIcon name="leetcode" size={16} color="#FFA116" />
        <p className="leetcode-title">
          LeetCode
        </p>
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noreferrer"
          data-interactive
          className="leetcode-link"
        >
          <ExternalLink size={13} />
        </a>
      </div>
      <img
        src={cardUrl}
        alt="LeetCode stats"
        className="leetcode-img"
      />
    </StatCard>
  );
}

const EXTRA_PLATFORMS = [
  {
    name: "CodeForces",
    icon: "codeForces",
    color: "#1F8ACB",
    href: (p) => `https://codeforces.com/profile/${p.codeforces}`,
  },
  {
    name: "CodeChef",
    icon: "codechef",
    color: "#5B4638",
    href: (p) => `https://www.codechef.com/users/${p.codechef}`,
  },
  {
    name: "GeeksForGeeks",
    icon: "geeksforgeeks",
    color: "#2F8D46",
    href: (p) => `https://www.geeksforgeeks.org/profile/${p.geeksforgeeks}/`,
  },
];

function PlatformLinks() {
  return (
    <div className="platform-links-container">
      {EXTRA_PLATFORMS.map((p) => (
        <a
          key={p.name}
          href={p.href(CODING_PROFILES)}
          target="_blank"
          rel="noreferrer"
          data-interactive
          className="platform-link-btn"
        >
          <SIcon name={p.icon} size={16} color={p.color} />
          <span className="platform-link-text">
            {p.name}
          </span>
          <ExternalLink size={11} color="rgba(255,255,255,0.25)" />
        </a>
      ))}
    </div>
  );
}

function StatCard({ children, style = {}, glowOnHover }) {
  return (
    <div
      className={`stat-card ${glowOnHover ? 'glow-on-hover' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}

function MiniStat({ icon, label, value }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        borderRadius: 8,
        padding: "12px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 6,
          color: "var(--accent)",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 20,
          color: "#f0f0f0",
          margin: 0,
        }}
      >
        {value ?? "—"}
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "rgba(255,255,255,0.3)",
          margin: "4px 0 0",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function LoadingPulse() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "8px 0",
      }}
    >
      {[70, 90, 55].map((w, i) => (
        <div
          key={i}
          style={{
            height: 12,
            width: `${w}%`,
            borderRadius: 4,
            background: "rgba(255,255,255,0.06)",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      ))}
    </div>
  );
}
