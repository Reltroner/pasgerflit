import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Airports",
  description: "International passenger terminals, airfields, and transit complexes.",
  path: ROUTES.AIRPORTS,
});

/**
 * Airports Route Page
 *
 * Provides the destination route surface for /airports.
 * Covers PAIA (Pasgerflit Aeropolis International Airport)
 * and the sovereign terminal infrastructure of Asthortera.
 */
export default function AirportsPage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">MEGASTRUCTURES & HUBS</span>
              <span className="pf-text-operational">SECTOR 04 // GATEWAY NETWORKS</span>
            </div>
            <h1>Airports: PAIA & Sovereign Hubs</h1>
            <p className="pf-text-lead">
              International passenger terminals, airfields, and transit complexes anchoring planetary and interstellar connectivity.
            </p>
          </header>

          {/* Sector Overview Card */}
          <article className="pf-card">
            <div className="pf-card-header">
              <span className="pf-text-operational">AEROPOLIS SCALE</span>
              <span className="pf-badge pf-badge-subtle">ACTIVE SECTOR</span>
            </div>
            <div className="pf-card-body pf-stack pf-stack-sm">
              <h3>PAIA: The Planetary Aviation Anchor</h3>
              <p className="pf-text-body">
                Spanning 62,917 km² northwest of Aviashenwelt, PAIA serves as the sovereign megastructure of Pasgerflit. With six parallel precision runways, 12 cosmic stargate platforms, and four specialized concourses, PAIA handles over 14.8 million daily passenger transits with absolute operational calm.
              </p>
              <div className="pf-surface-subtle pf-stack pf-stack-xs">
                <span className="pf-text-operational">SPECIALIZED CONCOURSES</span>
                <p className="pf-text-body">
                  T-SKY (Domestic & Intercity) &bull; T-PRISM (Planetary High-Speed) &bull; T-VELOCITAS (Trans-Oceanic Long-Haul) &bull; T-CELESTINE (Interstellar Gateways)
                </p>
              </div>
            </div>
            <div className="pf-card-footer pf-row pf-row-between">
              <Link href={ROUTES.HOME} className="pf-button pf-button-secondary pf-button-sm">
                ← Return to Arrival Concourse
              </Link>
              <Link href={ROUTES.CULTURE} className="pf-button pf-button-secondary pf-button-sm">
                Transit Culture →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
