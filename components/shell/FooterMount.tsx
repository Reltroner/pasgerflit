import type { ReactNode } from "react";
import Link from "next/link";
import { PRIMARY_NAV_ITEMS, EXTERNAL_NAV_ITEMS } from "@/lib/navigation";

export interface FooterMountProps {
  children?: ReactNode;
  className?: string;
}

export type FooterProps = FooterMountProps;

/**
 * Curated core infrastructure utility destinations from canonical navigation.
 * Compact and focused to avoid duplicating the complete primary sitemap.
 */
const FOOTER_UTILITY_PATHS = new Set([
  "/civilization",
  "/aviation",
  "/airports",
  "/explore",
]);

const FOOTER_UTILITY_ITEMS = PRIMARY_NAV_ITEMS.filter((item) =>
  FOOTER_UTILITY_PATHS.has(item.href)
);

/**
 * Global Footer / Utility Layer Component
 *
 * Provides:
 * - Sovereign Pasgerflit identity and aviation-civilization descriptor
 * - Utility navigation for foundational infrastructure routes
 * - External gateway link to Reltroner Studio
 * - Terminal infrastructure system metadata
 *
 * Server Component with zero client runtime overhead.
 */
export function FooterMount({ children, className }: FooterMountProps) {
  return (
    <footer className={`pf-shell-footer ${className || ""}`.trim()}>
      <div className="pf-container pf-footer-inner">
        {children ?? (
          <>
            <div className="pf-footer-grid">
              {/* Identity Section */}
              <div className="pf-footer-identity">
                <Link
                  href="/"
                  className="pf-footer-brand"
                  aria-label="Pasgerflit Home"
                >
                  <span className="pf-footer-brand-name">Pasgerflit</span>
                  <span className="pf-shell-brand-badge" aria-hidden="true">
                    CIV
                  </span>
                </Link>
                <p className="pf-footer-descriptor">
                  Sovereign Aviation Civilization
                </p>
              </div>

              {/* Utility Navigation */}
              <nav aria-label="Footer Navigation" className="pf-footer-nav">
                <span className="pf-text-metadata pf-footer-nav-heading">
                  Infrastructure
                </span>
                <ul className="pf-footer-nav-list" role="list">
                  {FOOTER_UTILITY_ITEMS.map((item) => (
                    <li key={item.href} className="pf-footer-nav-item">
                      <Link href={item.href} className="pf-footer-nav-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* External Gateway */}
              <div className="pf-footer-gateway">
                <span className="pf-text-metadata pf-footer-gateway-heading">
                  Gateway
                </span>
                <div className="pf-footer-gateway-links">
                  {EXTERNAL_NAV_ITEMS.map((ext) => (
                    <a
                      key={ext.href}
                      href={ext.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-footer-gateway-link"
                      aria-label={`${ext.label} (opens in new tab)`}
                    >
                      <span>{ext.label}</span>
                      <span
                        className="pf-footer-external-icon"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="pf-footer-divider" aria-hidden="true" />

            {/* Bottom Meta Bar */}
            <div className="pf-footer-meta">
              <span className="pf-text-metadata">
                Terminal Infrastructure Frame
              </span>
              <span className="pf-text-metadata">
                pasgerflit.reltroner.com
              </span>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}

export const Footer = FooterMount;
