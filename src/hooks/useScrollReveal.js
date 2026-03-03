import { useState, useEffect, useRef } from "react";

/**
 * Fires `visible = true` once when the referenced element enters the viewport.
 * Disconnects the observer afterwards so it only triggers once.
 *
 * @param {number} threshold  0–1 — how much of the element must be visible (default 0.1)
 */
export function useScrollReveal(threshold = 0.1) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [elementRef, isVisible];
}