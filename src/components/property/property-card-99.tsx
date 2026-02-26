import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Home, TrendingUp, Phone } from "lucide-react";
import type { Property } from "@/lib/types/property";

interface PropertyCard99Props {
  property: Property;
}

export function PropertyCard99({ property }: PropertyCard99Props) {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(0)} L`;
  };

  return (
    <Card className="property-card">
      <div className="relative h-48 bg-gray-200">
        {property.loanEligible && (
          <Badge className="absolute top-2 left-2 bg-green-600 text-white border-0 text-xs">
            Loan Available
          </Badge>
        )}
        {property.growthZone && (
          <Badge className="absolute top-2 right-2 bg-blue-600 text-white border-0 text-xs">
            High Growth
          </Badge>
        )}
        <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <MapPin className="h-3 w-3" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">{formatPrice(property.price)}</p>
            <p className="text-xs text-gray-500">₹{Math.round(property.price / property.area)}/sq.ft</p>
          </div>
          {property.upliftPercentage > 0 && (
            <div className="text-right">
              <div className="flex items-center gap-1 text-green-600 font-semibold text-sm">
                <TrendingUp className="h-3 w-3" />
                <span>+{property.upliftPercentage}%</span>
              </div>
              <p className="text-xs text-gray-500">AI Predicted</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-700 border-t pt-3">
          {property.bedrooms && (
            <span className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              {property.bedrooms} BHK
            </span>
          )}
          <span>{property.area} sq.ft</span>
          <span className="capitalize">{property.propertyType}</span>
        </div>

        {property.completionDate && (
          <p className="text-xs text-gray-600">
            Possession: {new Date(property.completionDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </p>
        )}

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
            <Phone className="h-4 w-4 mr-1" />
            Contact
          </Button>
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
