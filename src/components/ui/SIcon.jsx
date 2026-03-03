/**
 * Renders a brand icon from the Simple Icons CDN.
 * Browse available icons at: https://simpleicons.org/
 *
 * @param {string} name   Simple Icons slug, e.g. "react", "typescript", "docker"
 * @param {number} size   Width and height in px (default 18)
 * @param {string} color  Hex color for the icon, e.g. "#61DAFB" (optional — defaults to white)
 */
export default function SIcon({ name, size = 18, color }) {
  const hexColor = color ? color.replace("#", "") : "ffffff";

  return (
    <img
      src={`https://cdn.simpleicons.org/${name}/${hexColor}`}
      alt={name}
      width={size}
      height={size}
      style={{ display: "block", opacity: 0.9 }}
    />
  );
}