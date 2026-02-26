"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { PropertyCard99 } from "@/components/property/property-card-99";
import { mockProperties } from "@/lib/data/mock-data";
import { SlidersHorizontal, X, MapPin } from "lucide-react";

export function SearchContent99() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    propertyType: "all",
    bhk: "all",
    furnishing: "all",
    possession: "all",
    preLaunch: false,
    minGrowthScore: "0"
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          <span>Home</span> / <span>Search</span> / <span className="text-gray-900">Properties in Bangalore</span>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Properties in Bangalore</h1>
            <p className="text-sm text-gray-600 mt-1">{mockProperties.length} results found</p>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white">
              <option>Sort by: Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 space-y-4">
            <Card className="sticky top-24">
              <CardHeader className="border-b">
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-6">
                {/* Budget */}
                <div className="space-y-2">
                  <Label className="font-semibold">Budget</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min (₹)"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="text-sm"
                    />
                    <Input
                      placeholder="Max (₹)"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <Label className="font-semibold">Property Type</Label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={filters.propertyType}
                    onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                  >
                    <option value="all">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land/Plot</option>
                  </select>
                </div>

                {/* BHK */}
                <div className="space-y-2">
                  <Label className="font-semibold">BHK</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1', '2', '3', '4+'].map((bhk) => (
                      <button
                        key={bhk}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:border-primary hover:text-primary"
                      >
                        {bhk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Furnishing */}
                <div className="space-y-2">
                  <Label className="font-semibold">Furnishing</Label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={filters.furnishing}
                    onChange={(e) => setFilters({ ...filters, furnishing: e.target.value })}
                  >
                    <option value="all">All</option>
                    <option value="furnished">Furnished</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="unfurnished">Unfurnished</option>
                  </select>
                </div>

                {/* Possession */}
                <div className="space-y-2">
                  <Label className="font-semibold">Possession Status</Label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={filters.possession}
                    onChange={(e) => setFilters({ ...filters, possession: e.target.value })}
                  >
                    <option value="all">All</option>
                    <option value="ready">Ready to Move</option>
                    <option value="under-construction">Under Construction</option>
                  </select>
                </div>

                {/* AI Features */}
                <div className="border-t pt-4 space-y-4">
                  <Label className="font-semibold text-primary">AI-Powered Filters</Label>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="preLaunch"
                      checked={filters.preLaunch}
                      onChange={(e) => setFilters({ ...filters, preLaunch: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="preLaunch" className="text-sm">
                      Pre-Launch Projects Only
                    </label>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Min AI Growth Score</Label>
                    <Input
                      type="range"
                      min="0"
                      max="100"
                      value={filters.minGrowthScore}
                      onChange={(e) => setFilters({ ...filters, minGrowthScore: e.target.value })}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-600">{filters.minGrowthScore}/100</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Apply Filters
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setFilters({
                    minPrice: "",
                    maxPrice: "",
                    propertyType: "all",
                    bhk: "all",
                    furnishing: "all",
                    possession: "all",
                    preLaunch: false,
                    minGrowthScore: "0"
                  })}
                >
                  Reset All
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4 space-y-6">
                  {/* Same filters as desktop */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => setShowFilters(false)}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {(filters.preLaunch || filters.minGrowthScore !== "0") && (
              <div className="mb-4 flex flex-wrap gap-2">
                {filters.preLaunch && (
                  <Badge variant="outline" className="bg-white">
                    Pre-Launch
                    <button className="ml-2" onClick={() => setFilters({ ...filters, preLaunch: false })}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {filters.minGrowthScore !== "0" && (
                  <Badge variant="outline" className="bg-white">
                    Growth Score: {filters.minGrowthScore}+
                    <button className="ml-2" onClick={() => setFilters({ ...filters, minGrowthScore: "0" })}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProperties.map((property) => (
                <PropertyCard99 key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm" className="bg-primary text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
