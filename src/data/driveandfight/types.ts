export type SourceType =
  | 'official'
  | 'official_api'
  | 'community'
  | 'youtube'
  | 'tested';

export type Confidence = 'high' | 'medium' | 'low' | 'needs_verification';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'active' | 'expired' | 'needs_check';
  lastChecked: string;
  sources: DataSource[];
  notes?: string;
}

export interface VideoSource {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCountLabel: string;
  checkedAt: string;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: 'Start Here' | 'Truck' | 'Loot' | 'Survival' | 'Co-op';
  sourceStrategy:
    | 'user_intent_youtube'
    | 'popular_youtube'
    | 'youtube_explainer'
    | 'manual_data'
    | 'official'
    | 'community_crosscheck';
  videoSearchQueries?: string[];
  sourceNotes?: string;
  coverImageUrl: string;
  video?: VideoSource;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  body: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    links?: Array<{ label: string; href: string }>;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedRoutes: string[];
}

export interface TopicPage {
  route: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    links?: Array<{ label: string; href: string }>;
  }>;
  faq: Array<{ question: string; answer: string }>;
  relatedRoutes: string[];
}
