import type { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";

export interface MobilityExperienceProps {
  className?: string;
  children?: ReactNode;
}

/**
 * MobilityExperience — Phase 2 Chunk 2.4: Mobility Experience
 *
 * Transitions the homepage narrative from PHILOSOPHY into SYSTEM:
 * "Now I can see how movement actually connects the civilization."
 *
 * Grounded in Pasgerflit canon:
 * - Planetary context: Asthortera (no Earth references)
 * - Three Stratified Mobility Layers:
 *   1. Civic Mobility (city districts, glideways, mobility hubs, concourses)
 *   2. Planetary Airgrid (commercial airways, airport megasystems, corridor synchronization)
 *   3. Interstellar Transit (supersonic orbital gates, deep corridors, diplomatic routes)
 * - Civilian Ethics & Purposeful Connection:
 *   Safe passage, ethical logistics, passenger dignity, and inter-civilizational exchange
 *
 * React Server Component with zero client runtime overhead.
 */
export function MobilityExperience({
  className,
  children,
}: MobilityExperienceProps) {
  return (
    <section
      className={`pf-mobility-experience pf-experience-stage ${className || ""}`.trim()}
      data-experience="mobility"
      aria-labelledby="mobility-heading"
    >
      {/* Layered corridor vector backdrop */}
      <div className="pf-mobility-backdrop" aria-hidden="true">
        <div className="pf-mobility-corridor-lines" />
        <div className="pf-mobility-glow" />
      </div>

      <div className="pf-container pf-mobility-container">
        <div className="pf-mobility-content">
          {/* ================================================================
              Layer 1: Mobility Introduction
              ================================================================ */}
          <div className="pf-mobility-header">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">MOBILITY ARCHITECTURE</span>
              <span className="pf-text-operational">ASTHORTERA AIRGRID // CORRIDOR LOGIC</span>
            </div>
            <h2 id="mobility-heading" className="pf-mobility-title">
              Airways That Connect a Civilization
            </h2>
            <p className="pf-mobility-lead pf-text-lead">
              Movement in Pasgerflit is a synchronized living circulatory system. Rather than isolated transport islands, ordinary neighborhood skyways weave seamlessly into regional airgrids and interstellar departure gateways.
            </p>
          </div>

          {/* ================================================================
              Layer 2: Three-Tier Mobility Network
              ================================================================ */}
          <div className="pf-mobility-network">
            {/* Tier 01: Civic Mobility */}
            <div className="pf-mobility-tier">
              <div className="pf-mobility-tier-aside" aria-hidden="true">
                <span className="pf-mobility-tier-node">01</span>
                <span className="pf-mobility-tier-connector" />
              </div>
              <div className="pf-mobility-tier-card">
                <div className="pf-mobility-tier-meta">
                  <span className="pf-text-operational">TIER 01 // CIVIC SCALE</span>
                  <span className="pf-mobility-tier-tag">DISTRICT GLIDEWAYS</span>
                </div>
                <h3 className="pf-mobility-tier-title">District Glideways & Transit Hubs</h3>
                <p className="pf-mobility-tier-desc">
                  Everyday passenger circulation connecting residential quarters, civic plazas, and neighborhood cafés. Seamless boarding concourses and terminal-like wayfinding make movement feel as effortless and dignified as walking through a sheltered colonnade.
                </p>
                <div className="pf-mobility-tier-nodes">
                  <span className="pf-mobility-node-chip">Civic Plazas</span>
                  <span className="pf-mobility-node-chip">Neighborhood Glideways</span>
                  <span className="pf-mobility-node-chip">Concourse Cafés</span>
                </div>
                <div className="pf-mobility-tier-action">
                  <Link href={ROUTES.CITIES} className="pf-mobility-tier-link">
                    <span>Explore Connected City Districts</span>
                    <svg className="pf-mobility-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tier 02: Planetary Airgrid */}
            <div className="pf-mobility-tier">
              <div className="pf-mobility-tier-aside" aria-hidden="true">
                <span className="pf-mobility-tier-node">02</span>
                <span className="pf-mobility-tier-connector" />
              </div>
              <div className="pf-mobility-tier-card">
                <div className="pf-mobility-tier-meta">
                  <span className="pf-text-operational">TIER 02 // PLANETARY AIRGRID</span>
                  <span className="pf-mobility-tier-tag">COMMERCIAL AIRWAYS</span>
                </div>
                <h3 className="pf-mobility-tier-title">Synchronized Atmospheric Corridors</h3>
                <p className="pf-mobility-tier-desc">
                  Multi-level altitude strata coordinating civilian commuter fleets, passenger transports, and airport megasystems across Asthortera. Autonomous corridor telemetry and route stabilization maintain constant, collision-free safe passage.
                </p>
                <div className="pf-mobility-tier-nodes">
                  <span className="pf-mobility-node-chip">Airport Megasystems</span>
                  <span className="pf-mobility-node-chip">Corridor Vectors</span>
                  <span className="pf-mobility-node-chip">Passenger Fleet Airways</span>
                </div>
                <div className="pf-mobility-tier-action">
                  <Link href={ROUTES.AVIATION} className="pf-mobility-tier-link">
                    <span>Inspect Planetary Airgrid Corridors</span>
                    <svg className="pf-mobility-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tier 03: Interstellar Transit */}
            <div className="pf-mobility-tier">
              <div className="pf-mobility-tier-aside" aria-hidden="true">
                <span className="pf-mobility-tier-node">03</span>
                <span className="pf-mobility-tier-connector pf-mobility-tier-connector-end" />
              </div>
              <div className="pf-mobility-tier-card">
                <div className="pf-mobility-tier-meta">
                  <span className="pf-text-operational">TIER 03 // ORBITAL & BEYOND</span>
                  <span className="pf-mobility-tier-tag">SUPERSONIC GATES</span>
                </div>
                <h3 className="pf-mobility-tier-title">Orbital Gates & Interstellar Routes</h3>
                <p className="pf-mobility-tier-desc">
                  High-altitude orbital gateways that extend Asthortera&apos;s aviation hospitality into the stars. Coordinating diplomatic passage, cross-civilizational exchange, and deep-space passenger transit with quiet technological grace.
                </p>
                <div className="pf-mobility-tier-nodes">
                  <span className="pf-mobility-node-chip">Supersonic Orbital Gates</span>
                  <span className="pf-mobility-node-chip">Diplomatic Corridors</span>
                  <span className="pf-mobility-node-chip">Interstellar Passenger Routes</span>
                </div>
                <div className="pf-mobility-tier-action">
                  <Link href={ROUTES.AIRPORTS} className="pf-mobility-tier-link">
                    <span>View Megastructure Gateways</span>
                    <svg className="pf-mobility-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              Layer 3: Purposeful Connection (Closing Synthesis & CTAs)
              ================================================================ */}
          <div className="pf-mobility-purpose-card">
            <div className="pf-mobility-purpose-header">
              <span className="pf-text-operational">CIVILIAN ETHICS // PURPOSEFUL MOBILITY</span>
              <h3 className="pf-mobility-purpose-title">
                Movement Designed for Connection, Not Pure Velocity
              </h3>
              <p className="pf-mobility-purpose-desc">
                In Pasgerflit, transit is measured by the dignity of the passenger and the integrity of the connection. Every airway exists to unite Asthortera—anchoring urban neighborhoods to planetary horizons and cosmic routes.
              </p>
            </div>

            <div className="pf-mobility-purpose-grid">
              <div className="pf-mobility-purpose-item">
                <span className="pf-mobility-purpose-pill">PRINCIPLE 01</span>
                <h4 className="pf-mobility-purpose-item-title">Safe Passage</h4>
                <p className="pf-mobility-purpose-item-desc">
                  Uncompromised civilian protection and airspace stability across all atmospheric strata.
                </p>
              </div>

              <div className="pf-mobility-purpose-item">
                <span className="pf-mobility-purpose-pill">PRINCIPLE 02</span>
                <h4 className="pf-mobility-purpose-item-title">Passenger Dignity</h4>
                <p className="pf-mobility-purpose-item-desc">
                  Calm concourses, human-scaled wayfinding, and transit free from friction or exhaustion.
                </p>
              </div>

              <div className="pf-mobility-purpose-item">
                <span className="pf-mobility-purpose-pill">PRINCIPLE 03</span>
                <h4 className="pf-mobility-purpose-item-title">Ethical Logistics</h4>
                <p className="pf-mobility-purpose-item-desc">
                  Reliable resource mobility keeping Asthortera&apos;s settlements supplied and interconnected.
                </p>
              </div>

              <div className="pf-mobility-purpose-item">
                <span className="pf-mobility-purpose-pill">PRINCIPLE 04</span>
                <h4 className="pf-mobility-purpose-item-title">Reliable Arrival</h4>
                <p className="pf-mobility-purpose-item-desc">
                  Every departure carries purpose; every landing culminates in community hospitality and shared life.
                </p>
              </div>
            </div>

            <div className="pf-mobility-actions">
              <Link
                href={ROUTES.AVIATION}
                className="pf-button pf-button-primary pf-mobility-cta-primary"
              >
                <span>Explore Aeronautical Systems</span>
                <svg
                  className="pf-mobility-cta-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href={ROUTES.CITIES}
                className="pf-button pf-button-secondary pf-mobility-cta-secondary"
              >
                <span>View Connected Cities</span>
              </Link>
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
