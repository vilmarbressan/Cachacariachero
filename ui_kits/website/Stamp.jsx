// Yellow gold disc stamp — used in the catalog for "Mais vendida"
// and individual per-size price chips on Premium cachaças.
function Stamp({ children, size = 90, sub }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--chero-gold-500)",
        color: "var(--chero-ink-900)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "var(--font-serif)",
        fontWeight: 600,
        fontSize: size > 80 ? 16 : 13,
        lineHeight: 1.1,
        boxShadow: "0 6px 16px rgba(0,0,0,.35)",
      }}
    >
      {sub && (
        <small style={{ fontSize: 10, fontWeight: 400, opacity: 0.8 }}>
          {sub}
        </small>
      )}
      {children}
    </div>
  );
}

window.Stamp = Stamp;
