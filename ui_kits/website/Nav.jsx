const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobile, open]);

  const links = [
    { label: "História", href: "#historia" },
    { label: "Processo", href: "#processo" },
    { label: "Produtos", href: "#produtos" },
    { label: "Visite", href: "#visite" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background:
          scrolled || (isMobile && open)
            ? "rgba(31, 29, 22, 0.94)"
            : "linear-gradient(180deg, rgba(20,18,12,.5) 0%, rgba(20,18,12,0) 100%)",
        backdropFilter:
          scrolled || (isMobile && open) ? "blur(10px)" : "none",
        WebkitBackdropFilter:
          scrolled || (isMobile && open) ? "blur(10px)" : "none",
        transition: "background 240ms ease, backdrop-filter 240ms",
        borderBottom:
          scrolled || (isMobile && open)
            ? "2px dotted rgba(217, 210, 182, 0.35)"
            : "2px dotted rgba(217, 210, 182, 0)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: isMobile ? "12px 20px" : "14px 32px",
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 12 : 24,
        }}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <img
            src={asset('logoTransparent', '../../assets/logo/chero-badge-transparent.png')}
            alt="Cachaçaria Chero"
            style={{ height: isMobile ? 40 : 52, width: "auto" }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--font-script)",
                fontSize: isMobile ? 22 : 28,
                color: "var(--chero-cream-100)",
                lineHeight: 1,
              }}
            >
              Chero
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: isMobile ? 9 : 10,
                letterSpacing: ".18em",
                color: "var(--chero-cream-300)",
                textTransform: "uppercase",
              }}
            >
              Desde 2002
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <React.Fragment>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 auto 0 32px",
                display: "flex",
                gap: 28,
              }}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      color: "var(--chero-cream-200)",
                      textDecoration: "none",
                      fontFamily: "var(--font-serif)",
                      fontSize: 16,
                      paddingBottom: 4,
                      borderBottom: "1px solid transparent",
                      transition: "all 140ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--chero-cream-100)";
                      e.currentTarget.style.borderBottomColor =
                        "var(--chero-copper-500)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--chero-cream-200)";
                      e.currentTarget.style.borderBottomColor = "transparent";
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={CHERO_CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "var(--chero-copper-500)",
                color: "var(--chero-cream-100)",
                textDecoration: "none",
                padding: "10px 18px",
                borderRadius: 4,
                fontFamily: "var(--font-serif)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: ".02em",
                transition: "background 140ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--chero-copper-600)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--chero-copper-500)")
              }
            >
              Faça seu pedido
            </a>
          </React.Fragment>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: 0,
              padding: 8,
              cursor: "pointer",
              color: "var(--chero-cream-100)",
              display: "flex",
              flexDirection: "column",
              gap: 5,
              width: 36,
              alignItems: "stretch",
            }}
          >
            <span style={burgerBar(open, 0)} />
            <span style={burgerBar(open, 1)} />
            <span style={burgerBar(open, 2)} />
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && (
        <div
          style={{
            maxHeight: open ? 420 : 0,
            overflow: "hidden",
            transition: "max-height 280ms ease",
            background: "rgba(31, 29, 22, 0.94)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "8px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    color: "var(--chero-cream-100)",
                    textDecoration: "none",
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    padding: "14px 0",
                    borderBottom: "1px dotted rgba(217,210,182,.25)",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 12 }}>
              <a
                href={CHERO_CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "var(--chero-copper-500)",
                  color: "var(--chero-cream-100)",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: 4,
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Faça seu pedido
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function burgerBar(open, idx) {
  const base = {
    display: "block",
    height: 2,
    background: "currentColor",
    transition: "all 200ms",
    transformOrigin: "center",
  };
  if (!open) return base;
  if (idx === 0) return { ...base, transform: "translateY(7px) rotate(45deg)" };
  if (idx === 1) return { ...base, opacity: 0 };
  return { ...base, transform: "translateY(-7px) rotate(-45deg)" };
}

window.Nav = Nav;
