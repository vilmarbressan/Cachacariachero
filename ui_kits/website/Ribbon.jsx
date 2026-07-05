// Chevron-tail price ribbon — the catalog's signature element for
// listing per-size prices next to a bottle.
function Ribbon({ children, tone = "sage" }) {
  const palette = {
    sage: { bg: "var(--chero-sage-500)", fg: "var(--chero-ink-900)" },
    dark: { bg: "#6E6952", fg: "var(--chero-cream-100)" },
    gold: { bg: "var(--chero-gold-500)", fg: "var(--chero-ink-900)" },
  }[tone];
  return (
    <span
      style={{
        display: "inline-block",
        background: palette.bg,
        color: palette.fg,
        padding: "8px 26px 8px 14px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 13,
        lineHeight: 1.5,
        clipPath:
          "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)",
      }}
    >
      {children}
    </span>
  );
}

window.Ribbon = Ribbon;
