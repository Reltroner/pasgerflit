export interface MusicEntry {
  slug: string;
  title: string;
  artist?: string;
  summary?: string;
}

export const musicEntries: MusicEntry[] = [];
