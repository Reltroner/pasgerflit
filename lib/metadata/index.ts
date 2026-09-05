import type { Metadata } from "next";

export interface PageMetadataProps {
  title?: string;
  description?: string;
  path?: string;
}

export function constructMetadata({
  title,
  description,
  path = "",
}: PageMetadataProps = {}): Metadata {
  const siteTitle = "Pasgerflit";
  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const finalDescription = description || "Pasgerflit civilization and aviation network.";

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: path,
    },
  };
}
