import { useScrollReveal } from "../../hooks/useScrollReveal";
import { EASE_SPRING } from "../../constants/theme";

const INITIAL_TRANSFORMS = {
  bottom: (d) => `translateY(${d}px)`,
  left:   (d) => `translateX(-${d}px)`,
  right:  (d) => `translateX(${d}px)`,
  scale:  (d) => `translateY(${d * 0.5}px) scale(0.96)`,
};

/**
 * Wraps children in a scroll-triggered reveal animation.
 *
 * @param {React.ReactNode} children
 * @param {number}  delay     Animation delay in ms (for staggering siblings)
 * @param {string}  from      Direction: "bottom" | "left" | "right" | "scale"
 * @param {number}  distance  Distance in px to travel from start position
 */
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
        transition: `opacity 0.85s ${EASE_SPRING} ${delay}ms, transform 0.85s ${EASE_SPRING} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
