import { useState, useEffect } from "react";

/**
 * Returns the `id` of the section currently most visible in the viewport.
 * Used to highlight the active nav link as the user scrolls.
 *
 * @param {string[]} sectionIds  Array of element IDs to observe (lowercase)
 * @param {number}   threshold   IntersectionObserver threshold (default 0.3)
 */
export function useActiveSection(sectionIds, threshold = 0.3) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return activeSection;
}