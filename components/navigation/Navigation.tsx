"use client";

import { useState, useEffect, useRef, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PRIMARY_NAV_ITEMS,
  SECONDARY_NAV_ITEMS,
  EXTERNAL_NAV_ITEMS,
  isActiveRoute,
} from "@/lib/navigation";

export interface NavigationProps {
  className?: string;
}

/**
 * Sovereign Pasgerflit Responsive Navigation Component
 *
 * Provides:
 * - Desktop primary navigation with active route detection and external gateway utility
 * - Mobile responsive navigation with compact trigger button and accessible panel
 * - Direct consumption of typed navigation models from @/lib/navigation
 *
 * Scoped Client Component boundary for interactive menu and pathname state.
 */
export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  // Close mobile menu on internal route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle Escape key to dismiss mobile panel and restore focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Dismiss menu when clicking outside navigation boundary
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div ref={navRef} className={`pf-nav ${className || ""}`.trim()}>
      {/* Desktop Primary Navigation */}
      <nav aria-label="Primary Navigation" className="pf-nav-desktop">
        <ul className="pf-nav-list" role="list">
          {PRIMARY_NAV_ITEMS.map((item) => {
            const active = isActiveRoute(pathname || "", item.href);
            return (
              <li key={item.href} className="pf-nav-item">
                <Link
                  href={item.href}
                  className={`pf-nav-link ${active ? "pf-nav-link-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="pf-nav-active-pip" aria-hidden="true" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="pf-nav-divider" aria-hidden="true" />

        {/* Desktop External Gateway Utility */}
        <div className="pf-nav-utility">
          {EXTERNAL_NAV_ITEMS.map((ext) => (
            <a
              key={ext.href}
              href={ext.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-nav-external"
              aria-label={`${ext.label} (opens in new tab)`}
            >
              <span>{ext.label}</span>
              <span className="pf-nav-external-icon" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Trigger */}
      <button
        ref={toggleRef}
        type="button"
        className="pf-nav-toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="pf-nav-toggle-icon" aria-hidden="true">
          {isOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="14" y2="14" />
              <line x1="4" y1="14" x2="14" y2="4" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="5" x2="15" y2="5" />
              <line x1="3" y1="9" x2="15" y2="9" />
              <line x1="3" y1="13" x2="15" y2="13" />
            </svg>
          )}
        </span>
        <span className="pf-nav-toggle-label">{isOpen ? "Close" : "Menu"}</span>
      </button>

      {/* Mobile Navigation Panel */}
      <div id={panelId} className="pf-nav-panel" hidden={!isOpen}>
        <div className="pf-container pf-nav-panel-inner">
          {/* Primary Civilization Section */}
          <nav aria-label="Site Navigation" className="pf-nav-section">
            <div className="pf-nav-section-title">
              <span className="pf-text-metadata">Civilization Navigation</span>
            </div>
            <ul className="pf-nav-mobile-list" role="list">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const active = isActiveRoute(pathname || "", item.href);
                return (
                  <li key={item.href} className="pf-nav-mobile-item">
                    <Link
                      href={item.href}
                      className={`pf-nav-mobile-link ${active ? "pf-nav-mobile-link-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      <div className="pf-nav-mobile-link-text">
                        <span className="pf-nav-mobile-label">{item.label}</span>
                        {item.description && (
                          <span className="pf-nav-mobile-desc">
                            {item.description}
                          </span>
                        )}
                      </div>
                      {active && (
                        <span className="pf-nav-active-badge" aria-hidden="true">
                          Current
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Secondary Discovery Section */}
          <div className="pf-nav-section">
            <div className="pf-nav-section-title">
              <span className="pf-text-metadata">Discovery & Archives</span>
            </div>
            <ul className="pf-nav-mobile-list" role="list">
              {SECONDARY_NAV_ITEMS.map((item) => {
                const active = isActiveRoute(pathname || "", item.href);
                return (
                  <li key={item.href} className="pf-nav-mobile-item">
                    <Link
                      href={item.href}
                      className={`pf-nav-mobile-link ${active ? "pf-nav-mobile-link-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      <div className="pf-nav-mobile-link-text">
                        <span className="pf-nav-mobile-label">{item.label}</span>
                        {item.description && (
                          <span className="pf-nav-mobile-desc">
                            {item.description}
                          </span>
                        )}
                      </div>
                      {active && (
                        <span className="pf-nav-active-badge" aria-hidden="true">
                          Current
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* External Gateway Portal Section */}
          <div className="pf-nav-section pf-nav-section-external">
            <div className="pf-nav-section-title">
              <span className="pf-text-metadata">External Portal</span>
            </div>
            <div className="pf-nav-mobile-external-wrap">
              {EXTERNAL_NAV_ITEMS.map((ext) => (
                <a
                  key={ext.href}
                  href={ext.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-nav-mobile-external-link"
                  aria-label={`${ext.label} (opens in new tab)`}
                  onClick={closeMenu}
                >
                  <div className="pf-nav-mobile-link-text">
                    <span className="pf-nav-mobile-label">{ext.label}</span>
                    {ext.description && (
                      <span className="pf-nav-mobile-desc">
                        {ext.description}
                      </span>
                    )}
                  </div>
                  <span className="pf-nav-external-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
