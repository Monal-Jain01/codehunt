export interface Article {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  category: 'news' | 'tax-legal' | 'help-guides' | 'investment';
  badge?: 'ai-recommended' | 'high-impact' | 'trending';
  sentiment?: 'positive' | 'neutral' | 'risk-alert';
  aiImpactScore?: number;
  readTime?: string;
}

export type ArticleCategory = 'news' | 'tax-legal' | 'help-guides' | 'investment';
