"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockGrowthZones } from "@/lib/data/mock-data";
import { TrendingUp, MapPin, Building2, Calendar } from "lucide-react";

export function LandBankingContent() {
  return (
    <div className="container py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Land Banking Opportunities</h1>
        <p className="text-muted-foreground mt-1">
          High-growth zones with infrastructure development
        </p>
      </div>

      <div className="grid gap-6">
        {mockGrowthZones.map((zone) => (
          <Card key={zone.id} className="rounded-2xl border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 border-b">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">{zone.name}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{zone.location}</span>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white border-0 text-lg px-4 py-2">
                  +{zone.upliftPercentage}% Uplift
                </Badge>
              </div>
            </div>

            <CardContent className="p-6 space-y-6">
              {/* Metrics */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Current Value</p>
                  <p className="text-xl font-bold">
                    ₹{(zone.currentValue / 10000000).toFixed(2)}Cr
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Projected Value (5Y)</p>
                  <p className="text-xl font-bold text-green-500">
                    ₹{(zone.projectedValue / 10000000).toFixed(2)}Cr
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Completion Probability</p>
                  <p className="text-xl font-bold">{zone.completionProbability}%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Risk Score</p>
                  <Badge variant="outline" className={
                    zone.riskScore < 30
                      ? 'bg-green-500/10 text-green-500 border-green-500/20'
                      : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                  }>
                    {zone.riskScore}/100
                  </Badge>
                </div>
              </div>

              {/* Infrastructure Projects */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Infrastructure Projects
                </h3>
                <div className="space-y-3">
                  {zone.infrastructureProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{project.name}</p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="capitalize">{project.type}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(project.completionDate).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={
                          project.status === 'completed'
                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                            : project.status === 'ongoing'
                            ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                            : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                        }>
                          {project.status.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className={
                          project.impact === 'high'
                            ? 'bg-red-500/10 text-red-500 border-red-500/20'
                            : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        }>
                          {project.impact.toUpperCase()} IMPACT
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5-Year Projection Chart Placeholder */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  5-Year Value Projection
                </h3>
                <div className="h-64 flex items-center justify-center bg-muted/30 rounded-xl">
                  <div className="text-center space-y-2">
                    <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Line Chart: Value appreciation over 5 years
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                View Detailed Analysis
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
