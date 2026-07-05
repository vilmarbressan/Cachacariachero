// Signature bubble-cluster ornament used in the catalog top-left.
// Recreated faithfully — 5 overlapping rings, varying radii, stroked
// in cream-300 on dark surfaces.
function Bubbles({ size = 110, color = "var(--chero-cream-300)", style }) {
  return (
    <svg
      viewBox="0 0 110 88"
      width={size}
      height={(size * 88) / 110}
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      style={style}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="20" />
      <circle cx="58" cy="14" r="11" />
      <circle cx="82" cy="34" r="8" />
      <circle cx="36" cy="58" r="14" />
      <circle cx="16" cy="74" r="7" />
      <circle cx="68" cy="62" r="6" />
    </svg>
  );
}

window.Bubbles = Bubbles;
