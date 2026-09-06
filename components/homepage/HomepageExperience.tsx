import type { ReactNode } from "react";
import { ArrivalHero } from "@/components/hero";
import { CivilizationExperience } from "@/components/civilization";
import { MobilityExperience } from "@/components/aviation";
import { LivingExperience } from "@/components/city";
import { PAIAExperience } from "@/components/airport";
import { DiscoveryExperience } from "./DiscoveryExperience";

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
                   Realized via PAIAExperience.
          ==================================================================== */}
      {paiaSlot ?? <PAIAExperience />}

      {/* ====================================================================
          Stage 6: Discovery / Return Experience
          Purpose: Give the visitor a natural continuation into the rest of
                   the website.
                   Realized via DiscoveryExperience.
          ==================================================================== */}
      {discoverySlot ?? <DiscoveryExperience />}
    </div>
  );
}
