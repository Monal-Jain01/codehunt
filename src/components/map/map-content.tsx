"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, MapPin, TrendingUp, Building2 } from "lucide-react";
import { useState } from "react";

export function MapContent() {
  const [activeLayer, setActiveLayer] = useState<string>("growth");

  const layers = [
    { id: "growth", label: "Growth Zones", icon: TrendingUp },
    { id: "infrastructure", label: "Infrastructure", icon: Building2 },
    { id: "properties", label: "Properties", icon: MapPin },
  ];

  const insights = [
    {
      zone: "Whitefield Tech Corridor",
      uplift: "+45%",
      projects: 3,
      risk: "low"
    },
    {
      zone: "Navi Mumbai Airport Zone",
      uplift: "+60%",
      projects: 5,
      risk: "medium"
    },
    {
      zone: "Gurgaon Cyber Hub",
      uplift: "+35%",
      projects: 2,
      risk: "low"
    }
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Map Container */}
      <div className="flex-1 relative bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="h-16 w-16 mx-auto text-muted-foreground" />
            <p className="text-lg text-muted-foreground">Interactive Map View</p>
            <p className="text-sm text-muted-foreground max-w-md">
              Map integration with growth zones, infrastructure projects, and property locations
            </p>
          </div>
        </div>

        {/* Layer Controls */}
        <div className="absolute top-4 left-4 space-y-2">
          <Card className="rounded-2xl border-border/50 p-2">
            <div className="flex items-center gap-2 mb-2 px-2">
              <Layers className="h-4 w-4" />
              <span className="text-sm font-medium">Layers</span>
            </div>
            {layers.map((layer) => (
              <Button
                key={layer.id}
                variant={activeLayer === layer.id ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setActiveLayer(layer.id)}
              >
                <layer.icon className="h-4 w-4 mr-2" />
                {layer.label}
              </Button>
            ))}
          </Card>
        </div>
      </div>

      {/* Insights Panel */}
      <aside className="w-96 border-l bg-background overflow-y-auto">
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">AI Insights</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Real-time growth zone analysis
            </p>
          </div>

          <div className="space-y-4">
            {insights.map((insight, index) => (
              <Card key={index} className="rounded-2xl border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">{insight.zone}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Predicted Uplift</span>
                    <span className="font-semibold text-green-500">{insight.uplift}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Infrastructure Projects</span>
                    <span className="font-semibold">{insight.projects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Risk Level</span>
                    <Badge variant="outline" className={
                      insight.risk === 'low'
                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }>
                      {insight.risk.toUpperCase()}
                    </Badge>
                  </div>
                  <Button className="w-full mt-2" size="sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
