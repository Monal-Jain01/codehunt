import type { Article } from '@/lib/types/article';

export const mockArticles: Article[] = [
  // News
  {
    id: '1',
    title: 'Real Estate Market Shows Strong Recovery in Q4 2024',
    date: '2024-02-20',
    thumbnail: '/placeholder-article.jpg',
    category: 'news',
    badge: 'trending',
    sentiment: 'positive',
    aiImpactScore: 85,
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'New Metro Line Announcement Boosts Property Values',
    date: '2024-02-18',
    thumbnail: '/placeholder-article.jpg',
    category: 'news',
    badge: 'high-impact',
    sentiment: 'positive',
    aiImpactScore: 92,
    readTime: '4 min'
  },
  {
    id: '3',
    title: 'Interest Rate Changes Impact Home Loan Demand',
    date: '2024-02-15',
    thumbnail: '/placeholder-article.jpg',
    category: 'news',
    sentiment: 'neutral',
    aiImpactScore: 78,
    readTime: '6 min'
  },
  {
    id: '4',
    title: 'Tech Parks Drive Residential Demand in Whitefield',
    date: '2024-02-12',
    thumbnail: '/placeholder-article.jpg',
    category: 'news',
    badge: 'ai-recommended',
    sentiment: 'positive',
    aiImpactScore: 88,
    readTime: '5 min'
  },

  // Tax & Legal
  {
    id: '5',
    title: 'Complete Guide to Property Tax Deductions in 2024',
    date: '2024-02-19',
    thumbnail: '/placeholder-article.jpg',
    category: 'tax-legal',
    badge: 'ai-recommended',
    aiImpactScore: 95,
    readTime: '8 min'
  },
  {
    id: '6',
    title: 'Understanding RERA Compliance for Home Buyers',
    date: '2024-02-17',
    thumbnail: '/placeholder-article.jpg',
    category: 'tax-legal',
    badge: 'high-impact',
    sentiment: 'neutral',
    aiImpactScore: 90,
    readTime: '7 min'
  },
  {
    id: '7',
    title: 'Capital Gains Tax: What Every Property Investor Should Know',
    date: '2024-02-14',
    thumbnail: '/placeholder-article.jpg',
    category: 'tax-legal',
    sentiment: 'neutral',
    aiImpactScore: 87,
    readTime: '10 min'
  },
  {
    id: '8',
    title: 'Legal Checklist Before Buying Your First Home',
    date: '2024-02-10',
    thumbnail: '/placeholder-article.jpg',
    category: 'tax-legal',
    badge: 'trending',
    aiImpactScore: 82,
    readTime: '6 min'
  },

  // Help Guides
  {
    id: '9',
    title: 'First-Time Home Buyer: Complete Checklist',
    date: '2024-02-16',
    thumbnail: '/placeholder-article.jpg',
    category: 'help-guides',
    badge: 'ai-recommended',
    sentiment: 'positive',
    aiImpactScore: 93,
    readTime: '12 min'
  },
  {
    id: '10',
    title: 'How to Negotiate the Best Property Deal',
    date: '2024-02-13',
    thumbnail: '/placeholder-article.jpg',
    category: 'help-guides',
    badge: 'trending',
    aiImpactScore: 86,
    readTime: '8 min'
  },
  {
    id: '11',
    title: 'Understanding Home Loan EMI Calculations',
    date: '2024-02-11',
    thumbnail: '/placeholder-article.jpg',
    category: 'help-guides',
    sentiment: 'neutral',
    aiImpactScore: 79,
    readTime: '5 min'
  },
  {
    id: '12',
    title: 'Property Inspection: What to Look For',
    date: '2024-02-08',
    thumbnail: '/placeholder-article.jpg',
    category: 'help-guides',
    badge: 'high-impact',
    aiImpactScore: 84,
    readTime: '9 min'
  },

  // Investment
  {
    id: '13',
    title: 'Top 10 High-Growth Real Estate Markets in India',
    date: '2024-02-21',
    thumbnail: '/placeholder-article.jpg',
    category: 'investment',
    badge: 'ai-recommended',
    sentiment: 'positive',
    aiImpactScore: 96,
    readTime: '11 min'
  },
  {
    id: '14',
    title: 'Pre-Launch Properties: Risk vs Reward Analysis',
    date: '2024-02-19',
    thumbnail: '/placeholder-article.jpg',
    category: 'investment',
    badge: 'high-impact',
    sentiment: 'neutral',
    aiImpactScore: 91,
    readTime: '10 min'
  },
  {
    id: '15',
    title: 'Commercial vs Residential: Investment Comparison',
    date: '2024-02-16',
    thumbnail: '/placeholder-article.jpg',
    category: 'investment',
    sentiment: 'neutral',
    aiImpactScore: 85,
    readTime: '7 min'
  },
  {
    id: '16',
    title: 'REITs: A Beginner\'s Guide to Real Estate Investment',
    date: '2024-02-13',
    thumbnail: '/placeholder-article.jpg',
    category: 'investment',
    badge: 'trending',
    aiImpactScore: 88,
    readTime: '9 min'
  }
];
