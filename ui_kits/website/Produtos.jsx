const PRODUCTS = {
  cachacas: {
    label: "Cachaças",
    eyebrow: "destiladas em alambique de cobre",
    items: [
      {
        prefix: "Cachaça de",
        name: "Garapá",
        volume: "Cachaça Prata · 700 ml",
        desc:
          "Leve, transparente e pura. Perfeita para quem aprecia o sabor original da cana-de-açúcar, com aroma fresco e ideal para drinques ou consumo puro.",
        price: "R$ 35,00",
        sizes: [{ label: "160 ml", price: "R$ 12,00" }],
        liquidColor: "#e9e2c8",
        bestSeller: true,
      },
      {
        prefix: "Cachaça de",
        name: "Amburana",
        volume: "Premium Ouro · 750 ml",
        desc:
          "Encorpada e marcante. A maturação em amburana confere cor dourada e aroma amadeirado, com toques de baunilha e canela.",
        price: "R$ 80,00",
        sizes: [{ label: "700 ml", price: "R$ 42,00" }],
        liquidColor: "#c98a2c",
      },
      {
        prefix: "Cachaça de",
        name: "Carvalho",
        volume: "Premium Ouro · 750 ml",
        desc:
          "Envelhecida em barris de carvalho francês por aproximadamente 2 anos e meio, com notas que lembram o uísque.",
        price: "R$ 80,00",
        sizes: [{ label: "700 ml", price: "R$ 42,00" }],
        liquidColor: "#a8651e",
      },
      {
        prefix: "Cachaça de",
        name: "Banana",
        volume: "700 ml",
        desc:
          "Feita a partir da destilação do fermentado do suco de banana concentrado. Excelente para coquetéis tropicais.",
        price: "R$ 42,00",
        sizes: [],
        liquidColor: "#e9e2c8",
      },
      {
        prefix: "Cachaça de",
        name: "Pêssego",
        volume: "700 ml",
        desc:
          "Suave e ligeiramente adocicada. Destilada das frutas frescas, com aroma vínico e sabor potente.",
        price: "R$ 42,00",
        sizes: [],
        liquidColor: "#dca84a",
      },
      {
        prefix: "Cachaça de",
        name: "Graspa",
        volume: "700 ml",
        desc:
          "Tradição italiana com jeitinho brasileiro. Destilada a partir das cascas e bagaços da uva. Intensa, com aroma vínico.",
        price: "R$ 42,00",
        sizes: [],
        liquidColor: "#e9e2c8",
      },
    ],
  },
  licores: {
    label: "Licores",
    eyebrow: "polpa de fruta fresca, doçura justa",
    items: [
      {
        prefix: "Licor de",
        name: "Limão",
        volume: "375 ml",
        desc: "Doce, cítrico e refrescante. Perfeito puro ou em drinks.",
        price: "R$ 30,00",
        sizes: [
          { label: "750 ml", price: "R$ 50,00", special: true },
          { label: "750 ml", price: "R$ 45,00" },
          { label: "525 ml", price: "R$ 48,00" },
        ],
        liquidColor: "#d8b432",
      },
      {
        prefix: "Licor de",
        name: "Morango",
        volume: "750 ml*",
        desc:
          "Doce, frutado e suave. Ideal para drinks ou sobremesas.",
        price: "R$ 50,00*",
        sizes: [
          { label: "750 ml", price: "R$ 45,00" },
          { label: "525 ml", price: "R$ 48,00" },
          { label: "375 ml", price: "R$ 30,00" },
        ],
        liquidColor: "#c54a3a",
      },
      {
        prefix: "Licor de",
        name: "Pitaya",
        volume: "750 ml",
        desc:
          "Exótico, vibrante e levemente doce, feito com pitaya. Perfeito para drinks tropicais.",
        price: "R$ 45,00",
        sizes: [
          { label: "525 ml", price: "R$ 48,00" },
          { label: "375 ml", price: "R$ 30,00" },
        ],
        liquidColor: "#a02050",
      },
      {
        prefix: "Licor de",
        name: "Banana",
        volume: "525 ml",
        desc:
          "Doce, aromático e suave, feito com banana. Ideal para drinks ou sobremesas.",
        price: "R$ 48,00",
        sizes: [
          { label: "750 ml", price: "R$ 50,00", special: true },
          { label: "750 ml", price: "R$ 45,00" },
          { label: "375 ml", price: "R$ 30,00" },
        ],
        liquidColor: "#e0c54a",
      },
      {
        prefix: "Licor de",
        name: "Jabuticaba",
        volume: "375 ml",
        desc:
          "Encorpado, doce e frutado, feito com jabuticabas frescas. Único e delicioso.",
        price: "R$ 30,00",
        sizes: [
          { label: "750 ml", price: "R$ 50,00", special: true },
          { label: "750 ml", price: "R$ 45,00" },
          { label: "525 ml", price: "R$ 48,00" },
        ],
        liquidColor: "#3a1424",
      },
      {
        prefix: "Licor de",
        name: "Butiá",
        volume: "750 ml",
        desc:
          "Doce, exótico e levemente terroso. Sabor único da serra gaúcha.",
        price: "R$ 45,00",
        sizes: [
          { label: "525 ml", price: "R$ 48,00" },
          { label: "375 ml", price: "R$ 30,00" },
        ],
        liquidColor: "#c98a2c",
      },
    ],
  },
  aperitivos: {
    label: "Aperitivos",
    eyebrow: "Bugio · Campari · receitas próprias",
    items: [
      {
        prefix: "Aperitivo",
        name: "Bugio",
        volume: "Cachaça, melado e especiarias · 750 ml",
        desc:
          "Feito a partir da mistura da cachaça, melado e algumas especiarias. Ideal para os dias frios, com sabor envolvente e acolhedor.",
        price: "R$ 35,00",
        sizes: [
          { label: "500 ml", price: "R$ 25,00" },
          { label: "160 ml", price: "R$ 15,00" },
        ],
        liquidColor: "#6A3013",
      },
      {
        prefix: "Aperitivo",
        name: "Campari",
        volume: "Ervas finas · 500 ml",
        desc:
          "Campari feito a partir de ervas finas. Sugestão: puro, em drinques, gelado e em harmonizações.",
        price: "R$ 35,00",
        sizes: [],
        liquidColor: "#4B1A1A",
      },
    ],
  },
};

function Produtos() {
  const [tab, setTab] = React.useState("cachacas");
  const isMobile = useIsMobile();
  const cat = PRODUCTS[tab];

  return (
    <section
      id="produtos"
      data-screen-label="04 Produtos"
      style={{
        background: "var(--chero-olive-900)",
        color: "var(--chero-cream-100)",
        padding: isMobile ? "72px 20px" : "120px 32px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: isMobile ? 28 : 56,
          left: isMobile ? 20 : 56,
        }}
      >
        <Bubbles size={isMobile ? 72 : 110} />
      </div>

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            marginBottom: 24,
            marginLeft: isMobile ? 0 : 140,
            marginTop: isMobile ? 64 : 0,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 13,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              margin: "0 0 8px",
            }}
          >
            Capítulo três
          </p>
          <h2
            style={{
              fontFamily: "var(--font-script)",
              fontSize: isMobile
                ? "clamp(60px, 16vw, 92px)"
                : "clamp(72px, 8vw, 124px)",
              color: "var(--chero-cream-100)",
              lineHeight: 1,
              margin: 0,
              paddingBottom: 12,
              borderBottom: "2px dotted var(--chero-cream-300)",
              display: "inline-block",
              paddingRight: 48,
            }}
          >
            Produtos
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: isMobile ? 16 : 18,
              color: "var(--chero-cream-200)",
              margin: "16px 0 0",
            }}
          >
            {cat.eyebrow}
          </p>
        </div>

        <div
          role="tablist"
          style={{
            display: "flex",
            gap: 4,
            margin: isMobile ? "28px 0 36px" : "40px 0 56px",
            marginLeft: isMobile ? 0 : 140,
            borderBottom: "1px solid rgba(217, 210, 182, 0.18)",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {Object.entries(PRODUCTS).map(([key, p]) => {
            const active = key === tab;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(key)}
                style={{
                  background: "none",
                  border: 0,
                  padding: isMobile ? "10px 16px" : "12px 22px",
                  cursor: "pointer",
                  fontFamily: "var(--font-serif)",
                  fontSize: isMobile ? 15 : 17,
                  color: active
                    ? "var(--chero-copper-400)"
                    : "var(--chero-cream-200)",
                  borderBottom: active
                    ? "2px solid var(--chero-copper-400)"
                    : "2px solid transparent",
                  marginBottom: -1,
                  letterSpacing: ".02em",
                  transition: "color 140ms, border-color 140ms",
                  whiteSpace: "nowrap",
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(420px, 1fr))",
            gap: isMobile ? "24px 0" : "8px 32px",
          }}
        >
          {cat.items.map((it) => (
            <ProductCard key={it.name} {...it} />
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 12,
            color: "var(--fg-muted)",
            marginTop: 48,
            textAlign: "center",
          }}
        >
          * Garrafa especial, ideal para presentes.
        </p>
      </div>
    </section>
  );
}

window.Produtos = Produtos;
