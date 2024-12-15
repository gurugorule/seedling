// Color constants
export const BRAND_COLORS = {
  primary: '#00B4D8',
  secondary: '#4CAF50',
  accent: '#FF9800',
  highlight: '#E91E63'
} as const;

// Feature constants
export const FEATURES = [
  {
    id: 'video-creation',
    icon: 'Video',
    title: 'AI Video Creation',
    description: 'Transform text into professional videos with our advanced AI technology.',
    color: BRAND_COLORS.primary
  },
  {
    id: 'style-transfer',
    icon: 'Wand2',
    title: 'Style Transfer',
    description: 'Apply cinematic, cartoon, or custom styles to your videos instantly.',
    color: BRAND_COLORS.secondary
  },
  // ... other features
] as const;

// Plan constants
export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    color: BRAND_COLORS.primary,
    features: [
      '5 video exports per month',
      '720p video quality',
      'Basic templates',
      'Essential editing tools',
      '2GB storage'
    ]
  },
  // ... other plans
] as const;

// Cache settings
export const CACHE_CONFIG = {
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  maxSize: 100 // Maximum number of items in cache
} as const;