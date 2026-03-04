import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds, threshold = 0.3) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const ratioMap = useRef({});

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.current[entry.target.id] = entry.intersectionRatio;
        });

        const visible = sectionIds.filter(
          (id) => (ratioMap.current[id] ?? 0) >= threshold
        );

        if (visible.length > 0) {
          setActiveSection(visible[0]);
        } else {
          const best = sectionIds.reduce((prev, curr) =>
            (ratioMap.current[curr] ?? 0) > (ratioMap.current[prev] ?? 0)
              ? curr
              : prev
          );
          if ((ratioMap.current[best] ?? 0) > 0) {
            setActiveSection(best);
          }
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return activeSection;
}