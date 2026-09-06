import type { ReactNode } from "react";
import Link from "next/link";
import {
  ROUTES,
  PRIMARY_NAV_ITEMS,
} from "@/lib/navigation";
import { ArrivalHero } from "@/components/hero";
import { CivilizationExperience } from "@/components/civilization";

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
          ==================================================================== */}
      {mobilitySlot ?? (
        <section
          className="pf-section pf-experience-stage pf-experience-mobility"
          data-experience="mobility"
          aria-labelledby="pf-exp-mobility-title"
        >
          <div className="pf-container">
            <div className="pf-stack pf-stack-lg">
              <div className="pf-stack pf-stack-xs">
                <div className="pf-row pf-row-sm">
                  <span className="pf-badge pf-badge-neutral">AIRGRID & TRANSIT</span>
                  <span className="pf-text-operational">INFRASTRUCTURE</span>
                </div>
                <h2 id="pf-exp-mobility-title" className="pf-text-section-heading">
                  Aviation as Everyday Infrastructure
                </h2>
                <p className="pf-text-lead">
                  Aviation in Pasgerflit is not an occasional journey or distant privilege. It operates as the continuous atmospheric circulatory system supporting daily life.
                </p>
              </div>

              <div className="pf-grid pf-grid-2col">
                <div className="pf-surface pf-surface-subtle pf-stack pf-stack-sm">
                  <span className="pf-text-operational">AIRGRID ARCHITECTURE</span>
                  <h3 className="pf-text-subsection-heading">Multi-Layered Corridors</h3>
                  <p className="pf-text-body pf-text-secondary">
                    The national airgrid divides atmospheric space into synchronized velocity strata—from local short-hop airlinks to high-altitude inter-territorial vectors.
                  </p>
                  <p className="pf-text-caption">
                    Autonomous telemetry and air traffic architecture ensure smooth separation and effortless reliability.
                  </p>
                </div>

                <div className="pf-surface pf-surface-subtle pf-stack pf-stack-sm">
                  <span className="pf-text-operational">COMMUTER RHYTHM</span>
                  <h3 className="pf-text-subsection-heading">Effortless Boarding & Movement</h3>
                  <p className="pf-text-body pf-text-secondary">
                    Commuting by air feels as fluid and natural as walking through a neighborhood colonnade. Seamless access corridors connect residences to regional sky shuttles.
                  </p>
                  <p className="pf-text-caption">
                    Transit without friction: eliminating queuing fatigue through human-centered terminal flow.
                  </p>
                </div>
              </div>

              <div className="pf-row">
                <Link href={ROUTES.AVIATION} className="pf-button pf-button-secondary">
                  Explore Aviation Network
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================================================================
          Stage 4: Living Experience
          Purpose: Connect mobility with cities, civic life, culture and
                   hospitality.
          ==================================================================== */}
      {livingSlot ?? (
        <section
          className="pf-section pf-experience-stage pf-experience-living"
          data-experience="living"
          aria-labelledby="pf-exp-living-title"
        >
          <div className="pf-container">
            <div className="pf-stack pf-stack-lg">
              <div className="pf-stack pf-stack-xs">
                <div className="pf-row pf-row-sm">
                  <span className="pf-badge pf-badge-neutral">CIVIC CULTURE</span>
                  <span className="pf-text-operational">HOSPITALITY & CITIES</span>
                </div>
                <h2 id="pf-exp-living-title" className="pf-text-section-heading">
                  Living in the Sky Nation: Cities, Culture & Hospitality
                </h2>
                <p className="pf-text-lead">
                  Where technological infrastructure meets human warmth. Life in Pasgerflit weaves airport-city urbanism with refined transit rituals.
                </p>
              </div>

              <div className="pf-grid pf-grid-2col">
                <div className="pf-card">
                  <div className="pf-card-body pf-stack pf-stack-xs">
                    <span className="pf-text-operational">METROPOLITAN LIFE</span>
                    <h3 className="pf-text-subsection-heading">Aviashenwelt & Airport-Cities</h3>
                    <p className="pf-text-body pf-text-secondary">
                      Cities like Aviashenwelt harmonize residential neighborhoods, green public parks, and vibrant commercial avenues directly around aeronautical hubs, creating lively urban environments.
                    </p>
                    <div className="pf-row pf-row-xs">
                      <Link href={ROUTES.CITIES} className="pf-link pf-text-small">
                        View Cities & Regions &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pf-card">
                  <div className="pf-card-body pf-stack pf-stack-xs">
                    <span className="pf-text-operational">TRANSIT LIFESTYLE</span>
                    <h3 className="pf-text-subsection-heading">SkyBrew & Concourse Hospitality</h3>
                    <p className="pf-text-body pf-text-secondary">
                      The sensory warmth of Pasgerflit lives in its concourses: aroma of freshly roasted SkyBrew coffee, panoramic apron windows, and peaceful acoustic environments where travellers rest and converse.
                    </p>
                    <div className="pf-row pf-row-xs">
                      <Link href={ROUTES.CULTURE} className="pf-link pf-text-small">
                        Discover Culture & Lifestyle &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
