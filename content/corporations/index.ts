export interface CorporationEntry {
  slug: string;
  name: string;
  industry?: string;
  summary?: string;
}

export const corporationEntries: CorporationEntry[] = [];
