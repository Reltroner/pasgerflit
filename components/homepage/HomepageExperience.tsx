import type { ReactNode } from "react";
import Link from "next/link";
import {
  ROUTES,
  PRIMARY_NAV_ITEMS,
} from "@/lib/navigation";
import { ArrivalHero } from "@/components/hero";
import { CivilizationExperience } from "@/components/civilization";
import { MobilityExperience } from "@/components/aviation";
import { LivingExperience } from "@/components/city";

export interface HomepageExperienceProps {
  arrivalSlot?: ReactNode;
  civilizationSlot?: ReactNode;
  mobilitySlot?: ReactNode;
  livingSlot?: ReactNode;
  paiaSlot?: ReactNode;
  discoverySlot?: ReactNode;
  className?: string;
}

/**
 * HomepageExperience — Phase 2 Experience Architecture Composition Layer
 *
 * Establishes the 6 semantic experience stages of the Pasgerflit homepage:
 * 1. Arrival Experience (sense of place, touchdown into the Sky Nation)
 * 2. Civilization Experience (aviation as foundational civic organizing logic)
 * 3. Mobility Experience (airgrid, atmospheric corridors, transit infrastructure)
 * 4. Living Experience (airport-cities like Aviashenwelt, SkyBrew hospitality, culture)
 * 5. PAIA Experience (national aviation megastructure and central gateway)
 * 6. Discovery / Return Experience (pathways into cartography, sitemap, and archives)
 *
 * Each stage conceptually unites:
 * - Immersion / Feeling: Closer to daily life in Pasgerflit
 * - Insight / Understanding: Meaningful architectural comprehension
 *
 * Provides dedicated slot props so future Phase 2 chunks (2.2–2.7) can replace
 * structural defaults without modifying the top-level orchestration layer.
 *
 * React Server Component with zero client runtime overhead.
 */
export function HomepageExperience({
  arrivalSlot,
  civilizationSlot,
  mobilitySlot,
  livingSlot,
  paiaSlot,
  discoverySlot,
  className,
}: HomepageExperienceProps) {
  return (
    <div className={`pf-homepage-experience ${className || ""}`.trim()}>
      {/* ====================================================================
          Stage 1: Arrival Experience ("Enter Pasgerflit")
          Purpose: The visitor enters Pasgerflit and immediately receives
                   a sense of place. Realized via ArrivalHero.
          ==================================================================== */}
      {arrivalSlot ?? <ArrivalHero />}

      {/* ====================================================================
          Stage 2: Civilization Experience
          Purpose: Explain, at a high level, what makes Pasgerflit a civilization
                   organized around aviation and movement.
                   Realized via CivilizationExperience.
          ==================================================================== */}
      {civilizationSlot ?? <CivilizationExperience />}

      {/* ====================================================================
          Stage 3: Mobility Experience
          Purpose: Introduce aviation, airgrid, transportation and movement as
                   infrastructure of everyday life.
                   Realized via MobilityExperience.
          ==================================================================== */}
      {mobilitySlot ?? <MobilityExperience />}

      {/* ====================================================================
          Stage 4: Living Experience
          Purpose: Connect mobility with cities, civic life, culture and
                   hospitality.
                   Realized via LivingExperience.
          ==================================================================== */}
      {livingSlot ?? <LivingExperience />}


      {/* ====================================================================
          Stage 5: PAIA Experience
          Purpose: Establish PAIA as the national aviation megastructure and
                   gateway into the deeper Pasgerflit experience.
          ==================================================================== */}
      {paiaSlot ?? (
        <section
          className="pf-section pf-experience-stage pf-experience-paia"
          data-experience="paia"
          aria-labelledby="pf-exp-paia-title"
        >
          <div className="pf-container">
            <div className="pf-surface pf-surface-bordered pf-stack pf-stack-lg">
              <div className="pf-stack pf-stack-xs">
                <div className="pf-row pf-row-sm">
                  <span className="pf-badge pf-badge-warning">NATIONAL MEGASTRUCTURE</span>
                  <span className="pf-text-operational">PAIA // AIR GATEWAY</span>
                </div>
                <h2 id="pf-exp-paia-title" className="pf-text-section-heading">
                  PAIA: The Sovereign Aviation Megastructure
                </h2>
                <p className="pf-text-lead">
                  Pasgerflit Aviation Infrastructure Architecture (PAIA) is the monumental engineering apex of the civilization—integrating air traffic command, international passenger terminals, and inter-regional corridors.
                </p>
              </div>

              <div className="pf-grid pf-grid-2col">
                <div className="pf-surface-subtle pf-stack pf-stack-xs">
                  <span className="pf-text-operational">GATEWAY TO ASTHORTERA</span>
                  <h3 className="pf-text-subsection-heading">The Gateway Experience</h3>
                  <p className="pf-text-body pf-text-secondary">
                    PAIA serves as the primary portal through which visitors encounter Pasgerflit&apos;s architectural grandeur: sweeping canopies, quiet electric propulsion bays, and crystal-clear acoustic design.
                  </p>
                </div>

                <div className="pf-surface-subtle pf-stack pf-stack-xs">
                  <span className="pf-text-operational">MEGASTRUCTURE LOGIC</span>
                  <h3 className="pf-text-subsection-heading">Coordinated Operations</h3>
                  <p className="pf-text-body pf-text-secondary">
                    Beyond its visual scale, PAIA powers the continuous synchronization of domestic fleets, regional flight paths, and sovereign sky border navigation.
                  </p>
                </div>
              </div>

              <div className="pf-row">
                <Link href={ROUTES.AIRPORTS} className="pf-button pf-button-primary">
                  Explore PAIA & Airports
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          Stage 6: Discovery / Return Experience
          Purpose: Give the visitor a natural continuation into the rest of
                   the website.
          ==================================================================== */}
      {discoverySlot ?? (
        <section
          className="pf-section pf-experience-stage pf-experience-discovery"
          data-experience="discovery"
          aria-labelledby="pf-exp-discovery-title"
        >
          <div className="pf-container">
            <div className="pf-stack pf-stack-lg">
              <div className="pf-stack pf-stack-xs">
                <div className="pf-row pf-row-sm">
                  <span className="pf-badge pf-badge-neutral">ARCHIVES & CARTOGRAPHY</span>
                  <span className="pf-text-operational">CONTINUATION</span>
                </div>
                <h2 id="pf-exp-discovery-title" className="pf-text-section-heading">
                  Continue Across Pasgerflit
                </h2>
                <p className="pf-text-lead">
                  The arrival is just the beginning. Traverse the deeper archives, cartographic charts, soundscapes, and industrial networks of the Sky Nation.
                </p>
              </div>

              <div className="pf-grid pf-grid-3col">
                {PRIMARY_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="pf-card pf-card-interactive"
                  >
                    <div className="pf-card-body pf-stack pf-stack-xs">
                      <span className="pf-text-operational">{item.group}</span>
                      <h3 className="pf-text-subsection-heading">{item.label}</h3>
                      <p className="pf-text-body pf-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pf-surface pf-surface-subtle pf-row-between">
                <div className="pf-stack pf-stack-3xs">
                  <span className="pf-text-label">Cartographic & Transit Archives</span>
                  <span className="pf-text-caption">
                    Access the interactive navigation registry, flight routes, and station telemetry.
                  </span>
                </div>
                <Link href={ROUTES.EXPLORE} className="pf-button pf-button-primary">
                  Launch Explore Hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
