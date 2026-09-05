export interface AirportEntry {
  code: string;
  name: string;
  city?: string;
  summary?: string;
}

export const airportEntries: AirportEntry[] = [];
