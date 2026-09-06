import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Civilization",
  description: "Societal architecture, planetary history, and governance.",
  path: ROUTES.CIVILIZATION,
});

/**
 * Civilization Route Page
 *
 * Provides the destination route surface for /civilization.
 * Connects the sovereign foundations, societal architecture,
 * and departure ethics of the Pasgerflit civilization.
 */
export default function CivilizationPage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">SOVEREIGN FOUNDATIONS</span>
              <span className="pf-text-operational">SECTOR 01 // GOVERNANCE & ETHICS</span>
            </div>
            <h1>Civilization: Philosophy & Social Order</h1>
            <p className="pf-text-lead">
              Societal architecture, planetary history, and governance organized around conscious mobility and human dignity.
            </p>
          </header>

          {/* Sector Overview Card */}
          <article className="pf-card">
            <div className="pf-card-header">
              <span className="pf-text-operational">CANON ARCHITECTURE</span>
              <span className="pf-badge pf-badge-subtle">ACTIVE SECTOR</span>
            </div>
            <div className="pf-card-body pf-stack pf-stack-sm">
              <h3>Aviation as Civic Architecture</h3>
              <p className="pf-text-body">
                In Pasgerflit, flight is not merely an industry or transport mechanism—it is the foundational organizing logic of civic existence. Societal institutions, legal structures, and community rituals are shaped by passenger dignity, departure ethics, and purposeful movement across the skies of Asthortera.
              </p>
              <div className="pf-surface-subtle pf-stack pf-stack-xs">
                <span className="pf-text-operational">CORE PHILOSOPHY</span>
                <p className="pf-text-body">
                  &ldquo;Flight is not escape—flight is expansion. Movement is consciousness.&rdquo;
                </p>
              </div>
            </div>
            <div className="pf-card-footer pf-row pf-row-between">
              <Link href={ROUTES.HOME} className="pf-button pf-button-secondary pf-button-sm">
                ← Return to Arrival Concourse
              </Link>
              <Link href={ROUTES.AVIATION} className="pf-button pf-button-secondary pf-button-sm">
                Aeronautical Systems →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
