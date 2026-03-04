import "./SIcon.css";

export default function SIcon({ name, size = 18, color }) {
  const hexColor = color ? color.replace("#", "") : "ffffff";

  return (
    <img
      src={`https://cdn.simpleicons.org/${name}/${hexColor}`}
      alt={name}
      width={size}
      height={size}
      className="sicon-img"
    />
  );
}