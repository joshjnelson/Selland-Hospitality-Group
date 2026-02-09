// app/page.js
// Single page “linktree” layout.
// Edit the `links` array to change logos/URLs (NOT sizes).
// Sizes are controlled in CSS by changing ONE number per logo: --s

const links = [
  { id: "ella", name: "Ella", href: "#", logo: "/logos/ella-logo.svg" },
  { id: "kitchen", name: "Kitchen", href: "#", logo: "/logos/kitchen-logo.svg" },
  { id: "obo", name: "OBO", href: "#", logo: "/logos/obo-logo.svg" },
  { id: "sellands", name: "Selland’s", href: "#", logo: "/logos/sellands-logo.svg" },
];

export default function Page() {
  return (
    <main className="frame">
      <section className="canvas">
        {/* Center wordmark */}
        <div className="heroWordmark">
          <span className="wordmark" style={{ "--mask": "url(/logos/shg-logo.svg)" }} />
        </div>

        {/* SH emblem
            - Desktop: positioned top-right (absolute)
            - Mobile: becomes static and appears under the wordmark
        */}
        <div className="emblem" aria-hidden="true" style={{ "--mask": "url(/logos/shg-emblem.svg)" }} />

        {/* Bottom logo links */}
        <nav className="linksRow" aria-label="Links">
          {links.map((l) => (
            <a
              key={l.id}
              className="logoStage"
              href={l.href}
              aria-label={l.name}
              title={l.name}
            >
              <span
                className={`logoMark logo-${l.id}`}
                style={{ "--mask": `url(${l.logo})` }}
              />
            </a>
          ))}
        </nav>

        {/* Decorative seal (optional) */}
        <div className="seal" aria-hidden="true" style={{ "--mask": "url(/logos/SH_logo_white.svg)" }} />
      </section>
    </main>
  );
}
