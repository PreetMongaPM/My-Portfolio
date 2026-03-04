import "./SectionLabel.css";

export default function SectionLabel({ num, label }) {
  return (
    <div className="section-label">
      <span className="section-label-num">
        {num} —
      </span>
      <span className="section-label-text">
        {label}
      </span>
    </div>
  );
}