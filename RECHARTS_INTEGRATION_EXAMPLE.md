# Recharts Integration Examples

## Installation

Recharts is already installed in package.json:
```json
"recharts": "^3.7.0"
```

## Example 1: Price Forecast Line Chart

Replace the placeholder in `src/components/research/research-content.tsx`:

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockChartData } from '@/lib/data/mock-data';

// In your component:
<ResponsiveContainer width="100%" height={320}>
  <LineChart data={mockChartData.forecast}>
    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
    <XAxis 
      dataKey="month" 
      className="text-xs"
      stroke="hsl(var(--muted-foreground))"
    />
    <YAxis 
      className="text-xs"
      stroke="hsl(var(--muted-foreground))"
      tickFormatter={(value) => `₹${(value / 10000000).toFixed(1)}Cr`}
    />
    <Tooltip 
      contentStyle={{
        backgroundColor: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
      }}
      formatter={(value: number) => [`₹${(value / 10000000).toFixed(2)}Cr`, '']}
    />
    <Legend />
    <Line 
      type="monotone" 
      dataKey="value" 
      stroke="hsl(var(--primary))" 
      strokeWidth={2}
      name="Actual"
      dot={{ fill: 'hsl(var(--primary))' }}
    />
    <Line 
      type="monotone" 
      dataKey="predicted" 
      stroke="hsl(var(--chart-2))" 
      strokeWidth={2}
      strokeDasharray="5 5"
      name="Predicted"
      dot={{ fill: 'hsl(var(--chart-2))' }}
    />
  </LineChart>
</ResponsiveContainer>
```

## Example 2: Risk vs Return Scatter Plot

```tsx
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = {
  'Low Risk': 'hsl(var(--chart-2))',
  'Medium Risk': 'hsl(var(--chart-4))',
  'High Risk': 'hsl(var(--chart-1))',
  'Very High Risk': 'hsl(var(--destructive))',
};

<ResponsiveContainer width="100%" height={320}>
  <ScatterChart>
    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
    <XAxis 
      type="number" 
      dataKey="risk" 
      name="Risk Score"
      stroke="hsl(var(--muted-foreground))"
      label={{ value: 'Risk Score', position: 'insideBottom', offset: -5 }}
    />
    <YAxis 
      type="number" 
      dataKey="return" 
      name="Expected Return"
      stroke="hsl(var(--muted-foreground))"
      label={{ value: 'Return %', angle: -90, position: 'insideLeft' }}
    />
    <Tooltip 
      cursor={{ strokeDasharray: '3 3' }}
      contentStyle={{
        backgroundColor: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
      }}
      formatter={(value: number, name: string) => [
        name === 'risk' ? `${value}` : `${value}%`,
        name === 'risk' ? 'Risk Score' : 'Expected Return'
      ]}
    />
    <Scatter data={mockChartData.riskReturn} fill="hsl(var(--primary))">
      {mockChartData.riskReturn.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[entry.zone as keyof typeof COLORS]} />
      ))}
    </Scatter>
  </ScatterChart>
</ResponsiveContainer>
```

## Example 3: Portfolio Allocation Pie Chart

```tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

<ResponsiveContainer width="100%" height={320}>
  <PieChart>
    <Pie
      data={mockChartData.allocation}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
      outerRadius={100}
      fill="hsl(var(--primary))"
      dataKey="value"
    >
      {mockChartData.allocation.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip 
      contentStyle={{
        backgroundColor: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
      }}
      formatter={(value: number) => [`${value}%`, 'Allocation']}
    />
    <Legend />
  </PieChart>
</ResponsiveContainer>
```

## Example 4: SHAP Feature Importance Bar Chart

```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const shapData = [
  { feature: 'Location', importance: 0.35 },
  { feature: 'Infrastructure', importance: 0.28 },
  { feature: 'Property Age', importance: 0.15 },
  { feature: 'Area', importance: 0.12 },
  { feature: 'Amenities', importance: 0.10 },
];

<ResponsiveContainer width="100%" height={320}>
  <BarChart data={shapData} layout="vertical">
    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
    <XAxis 
      type="number" 
      stroke="hsl(var(--muted-foreground))"
      tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
    />
    <YAxis 
      type="category" 
      dataKey="feature" 
      stroke="hsl(var(--muted-foreground))"
      width={120}
    />
    <Tooltip 
      contentStyle={{
        backgroundColor: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
      }}
      formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, 'Importance']}
    />
    <Bar 
      dataKey="importance" 
      fill="hsl(var(--primary))"
      radius={[0, 8, 8, 0]}
    />
  </BarChart>
</ResponsiveContainer>
```

## Example 5: Confidence Band Area Chart

```tsx
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const confidenceData = [
  { month: 'Jan', value: 8500000, upper: 9000000, lower: 8000000 },
  { month: 'Mar', value: 8900000, upper: 9500000, lower: 8300000 },
  { month: 'Jun', value: 9400000, upper: 10200000, lower: 8600000 },
  { month: 'Sep', value: 9900000, upper: 11000000, lower: 8800000 },
  { month: 'Dec', value: 10500000, upper: 12000000, lower: 9000000 },
];

<ResponsiveContainer width="100%" height={320}>
  <AreaChart data={confidenceData}>
    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
    <XAxis 
      dataKey="month" 
      stroke="hsl(var(--muted-foreground))"
    />
    <YAxis 
      stroke="hsl(var(--muted-foreground))"
      tickFormatter={(value) => `₹${(value / 10000000).toFixed(1)}Cr`}
    />
    <Tooltip 
      contentStyle={{
        backgroundColor: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
      }}
      formatter={(value: number) => [`₹${(value / 10000000).toFixed(2)}Cr`, '']}
    />
    <Area 
      type="monotone" 
      dataKey="upper" 
      stackId="1"
      stroke="transparent"
      fill="hsl(var(--primary) / 0.2)"
    />
    <Area 
      type="monotone" 
      dataKey="value" 
      stackId="2"
      stroke="hsl(var(--primary))"
      fill="hsl(var(--primary))"
      strokeWidth={2}
    />
    <Area 
      type="monotone" 
      dataKey="lower" 
      stackId="1"
      stroke="transparent"
      fill="hsl(var(--primary) / 0.2)"
    />
  </AreaChart>
</ResponsiveContainer>
```

## Theme-Aware Charts

All charts automatically adapt to dark/light theme using CSS variables:

```tsx
// Colors that work in both themes
stroke="hsl(var(--primary))"
fill="hsl(var(--chart-1))"
className="stroke-muted"

// Custom tooltip styling
contentStyle={{
  backgroundColor: 'hsl(var(--card))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '8px',
  color: 'hsl(var(--foreground))'
}}
```

## Responsive Charts

Always wrap charts in ResponsiveContainer:

```tsx
<ResponsiveContainer width="100%" height={320}>
  {/* Your chart */}
</ResponsiveContainer>
```

## Custom Tooltips

For more control:

```tsx
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-card p-3 shadow-lg">
        <p className="text-sm font-medium">{payload[0].payload.month}</p>
        <p className="text-xs text-muted-foreground">
          Value: ₹{(payload[0].value / 10000000).toFixed(2)}Cr
        </p>
      </div>
    );
  }
  return null;
};

<Tooltip content={<CustomTooltip />} />
```

## Integration Steps

1. Import required Recharts components
2. Replace placeholder div with ResponsiveContainer
3. Add your chart component
4. Use mockChartData or create new data
5. Style with theme-aware colors
6. Test in both dark and light modes

## Complete Example

Here's a complete replacement for the forecast chart in research-content.tsx:

```tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockChartData } from "@/lib/data/mock-data";
import { TrendingUp } from "lucide-react";

export function ResearchContent() {
  return (
    <div className="container py-8 space-y-8">
      {/* ... other content ... */}
      
      <Card className="rounded-2xl border-border/50">
        <CardHeader>
          <CardTitle>Price Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={mockChartData.forecast}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tickFormatter={(value) => `₹${(value / 10000000).toFixed(1)}Cr`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Actual"
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Predicted"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
```

Now your charts will be fully functional and theme-aware!
