# PropelAI - Quick Reference Guide

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Key Files

### Configuration
- `src/app/layout.tsx` - Root layout with ThemeProvider
- `src/app/globals.css` - Theme colors and custom animations
- `package.json` - Dependencies (framer-motion, recharts included)

### Pages
- `/` - Landing page (redirects if authenticated)
- `/dashboard` - Portfolio overview
- `/search` - Property search
- `/map` - Interactive map
- `/research` - AI analytics
- `/land-banking` - Growth zones
- `/loans` - Loan calculator
- `/news` - Market news
- `/profile` - User profile

### Data
- `src/lib/types/property.ts` - TypeScript interfaces
- `src/lib/data/mock-data.ts` - Demo data

## 🎨 Theme System

### Toggle Theme
```tsx
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();
setTheme(theme === "dark" ? "light" : "dark");
```

### Theme Colors
```css
/* Use in components */
bg-background
text-foreground
bg-card
border-border
text-primary
bg-muted
```

## 🧩 Components

### Import shadcn/ui
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
```

### Use PropertyCard
```tsx
import { PropertyCard } from "@/components/property/property-card";
import { mockProperties } from "@/lib/data/mock-data";

<PropertyCard property={mockProperties[0]} />
```

## 📊 Add Charts (Recharts)

### Line Chart
```tsx
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

<ResponsiveContainer width="100%" height={320}>
  <LineChart data={data}>
    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
    <YAxis stroke="hsl(var(--muted-foreground))" />
    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" />
  </LineChart>
</ResponsiveContainer>
```

See `RECHARTS_INTEGRATION_EXAMPLE.md` for more examples.

## 🎭 Add Animations (Framer Motion)

### Basic Animation
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {content}
</motion.div>
```

### Hover Animation
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {content}
</motion.div>
```

## 🔐 Authentication

### Check Auth Status
```tsx
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();

if (!user) {
  redirect("/auth/login");
}
```

### Logout
```tsx
import { LogoutButton } from "@/components/auth/logout-button";

<LogoutButton />
```

## 📱 Responsive Design

### Tailwind Breakpoints
```tsx
// Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Hide on mobile
<div className="hidden md:block">

// Show only on mobile
<div className="md:hidden">
```

## 🎨 Custom Styles

### Glassmorphism
```tsx
<div className="glass-effect p-6 rounded-2xl">
  {content}
</div>
```

### Gradient Text
```tsx
<h1 className="gradient-text">PropelAI</h1>
```

### Shimmer Effect
```tsx
<div className="animate-shimmer">
  {content}
</div>
```

## 📦 Mock Data

### Import Data
```tsx
import { 
  mockProperties, 
  mockGrowthZones, 
  mockLoanOptions, 
  mockNews,
  mockChartData 
} from '@/lib/data/mock-data';
```

### Use Data
```tsx
{mockProperties.map((property) => (
  <PropertyCard key={property.id} property={property} />
))}
```

## 🎯 Common Patterns

### Card with Header
```tsx
<Card className="rounded-2xl border-border/50">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    {content}
  </CardContent>
</Card>
```

### Badge with Color
```tsx
<Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
  LOW RISK
</Badge>
```

### Button Variants
```tsx
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

## 🔧 Troubleshooting

### Theme not working
1. Check ThemeProvider in layout.tsx
2. Verify `suppressHydrationWarning` on html tag
3. Clear localStorage

### Build errors
1. Run `npm install`
2. Check import paths
3. Verify all files exist

### Styling issues
1. Check globals.css is imported
2. Verify Tailwind classes
3. Check dark mode classes

## 📚 Documentation Files

- `PROJECT_STRUCTURE.md` - Complete file structure
- `SETUP_GUIDE.md` - Detailed setup instructions
- `IMPLEMENTATION_SUMMARY.md` - What's been built
- `RECHARTS_INTEGRATION_EXAMPLE.md` - Chart examples
- `CHECKLIST.md` - Completion checklist
- `QUICK_REFERENCE.md` - This file

## 🌐 URLs

### Development
- Landing: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard
- Search: http://localhost:3000/search
- Map: http://localhost:3000/map
- Research: http://localhost:3000/research
- Land Banking: http://localhost:3000/land-banking
- Loans: http://localhost:3000/loans
- News: http://localhost:3000/news
- Profile: http://localhost:3000/profile

### Auth
- Login: http://localhost:3000/auth/login
- Sign Up: http://localhost:3000/auth/sign-up

## 💡 Tips

1. **Theme Colors**: Always use CSS variables for theme-aware colors
2. **Responsive**: Use mobile-first approach with Tailwind
3. **Components**: Reuse shadcn/ui components for consistency
4. **Data**: Start with mock data, replace with real APIs later
5. **Animations**: Keep animations subtle and performant
6. **Types**: Always define TypeScript interfaces
7. **Build**: Test build before deploying (`npm run build`)

## 🎉 You're Ready!

The platform is production-ready. Start by:
1. Running `npm run dev`
2. Visiting http://localhost:3000
3. Exploring all pages
4. Testing theme toggle
5. Checking responsive design

Then integrate real data and deploy!
