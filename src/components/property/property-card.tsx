"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, TrendingUp, MapPin } from "lucide-react";
import type { Property } from "@/lib/types/property";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [saved, setSaved] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'medium': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'high': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return '';
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-2xl border-border/50">
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => setSaved(!saved)}
        >
          <Heart className={`h-4 w-4 ${saved ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        {property.loanEligible && (
          <Badge className="absolute bottom-2 left-2 bg-green-500/90 text-white border-0">
            Loan Eligible
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">{formatPrice(property.price)}</p>
            <p className="text-xs text-muted-foreground">Current Price</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-green-500 font-semibold">
              <TrendingUp className="h-4 w-4" />
              <span>+{property.upliftPercentage}%</span>
            </div>
            <p className="text-xs text-muted-foreground">AI Predicted</p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t">
          <Badge variant="outline" className={getRiskColor(property.riskLevel)}>
            {property.riskLevel.toUpperCase()} RISK
          </Badge>
          {property.growthZone && (
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
              {property.growthZone}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
          {property.bedrooms && <span>{property.bedrooms} BHK</span>}
          {property.bedrooms && property.area && <span>•</span>}
          <span>{property.area} sq.ft</span>
        </div>

        <Button className="w-full mt-2" variant="default">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
