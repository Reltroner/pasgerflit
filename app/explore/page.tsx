import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES, PRIMARY_NAV_ITEMS } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Explore",
  description: "Cartography, transit pathways, and discovery archives.",
  path: ROUTES.EXPLORE,
});

/**
 * Explore Route Page
 *
 * Provides the destination route surface for /explore.
 * Acts as the sovereign cartographic hub and directory
 * for all primary civilization dimensions.
 */
export default function ExplorePage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">CARTOGRAPHIC HUB</span>
              <span className="pf-text-operational">SECTOR 06 // DISCOVERY ARCHIVES</span>
            </div>
            <h1>Explore: Planetary Cartography & Pathways</h1>
            <p className="pf-text-lead">
              Cartography, transit pathways, and discovery archives spanning the six sovereign dimensions of Pasgerflit.
            </p>
          </header>

          {/* Pathways Directory Grid */}
          <div className="pf-grid pf-grid-cards">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <article key={item.href} className="pf-card">
                <div className="pf-card-header">
                  <span className="pf-text-operational">{item.label}</span>
                  <span className="pf-badge pf-badge-subtle">PATHWAY</span>
                </div>
                <div className="pf-card-body pf-stack pf-stack-xs">
                  <h3>{item.title}</h3>
                  <p className="pf-text-body">{item.description}</p>
                </div>
                <div className="pf-card-footer">
                  <Link href={item.href} className="pf-button pf-button-secondary pf-button-sm">
                    Enter {item.label} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pf-row pf-row-between">
            <Link href={ROUTES.HOME} className="pf-button pf-button-secondary">
              ← Return to Arrival Concourse
            </Link>
            <Link href={ROUTES.MUSIC} className="pf-button pf-button-secondary">
              Explore Music Horizons →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
