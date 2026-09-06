import type { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";

export interface CivilizationExperienceProps {
  className?: string;
  children?: ReactNode;
}

/**
 * CivilizationExperience — Phase 2 Chunk 2.3: Civilization Experience
 *
 * Explains the underlying civilizational logic of Pasgerflit:
 * "Why does Pasgerflit organize so much of life around aviation?"
 *
 * Grounded strictly in Pasgerflit canon:
 * - Planetary context: Asthortera (no Earth references)
 * - Philosophical doctrine: "Movement is Consciousness." & "Flight is not escape. Flight is expansion."
 * - Three Civilizational Pillars:
 *   1. Movement is Consciousness (purposeful mobility, passenger dignity)
 *   2. Airports as Civic Organs (terminals as town halls, schools, public plazas)
 *   3. Arrival Has Meaning (departure from stagnation, landing into purpose & hospitality)
 * - Asthortera Inter-Connection: Safe passage, ethical airspace, and Sky Sovereignty
 *
 * React Server Component with zero client runtime overhead.
 */
export function CivilizationExperience({
  className,
  children,
}: CivilizationExperienceProps) {
  return (
    <section
      className={`pf-civilization-experience pf-experience-stage ${className || ""}`.trim()}
      data-experience="civilization"
      aria-labelledby="civilization-heading"
    >
      {/* Subtle civic grid & corridor guide */}
      <div className="pf-civ-backdrop" aria-hidden="true">
        <div className="pf-civ-centerline" />
        <div className="pf-civ-grid-lines" />
      </div>

      <div className="pf-container pf-civ-container">
        <div className="pf-civ-content">
          {/* 1. Civic Wayfinding / Status Header */}
          <div className="pf-civ-header">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">CIVILIZATION LOGIC</span>
              <span className="pf-text-operational">ASTHORTERA // SKY SOVEREIGNTY</span>
            </div>
            <h2 id="civilization-heading" className="pf-civ-title">
              Why Aviation Shapes Civilization
            </h2>
            <p className="pf-civ-lead pf-text-lead">
              In Pasgerflit, aviation is neither an isolated industry nor a military spectacle. It is the foundational civic architecture through which society organizes education, community spaces, urban geography, and shared purpose.
            </p>
          </div>

          {/* 2. Central Philosophical Doctrine Banner */}
          <div className="pf-civ-doctrine-banner">
            <div className="pf-civ-doctrine-quote-mark" aria-hidden="true">
              “
            </div>
            <div className="pf-civ-doctrine-body">
              <blockquote className="pf-civ-doctrine-quote">
                Movement is Consciousness. Flight is not escape—flight is expansion.
              </blockquote>
              <p className="pf-civ-doctrine-attribution">
                — Foundational Flight Doctrine of Asthortera
              </p>
            </div>
          </div>

          {/* 3. Three Core Civilizational Principles (Immersion + Insight) */}
          <div className="pf-civ-pillars pf-grid pf-grid-3col">
            {/* Principle 01: Purposeful Movement */}
            <div className="pf-civ-card">
              <div className="pf-civ-card-indicator">
                <span className="pf-civ-card-code">AXIOM // 01</span>
                <span className="pf-status-dot pf-civ-dot" />
              </div>
              <h3 className="pf-civ-card-title">Movement is Consciousness</h3>
              <p className="pf-civ-card-body">
                Mobility in Pasgerflit is never aimless commotion. Every trajectory, atmospheric glide corridor, and daily commute is treated as an exercise in awareness, passenger dignity, and collective coordination.
              </p>
              <div className="pf-civ-card-civic-cue">
                <span className="pf-civ-cue-label">Civic Expression</span>
                <span className="pf-civ-cue-text">
                  Transit rituals, calm concourse pacing, and intentional community mobility.
                </span>
              </div>
            </div>

            {/* Principle 02: Airports as Civic Organs */}
            <div className="pf-civ-card">
              <div className="pf-civ-card-indicator">
                <span className="pf-civ-card-code">AXIOM // 02</span>
                <span className="pf-status-dot pf-civ-dot" />
              </div>
              <h3 className="pf-civ-card-title">Airports as Civic Organs</h3>
              <p className="pf-civ-card-body">
                Terminals are not distant facilities sequestered at city borders. They are the civic hearts of urban life: public forums, debate halls, schools employing terminal wayfinding, and neighborhood cafés integrated with mobility hubs.
              </p>
              <div className="pf-civ-card-civic-cue">
                <span className="pf-civ-cue-label">Civic Expression</span>
                <span className="pf-civ-cue-text">
                  Plazas shaped like boarding concourses and streets aligned with runway axes.
                </span>
              </div>
            </div>

            {/* Principle 03: Arrival Carries Meaning */}
            <div className="pf-civ-card">
              <div className="pf-civ-card-indicator">
                <span className="pf-civ-card-code">AXIOM // 03</span>
                <span className="pf-status-dot pf-civ-dot" />
              </div>
              <h3 className="pf-civ-card-title">Arrival Has Meaning</h3>
              <p className="pf-civ-card-body">
                Departure represents a conscious transition from stagnation; landing signifies arrival into renewed responsibility and hospitality. Civic life is organized around the profound social meaning of arrival.
              </p>
              <div className="pf-civ-card-civic-cue">
                <span className="pf-civ-cue-label">Civic Expression</span>
                <span className="pf-civ-cue-text">
                  Public ceremonies centered on arrival gates and runway-light symbolism in town squares.
                </span>
              </div>
            </div>
          </div>

          {/* 4. Asthortera Inter-Connection & Ethical Sovereignty Panel */}
          <div className="pf-civ-network-bar">
            <div className="pf-civ-network-content">
              <span className="pf-text-operational">ETHICAL MOBILITY // SKY SOVEREIGNTY</span>
              <h4 className="pf-civ-network-title">Connecting Asthortera Through Safe Passage</h4>
              <p className="pf-civ-network-desc">
                Pasgerflit guards the skies not for conquest, but to sustain open corridors, ethical flight paths, and unhindered transit culture across the planet.
              </p>
            </div>
            <div className="pf-civ-actions">
              <Link
                href={ROUTES.CIVILIZATION}
                className="pf-button pf-button-primary pf-civ-cta-primary"
              >
                <span>Understand the Civilization</span>
                <svg
                  className="pf-civ-cta-arrow"
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
                className="pf-button pf-button-secondary pf-civ-cta-secondary"
              >
                <span>Explore Aeronautical Systems</span>
              </Link>
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
