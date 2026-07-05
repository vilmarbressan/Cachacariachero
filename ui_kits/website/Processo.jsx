function Processo() {
  const isMobile = useIsMobile();

  const steps = [
    {
      n: "01",
      title: "Cana",
      body:
        "A cana-de-açúcar é cultivada na nossa propriedade em Treze de Maio, SC. Plantada, cuidada e cortada à mão na época certa, no auge da doçura.",
      photo: asset('cana', '../../assets/photos/materia-prima-cana.png'),
    },
    {
      n: "02",
      title: "Moagem",
      body:
        "O caldo fresco é extraído no mesmo dia do corte, em moenda movida pela tradicional roda d'água do engenho — o coração da cachaçaria.",
      photo: asset('degustacao', '../../assets/photos/produtos-degustacao.png'),
    },
    {
      n: "03",
      title: "Alambique",
      body:
        "Fermentação natural com fermentos próprios, seguida da destilação em alambique de cobre. Sem pressa, em fogo brando, separando cabeça, coração e cauda.",
      photo: asset('loja', '../../assets/photos/produtos-loja.png'),
    },
    {
      n: "04",
      title: "Descanso",
      body:
        "O coração descansa em barris de carvalho francês por até dois anos e meio, ou em dornas de aço inox e amburana — cada tipo conta uma história diferente no copo.",
      photo: asset('presente', '../../assets/photos/produtos-cachaca-presente.png'),
    },
  ];

  return (
    <section
      id="processo"
      data-screen-label="03 Processo"
      className="texture-grain"
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

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            marginBottom: isMobile ? 40 : 64,
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
            Capítulo dois
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
            Processo
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: isMobile ? 18 : 20,
              fontStyle: "italic",
              color: "var(--chero-cream-200)",
              marginTop: 18,
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            Da roça para o seu copo — quatro passos, nenhum atalho.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : "repeat(4, 1fr)",
            gap: isMobile ? 22 : 32,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background: `var(--chero-sage-500) url(${s.photo}) center / cover`,
                  marginBottom: 18,
                  boxShadow: "0 14px 30px rgba(0,0,0,.4)",
                  border: "1px solid rgba(241,236,220,.15)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 12,
                  letterSpacing: ".18em",
                  color: "var(--chero-copper-400)",
                  marginBottom: 4,
                }}
              >
                {s.n}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: isMobile ? 36 : 46,
                  margin: "0 0 10px",
                  lineHeight: 1,
                  color: "var(--chero-cream-100)",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: isMobile ? 13 : 14,
                  lineHeight: 1.65,
                  color: "var(--fg-default)",
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Processo = Processo;
