const links = [
  { name: "kitchen",  label: "The Kitchen Restaurant",           href: "https://thekitchenrestaurant.com/" },
  { name: "ella",     label: "Ella Dining Room & Bar",           href: "https://elladiningroomandbar.com/" },
  { name: "sellands", label: "Sellands Neighborhood Cafe & Bar", href: "https://www.sellands.com/" },
  { name: "obo",      label: "OBO Italian",                      href: "https://oboitalian.com/" },
];

export default function Page() {
  return (
    <main className="frame">
      <section className="canvas">
        {/* Chamfered corners — SVG renderer gives sub-pixel AA at any DPR */}
        <svg className="chamfer chamfer-tl" aria-hidden="true" viewBox="0 0 1 1" preserveAspectRatio="none"><polygon points="0,0 1,0 0,1"/></svg>
        <svg className="chamfer chamfer-tr" aria-hidden="true" viewBox="0 0 1 1" preserveAspectRatio="none"><polygon points="0,0 1,0 1,1"/></svg>
        <svg className="chamfer chamfer-bl" aria-hidden="true" viewBox="0 0 1 1" preserveAspectRatio="none"><polygon points="0,0 0,1 1,1"/></svg>
        <svg className="chamfer chamfer-br" aria-hidden="true" viewBox="0 0 1 1" preserveAspectRatio="none"><polygon points="1,0 0,1 1,1"/></svg>

        <div className="heroWordmark">
          <div
            className="wordmark"
            style={{ "--mask": "url('/logos/shg-logo.svg')" }}
            aria-label="Selland Hospitality Group"
          />
        </div>

        <div
          className="emblem"
          style={{ "--mask": "url('/logos/shg-emblem.svg')" }}
          aria-label="SH emblem"
        />

        <nav className="linksRow" aria-label="Restaurants">
          {links.map((link) => (
            <a
              key={link.name}
              className="logoLink"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <div
                className={`logoMark logo-${link.name}`}
                style={{ "--mask": `url('/logos/${link.name}-logo.svg')` }}
              />
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
