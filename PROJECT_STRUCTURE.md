# PropelAI - Real Estate Intelligence Platform

## Project Structure

```
src/
├── app/
│   ├── dashboard/          # Portfolio overview and stats
│   ├── search/             # Property search with filters
│   ├── map/                # Interactive map with growth zones
│   ├── research/           # AI analytics and predictions
│   ├── land-banking/       # Growth zone opportunities
│   ├── loans/              # Loan calculator and options
│   ├── news/               # Market news with AI insights
│   ├── profile/            # User profile and preferences
│   ├── auth/               # Authentication pages
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles with theme variables
│
├── components/
│   ├── layout/
│   │   └── navbar.tsx      # Navigation with theme toggle
│   ├── landing/
│   │   └── landing-page.tsx # Hero, features, CTA sections
│   ├── dashboard/
│   │   └── dashboard-content.tsx
│   ├── search/
│   │   └── search-content.tsx
│   ├── map/
│   │   └── map-content.tsx
│   ├── research/
│   │   └── research-content.tsx
│   ├── land-banking/
│   │   └── land-banking-content.tsx
│   ├── loans/
│   │   └── loans-content.tsx
│   ├── news/
│   │   └── news-content.tsx
│   ├── profile/
│   │   └── profile-content.tsx
│   ├── property/
│   │   └── property-card.tsx
│   ├── providers/
│   │   └── theme-provider.tsx
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── badge.tsx
│       ├── alert.tsx
│       └── sonner.tsx
│
└── lib/
    ├── types/
    │   └── property.ts     # TypeScript interfaces
    ├── data/
    │   └── mock-data.ts    # Mock data for demo
    ├── supabase/           # Supabase clients
    ├── schema/             # Zod schemas
    └── utils.ts            # Utility functions
```

## Features Implemented

### Theme System
- Dark mode (default) and light mode
- Smooth transitions between themes
- Persistent theme selection
- Premium color palette with gradients

### Pages

#### Landing Page (/)
- Animated hero section with gradient text
- Stats counters
- Feature cards
- Search bar
- CTA sections
- Responsive footer

#### Dashboard (/dashboard)
- Portfolio value and metrics
- Predicted returns
- Risk score
- Property allocation
- AI recommendations
- Recent activity feed

#### Search (/search)
- Property grid with cards
- Sticky filters (desktop)
- Drawer filters (mobile)
- Budget range
- Property type filter
- Risk level filter
- Uplift percentage filter

#### Map (/map)
- Full-screen layout
- Layer controls (Growth Zones, Infrastructure, Properties)
- Floating insights panel
- Zone analysis cards

#### Research (/research)
- Key metrics dashboard
- Chart placeholders for:
  - Price forecast
  - Risk vs return
  - Feature importance (SHAP)
  - Confidence bands
- Model information

#### Land Banking (/land-banking)
- Growth zone cards
- Infrastructure project timeline
- Completion probability
- 5-year projection charts
- Risk and uplift metrics

#### Loans (/loans)
- EMI calculator
- Loan comparison table
- Approval probability
- AI recommendations
- Bank options with rates

#### News (/news)
- AI-summarized articles
- Sentiment badges
- Impact scores
- Zone tags
- Market summary

#### Profile (/profile)
- User information
- Saved properties
- Saved research
- Investment preferences
- Risk appetite settings

### UI Components
- All components use shadcn/ui
- Rounded-2xl cards throughout
- Glassmorphism effects
- Gradient accents
- Hover animations
- Responsive design

### Animations
- Page transitions ready (Framer Motion installed)
- Hover effects on cards
- Smooth theme transitions
- Fade-in animations on landing page
- Scale animations on property cards

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Collapsible navigation on mobile
- Drawer filters on mobile
- Stacked layouts on small screens

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes
- Framer Motion
- Recharts
- Supabase (Auth)
- Lucide Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Required in `.env.local`:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Notes

- All pages require authentication (redirect to /auth/login)
- Mock data is used for demo purposes
- Chart components are placeholders (Recharts ready)
- Map integration is placeholder (ready for Mapbox/Google Maps)
- Theme persists in localStorage
- All components are fully typed with TypeScript
