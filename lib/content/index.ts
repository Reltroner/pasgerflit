export interface ContentItem<T = Record<string, unknown>> {
  slug: string;
  title: string;
  data: T;
}

// Content retrieval boundary placeholder
export {};
