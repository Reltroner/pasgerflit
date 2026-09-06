import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Aviation",
  description: "Flight corridors, fleet infrastructure, and aeronautical systems.",
  path: ROUTES.AVIATION,
});

/**
 * Aviation Route Page
 *
 * Provides the destination route surface for /aviation.
 * Outlines the atmospheric airgrids, fleet systems, and
 * zero-emission propulsion powering the Sky Nation.
 */
export default function AviationPage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">AERONAUTICAL SYSTEMS</span>
              <span className="pf-text-operational">SECTOR 02 // FLIGHT INFRASTRUCTURE</span>
            </div>
            <h1>Aviation: Airgrids & Fleet Systems</h1>
            <p className="pf-text-lead">
              Flight corridors, fleet infrastructure, and aeronautical systems coordinating atmospheric movement across Asthortera.
            </p>
          </header>

          {/* Sector Overview Card */}
          <article className="pf-card">
            <div className="pf-card-header">
              <span className="pf-text-operational">CORRIDOR ARCHITECTURE</span>
              <span className="pf-badge pf-badge-subtle">ACTIVE SECTOR</span>
            </div>
            <div className="pf-card-body pf-stack pf-stack-sm">
              <h3>The Three Atmospheric Movement Tiers</h3>
              <p className="pf-text-body">
                The Pasgerflit atmospheric flight grid orchestrates movement through three integrated tiers: Civic Scale local shuttles, Planetary Airgrid regional corridors, and Stratospheric high-speed trans-continental routes. Precision electric gliders, magnetic guidance pathways, and fail-safe return protocols guarantee safety and zero-emission mobility.
              </p>
              <div className="pf-surface-subtle pf-stack pf-stack-xs">
                <span className="pf-text-operational">ENGINEERING PRINCIPLE</span>
                <p className="pf-text-body">
                  Zero-emission propulsion, regenerative glide corridors, and algorithmic deconfliction ensure harmonious atmospheric transit.
                </p>
              </div>
            </div>
            <div className="pf-card-footer pf-row pf-row-between">
              <Link href={ROUTES.HOME} className="pf-button pf-button-secondary pf-button-sm">
                ← Return to Arrival Concourse
              </Link>
              <Link href={ROUTES.CITIES} className="pf-button pf-button-secondary pf-button-sm">
                Metropolitan Districts →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
