import type { ReactNode } from "react";
import Link from "next/link";
import { ROUTES, EXTERNAL_LINKS } from "@/lib/navigation";

export interface DiscoveryExperienceProps {
  className?: string;
  children?: ReactNode;
}

/**
 * DiscoveryExperience — Phase 2 Chunk 2.7: Discovery / Return Experience
 *
 * The final experiential stage of the Phase 2 homepage journey.
 * Following Arrival -> Civilization -> Mobility -> Living -> PAIA,
 * this section answers: "Where do I go from here?"
 *
 * Core Concept:
 * "Every Arrival Opens Another Route"
 *
 * Grounded in Pasgerflit canon:
 * - Movement is Consciousness.
 * - Flight is not escape. Flight is expansion.
 * - Meaningful arrival & purposeful exploration across 6 sovereign pathways:
 *   1. Civilization (governance, philosophy, social dignity)
 *   2. Aviation (airgrids, fleets, atmospheric aeronautics)
 *   3. Cities (Aviashenwelt, aeropolis urbanism, districts)
 *   4. Airports (PAIA, specialized concourses, megastructures)
 *   5. Culture (rituals, boarding cards, SkyBrew transit hospitality)
 *   6. Music (ambient acoustic horizons & departure soundscapes)
 * - Conceptual Return-to-Arrival via native semantic `#arrival` anchor.
 * - Subtle external portal exit to Reltroner Studio.
 *
 * React Server Component with zero client runtime overhead.
 */
export function DiscoveryExperience({
  className,
  children,
}: DiscoveryExperienceProps) {
  return (
    <section
      className={`pf-discovery-experience pf-experience-stage ${className || ""}`.trim()}
      data-experience="discovery"
      aria-labelledby="discovery-heading"
    >
      {/* Calm open sky & horizon atmospheric backdrop */}
      <div className="pf-discovery-backdrop" aria-hidden="true">
        <div className="pf-discovery-sky-glow" />
        <div className="pf-discovery-horizon-line" />
        <div className="pf-discovery-route-rays" />
      </div>

      <div className="pf-container pf-discovery-container">
        <div className="pf-discovery-content pf-stack pf-stack-2xl">
          {/* ================================================================
              1. Final Reflection: Horizon Reveal
              ================================================================ */}
          <header className="pf-discovery-header">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">HORIZON TRANSIT</span>
              <span className="pf-text-operational">SECTOR EXPLORATION // ACTIVE PATHWAYS</span>
            </div>
            <h2 id="discovery-heading" className="pf-discovery-title">
              Every Arrival Opens Another Route
            </h2>
            <p className="pf-discovery-lead pf-text-lead">
              You arrived through the sky, witnessed how aviation organizes society, followed magnetic corridors across the atmosphere, walked through the living districts of Aviashenwelt, and beheld the monumental scale of PAIA. Yet in Pasgerflit, an arrival is never a conclusion. It is an invitation to explore the civilization from whichever vantage calls to you next.
            </p>
            <div className="pf-discovery-creed-bar">
              <span className="pf-text-operational">CORE PHILOSOPHY</span>
              <p className="pf-discovery-creed-text">
                &ldquo;Flight is not escape—flight is expansion. Movement is consciousness.&rdquo;
              </p>
            </div>
          </header>

          {/* ================================================================
              2. Exploration Pathways (The 6 Sovereign Dimensions)
              ================================================================ */}
          <div className="pf-discovery-section pf-stack pf-stack-md">
            <div className="pf-discovery-section-header">
              <span className="pf-text-operational">THE SIX PATHWAYS // CHOOSE YOUR PERSPECTIVE</span>
              <h3 className="pf-discovery-section-title">
                Sovereign Portals of Understanding
              </h3>
              <p className="pf-discovery-section-lead">
                Each destination offers a distinct lens through which to explore the culture, technology, and geography of the Sky Nation.
              </p>
            </div>

            <div className="pf-discovery-pathways-grid">
              {/* Pathway 1: Civilization */}
              <article className="pf-discovery-pathway-card">
                <div className="pf-discovery-pathway-meta">
                  <span className="pf-text-operational">SOVEREIGN FOUNDATIONS</span>
                  <span className="pf-badge pf-badge-subtle">GOVERNANCE & ETHICS</span>
                </div>
                <h4 className="pf-discovery-pathway-title">Civilization: Philosophy & Social Order</h4>
                <p className="pf-discovery-pathway-desc">
                  Explore the founding philosophy, passenger dignity, departure ethics, and societal structure that turned flight into a complete way of life.
                </p>
                <div className="pf-discovery-pathway-insight">
                  <span className="pf-text-operational">WHY EXPLORE</span>
                  <p>Understand why Pasgerflit organizes every civic institution around conscious movement.</p>
                </div>
                <div className="pf-discovery-pathway-action">
                  <Link
                    href={ROUTES.CIVILIZATION}
                    className="pf-discovery-pathway-link"
                  >
                    <span>Explore Civilization</span>
                    <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Pathway 2: Aviation */}
              <article className="pf-discovery-pathway-card">
                <div className="pf-discovery-pathway-meta">
                  <span className="pf-text-operational">AERONAUTICAL SYSTEMS</span>
                  <span className="pf-badge pf-badge-subtle">FLIGHT INFRASTRUCTURE</span>
                </div>
                <h4 className="pf-discovery-pathway-title">Aviation: Airgrids & Fleet Systems</h4>
                <p className="pf-discovery-pathway-desc">
                  Examine the atmospheric flight corridors, sovereign airgrid cartography, electric glider fleets, and stratospheric navigation systems.
                </p>
                <div className="pf-discovery-pathway-insight">
                  <span className="pf-text-operational">WHY EXPLORE</span>
                  <p>Discover the engineering, zero-emission propulsion, and safety doctrines powering the air nation.</p>
                </div>
                <div className="pf-discovery-pathway-action">
                  <Link
                    href={ROUTES.AVIATION}
                    className="pf-discovery-pathway-link"
                  >
                    <span>Inspect Aviation Systems</span>
                    <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Pathway 3: Cities */}
              <article className="pf-discovery-pathway-card">
                <div className="pf-discovery-pathway-meta">
                  <span className="pf-text-operational">AERODROME URBANISM</span>
                  <span className="pf-badge pf-badge-subtle">DISTRICT ARCHITECTURE</span>
                </div>
                <h4 className="pf-discovery-pathway-title">Cities: Metropolitan Life & Districts</h4>
                <p className="pf-discovery-pathway-desc">
                  Traverse Aviashenwelt, Skyportalis, Runwayria, and the civic districts where terminal wayfinding, glide corridors, and boarding halls shape daily life.
                </p>
                <div className="pf-discovery-pathway-insight">
                  <span className="pf-text-operational">WHY EXPLORE</span>
                  <p>Witness how urban environments flourish when cities are designed as living airport spaces.</p>
                </div>
                <div className="pf-discovery-pathway-action">
                  <Link
                    href={ROUTES.CITIES}
                    className="pf-discovery-pathway-link"
                  >
                    <span>Traverse Cities & Districts</span>
                    <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Pathway 4: Airports */}
              <article className="pf-discovery-pathway-card">
                <div className="pf-discovery-pathway-meta">
                  <span className="pf-text-operational">MEGASTRUCTURES & HUBS</span>
                  <span className="pf-badge pf-badge-subtle">GATEWAY NETWORKS</span>
                </div>
                <h4 className="pf-discovery-pathway-title">Airports: PAIA & Sovereign Hubs</h4>
                <p className="pf-discovery-pathway-desc">
                  Delve into PAIA&apos;s 62,917 km² aeropolis, the four specialized concourses (T-SKY, T-PRISM, T-VELOCITAS, T-CELESTINE), and galactic gateways.
                </p>
                <div className="pf-discovery-pathway-insight">
                  <span className="pf-text-operational">WHY EXPLORE</span>
                  <p>Study the monumental terminal layouts and interstellar stargates anchoring Asthortera.</p>
                </div>
                <div className="pf-discovery-pathway-action">
                  <Link
                    href={ROUTES.AIRPORTS}
                    className="pf-discovery-pathway-link"
                  >
                    <span>Enter Airport Infrastructure</span>
                    <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Pathway 5: Culture */}
              <article className="pf-discovery-pathway-card">
                <div className="pf-discovery-pathway-meta">
                  <span className="pf-text-operational">HUMAN TRADITIONS</span>
                  <span className="pf-badge pf-badge-subtle">TRANSIT CULTURE</span>
                </div>
                <h4 className="pf-discovery-pathway-title">Culture: Rituals, Rites & SkyBrew</h4>
                <p className="pf-discovery-pathway-desc">
                  Experience the human warmth of transit: ceremonial boarding cards, route journals, family departure rites, silence pods, and SkyBrew hospitality.
                </p>
                <div className="pf-discovery-pathway-insight">
                  <span className="pf-text-operational">WHY EXPLORE</span>
                  <p>Feel the emotional core of a society where waiting time is transformed into conscious pause.</p>
                </div>
                <div className="pf-discovery-pathway-action">
                  <Link
                    href={ROUTES.CULTURE}
                    className="pf-discovery-pathway-link"
                  >
                    <span>Discover Living Culture</span>
                    <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Pathway 6: Music */}
              <article className="pf-discovery-pathway-card">
                <div className="pf-discovery-pathway-meta">
                  <span className="pf-text-operational">AUDITORY IDENTITY</span>
                  <span className="pf-badge pf-badge-subtle">ACOUSTIC SPHERES</span>
                </div>
                <h4 className="pf-discovery-pathway-title">Music: Ambient Horizons & Soundscapes</h4>
                <p className="pf-discovery-pathway-desc">
                  Immerse in the acoustic tapestry of the Sky Nation—from tranquil terminal resonance to atmospheric flight suites and departure melodies.
                </p>
                <div className="pf-discovery-pathway-insight">
                  <span className="pf-text-operational">WHY EXPLORE</span>
                  <p>Sense how ambient soundscapes cultivate serenity and acoustic calm throughout massive public spaces.</p>
                </div>
                <div className="pf-discovery-pathway-action">
                  <Link
                    href={ROUTES.MUSIC}
                    className="pf-discovery-pathway-link"
                  >
                    <span>Listen to Soundscapes</span>
                    <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* ================================================================
              3. Closing Identity & Conceptual Return to Arrival
              ================================================================ */}
          <div className="pf-discovery-culmination">
            <div className="pf-discovery-culmination-body">
              <span className="pf-text-operational">VOYAGE SUMMARY // THE CONTINUING HORIZON</span>
              <h3 className="pf-discovery-culmination-title">
                The Sky Nation Awaits Your Next Journey
              </h3>
              <p className="pf-discovery-culmination-text">
                You arrived through the sky. You saw the civilization. You followed its movement. You witnessed its cities. You reached PAIA. Now choose where to travel next.
              </p>
            </div>

            <div className="pf-discovery-actions">
              {/* Primary Cartography / Explore CTA */}
              <Link
                href={ROUTES.EXPLORE}
                className="pf-button pf-button-primary pf-discovery-cta-primary"
              >
                <span>Open Cartographic Hub</span>
                <svg className="pf-discovery-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Conceptual Return to Arrival Anchor */}
              <a
                href="#arrival"
                className="pf-button pf-button-secondary pf-discovery-cta-return"
                aria-label="Return to Arrival Concourse at the top of the page"
              >
                <span>Return to Arrival</span>
                <svg className="pf-discovery-return-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 13V3M3 8L8 3L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================================================================
              4. Subtle External Portal: Reltroner Studio
              ================================================================ */}
          <footer className="pf-discovery-portal-bar">
            <div className="pf-discovery-portal-meta">
              <span className="pf-text-operational">ASTHORTERA UNIVERSE // PARENT ARCHIVE</span>
              <span className="pf-discovery-portal-desc">
                Pasgerflit is a sovereign realm within the Asthortera worldbuilding ecosystem.
              </span>
            </div>
            <a
              href={EXTERNAL_LINKS.RELTRONER_STUDIO}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-discovery-portal-link"
            >
              <span>Reltroner Studio</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </footer>

          {children}
        </div>
      </div>
    </section>
  );
}
