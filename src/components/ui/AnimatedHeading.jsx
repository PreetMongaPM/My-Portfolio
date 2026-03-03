import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ACCENT, FONT_DISPLAY, EASE_SPRING } from "../../constants/theme";

/**
 * Section heading where each word animates in one after another on scroll.
 * The last N words matching `highlight` render in the accent color.
 *
 * @param {string} text        Main heading text
 * @param {string} highlight   Highlighted word(s) appended after text (accent color)
 * @param {object} style       Additional styles for the <h2>
 */
export default function AnimatedHeading({ text, highlight, style = {} }) {
  const [ref, isVisible] = useScrollReveal(0.2);

  const mainWords      = text.trim().split(" ");
  const highlightWords = highlight ? highlight.trim().split(" ") : [];
  const allWords       = [...mainWords, ...highlightWords];

  return (
    <h2
      ref={ref}
      style={{
        fontFamily:    FONT_DISPLAY,
        fontWeight:    800,
        fontSize:      "clamp(30px, 4vw, 46px)",
        letterSpacing: "-0.025em",
        lineHeight:    1.15,
        margin:        0,
        ...style,
      }}
    >
      {allWords.map((word, index) => {
        const isHighlighted = index >= mainWords.length;
        const delay         = index * 75;

        return (
          <span
            key={index}
            style={{
              display:    "inline-block",
              marginRight: "0.28em",
              color:       isHighlighted ? ACCENT : "#f0f0f0",
              opacity:     isVisible ? 1 : 0,
              transform:   isVisible ? "none" : "translateY(22px)",
              transition:  `opacity 0.6s ${EASE_SPRING} ${delay}ms, transform 0.6s ${EASE_SPRING} ${delay}ms`,
            }}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
}