function Hero() {
  const isMobile = useIsMobile();

  return (
    <header
      id="top"
      data-screen-label="01 Hero"
      style={{
        position: "relative",
        minHeight: isMobile ? "92vh" : "100vh",
        background:
          `linear-gradient(180deg, rgba(31,28,20,.55) 0%, rgba(31,28,20,.88) 100%), url('${asset('heroBg', '../../assets/photos/hero-barrels.png')}') center bottom / cover no-repeat`,
        backgroundColor: "var(--chero-olive-900)",
        color: "var(--chero-cream-100)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "110px 20px 80px" : "120px 32px 80px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: isMobile ? 80 : 96,
          left: isMobile ? 20 : 56,
        }}
      >
        <Bubbles size={isMobile ? 90 : 140} />
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.3fr 1fr",
          alignItems: "center",
          gap: isMobile ? 24 : 48,
          paddingTop: isMobile ? 90 : 0,
        }}
      >
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: isMobile ? 16 : 18,
              color: "var(--chero-cream-200)",
              margin: isMobile ? "0 auto 20px" : "0 0 24px",
              lineHeight: 1.5,
              maxWidth: 380,
            }}
          >
            "Desde 2002 produzindo o verdadeiro sabor da cachaça."
          </p>
          <h1
            style={{
              fontFamily: "var(--font-script)",
              fontSize: isMobile
                ? "clamp(64px, 16vw, 96px)"
                : "clamp(80px, 11vw, 168px)",
              lineHeight: 0.95,
              color: "var(--chero-cream-100)",
              margin: 0,
              textShadow: "0 6px 24px rgba(0,0,0,.6)",
            }}
          >
            Cachaçaria
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-script)",
              fontSize: isMobile
                ? "clamp(80px, 20vw, 120px)"
                : "clamp(96px, 13vw, 200px)",
              lineHeight: 0.95,
              color: "var(--chero-cream-100)",
              margin: "-6px 0 0",
              textShadow: "0 6px 24px rgba(0,0,0,.6)",
              paddingLeft: isMobile ? 0 : 80,
            }}
          >
            Chero
          </h1>
          <div
            style={{
              marginTop: isMobile ? 28 : 36,
              maxWidth: 380,
              borderTop: "2px dotted var(--chero-cream-300)",
              paddingTop: 22,
              marginLeft: isMobile ? "auto" : 0,
              marginRight: isMobile ? "auto" : 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--chero-cream-200)",
                margin: "0 0 24px",
              }}
            >
              Cachaça artesanal de Morro das Pedras, em Treze de Maio, Santa
              Catarina. Feita em alambique de cobre, envelhecida em
              carvalho e amburana, com receita de família que atravessou
              três gerações.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <a
                href="#produtos"
                style={{
                  background: "var(--chero-copper-500)",
                  color: "var(--chero-cream-100)",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 4,
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: ".02em",
                }}
              >
                Conheça o catálogo
              </a>
              <a
                href="#historia"
                style={{
                  background: "transparent",
                  color: "var(--chero-cream-100)",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 4,
                  border: "1px solid var(--chero-cream-300)",
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  letterSpacing: ".02em",
                }}
              >
                Nossa história
              </a>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={asset('logoTransparent', '../../assets/logo/chero-badge-transparent.png')}
              alt=""
              style={{
                width: "min(360px, 80%)",
                height: "auto",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,.5))",
              }}
            />
          </div>
        )}
      </div>

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 13,
            color: "var(--chero-cream-300)",
            letterSpacing: ".06em",
          }}
        >
          role para conhecer ↓
        </div>
      )}
    </header>
  );
}

window.Hero = Hero;
