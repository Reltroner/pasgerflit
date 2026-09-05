/**
 * Pasgerflit Navigation Types
 *
 * Typed models for primary civilization navigation, secondary exploration areas,
 * external gateway utilities, and active route classification.
 */

export type NavGroup = "primary" | "secondary" | "utility" | "external";

export interface NavItem {
  /** Display label for the navigation item */
  label: string;
  /**
   * Title alias for backward compatibility.
   * Defaults to label if not specified.
   */
  title?: string;
  /** Absolute internal route path (e.g. /aviation) or external URL */
  href: string;
  /** Optional concise description for mega navigation, previews, or accessible context */
  description?: string;
  /** Whether the destination is an external link */
  external?: boolean;
  /** Group classification */
  group?: NavGroup;
  /** Optional subnavigation items for future nested route trees */
  children?: NavItem[];
  /** Optional accessible label override */
  ariaLabel?: string;
}

export interface NavSection {
  /** Optional section title or group identifier */
  title?: string;
  /** Optional unique identifier for the section */
  id?: string;
  /** Navigation items contained in this section */
  items: NavItem[];
}

export interface PasgerflitNavigation {
  /** Primary civilization navigation sections */
  primary: NavItem[];
  /** Secondary discovery and supporting destinations */
  secondary: NavItem[];
  /** External utility destinations */
  external: NavItem[];
}
