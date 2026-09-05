import {
  getCdnFileBaseUrl,
  resolveAssetUrl,
  type AssetOptions,
} from "./cdn";

export type FileCategory =
  | "documents"
  | "data"
  | "audio"
  | "media"
  | (string & {});

export interface FileAssetOptions extends AssetOptions {
  /**
   * Optional domain category subdirectory within the file boundary.
   * E.g. "documents", "data", "audio", "media".
   */
  category?: FileCategory;
}

/**
 * Resolves a file URL against the Pasgerflit CDN file boundary:
 * `${CDN_BASE_URL}/files`
 *
 * Handles:
 * - absolute http/https URLs (preserved)
 * - protocol-relative URLs (preserved)
 * - data: and blob: URLs (preserved)
 * - fragment identifiers starting with # (preserved)
 * - /files/... paths
 * - category subdirectories (e.g. { category: "documents" })
 * - local static assets under public/
 */
export function getFileUrl(
  path: string,
  options: FileAssetOptions = {}
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

  return resolveAssetUrl(`/files/${targetPath}`, assetOptions);
}

/**
 * Retrieves the CDN file base URL for a given version.
 */
export function getFileBaseUrl(version?: string): string {
  return getCdnFileBaseUrl(version);
}
