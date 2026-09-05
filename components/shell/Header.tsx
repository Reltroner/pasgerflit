import type { ReactNode } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

export interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Global Header Component
 *
 * Provides the semantic header landmark, inner container, brand anchor,
 * and mounts the responsive navigation layer (Chunk 1.6).
 * Server Component with zero client runtime overhead.
 */
export function Header({ children, className }: HeaderProps) {
  return (
    <header className={`pf-shell-header ${className || ""}`.trim()}>
      <div className="pf-container pf-shell-header-inner">
        {/* Brand identity */}
        <Link href="/" className="pf-shell-brand" aria-label="Pasgerflit Home">
          <span>Pasgerflit</span>
          <span className="pf-shell-brand-badge" aria-hidden="true">
            CIV
          </span>
        </Link>

        {/* Responsive navigation layer */}
        {children ?? <Navigation />}
      </div>
    </header>
  );
}
