import { Download, FileText } from "lucide-react";
import Reveal from "../../ui/Reveal/Reveal";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import AnimatedHeading from "../../ui/AnimatedHeading/AnimatedHeading";
import { RESUME_HIGHLIGHTS, RESUME_BIO, PERSONAL } from "../../../constants/data";
import "./Resume.css";

export default function Resume() {
  const handleDownload = () => {
    const link    = document.createElement("a");
    link.href     = PERSONAL.resumeUrl;
    link.download = "Preet_Monga_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <Reveal>
          <SectionLabel label="Resume" />
          <AnimatedHeading text="Download my" highlight="CV" />
        </Reveal>

        <div className="resume-grid">
          <div className="resume-left-col">
            <div className="resume-stats-grid">
              {RESUME_HIGHLIGHTS.map((item, i) => (
                <Reveal key={i} delay={i * 100} from="scale">
                  <StatHighlight item={item} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={400}>
              <div className="resume-bio-card">
                <p className="resume-bio-text">{RESUME_BIO}</p>
              </div>
            </Reveal>
          </div>

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
    <div className="stat-highlight-card">
      <p className="stat-value">{item.value}</p>
      <p className="stat-label">{item.label}</p>
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
    <div className="pdf-preview-card">
      <div className="pdf-mock-header">
        <div className="pdf-header-title">
          <FileText size={13} color="var(--accent)" />
          <span className="pdf-header-text">Preet_Monga_Resume.pdf</span>
        </div>
        {MOCK_PDF_LINES.map((line, i) => (
          <div key={i} style={{ width: line.w, height: line.h, background: line.accent ? `rgba(52,211,153,${line.op})` : `rgba(255,255,255,${line.op})`, borderRadius: 3, marginBottom: line.mb }} />
        ))}
        <div className="pdf-backdrop-icon"><FileText size={60} color="var(--accent)" /></div>
      </div>

      <div className="pdf-download-area">
        <p className="pdf-title">Preet Monga — Resume</p>
        <p className="pdf-meta">Updated Feb 2026 · PDF · 1 page</p>
        <button
          onClick={onDownload}
          data-interactive
          className="pdf-download-btn"
        >
          <Download size={13} /> Download PDF
        </button>
      </div>
    </div>
  );
}
