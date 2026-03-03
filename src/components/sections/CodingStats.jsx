import { useEffect, useState } from "react";
import { ExternalLink, Code2, Trophy, Zap, Target } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import SIcon from "../ui/SIcon";
import {
  ACCENT,
  ACCENT_DIM,
  ACCENT_BORDER,
  SURFACE,
  BORDER,
  FONT_DISPLAY,
  FONT_BODY,
  RADIUS_MD,
  EASE_SPRING,
} from "../../constants/theme";
import { CODING_PROFILES } from "../../constants/data";

/**
 * CodingStats section — aggregates your competitive programming presence.
 *
 * What it shows:
 *  1. Codolio profile card  — links to your all-in-one portfolio
 *  2. GitHub stats image    — via github-readme-stats (Vercel hosted, no CORS issues)
 *  3. LeetCode stats image  — via leetcard.jacoblin.com
 *  4. Codeforces live data  — fetched from their public REST API
 *  5. Platform quick-links  — CodeChef, HackerRank, etc.
 *
 * ── How to connect your real profiles ────────────────────────────────────────
 * Open src/constants/data.js and update CODING_PROFILES with your usernames.
 */
export default function CodingStats() {
  const sectionNumber = "03"; // Update if section order changes

  return (
    <section id="coding" style={{ padding: "100px 2.5rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel label="Coding" />
          <AnimatedHeading text="Competitive" highlight="Programming" />
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: 15,
              color: "rgba(255,255,255,0.35)",
              margin: "16px 0 0",
              maxWidth: 520,
              lineHeight: 1.8,
            }}
          >
            Tracked across platforms via{" "}
            <a
              href={`https://codolio.com/profile/${CODING_PROFILES.codolio}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: ACCENT, textDecoration: "none" }}
              data-interactive
            >
              Codolio ↗
            </a>
          </p>
        </Reveal>

        {/* ── Row 1: Codolio hero card + GitHub stats ──────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 56,
          }}
        >
          <Reveal delay={0} from="left">
            <CodolioCard username={CODING_PROFILES.codolio} />
          </Reveal>
          <Reveal delay={200} from="left">
            <LeetCodeCard username={CODING_PROFILES.leetcode} />
          </Reveal>
        </div>

        {/* ── Row 2: LeetCode + Codeforces ─────────────────────────────── */}
        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 20,
          }}
        >
          
          <Reveal delay={300} from="right">
            <CodeforcesCard username={CODING_PROFILES.codeforces} />
          </Reveal>
        </div> */}

        {/* ── Row 3: Platform links ────────────────────────────────────── */}
        <Reveal delay={400} from="bottom">
          <PlatformLinks />
        </Reveal>
      </div>
    </section>
  );
}

// ─── Codolio Card ─────────────────────────────────────────────────────────────

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
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: 13,
              color: ACCENT,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}
          >
            All Platforms
          </p>
          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 800,
              fontSize: 26,
              color: "#f0f0f0",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Codolio Profile
          </p>
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              margin: "8px 0 0",
            }}
          >
            LeetCode · Codeforces · CodeChef · GeeksForGeeks — all in one place
          </p>
        </div>
      </div>

      {/* Decorative platform icons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {[
          { icon: "leetcode", color: "#FFA116" },
          { icon: "codeforces", color: "#1F8ACB" },
          { icon: "codechef", color: "#5B4638" },
          { icon: "geeksforgeeks", color: "#2F8D46" },
          { icon: "hackerrank", color: "#2EC866" },
        ].map((p) => (
          <div
            key={p.icon}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(255,255,255,0.04)",
              border: BORDER,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SIcon name={p.icon} size={18} color={p.color} />
          </div>
        ))}
      </div>

      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        data-interactive
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: ACCENT,
          color: "#080808",
          fontFamily: FONT_DISPLAY,
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "11px 20px",
          borderRadius: 8,
          alignSelf: "flex-start",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#6ee7b7";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = ACCENT;
          e.currentTarget.style.transform = "none";
        }}
      >
        View on Codolio <ExternalLink size={13} />
      </a>
    </StatCard>
  );
}

// ─── GitHub Stats ─────────────────────────────────────────────────────────────

// function GitHubStatsCard({ username }) {
//   // Uses github-readme-stats — hosted on Vercel, works without CORS issues
//   const statsUrl = `https://git-hub-stats-card-generator.vercel.app/api/svg?username=${username}`;
//   //   const streakUrl = `https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME`;

//   return (
//     <StatCard>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 10,
//           marginBottom: 16,
//         }}
//       >
//         <SIcon name="github" size={16} color="#f0f0f0" />
//         <p
//           style={{
//             fontFamily: FONT_DISPLAY,
//             fontWeight: 700,
//             fontSize: 13,
//             color: "rgba(255,255,255,0.55)",
//             letterSpacing: "0.08em",
//             textTransform: "uppercase",
//             margin: 0,
//           }}
//         >
//           GitHub Stats
//         </p>
//         <a
//           href={`https://github.com/${username}`}
//           target="_blank"
//           rel="noreferrer"
//           data-interactive
//           style={{
//             marginLeft: "auto",
//             color: "rgba(255,255,255,0.28)",
//             transition: "color 0.2s",
//           }}
//           onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.color = "rgba(255,255,255,0.28)")
//           }
//         >
//           <ExternalLink size={13} />
//         </a>
//       </div>
//       <img
//         src={statsUrl}
//         alt="GitHub stats"
//         style={{ width: "100%", borderRadius: 8 }}
//       />
//     </StatCard>
//   );
// }

// ─── LeetCode Card ────────────────────────────────────────────────────────────

function LeetCodeCard({ username }) {
  // leetcard.jacoblin.com — community-hosted LeetCode stats card
  const cardUrl = `https://leetcard.jacoblin.cool/${username}?ext=heatmap`;

  return (
    <StatCard>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <SIcon name="leetcode" size={16} color="#FFA116" />
        <p
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 700,
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          LeetCode
        </p>
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noreferrer"
          data-interactive
          style={{
            marginLeft: "auto",
            color: "rgba(255,255,255,0.28)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.28)")
          }
        >
          <ExternalLink size={13} />
        </a>
      </div>
      <img
        src={cardUrl}
        alt="LeetCode stats"
        style={{ width: "100%", borderRadius: 8 }}
      />
    </StatCard>
  );
}

// ─── Platform Quick-Links ─────────────────────────────────────────────────────

const EXTRA_PLATFORMS = [
  { name: "CodeForces", icon: "codeforces", key: "codechef", color: "default" },
  { name: "CodeChef", icon: "codechef", color: "#5B4638", key: "codechef" },
  {
    name: "GeeksForGeeks",
    icon: "geeksforgeeks",
    color: "#2F8D46",
    key: "gfg",
  },
  {
    name: "HackerRank",
    icon: "hackerrank",
    color: "#2EC866",
    key: "hackerrank",
  },
];

function PlatformLinks() {
  return (
    <div style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
      {EXTRA_PLATFORMS.map((p) => (
        <a
          key={p.key}
          href="#" /* Replace with your actual profile URL */
          target="_blank"
          rel="noreferrer"
          data-interactive
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 8,
            padding: "12px 18px",
            textDecoration: "none",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = ACCENT_BORDER;
            e.currentTarget.style.background = ACCENT_DIM;
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = BORDER;
            e.currentTarget.style.background = SURFACE;
            e.currentTarget.style.transform = "none";
          }}
        >
          <SIcon name={p.icon} size={16} color={p.color} />
          <span
            style={{
              fontFamily: FONT_BODY,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {p.name}
          </span>
          <ExternalLink size={11} color="rgba(255,255,255,0.25)" />
        </a>
      ))}
    </div>
  );
}

// ─── Shared UI Primitives ─────────────────────────────────────────────────────

function StatCard({ children, style = {}, glowOnHover }) {
  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: RADIUS_MD,
        padding: "24px",
        transition: "border-color 0.3s, box-shadow 0.3s",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = ACCENT_BORDER;
        if (glowOnHover)
          e.currentTarget.style.boxShadow = "0 0 40px rgba(52,211,153,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = BORDER;
        e.currentTarget.style.boxShadow = "none";
      }}
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
          color: ACCENT,
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: FONT_DISPLAY,
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
          fontFamily: FONT_BODY,
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
