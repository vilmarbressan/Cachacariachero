function Footer() {
  const c = CHERO_CONTACT;
  const isMobile = useIsMobile();

  return (
    <footer
      data-screen-label="06 Footer"
      style={{
        background: "var(--chero-ink-900)",
        color: "var(--chero-cream-200)",
        padding: isMobile ? "48px 20px 24px" : "72px 32px 32px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <img
        src={asset('logoTransparent', '../../assets/logo/chero-badge-transparent.png')}
        alt=""
        style={{
          width: isMobile ? 100 : 130,
          opacity: 0.95,
          filter: "drop-shadow(0 6px 14px rgba(0,0,0,.4))",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-script)",
          fontSize: isMobile ? 44 : 56,
          color: "var(--chero-cream-100)",
          lineHeight: 1,
          margin: "16px 0 10px",
        }}
      >
        Saúde!
      </p>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: isMobile ? 16 : 18,
          color: "var(--chero-cream-200)",
          maxWidth: 540,
          margin: "0 auto 36px",
          lineHeight: 1.6,
        }}
      >
        Da roça para o seu copo, com o carinho de quem entende de cachaça.
      </p>

      <hr
        style={{
          border: 0,
          borderTop: "2px dotted rgba(217, 210, 182, .35)",
          maxWidth: 540,
          margin: "0 auto 24px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: isMobile ? 14 : 20,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          fontFamily: "var(--font-serif)",
          fontSize: 14,
        }}
      >
        <a href={c.instagram} target="_blank" rel="noreferrer" style={footerLink("leaf")}>
          <InstagramIcon /> {c.instagramHandle}
        </a>
        <a href={c.whatsapp} target="_blank" rel="noreferrer" style={footerLink()}>
          <WhatsAppIcon /> {c.phoneDisplay}
        </a>
        <a href={c.linktree} target="_blank" rel="noreferrer" style={footerLink()}>
          <TreeIcon /> linktr.ee/cachacariachero
        </a>
      </div>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          color: "var(--fg-muted)",
          marginTop: 24,
        }}
      >
        {c.addressLines[0]} · {c.addressLines[1]}
      </p>

      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 11,
          color: "var(--fg-muted)",
          marginTop: 24,
        }}
      >
        Aprecie com moderação. Venda proibida para menores de 18 anos.
      </p>
    </footer>
  );
}

function footerLink(tone) {
  return {
    color: tone === "leaf" ? "var(--chero-leaf-500)" : "var(--chero-cream-100)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  };
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/>
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z"/>
      <path d="M8.5 9.5c0 4 3 7 7 7l1.5-1.5-2.4-1L13.5 15a4.5 4.5 0 0 1-2.5-2.5l1-1.1-1-2.4L9.5 8c-.6 0-1 .6-1 1.5z"/>
    </svg>
  );
}
function TreeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18"/>
      <path d="M12 9l5-5"/>
      <path d="M12 9l-5-5"/>
      <path d="M12 15l5-5"/>
      <path d="M12 15l-5-5"/>
    </svg>
  );
}

window.Footer = Footer;
