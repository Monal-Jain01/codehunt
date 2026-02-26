"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Shield, Activity } from "lucide-react";
import type { User } from "@supabase/supabase-js";

interface DashboardContentProps {
  user: User;
}

export function DashboardContent({ user }: DashboardContentProps) {
  const portfolioData = {
    totalValue: 45000000,
    predictedReturn: 28.5,
    riskScore: 32,
    properties: 5,
    allocation: {
      residential: 45,
      commercial: 35,
      land: 20
    }
  };

  const recentActivity = [
    { id: 1, action: "Property Saved", property: "3BHK Whitefield", time: "2 hours ago" },
    { id: 2, action: "Research Generated", zone: "Tech Corridor East", time: "5 hours ago" },
    { id: 3, action: "Loan Pre-approved", amount: "₹85L", time: "1 day ago" },
  ];

  const aiRecommendations = [
    { id: 1, title: "High Growth Opportunity", zone: "Navi Mumbai", uplift: "+60%", risk: "medium" },
    { id: 2, title: "Low Risk Investment", zone: "Whitefield", uplift: "+20%", risk: "low" },
  ];

  return (
    <div className="container py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user.email?.split('@')[0]}</h1>
        <p className="text-muted-foreground mt-1">Here's your portfolio overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4.5Cr</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Predicted Return</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioData.predictedReturn}%</div>
            <p className="text-xs text-muted-foreground mt-1">Next 12 months</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioData.riskScore}/100</div>
            <p className="text-xs text-muted-foreground mt-1">
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                Medium Risk
              </Badge>
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Properties</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioData.properties}</div>
            <p className="text-xs text-muted-foreground mt-1">Across 3 zones</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Recommendations */}
        <Card className="rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiRecommendations.map((rec) => (
              <div key={rec.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div className="space-y-1">
                  <p className="font-medium">{rec.title}</p>
                  <p className="text-sm text-muted-foreground">{rec.zone}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-500">{rec.uplift}</p>
                  <Badge variant="outline" className={
                    rec.risk === 'low' 
                      ? 'bg-green-500/10 text-green-500 border-green-500/20'
                      : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                  }>
                    {rec.risk.toUpperCase()}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                <div className="space-y-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.property || activity.zone || activity.amount}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Allocation */}
      <Card className="rounded-2xl border-border/50">
        <CardHeader>
          <CardTitle>Portfolio Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Residential</span>
                <span className="font-medium">{portfolioData.allocation.residential}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${portfolioData.allocation.residential}%` }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Commercial</span>
                <span className="font-medium">{portfolioData.allocation.commercial}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div 
                  className="h-full bg-purple-500 transition-all duration-500"
                  style={{ width: `${portfolioData.allocation.commercial}%` }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Land Banking</span>
                <span className="font-medium">{portfolioData.allocation.land}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-500"
                  style={{ width: `${portfolioData.allocation.land}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
