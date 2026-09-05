export interface ArticleEntry {
  slug: string;
  title: string;
  publishedAt?: string;
  summary?: string;
}

export const articleEntries: ArticleEntry[] = [];
