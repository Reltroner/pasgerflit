import {
  getCdnImageBaseUrl,
  resolveAssetUrl,
  type AssetOptions,
} from "./cdn";

export type ImageCategory =
  | "aviation"
  | "airport"
  | "city"
  | "music"
  | "corporation"
  | "civilization"
  | "hero"
  | (string & {});

export interface ImageAssetOptions extends AssetOptions {
  /**
   * Optional domain category subdirectory within the image boundary.
   * E.g. "aviation", "airport", "city", "music", "corporation", "civilization".
   */
  category?: ImageCategory;
}

/**
 * Resolves an image URL against the Pasgerflit CDN image boundary:
 * `${CDN_BASE_URL}/images`
 *
 * Handles:
 * - absolute http/https URLs (preserved)
 * - protocol-relative URLs (preserved)
 * - data: and blob: URLs (preserved)
 * - fragment identifiers starting with # (preserved)
 * - /images/... paths
 * - category subdirectories (e.g. { category: "aviation" })
 * - local static assets under public/ (e.g. /icons/..., /fonts/...)
 */
export function getImageUrl(
  path: string,
  options: ImageAssetOptions = {}
): string {
  if (!path) {
    return "";
  }

  const { category, ...assetOptions } = options;

  // Pass through root-relative, absolute, or special URLs directly
  if (
    path.startsWith("/") ||
    path.startsWith("#") ||
    path.startsWith("//") ||
    path.startsWith("data:") ||
    /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(path)
  ) {
    return resolveAssetUrl(path, assetOptions);
  }

  const cleanPath = path.replace(/^\/+/, "");
  const targetPath = category ? `${category}/${cleanPath}` : cleanPath;

  return resolveAssetUrl(`/images/${targetPath}`, assetOptions);
}

/**
 * Retrieves the CDN image base URL for a given version.
 */
export function getImageBaseUrl(version?: string): string {
  return getCdnImageBaseUrl(version);
}
