import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Cities",
  description: "Metropolitan hubs, regional centers, and urban territories.",
  path: ROUTES.CITIES,
});

/**
 * Cities Route Page
 *
 * Provides the destination route surface for /cities.
 * Explores aerodrome urbanism, concourse boulevards,
 * and the living metropolitan hubs of Pasgerflit.
 */
export default function CitiesPage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">AERODROME URBANISM</span>
              <span className="pf-text-operational">SECTOR 03 // DISTRICT ARCHITECTURE</span>
            </div>
            <h1>Cities: Metropolitan Life & Districts</h1>
            <p className="pf-text-lead">
              Metropolitan hubs, regional centers, and urban territories designed as living airport spaces where daily life flourishes alongside transit.
            </p>
          </header>

          {/* Sector Overview Card */}
          <article className="pf-card">
            <div className="pf-card-header">
              <span className="pf-text-operational">URBAN TOPOLOGY</span>
              <span className="pf-badge pf-badge-subtle">ACTIVE SECTOR</span>
            </div>
            <div className="pf-card-body pf-stack pf-stack-sm">
              <h3>Living as Continuous Concourse</h3>
              <p className="pf-text-body">
                In Pasgerflit, cities are not destinations divided from transit—they are built as unified terminal ecosystems. Aviashenwelt anchors the metropolitan core with concourse boulevards and quiet departure sanctuaries; Skyportalis advances research and aviation technology; Runwayria serves as the vibrant nexus of tourism and leisure.
              </p>
              <div className="pf-surface-subtle pf-stack pf-stack-xs">
                <span className="pf-text-operational">PRIMARY CENTRES</span>
                <p className="pf-text-body">
                  Aviashenwelt (Metropolitan Core) &bull; Skyportalis (Innovation & Technology) &bull; Runwayria (Transit & Leisure)
                </p>
              </div>
            </div>
            <div className="pf-card-footer pf-row pf-row-between">
              <Link href={ROUTES.HOME} className="pf-button pf-button-secondary pf-button-sm">
                ← Return to Arrival Concourse
              </Link>
              <Link href={ROUTES.AIRPORTS} className="pf-button pf-button-secondary pf-button-sm">
                Airport Hubs →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
