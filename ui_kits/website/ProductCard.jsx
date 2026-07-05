// ProductCard — recreates the catalog's signature product layout:
// dashed arc backdrop, sage disc behind the bottle, serif "Licor de" /
// "Cachaça de" prefix, big script product name, three-adjective body
// copy, headline price + ribbon of secondary sizes.
function ProductCard({
  prefix,         // "Licor de" | "Cachaça de"
  name,           // "Maracujá"
  volume,         // "375 ml"
  desc,           // "Doce, frutado e suave..."
  price,          // "R$ 30,00"
  sizes,          // [{ label: "750 ml", price: "R$ 45,00", special: true }]
  bestSeller,
  liquidColor = "#d6a222",
  highlight = false,
}) {
  const isMobile = useIsMobile();
  const bottleCol = isMobile ? 110 : 140;
  const arcSize = isMobile ? 210 : 250;

  return (
    <div
      style={{
        position: "relative",
        padding: isMobile ? "28px 8px 20px" : "32px 24px 24px",
        display: "grid",
        gridTemplateColumns: `${bottleCol}px 1fr`,
        gap: isMobile ? 14 : 20,
        alignItems: "center",
        minHeight: 260,
        overflow: "hidden",
      }}
    >
      {/* dashed arc */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: -12,
          top: -8,
          width: arcSize,
          height: arcSize,
          border: "2px dashed var(--chero-cream-300)",
          borderRadius: "50%",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      {/* bottle + disc */}
      <div
        style={{
          position: "relative",
          width: bottleCol,
          height: isMobile ? 180 : 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 4,
            width: isMobile ? 100 : 130,
            height: isMobile ? 100 : 130,
            borderRadius: "50%",
            background: "var(--chero-sage-500)",
            opacity: 0.55,
            filter: "blur(2px)",
          }}
        />
        <Bottle
          color={liquidColor}
          label={name.toUpperCase()}
          scale={isMobile ? 0.82 : 1}
        />
        {bestSeller && (
          <div
            style={{
              position: "absolute",
              top: -4,
              left: isMobile ? -16 : -28,
              transform: "rotate(-8deg)",
            }}
          >
            <Stamp size={isMobile ? 70 : 86}>
              Mais
              <br />
              vendida
            </Stamp>
          </div>
        )}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 16,
            color: "var(--chero-cream-200)",
            margin: 0,
          }}
        >
          {prefix}
        </p>
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: 56,
            color: highlight ? "var(--chero-copper-400)" : "var(--chero-cream-100)",
            margin: "0 0 2px",
            lineHeight: 1,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "var(--fg-muted)",
            margin: "0 0 12px",
          }}
        >
          {volume}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: "var(--fg-default)",
            margin: "0 0 14px",
            maxWidth: "36ch",
          }}
        >
          {desc}
        </p>
        {price && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 17,
              color: "var(--chero-cream-100)",
              margin: "0 0 10px",
            }}
          >
            {price}
          </p>
        )}
        {sizes && sizes.length > 0 && (
          <Ribbon>
            {sizes.map((s, i) => (
              <span key={i}>
                {s.label} — {s.price}
                {s.special ? "*" : ""}
                {i < sizes.length - 1 ? <br /> : null}
              </span>
            ))}
          </Ribbon>
        )}
      </div>
    </div>
  );
}

// CSS-only bottle. When real cut-out PNGs become available, swap this
// for <img src={...}/>.
function Bottle({ color, label, scale = 1 }) {
  return (
    <div
      style={{
        position: "relative",
        width: 90 * scale,
        height: 210 * scale,
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: 90,
          height: 210,
        }}
      >
      {/* cap */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "32%",
          width: "36%",
          height: 18,
          background: "linear-gradient(180deg, #2a261a 0%, #14110a 100%)",
          borderRadius: "3px 3px 0 0",
        }}
      />
      {/* neck */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: "38%",
          width: "24%",
          height: 32,
          background: `linear-gradient(180deg, ${color}aa, ${color})`,
        }}
      />
      {/* body */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 0,
          width: "100%",
          height: 166,
          borderRadius: "14px 14px 22px 22px",
          background: `linear-gradient(180deg, ${color}cc 0%, ${color} 35%, ${shade(color, -25)} 100%)`,
          boxShadow:
            "inset 8px 0 12px rgba(255,255,255,.18), inset -8px 0 16px rgba(0,0,0,.35), 0 12px 24px rgba(0,0,0,.4)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "12%",
            top: "30%",
            width: "76%",
            background: "#efe7d2",
            padding: "10px 4px",
            color: "#1E1B14",
            fontFamily: "var(--font-serif)",
            fontSize: 9,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            borderRadius: 2,
            boxShadow: "inset 0 0 0 1px #b89a4a",
          }}
        >
          <div style={{ fontSize: 7, opacity: 0.7, marginBottom: 2 }}>
            CACHAÇARIA
          </div>
          <div style={{ fontSize: 13, letterSpacing: ".1em" }}>CHERO</div>
          <div
            style={{
              fontSize: 6,
              opacity: 0.55,
              marginTop: 2,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {label}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

// Tiny color-darkening helper for the bottle gradient.
function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + Math.round(percent * 2.55);
  let g = ((num >> 8) & 0x00ff) + Math.round(percent * 2.55);
  let b = (num & 0x0000ff) + Math.round(percent * 2.55);
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

window.ProductCard = ProductCard;
window.Bottle = Bottle;
