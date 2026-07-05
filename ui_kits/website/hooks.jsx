// Tiny media-query hook. Returns true while viewport width is below
// the given breakpoint. Default break: 820 px (tablet portrait).
function useIsMobile(breakpoint = 820) {
  const [is, setIs] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setIs(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);
  return is;
}

// Contact info — single source of truth, used by Nav, Visite and Footer.
const CHERO_CONTACT = {
  phoneDisplay: "+55 (48) 99812-0443",
  phoneE164: "+5548998120443",
  whatsapp: "https://wa.me/5548998120443",
  instagram: "https://www.instagram.com/cachacariachero/",
  instagramHandle: "@cachacariachero",
  linktree: "https://linktr.ee/cachacariachero",
  addressLines: [
    "Morro das Pedras",
    "Treze de Maio — Santa Catarina, Brasil",
  ],
  coords: { lat: -28.527607755853513, lng: -49.13583363616724 },
  gmaps:
    "https://www.google.com/maps/search/?api=1&query=-28.527607755853513%2C-49.13583363616724",
  waze:
    "https://www.waze.com/ul?ll=-28.527607755853513%2C-49.13583363616724&navigate=yes&zoom=17",
  hours: "seg. a sáb. · 09h às 18h · dom. com agendamento",
};
window.useIsMobile = useIsMobile;
window.CHERO_CONTACT = CHERO_CONTACT;

// Asset resolver — uses window.ASSETS (base64) when available
// (standalone bundle), otherwise falls back to the relative path that
// works when serving from disk.
function asset(key, fallback) {
  return (window.ASSETS && window.ASSETS[key]) || fallback;
}
window.asset = asset;
