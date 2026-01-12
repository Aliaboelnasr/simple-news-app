// Types for GNews API responses and news articles
export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface GNewsResponse {
  totalArticles: number;
  articles: Article[];
}

export interface SearchParams {
  q?: string;           // Search keywords
  in?: string;          // Search in 'title', 'description', 'content'
  max?: number;         // Max number of articles to fetch
  lang?: string;        // Language
  country?: string;     // Country
  from?: string;        // Start date
  to?: string;          // End date
}
