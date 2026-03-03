import { Download, FileText } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AnimatedHeading from "../ui/AnimatedHeading";
import { ACCENT, ACCENT_DIM, ACCENT_BORDER, SURFACE, BORDER, FONT_DISPLAY, FONT_BODY, RADIUS_MD } from "../../constants/theme";
import { RESUME_HIGHLIGHTS, RESUME_BIO, PERSONAL } from "../../constants/data";

export default function Resume() {
  const handleDownload = () => {
    const link    = document.createElement("a");
    link.href     = PERSONAL.resumeUrl;
    link.download = "JohnDoe_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" style={{ padding: "100px 2.5rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel label="Resume" />
          <AnimatedHeading text="Download my" highlight="CV" />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start", marginTop: 56 }}>
          {/* Stats + Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {RESUME_HIGHLIGHTS.map((item, i) => (
                <Reveal key={i} delay={i * 100} from="scale">
                  <StatHighlight item={item} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: RADIUS_MD, padding: 24 }}>
                <p style={{ fontFamily: FONT_BODY, fontSize: 14, color: "rgba(255,255,255,0.38)", lineHeight: 1.85, margin: 0 }}>{RESUME_BIO}</p>
              </div>
            </Reveal>
          </div>

          {/* PDF Preview Card */}
          <Reveal delay={200} from="right">
            <PdfPreviewCard onDownload={handleDownload} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatHighlight({ item }) {
  return (
    <div
      style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: RADIUS_MD, padding: "26px 24px", transition: "all 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_BORDER; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER;        e.currentTarget.style.transform = "none"; }}
    >
      <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: ACCENT, margin: "0 0 6px", letterSpacing: "-0.04em", lineHeight: 1 }}>{item.value}</p>
      <p style={{ fontFamily: FONT_BODY, fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>{item.label}</p>
    </div>
  );
}

const MOCK_PDF_LINES = [
  { w: "55%", h: 11, mb: 18, accent: false, op: 0.22 },
  { w: "38%", h: 7,  mb: 26, accent: false, op: 0.12 },
  { w: "44%", h: 7,  mb: 8,  accent: true,  op: 0.5  },
  { w: "90%", h: 5,  mb: 5,  accent: false, op: 0.09 },
  { w: "80%", h: 5,  mb: 5,  accent: false, op: 0.09 },
  { w: "74%", h: 5,  mb: 22, accent: false, op: 0.09 },
  { w: "42%", h: 7,  mb: 8,  accent: true,  op: 0.45 },
  { w: "88%", h: 5,  mb: 5,  accent: false, op: 0.07 },
  { w: "68%", h: 5,  mb: 0,  accent: false, op: 0.07 },
];

function PdfPreviewCard({ onDownload }) {
  return (
    <div style={{ background: SURFACE, border: `1px solid ${ACCENT_BORDER}`, borderRadius: RADIUS_MD, overflow: "hidden", boxShadow: "0 0 60px rgba(52,211,153,0.05)" }}>
      {/* Mock preview */}
      <div style={{ background: "rgba(255,255,255,0.025)", padding: "26px 22px", borderBottom: "1px solid rgba(255,255,255,0.05)", minHeight: 260, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 22 }}>
          <FileText size={13} color={ACCENT} />
          <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", textTransform: "uppercase" }}>JohnDoe_Resume.pdf</span>
        </div>
        {MOCK_PDF_LINES.map((line, i) => (
          <div key={i} style={{ width: line.w, height: line.h, background: line.accent ? `rgba(52,211,153,${line.op})` : `rgba(255,255,255,${line.op})`, borderRadius: 3, marginBottom: line.mb }} />
        ))}
        <div style={{ position: "absolute", bottom: 18, right: 18, opacity: 0.07 }}><FileText size={60} color={ACCENT} /></div>
      </div>

      {/* Download area */}
      <div style={{ padding: "18px 22px" }}>
        <p style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, color: "#f0f0f0", margin: "0 0 3px" }}>John Doe — Resume</p>
        <p style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(255,255,255,0.22)", margin: "0 0 14px" }}>Updated Jan 2025 · PDF · 1 page</p>
        <button
          onClick={onDownload}
          data-interactive
          style={{ width: "100%", background: ACCENT, color: "#080808", border: "none", cursor: "none", fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "13px 0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#6ee7b7"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(52,211,153,0.3)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = ACCENT;    e.currentTarget.style.transform = "none";          e.currentTarget.style.boxShadow = "none"; }}
        >
          <Download size={13} /> Download PDF
        </button>
      </div>
    </div>
  );
}
