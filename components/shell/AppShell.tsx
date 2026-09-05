import type { ReactNode } from "react";
import { Header } from "./Header";
import { FooterMount } from "./FooterMount";

export interface AppShellProps {
  children: ReactNode;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  className?: string;
}

/**
 * Global App Shell Component
 *
 * Provides the global structural frame for all Pasgerflit pages:
 * - Semantic <header> mounting point
 * - Semantic <main> content region expanding to fill available space
 * - Semantic <footer> mounting point
 *
 * Server Component with zero client runtime overhead.
 */
export function AppShell({
  children,
  headerSlot,
  footerSlot,
  className,
}: AppShellProps) {
  return (
    <div className={`pf-shell ${className || ""}`.trim()}>
      {/* Accessible skip navigation landmark */}
      <a href="#main-content" className="pf-skip-link">
        Skip to main content
      </a>

      {/* Global Header */}
      {headerSlot ?? <Header />}

      {/* Main Page Content Region */}
      <main id="main-content" className="pf-shell-main" tabIndex={-1}>
        {children}
      </main>

      {/* Global Footer Mounting Boundary */}
      {footerSlot ?? <FooterMount />}
    </div>
  );
}
