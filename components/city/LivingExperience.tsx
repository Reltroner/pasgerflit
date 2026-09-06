import type { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";

export interface LivingExperienceProps {
  className?: string;
  children?: ReactNode;
}

/**
 * LivingExperience — Phase 2 Chunk 2.5: Living Experience
 *
 * Demonstrates how Pasgerflit's aviation philosophy enters everyday life:
 * "Where Movement Becomes Everyday Life"
 *
 * Narrative Progression:
 * MOVEMENT -> CITY -> CIVIC LIFE -> CULTURE -> HOSPITALITY -> HUMAN MOMENTS
 *
 * Grounded in Pasgerflit canon:
 * - Eternal airport-city: Aviashenwelt & its signature districts (Skyportalis, Runwayria, Boarding Nexus)
 * - Civic architecture borrowing terminal logic (boarding halls, glideways, terminal wayfinding)
 * - Lived cultural rituals (route journals, family departure rites, silence lounges)
 * - SkyBrew transit hospitality (turning waiting into pause, reflection, and connection)
 * - Quiet human scale (the person is the protagonist, not the aircraft)
 *
 * React Server Component with zero client runtime overhead.
 */
export function LivingExperience({
  className,
  children,
}: LivingExperienceProps) {
  return (
    <section
      className={`pf-living-experience pf-experience-stage ${className || ""}`.trim()}
      data-experience="living"
      aria-labelledby="living-heading"
    >
      {/* Subtle civic atmosphere backdrop */}
      <div className="pf-living-backdrop" aria-hidden="true">
        <div className="pf-living-civic-glow" />
        <div className="pf-living-runway-guides" />
      </div>

      <div className="pf-container pf-living-container">
        <div className="pf-living-content">
          {/* ================================================================
              1. Living Introduction
              ================================================================ */}
          <div className="pf-living-header">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">CIVIC CULTURE & URBAN LIFE</span>
              <span className="pf-text-operational">ASTHORTERA // AERODROME URBANISM</span>
            </div>
            <h2 id="living-heading" className="pf-living-title">
              Where Movement Becomes Everyday Life
            </h2>
            <p className="pf-living-lead pf-text-lead">
              In Pasgerflit, aviation is not confined to distant tarmacs or isolated corridors. The logic of departure, journey, and arrival has become the living language of ordinary society: shaping how city neighborhoods breathe, how civic halls assemble, and how hospitality restores the spirit.
            </p>
          </div>

          {/* ================================================================
              2. City Life: Aviashenwelt & Canonical Districts
              ================================================================ */}
          <div className="pf-living-section pf-stack pf-stack-md">
            <div className="pf-living-section-header">
              <span className="pf-text-operational">METROPOLITAN LIFE // AVIASHENWELT</span>
              <h3 className="pf-living-section-title">
                The Eternal Airport-City & Its Districts
              </h3>
              <p className="pf-living-section-lead">
                Asthortera&apos;s signature metropolis is built on aerodrome urbanism. Here, urban density and quiet human comfort coexist seamlessly beneath open skies.
              </p>
            </div>

            <div className="pf-living-districts-grid">
              {/* District 1: Aviashenwelt Core */}
              <div className="pf-living-district-card">
                <div className="pf-living-district-meta">
                  <span className="pf-text-operational">METROPOLITAN CORE</span>
                  <span className="pf-living-district-tag">AVIASHEWELT</span>
                </div>
                <h4 className="pf-living-district-title">The Eternal Airport-City</h4>
                <p className="pf-living-district-desc">
                  Residential quarters open toward panoramic flight corridors, and transit flows with boarding-gate grace. Aviashenwelt demonstrates that a city modeled after an aerodrome can be tranquil, walkable, and deeply humane.
                </p>
                <div className="pf-living-district-feeling">
                  <span className="pf-living-feeling-label">Lived Experience</span>
                  <span className="pf-living-feeling-text">
                    Morning strolls along sunlit glideways as commuter sky shuttles lift quietly over tree-lined neighborhood verandas.
                  </span>
                </div>
              </div>

              {/* District 2: Skyportalis */}
              <div className="pf-living-district-card">
                <div className="pf-living-district-meta">
                  <span className="pf-text-operational">RESEARCH & INNOVATION</span>
                  <span className="pf-living-district-tag">SKYPORTALIS</span>
                </div>
                <h4 className="pf-living-district-title">Aeronautical Labs & Design Quarters</h4>
                <p className="pf-living-district-desc">
                  The technological heart of Pasgerian aviation. Here, flight dynamics, passenger cabin ergonomics, and ethical airgrid systems are engineered with patient craft rather than competitive frenzy.
                </p>
                <div className="pf-living-district-feeling">
                  <span className="pf-living-feeling-label">Lived Experience</span>
                  <span className="pf-living-feeling-text">
                    Engineers and scholars debating hull acoustics over tea in glass-vaulted testing pavilions surrounded by courtyard gardens.
                  </span>
                </div>
              </div>

              {/* District 3: Runwayria */}
              <div className="pf-living-district-card">
                <div className="pf-living-district-meta">
                  <span className="pf-text-operational">TRANSIT & TOURISM</span>
                  <span className="pf-living-district-tag">RUNWAYRIA</span>
                </div>
                <h4 className="pf-living-district-title">The Layover Culture Megacenter</h4>
                <p className="pf-living-district-desc">
                  A celebration of the beauty of transience. Travellers and locals interweave among observation terraces, international culinary arcades, and restorative layover pavilions.
                </p>
                <div className="pf-living-district-feeling">
                  <span className="pf-living-feeling-label">Lived Experience</span>
                  <span className="pf-living-feeling-text">
                    Lounging on terraced seating, sharing stories with voyagers from opposite sectors while watching evening apron lights flicker to life.
                  </span>
                </div>
              </div>

              {/* District 4: Boarding Nexus */}
              <div className="pf-living-district-card">
                <div className="pf-living-district-meta">
                  <span className="pf-text-operational">CIVIC THRESHOLD</span>
                  <span className="pf-living-district-tag">BOARDING NEXUS</span>
                </div>
                <h4 className="pf-living-district-title">Thresholds, Silence & Purpose</h4>
                <p className="pf-living-district-desc">
                  The philosophical sanctuary of departure. Citizens visit the Baggage of the Soul Temples, Silence Lounges, and Clarity Courtyards to shed stagnation before embarking upon significant journeys.
                </p>
                <div className="pf-living-district-feeling">
                  <span className="pf-living-feeling-label">Lived Experience</span>
                  <span className="pf-living-feeling-text">
                    Stepping onto polished threshold flagstones to pause in meditative stillness before crossing into a new chapter of life.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              3. Civic Life: Airport Logic in Public Spaces
              ================================================================ */}
          <div className="pf-living-section pf-stack pf-stack-md">
            <div className="pf-living-section-header">
              <span className="pf-text-operational">CIVIC INFRASTRUCTURE // THE TERMINAL GRAMMAR</span>
              <h3 className="pf-living-section-title">
                How Airport Grammar Builds Civic Life
              </h3>
              <p className="pf-living-section-lead">
                Pasgerians do not only experience airport logic when travelling abroad. They inhabit a society whose public spaces borrow the dignity, clarity, and wayfinding of the terminal.
              </p>
            </div>

            <div className="pf-living-civic-grid">
              <div className="pf-living-civic-card">
                <span className="pf-living-civic-badge">PUBLIC ARCHITECTURE</span>
                <h4 className="pf-living-civic-title">Civic Plazas as Boarding Halls</h4>
                <p className="pf-living-civic-desc">
                  Town forums and municipal squares feature high-arched glass roofs, acoustic baffle canopies, and intuitive concourse gates that welcome citizens into calm community debate.
                </p>
              </div>

              <div className="pf-living-civic-card">
                <span className="pf-living-civic-badge">URBAN MOBILITY</span>
                <h4 className="pf-living-civic-title">Glideways & Runway Alignments</h4>
                <p className="pf-living-civic-desc">
                  District streets are structured along atmospheric approach vectors, with soft embedded runway-light markers guiding evening pedestrians smoothly toward central mobility hubs.
                </p>
              </div>

              <div className="pf-living-civic-card">
                <span className="pf-living-civic-badge">CIVIC INSTITUTIONS</span>
                <h4 className="pf-living-civic-title">Terminal Wayfinding in Education</h4>
                <p className="pf-living-civic-desc">
                  Schools and academies use gate-based navigation, airgrid telemetry maps, and silence pods, teaching young Pasgerians route responsibility and passenger dignity from childhood.
                </p>
              </div>

              <div className="pf-living-civic-card">
                <span className="pf-living-civic-badge">CULTURAL MEMORY</span>
                <h4 className="pf-living-civic-title">Libraries with Pilot Archives</h4>
                <p className="pf-living-civic-desc">
                  Public libraries house historic flight logs, cartographic star-charts, and personal navigation diaries, treating the record of movement as sacred cultural memory.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================
              4. Culture: Lived Rituals of the Sky Nation
              ================================================================ */}
          <div className="pf-living-section pf-stack pf-stack-md">
            <div className="pf-living-section-header">
              <span className="pf-text-operational">LIVED RITUALS // IDENTITY OF MOVEMENT</span>
              <h3 className="pf-living-section-title">
                Culture of Mindful Transit
              </h3>
              <p className="pf-living-section-lead">
                Traditions in Pasgerflit are living habits rather than ceremonial relics. They remind citizens that every journey is an act of expansion and care.
              </p>
            </div>

            <div className="pf-living-culture-grid">
              <div className="pf-living-culture-card">
                <span className="pf-living-culture-pill">RITUAL 01</span>
                <h4 className="pf-living-culture-title">Ceremonial Boarding Cards</h4>
                <p className="pf-living-culture-desc">
                  Personal engraved cards carried on voyages to mark transitions in status, education, or career—commemorating where one has departed from and where one hopes to arrive.
                </p>
              </div>

              <div className="pf-living-culture-card">
                <span className="pf-living-culture-pill">RITUAL 02</span>
                <h4 className="pf-living-culture-title">Route Journals & Cartography</h4>
                <p className="pf-living-culture-desc">
                  Hand-bound travel logs where travelers annotate wind conditions, concourse encounters, and personal reflections during long atmospheric glides across Asthortera.
                </p>
              </div>

              <div className="pf-living-culture-card">
                <span className="pf-living-culture-pill">RITUAL 03</span>
                <h4 className="pf-living-culture-title">Family Departure & Arrival Rites</h4>
                <p className="pf-living-culture-desc">
                  Families gather at gate thresholds to present travellers with freshly roasted beans and travel talismans, transforming departures into blessings and arrivals into celebrations.
                </p>
              </div>

              <div className="pf-living-culture-card">
                <span className="pf-living-culture-pill">RITUAL 04</span>
                <h4 className="pf-living-culture-title">Silence Lounges & Clarity Pods</h4>
                <p className="pf-living-culture-desc">
                  Public sanctuaries distributed throughout bustling concourses where speaking is forbidden, allowing the senses to settle before entering the stream of motion.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================
              5. Hospitality: The SkyBrew Moment
              ================================================================ */}
          <div className="pf-living-skybrew-card">
            <div className="pf-living-skybrew-header">
              <div className="pf-row pf-row-sm">
                <span className="pf-badge pf-badge-warning">TRANSIT HOSPITALITY</span>
                <span className="pf-text-operational">SKYBREW // CONCOURSE SANCTUARY</span>
              </div>
              <h3 className="pf-living-skybrew-title">
                SkyBrew: Transforming Waiting into Purpose
              </h3>
              <p className="pf-living-skybrew-desc">
                In Pasgerflit, waiting is not wasted time or stagnant boredom. In concourse lounges and neighborhood glideway stations, SkyBrew is the flagship sanctuary where travellers, pilots, explorers, and commuters pause to gather clarity.
              </p>
            </div>

            <div className="pf-living-skybrew-rhythms">
              <div className="pf-living-rhythm-item">
                <span className="pf-living-rhythm-step">PHASE 01</span>
                <h4 className="pf-living-rhythm-name">The Conscious Pause</h4>
                <p className="pf-living-rhythm-desc">
                  Stepping aside from the corridor&apos;s velocity into comfortable acoustic timber seating, warm ambient light, and the grounding aroma of freshly roasted beans.
                </p>
              </div>

              <div className="pf-living-rhythm-item">
                <span className="pf-living-rhythm-step">PHASE 02</span>
                <h4 className="pf-living-rhythm-name">Preparation & Focus</h4>
                <p className="pf-living-rhythm-desc">
                  A tranquil environment engineered for reading route notes, drafting sketches, or holding unhurried conversations before the boarding chime sounds.
                </p>
              </div>

              <div className="pf-living-rhythm-item">
                <span className="pf-living-rhythm-step">PHASE 03</span>
                <h4 className="pf-living-rhythm-name">Apron Contemplation</h4>
                <p className="pf-living-rhythm-desc">
                  Floor-to-ceiling glass looking outward onto departing shuttles, aligning internal stillness with the purposeful rhythm of flight beyond the window.
                </p>
              </div>

              <div className="pf-living-rhythm-item">
                <span className="pf-living-rhythm-step">PHASE 04</span>
                <h4 className="pf-living-rhythm-name">Social Meeting Point</h4>
                <p className="pf-living-rhythm-desc">
                  Where transit workers, cross-sector diplomats, and neighborhood residents sit together under the same canopy, united by the hospitality of the journey.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================
              6. The Human Moment & Navigation
              ================================================================ */}
          <div className="pf-living-human-moment">
            <div className="pf-living-human-body">
              <span className="pf-text-operational">THE HUMAN SCALE // EVERYDAY LIFE</span>
              <h3 className="pf-living-human-title">
                The Person is the Protagonist, Not the Aircraft
              </h3>
              <p className="pf-living-human-text">
                Moving through a tree-shaded airport-city avenue, pausing at a mobility café, following familiar wayfinding signs home, greeting an old friend arriving from an orbital gate—in Pasgerflit, extraordinary mobility has simply become gentle, dignified everyday life.
              </p>
            </div>

            <div className="pf-living-actions">
              <Link
                href={ROUTES.CITIES}
                className="pf-button pf-button-primary pf-living-cta-primary"
              >
                <span>Explore Cities & Districts</span>
                <svg
                  className="pf-living-cta-arrow"
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
                href={ROUTES.CULTURE}
                className="pf-button pf-button-secondary pf-living-cta-secondary"
              >
                <span>Discover Living Culture</span>
              </Link>
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
