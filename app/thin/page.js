// app/thin/page.js
export default function ThinPage() {
    const links = [
      { key: "ella",     href: "https://example.com", mask: "url(/logos/ella-logo.svg)" },
      { key: "kitchen",  href: "https://example.com", mask: "url(/logos/kitchen-logo.svg)" },
      { key: "obo",      href: "https://example.com", mask: "url(/logos/obo-logo.svg)" },
      { key: "sellands", href: "https://example.com", mask: "url(/logos/sellands-logo.svg)" },
    ];
  
    return (
      <main className="frame thinMode">
        <section className="canvas">
          {/* Thin border overlay */}
          <svg className="thinFrame" viewBox="0 0 1000 1600" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="thinFrameOuter"
              d="
                M 70 60
                H 930
                Q 960 60 960 90
                V 1510
                Q 960 1540 930 1540
                H 70
                Q 40 1540 40 1510
                V 90
                Q 40 60 70 60
                Z
              "
            />
            <path
              className="thinFrameInner"
              d="
                M 94 84
                H 906
                Q 936 84 936 114
                V 1486
                Q 936 1516 906 1516
                H 94
                Q 64 1516 64 1486
                V 114
                Q 64 84 94 84
                Z
              "
            />
          </svg>
  
          {/* Top-left meta (optional) */}
          <div className="meta">
            <div>Draft v1</div>
            <div>UPDATED: 2/8/2026</div>
            <div className="metaSpacer" />
            <div>Mitch Gamble</div>
            <div>m@ntrpx.com</div>
          </div>
  
          {/* Desktop-only emblem in top-right */}
          <div
            className="emblem desktopOnly"
            style={{ ["--mask"]: "url(/logos/shg-emblem.svg)" }}
            aria-label="SHG emblem"
          />
  
          {/* Center wordmark */}
          <div className="heroWordmark">
            <div
              className="wordmark"
              style={{ ["--mask"]: "url(/logos/shg-logo.svg)" }}
              aria-label="Selland Hospitality Group"
            />
          </div>
  
          {/* Mobile emblem under wordmark */}
          <div
            className="emblem mobileOnly"
            style={{ ["--mask"]: "url(/logos/shg-emblem.svg)" }}
            aria-label="SHG emblem"
          />
  
          {/* Bottom logos (links) */}
          <nav className="linksRow" aria-label="SHG properties">
            {links.map((l) => (
              <a
                key={l.key}
                className="logoStage"
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.key}
              >
                <span
                  className={`logoMark logo-${l.key}`}
                  style={{ ["--mask"]: l.mask }}
                />
              </a>
            ))}
          </nav>
        </section>
      </main>
    );
  }
  