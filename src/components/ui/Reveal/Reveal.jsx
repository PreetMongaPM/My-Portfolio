import { useScrollReveal } from "../../../hooks/useScrollReveal";

const INITIAL_TRANSFORMS = {
  bottom: (d) => `translateY(${d}px)`,
  left:   (d) => `translateX(-${d}px)`,
  right:  (d) => `translateX(${d}px)`,
  scale:  (d) => `translateY(${d * 0.5}px) scale(0.96)`,
};

export default function Reveal({ children, delay = 0, from = "bottom", distance = 30 }) {
  const [ref, isVisible] = useScrollReveal();

  const hiddenTransform  = INITIAL_TRANSFORMS[from]?.(distance) ?? INITIAL_TRANSFORMS.bottom(distance);
  const visibleTransform = "none";

  return (
    <div
      ref={ref}
      style={{
        opacity:    isVisible ? 1 : 0,
        transform:  isVisible ? visibleTransform : hiddenTransform,
        transition: `opacity 0.85s var(--ease-spring) ${delay}ms, transform 0.85s var(--ease-spring) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
