/**
 * Fixed full-screen SVG noise overlay.
 * Adds depth and warmth to the flat dark background.
 * pointer-events: none so it never blocks interactions.
 */
export default function Grain() {
  // Inline SVG noise via data URI — no extra file needed
  const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

  return (
    <div
      aria-hidden="true"
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          0,
        pointerEvents:   "none",
        backgroundImage: noiseSvg,
        opacity:         0.35,
      }}
    />
  );
}