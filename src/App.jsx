import { useActiveSection } from "./hooks/useActiveSection";
import { NAV_LINKS } from "./constants/data";
import { BG } from "./constants/theme";

// Layout
import Grain from "./components/ui/Grain";
import MagicCursor from "./components/ui/MagicCursor";
import NavBar from "./components/layout/NavBar";

// Sections — add/remove/reorder here to change the page structure
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import CodingStats from "./components/sections/CodingStats";
import Resume from "./components/sections/Resume";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

/**
 * Root App component.
 *
 * To add a new section:
 *  1. Create it in src/components/sections/
 *  2. Import it here
 *  3. Add its <id> string to NAV_LINKS in constants/data.js
 *  4. Drop it into the JSX below in the desired order
 */
export default function App() {
  // Tracks which section is currently in view for the navbar
  const sectionIds = NAV_LINKS.map((label) => label.toLowerCase());
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      {/* ── Global overlays ──────────────────────────────────────────────── */}
      <Grain />
      <MagicCursor />

      {/* ── Page shell ───────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: BG,
          minHeight: "100vh",
        }}
      >
        <NavBar activeSection={activeSection} />

        <main>
          <Hero />
          <Skills />
          <CodingStats />
          <Resume />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
