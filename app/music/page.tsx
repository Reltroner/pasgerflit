import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/navigation";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Music",
  description: "Soundscapes, station broadcast signals, and acoustic identity.",
  path: ROUTES.MUSIC,
});

/**
 * Music Route Page
 *
 * Provides the destination route surface for /music.
 * Presents the acoustic architecture, ambient horizons,
 * and departure soundscapes of the Sky Nation.
 */
export default function MusicPage() {
  return (
    <section className="pf-section">
      <div className="pf-container pf-container-xl">
        <div className="pf-stack pf-stack-xl">
          {/* Destination Header */}
          <header className="pf-stack pf-stack-xs">
            <div className="pf-row pf-row-sm">
              <span className="pf-badge pf-badge-neutral">AUDITORY IDENTITY</span>
              <span className="pf-text-operational">DISCOVERY // ACOUSTIC SPHERES</span>
            </div>
            <h1>Music: Ambient Horizons & Soundscapes</h1>
            <p className="pf-text-lead">
              Soundscapes, station broadcast signals, and acoustic identity cultivating acoustic calm across terminals and flight decks.
            </p>
          </header>

          {/* Sector Overview Card */}
          <article className="pf-card">
            <div className="pf-card-header">
              <span className="pf-text-operational">ACOUSTIC TAPESTRY</span>
              <span className="pf-badge pf-badge-subtle">ACTIVE SECTOR</span>
            </div>
            <div className="pf-card-body pf-stack pf-stack-sm">
              <h3>Serenity Through Resonant Architecture</h3>
              <p className="pf-text-body">
                The auditory landscape of Pasgerflit is engineered to eliminate noise pollution and sensory fatigue. Departure concourses, flight decks, and high-altitude lounges resonate with subtle harmonic suites, tranquil chimes, and ambient soundscapes that evoke the stillness of evening flight.
              </p>
              <div className="pf-surface-subtle pf-stack pf-stack-xs">
                <span className="pf-text-operational">ACOUSTIC SUITES</span>
                <p className="pf-text-body">
                  Concourse Harmonic Chimes &bull; Stratospheric Glide Suites &bull; Sunset Departure Resonances
                </p>
              </div>
            </div>
            <div className="pf-card-footer pf-row pf-row-between">
              <Link href={ROUTES.HOME} className="pf-button pf-button-secondary pf-button-sm">
                ← Return to Arrival Concourse
              </Link>
              <Link href={ROUTES.EXPLORE} className="pf-button pf-button-secondary pf-button-sm">
                Cartographic Hub →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
