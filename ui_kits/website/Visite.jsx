function Visite() {
  const isMobile = useIsMobile();
  const c = CHERO_CONTACT;

  // OSM embed centered on the coords (no API key required).
  const lat = c.coords.lat;
  const lng = c.coords.lng;
  const span = 0.012;
  const bbox = [lng - span, lat - span / 2, lng + span, lat + span / 2].join(
    ","
  );
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <section
      id="visite"
      data-screen-label="05 Visite"
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
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
          gap: isMobile ? 40 : 64,
          alignItems: "start",
        }}
      >
        <div style={{ marginTop: isMobile ? 64 : 0 }}>
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
            Capítulo quatro
          </p>
          <h2
            style={{
              fontFamily: "var(--font-script)",
              fontSize: isMobile
                ? "clamp(56px, 16vw, 92px)"
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
            Visite
          </h2>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: isMobile ? 18 : 22,
              lineHeight: 1.5,
              color: "var(--chero-olive-900)",
              margin: "28px 0 16px",
            }}
          >
            Venha conhecer o alambique, ver a roda d'água e degustar
            direto do barril.
          </p>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--chero-ink-900)",
              margin: "0 0 24px",
              maxWidth: "44ch",
            }}
          >
            Atendemos com hora marcada para visitação, degustação e
            pedidos em quantidade. Marque sua visita conosco — temos
            sempre um copo guardado para quem chega.
          </p>

          {/* Map preview */}
          <div
            style={{
              border: "2px solid var(--chero-olive-900)",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 14px 36px rgba(0,0,0,.28)",
              marginBottom: 14,
            }}
          >
            <iframe
              title="Localização da Cachaçaria Chero"
              src={mapSrc}
              style={{
                width: "100%",
                height: isMobile ? 200 : 260,
                border: 0,
                display: "block",
                filter: "saturate(.78) sepia(.18)",
              }}
              loading="lazy"
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <a
              href={c.gmaps}
              target="_blank"
              rel="noreferrer"
              style={btnStyle("dark")}
            >
              <PinIcon /> Abrir no Google Maps
            </a>
            <a
              href={c.waze}
              target="_blank"
              rel="noreferrer"
              style={btnStyle("ghost")}
            >
              <WazeIcon /> Abrir no Waze
            </a>
          </div>

          <ContactRows c={c} />
        </div>

        <ContactForm isMobile={isMobile} />
      </div>
    </section>
  );
}

function btnStyle(variant) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "11px 16px",
    borderRadius: 4,
    fontFamily: "var(--font-serif)",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: ".02em",
    textDecoration: "none",
    transition: "all 140ms",
  };
  if (variant === "dark") {
    return {
      ...base,
      background: "var(--chero-olive-900)",
      color: "var(--chero-cream-100)",
    };
  }
  return {
    ...base,
    background: "transparent",
    color: "var(--chero-olive-900)",
    border: "1px solid var(--chero-olive-900)",
  };
}

function ContactRows({ c }) {
  const rows = [
    {
      label: "endereço",
      value: (
        <span>
          {c.addressLines[0]}
          <br />
          {c.addressLines[1]}
        </span>
      ),
    },
    { label: "horários", value: c.hours },
    {
      label: "whatsapp",
      value: (
        <a
          href={c.whatsapp}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--chero-ink-900)", textDecoration: "underline" }}
        >
          {c.phoneDisplay}
        </a>
      ),
    },
    {
      label: "instagram",
      value: (
        <a
          href={c.instagram}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--chero-ink-900)", textDecoration: "underline" }}
        >
          {c.instagramHandle}
        </a>
      ),
    },
    {
      label: "linktree",
      value: (
        <a
          href={c.linktree}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--chero-ink-900)", textDecoration: "underline" }}
        >
          linktr.ee/cachacariachero
        </a>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "12px 18px",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--chero-ink-900)",
      }}
    >
      {rows.map((r) => (
        <React.Fragment key={r.label}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "var(--fg-inverse-muted)",
              whiteSpace: "nowrap",
            }}
          >
            {r.label}
          </span>
          <span>{r.value}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

function ContactForm({ isMobile }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const btn = e.target.querySelector("button[type=submit]");
        const original = btn.dataset.original || btn.innerText;
        btn.dataset.original = original;
        btn.innerText = "Saúde! Entraremos em contato.";
        btn.style.background = "var(--chero-olive-900)";
        btn.style.color = "var(--chero-cream-100)";
        setTimeout(() => {
          btn.innerText = original;
          btn.style.background = "var(--chero-copper-500)";
          btn.style.color = "var(--chero-cream-100)";
        }, 2800);
      }}
      style={{
        background: "var(--chero-paper-50)",
        padding: isMobile ? 22 : 28,
        borderRadius: 8,
        boxShadow: "0 20px 60px rgba(0,0,0,.18)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-script)",
          fontSize: 40,
          color: "var(--chero-olive-900)",
          lineHeight: 1,
          margin: "0 0 6px",
        }}
      >
        Marcar visita
      </p>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 13,
          color: "var(--fg-inverse-muted)",
          margin: "0 0 8px",
        }}
      >
        Conta um pouquinho sobre você. Respondemos pelo whatsapp.
      </p>
      <Field label="Seu nome" placeholder="Como te chamamos" />
      <Field label="Whatsapp" placeholder="(00) 0 0000 - 0000" />
      <Field
        label="Vamos falar sobre"
        placeholder="Visita · pedido grande · kit presente…"
        as="textarea"
      />
      <button
        type="submit"
        style={{
          background: "var(--chero-copper-500)",
          color: "var(--chero-cream-100)",
          border: 0,
          padding: "14px 24px",
          borderRadius: 4,
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          fontSize: 15,
          letterSpacing: ".02em",
          cursor: "pointer",
          transition: "background 140ms",
        }}
      >
        Quero marcar minha visita
      </button>
    </form>
  );
}

function Field({ label, as = "input", ...rest }) {
  const El = as;
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontFamily: "var(--font-serif)",
        fontSize: 12,
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "var(--fg-inverse-muted)",
      }}
    >
      {label}
      <El
        {...rest}
        style={{
          background: "transparent",
          color: "var(--chero-ink-900)",
          border: "1px solid #b3aa8a",
          borderRadius: 4,
          padding: "10px 12px",
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          textTransform: "none",
          letterSpacing: "normal",
          resize: as === "textarea" ? "none" : undefined,
          minHeight: as === "textarea" ? 80 : undefined,
        }}
      />
    </label>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function WazeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 17.5c-1 1.4-3 2.3-5.2 2.3-3.5 0-6.3-2.3-6.8-5.3"/>
      <path d="M3.6 11.5C4.4 7.8 8 5 12.4 5c4.7 0 8.6 3.2 8.6 7.2 0 2.2-1.2 3.4-2.4 4.3-1 .8-1.4 1.7-1.4 2.7"/>
      <circle cx="9" cy="11" r=".9" fill="currentColor"/>
      <circle cx="15" cy="11" r=".9" fill="currentColor"/>
      <path d="M9.5 14.2c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1"/>
    </svg>
  );
}

window.Visite = Visite;
