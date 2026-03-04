import { useEffect, useRef } from "react";
import "./MagicCursor.css";

function createParticle(x, y) {
  return {
    x,
    y,
    vx:    (Math.random() - 0.5) * 2.5,
    vy:    (Math.random() - 0.5) * 2.5 - 1.2,
    life:  1,
    decay: 0.04 + Math.random() * 0.04,
    size:  1.5 + Math.random() * 2.5,
    hue:   150 + Math.random() * 40,
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

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }

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

    const tick = () => {
      orbPos.current.x += (mouse.current.x - orbPos.current.x) * 0.1;
      orbPos.current.y += (mouse.current.y - orbPos.current.y) * 0.1;

      if (orbRef.current) {
        const orbSize = parseFloat(orbRef.current.style.width) || 36;
        orbRef.current.style.transform = `translate(${orbPos.current.x - orbSize / 2}px, ${orbPos.current.y - orbSize / 2}px)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0);

      for (const p of particles.current) {
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy -= 0.05;
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

  return (
    <>
      <canvas ref={canvasRef} className="magic-cursor-canvas" />
      <div ref={dotRef} className="magic-cursor-dot" />
      <div ref={orbRef} className="magic-cursor-orb" />
    </>
  );
}