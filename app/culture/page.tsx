import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Culture",
  description: "Civilization arts, social identity, philosophy, and lifestyle.",
  path: ROUTES.CULTURE,
});

/**
 * Culture Route Page
 *
 * Provides the destination route surface for /culture.
 * Portrays transit rituals, boarding rites, SkyBrew
 * hospitality, and contemplative mobility.
 */
export default function CulturePage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">HUMAN TRADITIONS</span>
              <span className="pf-text-operational">SECTOR 05 // TRANSIT CULTURE</span>
            </div>
            <h1>Culture: Rituals, Rites & SkyBrew</h1>
            <p className="pf-text-lead">
              Civilization arts, social identity, philosophy, and lifestyle cultivating serenity and human warmth across journeys.
            </p>
          </header>

          {/* Sector Overview Card */}
          <article className="pf-card">
            <div className="pf-card-header">
              <span className="pf-text-operational">LIVED RITUALS</span>
              <span className="pf-badge pf-badge-subtle">ACTIVE SECTOR</span>
            </div>
            <div className="pf-card-body pf-stack pf-stack-sm">
              <h3>The Human Warmth of Conscious Transit</h3>
              <p className="pf-text-body">
                In Pasgerflit, waiting is not lost time; it is transformed into conscious contemplation and communal presence. Ceremonial boarding card exchanges, personal route journals, quiet concourse silence pods, and cups of handcrafted SkyBrew in terminal sanctuaries form the social fabric of everyday life.
              </p>
              <div className="pf-surface-subtle pf-stack pf-stack-xs">
                <span className="pf-text-operational">HOSPITALITY SANCTUARY</span>
                <p className="pf-text-body">
                  SkyBrew serves as the communal hearth of every concourse—offering travellers warmth, shared pause, and atmospheric calm.
                </p>
              </div>
            </div>
            <div className="pf-card-footer pf-row pf-row-between">
              <Link href={ROUTES.HOME} className="pf-button pf-button-secondary pf-button-sm">
                ← Return to Arrival Concourse
              </Link>
              <Link href={ROUTES.MUSIC} className="pf-button pf-button-secondary pf-button-sm">
                Acoustic Soundscapes →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
