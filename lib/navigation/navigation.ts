/**
 * Pasgerflit Navigation Architecture Data & Active Route Helpers
 *
 * Single source of truth for the Pasgerflit aviation civilization navigation.
 * Compatible with both Next.js Server Components and Client Components.
 */

import type { NavItem, PasgerflitNavigation } from "./types";

/**
 * Type-safe route path dictionary for internal Pasgerflit destinations.
 */
export const ROUTES = {
  HOME: "/",
  CIVILIZATION: "/civilization",
  AVIATION: "/aviation",
  CITIES: "/cities",
  AIRPORTS: "/airports",
  CULTURE: "/culture",
  EXPLORE: "/explore",
  MUSIC: "/music",
  CORPORATIONS: "/corporations",
  GALLERY: "/gallery",
} as const;

/**
 * External portal and gateway destinations.
 */
export const EXTERNAL_LINKS = {
  RELTRONER_STUDIO: "https://reltroner.com/",
} as const;

/**
 * Six core primary civilization sections in strict canonical order:
 * 1. Civilization
 * 2. Aviation
 * 3. Cities
 * 4. Airports
 * 5. Culture
 * 6. Explore
 */
export const PRIMARY_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Civilization",
    title: "Civilization",
    href: ROUTES.CIVILIZATION,
    description: "Societal architecture, planetary history, and governance.",
    group: "primary",
  },
  {
    label: "Aviation",
    title: "Aviation",
    href: ROUTES.AVIATION,
    description: "Flight corridors, fleet infrastructure, and aeronautical systems.",
    group: "primary",
  },
  {
    label: "Cities",
    title: "Cities",
    href: ROUTES.CITIES,
    description: "Metropolitan hubs, regional centers, and urban territories.",
    group: "primary",
  },
  {
    label: "Airports",
    title: "Airports",
    href: ROUTES.AIRPORTS,
    description: "International passenger terminals, airfields, and transit complexes.",
    group: "primary",
  },
  {
    label: "Culture",
    title: "Culture",
    href: ROUTES.CULTURE,
    description: "Civilization arts, social identity, philosophy, and lifestyle.",
    group: "primary",
  },
  {
    label: "Explore",
    title: "Explore",
    href: ROUTES.EXPLORE,
    description: "Cartography, transit pathways, and discovery archives.",
    group: "primary",
  },
] as const;

/**
 * Secondary discovery destinations supporting the primary civilization sections:
 * - Music
 * - Corporations
 * - Gallery
 */
export const SECONDARY_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Music",
    title: "Music",
    href: ROUTES.MUSIC,
    description: "Soundscapes, station broadcast signals, and acoustic identity.",
    group: "secondary",
  },
  {
    label: "Corporations",
    title: "Corporations",
    href: ROUTES.CORPORATIONS,
    description: "Industrial conglomerates, aviation carriers, and tech enterprises.",
    group: "secondary",
  },
  {
    label: "Gallery",
    title: "Gallery",
    href: ROUTES.GALLERY,
    description: "Visual archives, terminal photography, and aircraft imagery.",
    group: "secondary",
  },
] as const;

/**
 * External utility destination:
 * - Reltroner Studio (https://reltroner.com/)
 */
export const EXTERNAL_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Reltroner Studio",
    title: "Reltroner Studio",
    href: EXTERNAL_LINKS.RELTRONER_STUDIO,
    description: "Parent studio portal and sovereign creative meta gateway.",
    external: true,
    group: "external",
  },
] as const;

/**
 * Consolidated Pasgerflit navigation model.
 */
export const NAVIGATION: PasgerflitNavigation = {
  primary: [...PRIMARY_NAV_ITEMS],
  secondary: [...SECONDARY_NAV_ITEMS],
  external: [...EXTERNAL_NAV_ITEMS],
};

/**
 * Determines whether a target navigation href is active based on the current pathname.
 *
 * Handles:
 * - Exact route matching
 * - Nested route matching (e.g. /aviation matches /aviation and /aviation/aircraft)
 * - Safe boundary checks (e.g. /aviation does NOT match /aviation-history)
 * - Root path "/" requiring exact match
 * - External URLs are never considered active app routes
 *
 * @param currentPathname The active route pathname (e.g. from usePathname())
 * @param targetHref The target navigation item href
 * @param exact If true, forces an exact match even for nested subroutes
 */
export function isActiveRoute(
  currentPathname: string,
  targetHref: string,
  exact: boolean = false
): boolean {
  if (!currentPathname || !targetHref) {
    return false;
  }

  // External URLs are not active app routes
  if (
    targetHref.startsWith("http://") ||
    targetHref.startsWith("https://") ||
    targetHref.startsWith("//")
  ) {
    return false;
  }

  const normalizedCurrent = currentPathname === "/" ? "/" : currentPathname.replace(/\/+$/, "");
  const normalizedTarget = targetHref === "/" ? "/" : targetHref.replace(/\/+$/, "");

  if (exact || normalizedTarget === "/") {
    return normalizedCurrent === normalizedTarget;
  }

  return (
    normalizedCurrent === normalizedTarget ||
    normalizedCurrent.startsWith(`${normalizedTarget}/`)
  );
}
