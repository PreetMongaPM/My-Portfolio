import { useActiveSection } from "./hooks/useActiveSection";
import { NAV_LINKS } from "./constants/data";
import { BG } from "./constants/theme";

import Grain from "./components/ui/Grain/Grain";
import MagicCursor from "./components/ui/MagicCursor/MagicCursor";
import NavBar from "./components/layout/NavBar/NavBar";

import Hero from "./components/sections/Hero/Hero";
import Skills from "./components/sections/Skills/Skills";
import CodingStats from "./components/sections/CodingStats/CodingStats";
import Resume from "./components/sections/Resume/Resume";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Education from "./components/sections/Education/Education";
import Contact from "./components/sections/Contact/Contact";


export default function App() {
  const sectionIds = NAV_LINKS.map((label) => label.toLowerCase());
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <Grain />
      <MagicCursor />

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
