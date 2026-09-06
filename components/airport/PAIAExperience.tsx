import type { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";

export interface PAIAExperienceProps {
  className?: string;
  children?: ReactNode;
}

/**
 * PAIAExperience — Phase 2 Chunk 2.6: PAIA Experience
 *
 * Demonstrates the scale, purpose, specialized terminals, and human-centered
 * philosophy of Pasgerflit Aeropolis International Airport (PAIA).
 *
 * Grounded in Pasgerflit canon:
 * - Location: Northwest aeropolis sector of Aviashenwelt
 * - Scale: 62,917 km² total area, 15,672 km² apron, 9,783 runways, 4,266 terminals
 * - Capacity: 4.05 billion passengers/day, 3,240,000+ daily flights (design scale)
 * - Interstellar: 9 Astralis Gateways & 4 Stargate Rings (Cosmeilia, Cistheta, Depeisit)
 * - Terminals: T-SKY, T-PRISM, T-VELOCITAS, T-CELESTINE
 * - Multi-tier: Planetary, Orbital, Interstellar
 * - Technology: PasCom-AetherOS, Neuronet Traffic Orchestrator, Triple-Core Energy Grid
 * - Philosophy: "To board at PAIA is to surrender the present and step into galactic purpose."
 *               "Movement is Consciousness. Flight is not escape. Flight is expansion."
 *
 * React Server Component with zero client runtime overhead.
 */
export function PAIAExperience({
  className,
  children,
}: PAIAExperienceProps) {
  return (
    <section
      className={`pf-paia-experience pf-experience-stage ${className || ""}`.trim()}
      data-experience="paia"
      aria-labelledby="paia-heading"
    >
      {/* Monumental terminal & runway atmospheric backdrop */}
      <div className="pf-paia-backdrop" aria-hidden="true">
        <div className="pf-paia-glow" />
        <div className="pf-paia-runway-perspective" />
        <div className="pf-paia-arch-geometry" />
      </div>

      <div className="pf-container pf-paia-container">
        <div className="pf-paia-content pf-stack pf-stack-2xl">
          {/* ================================================================
              1. PAIA Arrival & Monumental Reveal
              ================================================================ */}
          <header className="pf-paia-header">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-accent">NATIONAL INFRASTRUCTURE SYMBOL</span>
              <span className="pf-text-operational">NORTHWEST AEROPOLIS SECTOR // AVIASHENWELT</span>
            </div>
            <h2 id="paia-heading" className="pf-paia-title">
              PAIA: The Airport That Became a Civilization
            </h2>
            <p className="pf-paia-lead pf-text-lead">
              Anchoring the northwest aeropolis sector of Aviashenwelt, Pasgerflit Aeropolis International Airport (PAIA) is the monumental mobility engine of the Sky Nation. Far more than an air terminal serving a city, PAIA is an urban-scale mobility ecosystem where planetary flightpaths, orbital elevator tethers, and interstellar Astralis Gateways unite under a single architecture of conscious, dignified transit.
            </p>
            <div className="pf-paia-location-bar">
              <span className="pf-text-operational">COORDINATES & CONTEXT</span>
              <span className="pf-paia-location-summary">
                Greater Aeropolis of Aviashenwelt — Primary Interstellar Nexus of Asthortera, linking Pasgerflit with Cosmeilia, Cistheta, and Depeisit.
              </span>
            </div>
          </header>

          {/* ================================================================
              2. Scale Experience: Canon Infrastructure Scale
              ================================================================ */}
          <div className="pf-paia-section pf-stack pf-stack-md">
            <div className="pf-paia-section-header">
              <span className="pf-text-operational">INFRASTRUCTURE DIMENSIONS // CANON DESIGN SCALE</span>
              <h3 className="pf-paia-section-title">
                Monumental Aeropolis Dimensions
              </h3>
              <p className="pf-paia-section-lead">
                Engineered to orchestrate planetary flight grids and galactic waypoints without friction, PAIA operates at the physical scale of an entire metropolitan province.
              </p>
            </div>

            <div className="pf-paia-metrics-grid">
              {/* Metric 1: Total Footprint */}
              <div className="pf-paia-metric-card">
                <div className="pf-paia-metric-header">
                  <span className="pf-badge pf-badge-subtle">AEROPOLIS FOOTPRINT</span>
                  <span className="pf-text-operational">TOTAL SURFACE</span>
                </div>
                <div className="pf-paia-metric-value">62,917 km²</div>
                <h4 className="pf-paia-metric-label">Total Aeropolis Area</h4>
                <p className="pf-paia-metric-desc">
                  Includes 15,672 km² of continuous apron space, integrating acoustic buffering forests, magnetic glide tracks, and vaulted concourses.
                </p>
              </div>

              {/* Metric 2: Runways */}
              <div className="pf-paia-metric-card">
                <div className="pf-paia-metric-header">
                  <span className="pf-badge pf-badge-subtle">RUNWAY NETWORK</span>
                  <span className="pf-text-operational">PRECISION STRIPS</span>
                </div>
                <div className="pf-paia-metric-value">9,783</div>
                <h4 className="pf-paia-metric-label">High-Velocity Runways</h4>
                <p className="pf-paia-metric-desc">
                  Configured with an average dimension of 250m × 13,200m to accommodate intercity atmospheric gliders, stratospheric liners, and heavy freight transports.
                </p>
              </div>

              {/* Metric 3: Active Terminals */}
              <div className="pf-paia-metric-card">
                <div className="pf-paia-metric-header">
                  <span className="pf-badge pf-badge-subtle">TERMINAL HUBS</span>
                  <span className="pf-text-operational">BOARDING ARCHITECTURE</span>
                </div>
                <div className="pf-paia-metric-value">4,266</div>
                <h4 className="pf-paia-metric-label">Active Terminal Complexes</h4>
                <p className="pf-paia-metric-desc">
                  Modular, sunlit concourses equipped with acoustic dampening pods, silence courtyards, and integrated SkyBrew hospitality hubs.
                </p>
              </div>

              {/* Metric 4: Interstellar Gateways */}
              <div className="pf-paia-metric-card">
                <div className="pf-paia-metric-header">
                  <span className="pf-badge pf-badge-subtle">INTERSTELLAR NEXUS</span>
                  <span className="pf-text-operational">COSMIC ROUTING</span>
                </div>
                <div className="pf-paia-metric-value">9 Gateways // 4 Rings</div>
                <h4 className="pf-paia-metric-label">Astralis Gateways & Stargate Rings</h4>
                <p className="pf-paia-metric-desc">
                  Orbital magnetic acceleration rings anchoring inter-civilizational passage across Astralis-aligned star systems and diplomatic corridors.
                </p>
              </div>

              {/* Metric 5: Passenger Mobility Capacity */}
              <div className="pf-paia-metric-card">
                <div className="pf-paia-metric-header">
                  <span className="pf-badge pf-badge-subtle">CIVILIZATION THROUGHPUT</span>
                  <span className="pf-text-operational">DAILY MOBILITY</span>
                </div>
                <div className="pf-paia-metric-value">4.05 Billion</div>
                <h4 className="pf-paia-metric-label">Daily Passenger Mobility Capacity</h4>
                <p className="pf-paia-metric-desc">
                  Engineered human transit capacity linking Pasgerflit with Asthorteran urban centers, Cosmeilia, Cistheta, Depeisit, and beyond.
                </p>
              </div>

              {/* Metric 6: Daily Flight Synchrony */}
              <div className="pf-paia-metric-card">
                <div className="pf-paia-metric-header">
                  <span className="pf-badge pf-badge-subtle">NETWORK HARMONY</span>
                  <span className="pf-text-operational">DAILY FLIGHT SLOTS</span>
                </div>
                <div className="pf-paia-metric-value">3,240,000+</div>
                <h4 className="pf-paia-metric-label">Daily Coordinated Takeoffs & Landings</h4>
                <p className="pf-paia-metric-desc">
                  Flawlessly synchronized trajectories across planetary and orbital layers, achieved without mid-air holds or acoustic congestion.
                </p>
              </div>
            </div>

            <div className="pf-paia-scale-footnote">
              <span className="pf-text-operational">CANON SPECIFICATION NOTE</span>
              <p>
                Metrics reflect established permanent infrastructure design capacity within the Aviashenwelt aeropolis sector, not variable operational telemetry.
              </p>
            </div>
          </div>

          {/* ================================================================
              3. The Specialized Terminal System (Four Concourse Realms)
              ================================================================ */}
          <div className="pf-paia-section pf-stack pf-stack-md">
            <div className="pf-paia-section-header">
              <span className="pf-text-operational">SPECIALIZED CONCOURSES // PURPOSE-BUILT HUBS</span>
              <h3 className="pf-paia-section-title">
                Four Specialized Concourse Realms
              </h3>
              <p className="pf-paia-section-lead">
                In Pasgerflit, different modes of voyage require distinct acoustic, spatial, and psychological environments. Four specialized terminal complexes honor the specific nature of every departure.
              </p>
            </div>

            <div className="pf-paia-terminals-grid">
              {/* Terminal 1: T-SKY */}
              <article className="pf-paia-terminal-card">
                <div className="pf-paia-terminal-badge-row">
                  <span className="pf-paia-terminal-code">T-SKY</span>
                  <span className="pf-badge pf-badge-neutral">ORBITAL ASCENT</span>
                </div>
                <h4 className="pf-paia-terminal-name">Space Elevator & Shuttle Complex</h4>
                <p className="pf-paia-terminal-desc">
                  Anchored to stratospheric space elevator tethers and high-altitude shuttle bays. Here, passengers transition smoothly from tropospheric flight into zero-gravity orbital lines beneath pressurized crystal vaulted domes.
                </p>
                <div className="pf-paia-terminal-insight">
                  <span className="pf-text-operational">CIVILIZATIONAL REVELATION</span>
                  <p>Aviation does not stop at the clouds; it ascends into orbital continuity as a unified civic highway.</p>
                </div>
              </article>

              {/* Terminal 2: T-PRISM */}
              <article className="pf-paia-terminal-card">
                <div className="pf-paia-terminal-badge-row">
                  <span className="pf-paia-terminal-code">T-PRISM</span>
                  <span className="pf-badge pf-badge-neutral">DIPLOMATIC GATEWAY</span>
                </div>
                <h4 className="pf-paia-terminal-name">Diplomatic & Civilization Exchange</h4>
                <p className="pf-paia-terminal-desc">
                  The ceremonial air gateway of Pasgerflit, receiving state delegations, foreign ambassadors, and cross-realm alliances. Designed with acoustically dampened marble pavilions, reflection courtyards, and sovereign assembly halls.
                </p>
                <div className="pf-paia-terminal-insight">
                  <span className="pf-text-operational">CIVILIZATIONAL REVELATION</span>
                  <p>Diplomacy begins at the runway threshold. How a guest is welcomed establishes the integrity of the nation.</p>
                </div>
              </article>

              {/* Terminal 3: T-VELOCITAS */}
              <article className="pf-paia-terminal-card">
                <div className="pf-paia-terminal-badge-row">
                  <span className="pf-paia-terminal-code">T-VELOCITAS</span>
                  <span className="pf-badge pf-badge-neutral">HYPERSPEED VOYAGE</span>
                </div>
                <h4 className="pf-paia-terminal-name">Subdimensional & Hyperspeed Zones</h4>
                <p className="pf-paia-terminal-desc">
                  Equipped with relativistic acceleration dampeners and fold-space transit bays. Boarding protocols emphasize sensory stabilization and calibrated vector staging for high-mach planetary jumps and deep-space voyages.
                </p>
                <div className="pf-paia-terminal-insight">
                  <span className="pf-text-operational">CIVILIZATIONAL REVELATION</span>
                  <p>Extreme velocity requires greater composure. Technology cushions the body so human consciousness remains calm.</p>
                </div>
              </article>

              {/* Terminal 4: T-CELESTINE */}
              <article className="pf-paia-terminal-card">
                <div className="pf-paia-terminal-badge-row">
                  <span className="pf-paia-terminal-code">T-CELESTINE</span>
                  <span className="pf-badge pf-badge-neutral">CONTEMPLATIVE PASSAGE</span>
                </div>
                <h4 className="pf-paia-terminal-name">Spiritual & Soft-Flight Sanctuary</h4>
                <p className="pf-paia-terminal-desc">
                  A tranquil departure sanctuary for contemplative travelers, pilgrims, and artistic expeditions. Features acoustic silence halls, harmonic resonance chambers, warm cedar-and-stone canopies, and unhurried departure rites.
                </p>
                <div className="pf-paia-terminal-insight">
                  <span className="pf-text-operational">CIVILIZATIONAL REVELATION</span>
                  <p>Travel is an inward journey. In Pasgerflit, speed is never enforced where stillness and reflection are needed.</p>
                </div>
              </article>
            </div>
          </div>

          {/* ================================================================
              4. Three Levels of PAIA: Layered Gateway Architecture
              ================================================================ */}
          <div className="pf-paia-section pf-stack pf-stack-md">
            <div className="pf-paia-section-header">
              <span className="pf-text-operational">VERTICAL ARCHITECTURE // MULTI-TIER TRANSIT</span>
              <h3 className="pf-paia-section-title">
                Three Altitudes of Sovereign Movement
              </h3>
              <p className="pf-paia-section-lead">
                PAIA vertically harmonizes movement across three distinct atmospheric realms—bridging domestic ground cities, orbital boundaries, and interstellar star routes.
              </p>
            </div>

            <div className="pf-paia-tiers-stack">
              {/* Tier 1: Planetary */}
              <div className="pf-paia-tier-card">
                <div className="pf-paia-tier-indicator">
                  <span className="pf-paia-tier-level">TIER 01</span>
                  <span className="pf-badge pf-badge-subtle">TROPOSPHERIC // 0 - 15 KM</span>
                </div>
                <div className="pf-paia-tier-body">
                  <h4 className="pf-paia-tier-name">The Planetary Airgrid</h4>
                  <p className="pf-paia-tier-text">
                    Connects Aviashenwelt with every province of Pasgerflit and neighboring Asthorteran city-states. Intercity gliders, high-speed regional commuter craft, and automated aerospace cargo lines descend through synchronized low-noise approach corridors.
                  </p>
                  <div className="pf-paia-tier-destinations">
                    <span className="pf-text-operational">PRIMARY DESTINATIONS</span>
                    <p className="pf-paia-tier-tags">
                      Aviashenwelt Districts • Asthortera Regional Capitals • Depeisit Trade Ports • Domestic Skyports
                    </p>
                  </div>
                </div>
              </div>

              {/* Tier 2: Orbital */}
              <div className="pf-paia-tier-card">
                <div className="pf-paia-tier-indicator">
                  <span className="pf-paia-tier-level">TIER 02</span>
                  <span className="pf-badge pf-badge-subtle">STRATOSPHERIC // 15 - 400 KM</span>
                </div>
                <div className="pf-paia-tier-body">
                  <h4 className="pf-paia-tier-name">The Orbital Staging Boundary</h4>
                  <p className="pf-paia-tier-text">
                    High-altitude space elevator tethers and stratospheric staging platforms. Serves orbital passenger shuttles, solar array maintenance vessels, planetary research stations, and high-altitude atmospheric transition cruisers.
                  </p>
                  <div className="pf-paia-tier-destinations">
                    <span className="pf-text-operational">PRIMARY DESTINATIONS</span>
                    <p className="pf-paia-tier-tags">
                      Orbital Tether Stations • Stratospheric Platforms • Solar Collector Arrays • Orbital Habitats
                    </p>
                  </div>
                </div>
              </div>

              {/* Tier 3: Interstellar */}
              <div className="pf-paia-tier-card">
                <div className="pf-paia-tier-indicator">
                  <span className="pf-paia-tier-level">TIER 03</span>
                  <span className="pf-badge pf-badge-subtle">COSMIC // ASTRALIS STARGATE RINGS</span>
                </div>
                <div className="pf-paia-tier-body">
                  <h4 className="pf-paia-tier-name">The Interstellar Gateways</h4>
                  <p className="pf-paia-tier-text">
                    The 9 Astralis Gateways and 4 Stargate Rings mounted on orbital pylons. Vessels undergo quantum vector alignment to link Pasgerflit directly with friendly sister realms and deep Astralis mobility corridors.
                  </p>
                  <div className="pf-paia-tier-destinations">
                    <span className="pf-text-operational">PRIMARY DESTINATIONS</span>
                    <p className="pf-paia-tier-tags">
                      Cosmeilia Corridors • Cistheta High-Lanes • Astralis Deep Networks • Interstellar Enclaves
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              5. Technology Without Command-Center Aesthetics
              ================================================================ */}
          <div className="pf-paia-section pf-stack pf-stack-md">
            <div className="pf-paia-section-header">
              <span className="pf-text-operational">CIVILIZATION SYSTEMS // ETHICAL COORDINATION</span>
              <h3 className="pf-paia-section-title">
                Coordinated by Intelligence, Powered by Harmony
              </h3>
              <p className="pf-paia-section-lead">
                Advanced automation in Pasgerflit does not exist for surveillance or military domination. It serves the dignity of passage, ensuring quiet safety and seamless human flow across billions of journeys.
              </p>
            </div>

            <div className="pf-paia-systems-grid">
              {/* System 1: PasCom-AetherOS */}
              <div className="pf-paia-system-card">
                <div className="pf-paia-system-meta">
                  <span className="pf-badge pf-badge-neutral">CIVIC CO-INTELLIGENCE</span>
                  <span className="pf-text-operational">COORDINATION OS</span>
                </div>
                <h4 className="pf-paia-system-name">PasCom-AetherOS AI</h4>
                <p className="pf-paia-system-desc">
                  The quiet architectural intelligence of PAIA. Harmonizes multi-tier navigation, dynamic gate allocations, air ionization, and acoustic damping across 4,266 terminals without intrusive screens or jarring alarms.
                </p>
              </div>

              {/* System 2: Neuronet Traffic Orchestrator */}
              <div className="pf-paia-system-card">
                <div className="pf-paia-system-meta">
                  <span className="pf-badge pf-badge-neutral">VECTOR SYNCHRONIZATION</span>
                  <span className="pf-text-operational">BIO-ALGORITHMIC GRID</span>
                </div>
                <h4 className="pf-paia-system-name">Neuronet Traffic Orchestrator</h4>
                <p className="pf-paia-system-desc">
                  A distributed bio-algorithmic grid synchronizing millions of flight vectors simultaneously. Air routes adapt smoothly in real time to atmospheric density and solar winds through organic consensus rather than coercion.
                </p>
              </div>

              {/* System 3: Triple-Core Energy Grid */}
              <div className="pf-paia-system-card">
                <div className="pf-paia-system-meta">
                  <span className="pf-badge pf-badge-neutral">REGENERATIVE POWER</span>
                  <span className="pf-text-operational">TRIPLE ENERGY CORE</span>
                </div>
                <h4 className="pf-paia-system-name">Aurora, Antimatter & Solar Loop</h4>
                <p className="pf-paia-system-desc">
                  Powered by the Aurora Crystallization Reactor, Antimatter Compression Loop, and space-reflected Solar Funnel Arrays. Supplies unconditional, emission-free propulsion charging, life-support reserves, and kinetic shielding.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================
              6. The Human PAIA Moment
              ================================================================ */}
          <div className="pf-paia-section pf-stack pf-stack-md">
            <div className="pf-paia-section-header">
              <span className="pf-text-operational">THE TRAVELER&apos;S ODYSSEY // HUMAN SCALE</span>
              <h3 className="pf-paia-section-title">
                Intimacy Within Monumental Horizons
              </h3>
              <p className="pf-paia-section-lead">
                Despite PAIA&apos;s colossal 62,917 km² scale, the individual never feels overwhelmed. The aeropolis is calibrated to the natural rhythm of human breath.
              </p>
            </div>

            <div className="pf-paia-human-stages">
              <div className="pf-paia-stage-item">
                <div className="pf-paia-stage-num">01</div>
                <div className="pf-paia-stage-content">
                  <h4 className="pf-paia-stage-title">Grand Arrival Hall</h4>
                  <p className="pf-paia-stage-desc">
                    Daylight floods through soaring curved glass canopies. Clear, calm wayfinding signs illuminate without glare, welcoming travelers into an acoustic atmosphere of serenity.
                  </p>
                </div>
              </div>

              <div className="pf-paia-stage-item">
                <div className="pf-paia-stage-num">02</div>
                <div className="pf-paia-stage-content">
                  <h4 className="pf-paia-stage-title">Quiet Transit Concourse</h4>
                  <p className="pf-paia-stage-desc">
                    Moving along silent magnetic glide-ways bordered by indoor garden groves. Travelers pause at a SkyBrew kiosk or rest inside acoustic silence pods to prepare mentally for transit.
                  </p>
                </div>
              </div>

              <div className="pf-paia-stage-item">
                <div className="pf-paia-stage-num">03</div>
                <div className="pf-paia-stage-content">
                  <h4 className="pf-paia-stage-title">Observation Skybridge</h4>
                  <p className="pf-paia-stage-desc">
                    Standing before panoramic acoustic glass, watching atmospheric gliders touch down and orbital vessels ascend gracefully toward the Astralis Gateways along the distant horizon.
                  </p>
                </div>
              </div>

              <div className="pf-paia-stage-item">
                <div className="pf-paia-stage-num">04</div>
                <div className="pf-paia-stage-content">
                  <h4 className="pf-paia-stage-title">Threshold Preparation</h4>
                  <p className="pf-paia-stage-desc">
                    Holding the ceremonial boarding card, annotating the route journal, and taking a moment of mindful pause with family or fellow voyagers before crossing the gate line.
                  </p>
                </div>
              </div>

              <div className="pf-paia-stage-item">
                <div className="pf-paia-stage-num">05</div>
                <div className="pf-paia-stage-content">
                  <h4 className="pf-paia-stage-title">The Gateway Horizon</h4>
                  <p className="pf-paia-stage-desc">
                    Stepping through the gate portal and boarding the craft with quiet assurance, ready to embark into planetary or galactic expanse with purpose and dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              7. PAIA As Symbol & Civilizational Statement
              ================================================================ */}
          <div className="pf-paia-symbol-banner">
            <div className="pf-paia-symbol-glow" aria-hidden="true" />
            <div className="pf-paia-symbol-body">
              <span className="pf-text-operational">PHILOSOPHICAL ANCHOR // THE SOUL OF FLIGHT</span>
              <blockquote className="pf-paia-quote">
                &ldquo;To board at PAIA is to surrender the present and step into galactic purpose.&rdquo;
              </blockquote>
              <p className="pf-paia-creed">
                In Pasgerflit, movement is consciousness. Flight is not an escape from reality, but an expansion of human existence. PAIA stands as living proof that an entire civilization can be organized upon the ethics of safe passage, purposeful voyage, and responsible arrival.
              </p>
            </div>

            <div className="pf-paia-actions">
              <Link
                href={ROUTES.AIRPORTS}
                className="pf-button pf-button-primary pf-paia-cta-primary"
              >
                <span>Explore PAIA & Aeropolis Network</span>
                <svg
                  className="pf-paia-cta-arrow"
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
                href={ROUTES.AVIATION}
                className="pf-button pf-button-secondary pf-paia-cta-secondary"
              >
                <span>Aviation Corridors & Fleet</span>
              </Link>
              <Link
                href={ROUTES.CITIES}
                className="pf-button pf-button-secondary pf-paia-cta-secondary"
              >
                <span>Aviashenwelt Districts</span>
              </Link>
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
