import { useScrollReveal } from "../../../hooks/useScrollReveal";
import "./AnimatedHeading.css";

export default function AnimatedHeading({ text, highlight, style = {} }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  const mainWords      = text.trim().split(" ");
  const highlightWords = highlight ? highlight.trim().split(" ") : [];
  const allWords       = [...mainWords, ...highlightWords];

  return (
    <h2
      ref={ref}
      className="animated-heading"
      style={style}
    >
      {allWords.map((word, index) => {
        const isHighlighted = index >= mainWords.length;
        const delay         = index * 75;

        return (
          <span
            key={index}
            className={`animated-heading-word ${isHighlighted ? "highlight" : "default"}`}
            style={{
              opacity:     isVisible ? 1 : 0,
              transform:   isVisible ? "none" : "translateY(22px)",
              transition:  `opacity 0.6s var(--ease-spring) ${delay}ms, transform 0.6s var(--ease-spring) ${delay}ms`,
            }}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
}