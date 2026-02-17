/* ============================================================================
   SHG LINK PAGE
   - poster-style layout
   - masked SVG logos
   - desktop pinned layout + mobile flow layout
   - bottom links reordered + linked
   ============================================================================ */

   export default function Page() {
    return (
      <main className="frame">
        {/* =========================================================
           PAPER CANVAS
           Everything lives inside this container
           ========================================================= */}
        <section className="canvas">
          {/* =========================================================
             CENTER WORDMARK (big SHG logo)
             ========================================================= */}
          <div className="heroWordmark">
            <div
              className="wordmark"
              style={{ "--mask": "url('/logos/shg-logo.svg')" }}
              aria-label="Selland Hospitality Group"
            />
          </div>
  
          {/* =========================================================
             SH EMBLEM
             Desktop: top-right (CSS handles positioning)
             Mobile: flows under wordmark (CSS switches to static)
             ========================================================= */}
          <div
            className="emblem"
            style={{ "--mask": "url('/logos/shg-emblem.svg')" }}
            aria-label="SH emblem"
          />
  
          {/* =========================================================
             BOTTOM LINKS — ORDERED + LINKED
             Order requested:
             1) Kitchen
             2) Ella
             3) Sellands
             4) OBO
             ========================================================= */}
          <div className="linksRow">
            {/* 1 — THE KITCHEN */}
            <a
              className="logoStage"
              href="https://thekitchenrestaurant.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Kitchen Restaurant"
            >
              <div
                className="logoMark logo-kitchen"
                style={{ "--mask": "url('/logos/kitchen-logo.svg')" }}
              />
            </a>
  
            {/* 2 — ELLA */}
            <a
              className="logoStage"
              href="https://elladiningroomandbar.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ella Dining Room & Bar"
            >
              <div
                className="logoMark logo-ella"
                style={{ "--mask": "url('/logos/ella-logo.svg')" }}
              />
            </a>
  
            {/* 3 — SELLANDS */}
            <a
              className="logoStage"
              href="https://www.sellands.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sellands Neighborhood Cafe & Bar"
            >
              <div
                className="logoMark logo-sellands"
                style={{ "--mask": "url('/logos/sellands-logo.svg')" }}
              />
            </a>
  
            {/* 4 — OBO */}
            <a
              className="logoStage"
              href="https://oboitalian.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OBO Italian"
            >
              <div
                className="logoMark logo-obo"
                style={{ "--mask": "url('/logos/obo-logo.svg')" }}
              />
            </a>
          </div>
        </section>
      </main>
    );
  }
  