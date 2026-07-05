function Historia() {
  const isMobile = useIsMobile();

  return (
    <section
      id="historia"
      data-screen-label="02 História"
      className="texture-grain"
      style={{
        background: "var(--chero-sage-500)",
        color: "var(--chero-ink-900)",
        padding: isMobile ? "72px 20px" : "120px 32px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: isMobile ? 28 : 56,
          left: isMobile ? 20 : 56,
          opacity: 0.5,
        }}
      >
        <Bubbles
          size={isMobile ? 72 : 110}
          color="var(--chero-olive-900)"
        />
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          gap: isMobile ? 36 : 64,
          alignItems: "center",
          marginTop: isMobile ? 64 : 0,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 13,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--fg-inverse-muted)",
              margin: "0 0 12px",
            }}
          >
            Capítulo um
          </p>
          <h2
            style={{
              fontFamily: "var(--font-script)",
              fontSize: isMobile
                ? "clamp(60px, 16vw, 92px)"
                : "clamp(72px, 8vw, 124px)",
              color: "var(--chero-olive-900)",
              lineHeight: 1,
              margin: "0 0 8px",
              paddingBottom: 12,
              borderBottom: "2px dotted var(--chero-olive-900)",
              display: "inline-block",
              paddingRight: 48,
            }}
          >
            História
          </h2>

          <div
            style={{
              marginTop: 28,
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
              aspectRatio: "4 / 5",
              maxWidth: isMobile ? 280 : 360,
              marginLeft: isMobile ? "auto" : 0,
              marginRight: isMobile ? "auto" : 0,
              boxShadow: "0 20px 60px rgba(0,0,0,.4)",
            }}
          >
            <img
              src={asset('historia', '../../assets/photos/historia.png')}
              alt="Cachaçaria Chero — barril com brasão"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        <div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: isMobile ? 18 : 22,
              lineHeight: 1.5,
              color: "var(--chero-olive-900)",
              margin: "0 0 28px",
            }}
          >
            Mais de 20 anos de história na produção de cachaça artesanal.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.75,
              color: "var(--chero-ink-900)",
              margin: "0 0 16px",
            }}
          >
            Tradição de família que foi interrompida em 1974, quando uma
            enchente destruiu quase tudo. Sobraram somente as fornalhas e
            a roda d'água que movia o engenho do meu pai.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.75,
              color: "var(--chero-ink-900)",
              margin: "0 0 16px",
            }}
          >
            Eu, Vanderlei, conhecido popularmente como Chero, cresci vendo
            o que restou do engenho do meu pai. Com o passar dos anos, a
            vontade de retomar a tradição e montar minha própria
            cachaçaria foi se intensificando — algo que já estava no
            sangue.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.75,
              color: "var(--chero-ink-900)",
              margin: "0 0 16px",
            }}
          >
            Foi em 2002 que, junto com minha esposa e meus filhos,
            conseguimos montar a tão sonhada cachaçaria. Prezamos pela
            qualidade e estamos sempre aprimorando nossos conhecimentos
            nesta área.
          </p>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: isMobile ? 16 : 18,
              lineHeight: 1.6,
              color: "var(--chero-olive-900)",
              margin: "28px 0 0",
              paddingTop: 20,
              borderTop: "2px dotted var(--chero-olive-900)",
            }}
          >
            Em mais de 20 anos de produção, não temos somente clientes —
            temos amigos fiéis, que ajudaram e seguem ajudando no
            crescimento desta empresa familiar.
          </p>

          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: 44,
              color: "var(--chero-olive-900)",
              margin: "20px 0 0",
              lineHeight: 1,
            }}
          >
            — Chero
          </p>
        </div>
      </div>
    </section>
  );
}

window.Historia = Historia;
