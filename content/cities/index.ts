export interface CityEntry {
  slug: string;
  name: string;
  region?: string;
  summary?: string;
}

export const cityEntries: CityEntry[] = [];
