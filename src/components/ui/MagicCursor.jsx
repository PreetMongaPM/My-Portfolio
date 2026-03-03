import { useEffect, useRef } from "react";
import { ACCENT } from "../../constants/theme";

// ─── Particle ────────────────────────────────────────────────────────────────
function createParticle(x, y) {
  return {
    x,
    y,
    vx:    (Math.random() - 0.5) * 2.5,
    vy:    (Math.random() - 0.5) * 2.5 - 1.2,
    life:  1,
    decay: 0.04 + Math.random() * 0.04,
    size:  1.5 + Math.random() * 2.5,
    hue:   150 + Math.random() * 40,   // emerald–cyan range
  };
}

function drawParticle(ctx, p) {
  ctx.save();
  ctx.globalAlpha = Math.max(0, p.life);
  ctx.shadowBlur  = 6;
  ctx.shadowColor = `hsl(${p.hue}, 90%, 65%)`;
  ctx.fillStyle   = `hsl(${p.hue}, 90%, 72%)`;

  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
  ctx.fill();

  // Cross sparkle on larger particles
  if (p.size > 2.5) {
    ctx.globalAlpha  = Math.max(0, p.life * 0.6);
    ctx.strokeStyle  = `hsl(${p.hue}, 90%, 80%)`;
    ctx.lineWidth    = 0.8;
    ctx.beginPath();
    ctx.moveTo(p.x - p.size * 2, p.y); ctx.lineTo(p.x + p.size * 2, p.y);
    ctx.moveTo(p.x, p.y - p.size * 2); ctx.lineTo(p.x, p.y + p.size * 2);
    ctx.stroke();
  }

  ctx.restore();
}

// ─── Component ───────────────────────────────────────────────────────────────
/**
 * Three-layer custom cursor:
 *  1. Sharp 8px dot — snaps instantly to mouse
 *  2. Glowing orb   — lerps behind mouse (smooth lag)
 *  3. Canvas        — sparkle particles that burst on fast movement
 *
 * Orb scales up when hovering interactive elements (buttons / links).
 */
export default function MagicCursor() {
  const dotRef       = useRef(null);
  const orbRef       = useRef(null);
  const canvasRef    = useRef(null);
  const mouse        = useRef({ x: -300, y: -300 });
  const orbPos       = useRef({ x: -300, y: -300 });
  const lastPos      = useRef({ x: -300, y: -300 });
  const particles    = useRef([]);
  const rafHandle    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ── Mouse tracking ──────────────────────────────────────────────────────
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Dot snaps immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }

      // Spawn particles proportional to speed
      const dx    = e.clientX - lastPos.current.x;
      const dy    = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 3) {
        const count = Math.min(Math.floor(speed / 4), 6);
        for (let i = 0; i < count; i++) {
          particles.current.push(
            createParticle(
              e.clientX + (Math.random() - 0.5) * 12,
              e.clientY + (Math.random() - 0.5) * 12
            )
          );
        }
      }

      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    // ── Interactive element hover ────────────────────────────────────────────
    const onEnterInteractive = () => {
      if (!orbRef.current) return;
      orbRef.current.style.width   = "60px";
      orbRef.current.style.height  = "60px";
      orbRef.current.style.opacity = "0.55";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const onLeaveInteractive = () => {
      if (!orbRef.current) return;
      orbRef.current.style.width   = "36px";
      orbRef.current.style.height  = "36px";
      orbRef.current.style.opacity = "0.35";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const interactiveEls = document.querySelectorAll("button, a, [data-interactive]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    window.addEventListener("mousemove", onMouseMove);

    // ── Animation loop ───────────────────────────────────────────────────────
    const tick = () => {
      // Lerp orb toward mouse
      orbPos.current.x += (mouse.current.x - orbPos.current.x) * 0.1;
      orbPos.current.y += (mouse.current.y - orbPos.current.y) * 0.1;

      if (orbRef.current) {
        const orbSize = parseFloat(orbRef.current.style.width) || 36;
        orbRef.current.style.transform = `translate(${orbPos.current.x - orbSize / 2}px, ${orbPos.current.y - orbSize / 2}px)`;
      }

      // Draw and age particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0);

      for (const p of particles.current) {
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy -= 0.05;   // float upward
        p.life -= p.decay;
        drawParticle(ctx, p);
      }

      rafHandle.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      cancelAnimationFrame(rafHandle.current);
    };
  }, []);

  const sharedFixed = {
    position:      "fixed",
    top:           0,
    left:          0,
    pointerEvents: "none",
  };

  return (
    <>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ ...sharedFixed, zIndex: 9998 }} />

      {/* Sharp dot */}
      <div
        ref={dotRef}
        style={{
          ...sharedFixed,
          zIndex:     9999,
          width:      8,
          height:     8,
          borderRadius: "50%",
          background:  ACCENT,
          boxShadow:   `0 0 8px ${ACCENT}, 0 0 16px rgba(52,211,153,0.4)`,
          transition:  "opacity 0.2s",
          willChange:  "transform",
        }}
      />

      {/* Glowing orb — lags behind */}
      <div
        ref={orbRef}
        style={{
          ...sharedFixed,
          zIndex:     9997,
          width:      36,
          height:     36,
          borderRadius: "50%",
          border:      "1.5px solid rgba(52,211,153,0.5)",
          background:  "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
          boxShadow:   "0 0 20px rgba(52,211,153,0.15), inset 0 0 12px rgba(52,211,153,0.05)",
          opacity:     0.35,
          transition:  "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          willChange:  "transform",
        }}
      />
    </>
  );
}