"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertyCard } from "@/components/property/property-card";
import { mockProperties } from "@/lib/data/mock-data";
import { SlidersHorizontal, X } from "lucide-react";

export function SearchContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    propertyType: "all",
    riskLevel: "all",
    minUplift: "0"
  });

  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters - Desktop */}
        <aside className="hidden lg:block w-80 space-y-6">
          <Card className="rounded-2xl border-border/50 sticky top-24">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  />
                  <Input
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Property Type</Label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={filters.propertyType}
                  onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                >
                  <option value="all">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Risk Level</Label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={filters.riskLevel}
                  onChange={(e) => setFilters({ ...filters, riskLevel: e.target.value })}
                >
                  <option value="all">All Levels</option>
                  <option value="low">Low Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="high">High Risk</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Minimum Uplift %</Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={filters.minUplift}
                  onChange={(e) => setFilters({ ...filters, minUplift: e.target.value })}
                />
              </div>

              <Button className="w-full" onClick={() => setFilters({
                minPrice: "",
                maxPrice: "",
                propertyType: "all",
                riskLevel: "all",
                minUplift: "0"
              })}>
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        </aside>

        {/* Mobile Filter Button */}
        <div className="lg:hidden">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {showFilters && (
            <Card className="mt-4 rounded-2xl border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Filters</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Budget Range</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    />
                    <Input
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={filters.propertyType}
                    onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                  >
                    <option value="all">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Risk Level</Label>
                  <select
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={filters.riskLevel}
                    onChange={(e) => setFilters({ ...filters, riskLevel: e.target.value })}
                  >
                    <option value="all">All Levels</option>
                    <option value="low">Low Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="high">High Risk</option>
                  </select>
                </div>

                <Button className="w-full" onClick={() => {
                  setFilters({
                    minPrice: "",
                    maxPrice: "",
                    propertyType: "all",
                    riskLevel: "all",
                    minUplift: "0"
                  });
                  setShowFilters(false);
                }}>
                  Reset & Close
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Properties Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Property Search</h1>
            <p className="text-muted-foreground mt-1">
              {mockProperties.length} properties found
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mockProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
