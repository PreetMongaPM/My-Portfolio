import { ACCENT, FONT_DISPLAY, FONT_BODY } from "../../constants/theme";

/**
 * Small numbered label that sits above each section heading.
 * Example: "02 — Skills"
 *
 * @param {string} num    Section number, e.g. "02"
 * @param {string} label  Section name, e.g. "Skills"
 */
export default function SectionLabel({ num, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <span style={{ fontFamily: FONT_DISPLAY, fontSize: 11, color: ACCENT, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        {num} —
      </span>
      <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}