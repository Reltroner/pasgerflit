/**
 * Pasgerflit CDN Boundary & Asset Resolution
 *
 * Single source of truth for CDN host, repository, version, resource root,
 * image base URL, file base URL, and asset URL resolution.
 *
 * - UI-critical fonts/icons remain local under public/
 * - Worldbuilding images/files are resolved through jsDelivr
 */

export const CDN_HOST = "https://cdn.jsdelivr.net";
export const CDN_REPOSITORY = "Reltroner/reltroner-studio-resource";
export const CDN_VERSION = "main";
export const CDN_RESOURCE_ROOT = "pasgerflit-resource";
export const CDN_IMAGE_ROOT = "/images";
export const CDN_FILE_ROOT = "/files";

export const CDN_BASE_URL = `${CDN_HOST}/gh/${CDN_REPOSITORY}@${CDN_VERSION}/${CDN_RESOURCE_ROOT}`;
export const CDN_IMAGE_BASE_URL = `${CDN_BASE_URL}${CDN_IMAGE_ROOT}`;
export const CDN_FILE_BASE_URL = `${CDN_BASE_URL}${CDN_FILE_ROOT}`;

export const CDN_CONFIG = {
  host: CDN_HOST,
  repository: CDN_REPOSITORY,
  version: CDN_VERSION,
  resourceRoot: CDN_RESOURCE_ROOT,
  imageRoot: CDN_IMAGE_ROOT,
  fileRoot: CDN_FILE_ROOT,
  baseUrl: CDN_BASE_URL,
  imageBaseUrl: CDN_IMAGE_BASE_URL,
  fileBaseUrl: CDN_FILE_BASE_URL,
} as const;

/**
 * Backward-compatible alias for CDN_CONFIG.
 */
export const CDN_BOUNDARY = CDN_CONFIG;

export interface AssetOptions {
  /**
   * If true, forces local resolution (e.g. from the Next.js public directory).
   */
  local?: boolean;
  /**
   * Target version, tag, or commit hash. Defaults to CDN_VERSION.
   */
  version?: string;
  /**
   * Custom base URL override.
   */
  baseUrl?: string;
}

/**
 * Checks whether a URL is absolute (HTTP, HTTPS, mailto, etc.).
 */
export function isAbsoluteUrl(url: string): boolean {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(url);
}

/**
 * Checks whether a URL is protocol-relative (begins with //).
 */
export function isProtocolRelativeUrl(url: string): boolean {
  return url.startsWith("//");
}

/**
 * Checks whether a URL is a data: URL.
 */
export function isDataUrl(url: string): boolean {
  return url.startsWith("data:");
}

/**
 * Checks whether a URL is a fragment identifier (begins with #).
 */
export function isFragmentUrl(url: string): boolean {
  return url.startsWith("#");
}

/**
 * Checks whether a URL is a special scheme or external identifier that must be preserved untouched.
 */
export function isSpecialUrl(url: string): boolean {
  return (
    isFragmentUrl(url) ||
    isProtocolRelativeUrl(url) ||
    isDataUrl(url) ||
    url.startsWith("blob:") ||
    isAbsoluteUrl(url)
  );
}

/**
 * Gets the base URL for the Pasgerflit CDN resource root.
 */
export function getCdnBaseUrl(version: string = CDN_VERSION): string {
  if (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_CDN_BASE_URL) {
    return process.env.NEXT_PUBLIC_CDN_BASE_URL.replace(/\/+$/, "");
  }
  const host = (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_CDN_HOST) || CDN_HOST;
  return `${host.replace(/\/+$/, "")}/gh/${CDN_REPOSITORY}@${version}/${CDN_RESOURCE_ROOT}`;
}

/**
 * Gets the base URL for CDN images (`pasgerflit-resource/images`).
 */
export function getCdnImageBaseUrl(version?: string): string {
  return `${getCdnBaseUrl(version)}${CDN_IMAGE_ROOT}`;
}

/**
 * Gets the base URL for CDN files (`pasgerflit-resource/files`).
 */
export function getCdnFileBaseUrl(version?: string): string {
  return `${getCdnBaseUrl(version)}${CDN_FILE_ROOT}`;
}

/**
 * Resolves an asset path to its target URL.
 *
 * Handles:
 * - absolute http/https URLs (preserved untouched)
 * - protocol-relative URLs (preserved untouched)
 * - data: and blob: URLs (preserved untouched)
 * - fragment URLs beginning with # (preserved untouched)
 * - /images/... paths (resolved to jsDelivr CDN image base URL)
 * - /files/... paths (resolved to jsDelivr CDN file base URL)
 * - unknown/local paths (e.g. /fonts/..., /icons/..., /next.svg; preserved as local)
 */
export function resolveAssetUrl(path: string, options?: AssetOptions): string;
export function resolveAssetUrl(path: string, subDirectory?: string, options?: AssetOptions): string;
export function resolveAssetUrl(
  path: string,
  arg2?: string | AssetOptions,
  arg3?: AssetOptions
): string {
  if (!path) {
    return "";
  }

  let subDirectory = "";
  let options: AssetOptions = {};

  if (typeof arg2 === "string") {
    subDirectory = arg2;
    options = arg3 || {};
  } else if (arg2 && typeof arg2 === "object") {
    options = arg2;
  }

  // 1. Preserve fragment, protocol-relative, data, blob, and absolute URLs directly
  if (isSpecialUrl(path)) {
    return path;
  }

  // 2. Explicit local static asset resolution requested
  if (options.local) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  const version = options.version || CDN_VERSION;
  const cleanSub = subDirectory.replace(/^\/+|\/+$/g, "");

  // 3. Handle paths targeting /images/... or images/... or pasgerflit-resource/images/...
  const isImagesPath =
    path.startsWith("/images/") ||
    path === "/images" ||
    path.startsWith("images/") ||
    path.startsWith(`${CDN_RESOURCE_ROOT}/images/`) ||
    path.startsWith(`/${CDN_RESOURCE_ROOT}/images/`) ||
    cleanSub === "images" ||
    cleanSub === `${CDN_RESOURCE_ROOT}/images`;

  if (isImagesPath) {
    let cleanPath = path.replace(/^\/+/, "");
    cleanPath = cleanPath.replace(new RegExp(`^${CDN_RESOURCE_ROOT}/images/?`), "");
    cleanPath = cleanPath.replace(/^images\/?/, "");

    if (cleanSub && cleanSub !== "images" && cleanSub !== `${CDN_RESOURCE_ROOT}/images`) {
      const subCat = cleanSub
        .replace(new RegExp(`^${CDN_RESOURCE_ROOT}/images/?`), "")
        .replace(/^images\/?/, "");
      if (subCat && !cleanPath.startsWith(subCat)) {
        cleanPath = cleanPath ? `${subCat}/${cleanPath}` : subCat;
      }
    }

    const base = options.baseUrl || getCdnImageBaseUrl(version);
    return cleanPath ? `${base}/${cleanPath}` : base;
  }

  // 4. Handle paths targeting /files/... or files/... or pasgerflit-resource/files/...
  const isFilesPath =
    path.startsWith("/files/") ||
    path === "/files" ||
    path.startsWith("files/") ||
    path.startsWith(`${CDN_RESOURCE_ROOT}/files/`) ||
    path.startsWith(`/${CDN_RESOURCE_ROOT}/files/`) ||
    cleanSub === "files" ||
    cleanSub === `${CDN_RESOURCE_ROOT}/files`;

  if (isFilesPath) {
    let cleanPath = path.replace(/^\/+/, "");
    cleanPath = cleanPath.replace(new RegExp(`^${CDN_RESOURCE_ROOT}/files/?`), "");
    cleanPath = cleanPath.replace(/^files\/?/, "");

    if (cleanSub && cleanSub !== "files" && cleanSub !== `${CDN_RESOURCE_ROOT}/files`) {
      const subCat = cleanSub
        .replace(new RegExp(`^${CDN_RESOURCE_ROOT}/files/?`), "")
        .replace(/^files\/?/, "");
      if (subCat && !cleanPath.startsWith(subCat)) {
        cleanPath = cleanPath ? `${subCat}/${cleanPath}` : subCat;
      }
    }

    const base = options.baseUrl || getCdnFileBaseUrl(version);
    return cleanPath ? `${base}/${cleanPath}` : base;
  }

  // 5. Handle paths targeting the resource root directly: /pasgerflit-resource/...
  if (path.startsWith(`/${CDN_RESOURCE_ROOT}/`) || path.startsWith(`${CDN_RESOURCE_ROOT}/`)) {
    const cleanPath = path.replace(/^\/+/, "").replace(new RegExp(`^${CDN_RESOURCE_ROOT}/?`), "");
    const base = options.baseUrl || getCdnBaseUrl(version);
    return cleanPath ? `${base}/${cleanPath}` : base;
  }

  // 6. Unknown or local root-relative paths (e.g. /fonts/..., /icons/..., /next.svg, /favicon.ico)
  // Preserved as local paths without incorrectly prefixing them with the CDN
  if (path.startsWith("/")) {
    return path;
  }

  // 7. Relative paths without leading slash
  if (cleanSub) {
    const cleanPath = path.replace(/^\/+/, "");
    const base = options.baseUrl || getCdnBaseUrl(version);
    return `${base}/${cleanSub}/${cleanPath}`;
  }

  return `/${path}`;
}
