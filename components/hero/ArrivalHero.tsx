import type { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";

export interface ArrivalHeroProps {
  className?: string;
  children?: ReactNode;
}

/**
 * ArrivalHero — Phase 2 Chunk 2.2: Arrival Experience ("Enter Pasgerflit")
 *
 * Immersive, authoritative arrival landmark welcoming visitors into the
 * sovereign sky nation of Asthortera.
 *
 * Narrative Progression:
 * ARRIVAL -> PASGERFLIT -> SKY NATION -> AVIATION AS CIVILIZATION -> INVITATION TO EXPLORE
 *
 * Combines:
 * - Immersion: Atmospheric horizon & architectural terminal observation concourse cues
 * - Insight: Aviation as foundational organizing logic, civic forum, and everyday airgrid
 * - Interaction: Clear pathways to explore civilization and aeronautical infrastructure
 *
 * Server Component with zero client runtime overhead.
 */
export function ArrivalHero({ className, children }: ArrivalHeroProps) {
  return (
    <section
      className={`pf-hero-arrival pf-experience-stage ${className || ""}`.trim()}
      data-experience="arrival"
      aria-labelledby="arrival-hero-title"
    >
      {/* Atmospheric Horizon & Spatial Geometry Layer */}
      <div className="pf-hero-arrival-backdrop" aria-hidden="true">
        <div className="pf-hero-arrival-glow" />
        <div className="pf-hero-arrival-vectors" />
        <div className="pf-hero-arrival-horizon" />
      </div>

      <div className="pf-container pf-hero-arrival-container">
        <div className="pf-hero-arrival-content">
          {/* 1. Terminal / Airspace Operational Status Bar */}
          <div className="pf-hero-arrival-statusbar">
            <div className="pf-hero-arrival-status-badge">
              <span className="pf-status-dot pf-hero-arrival-status-dot" />
              <span className="pf-hero-arrival-status-text">
                ASTHORTERA AIRSPACE // SECTOR CIVILIZATION
              </span>
            </div>
            <div className="pf-hero-arrival-meta">
              <span className="pf-text-operational">CONCOURSE TRANSIT // ACTIVE</span>
            </div>
          </div>

          {/* 2. Primary Identity & Declaration */}
          <div className="pf-hero-arrival-header pf-stack pf-stack-xs">
            <p className="pf-hero-arrival-kicker">
              SOVEREIGN AVIATION CIVILIZATION
            </p>
            <h1 id="arrival-hero-title" className="pf-hero-arrival-title">
              Pasgerflit
            </h1>
            <p className="pf-hero-arrival-tagline">
              The Sky Nation of Asthortera
            </p>
          </div>

          {/* 3. Concise Experiential Lead Copy */}
          <p className="pf-hero-arrival-lead pf-text-lead">
            Enter a living society where aviation is not merely transport, but the foundational organizing logic of civic community, territorial architecture, and daily human connection.
          </p>

          {/* 4. Three Experiential Horizon Observation Cards (Immersion + Insight) */}
          <div className="pf-hero-arrival-pillars pf-grid pf-grid-3col">
            {/* Pillar 1: Civic Institutions */}
            <div className="pf-hero-arrival-card">
              <div className="pf-hero-arrival-card-header">
                <span className="pf-text-operational">CIVIC INSTITUTION</span>
                <span className="pf-hero-arrival-card-index">01</span>
              </div>
              <h2 className="pf-hero-arrival-card-title">Airport as Town Square</h2>
              <p className="pf-hero-arrival-card-desc">
                Terminals operate as public forums, cultural concourses, and community plazas where citizens gather, converse, and participate in civic life.
              </p>
            </div>

            {/* Pillar 2: Living Airgrid */}
            <div className="pf-hero-arrival-card">
              <div className="pf-hero-arrival-card-header">
                <span className="pf-text-operational">EVERYDAY MOBILITY</span>
                <span className="pf-hero-arrival-card-index">02</span>
              </div>
              <h2 className="pf-hero-arrival-card-title">Living Airgrid Network</h2>
              <p className="pf-hero-arrival-card-desc">
                Multi-tier atmospheric corridors coordinate civilian, commuter, and regional flight with effortless rhythm, forming the everyday bloodstream of Asthortera.
              </p>
            </div>

            {/* Pillar 3: Transit Culture */}
            <div className="pf-hero-arrival-card">
              <div className="pf-hero-arrival-card-header">
                <span className="pf-text-operational">TRANSIT CULTURE</span>
                <span className="pf-hero-arrival-card-index">03</span>
              </div>
              <h2 className="pf-hero-arrival-card-title">Concourse Hospitality</h2>
              <p className="pf-hero-arrival-card-desc">
                Quiet futurism meets human warmth—observation lounges, apron panoramas, and the morning aroma of SkyBrew shared among travellers.
              </p>
            </div>
          </div>

          {/* 5. Navigation & Exploration Actions */}
          <div className="pf-hero-arrival-actions">
            <Link
              href={ROUTES.CIVILIZATION}
              className="pf-button pf-button-primary pf-button-lg pf-hero-arrival-cta-primary"
            >
              <span>Enter Civilization</span>
              <svg
                className="pf-hero-arrival-arrow"
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
              className="pf-button pf-button-secondary pf-button-lg pf-hero-arrival-cta-secondary"
            >
              <span>Explore Aviation Systems</span>
            </Link>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
