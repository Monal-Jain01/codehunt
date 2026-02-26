"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Home, Building2, TrendingUp, Shield } from "lucide-react";
import { ArticlesSection } from "@/components/insights/ArticlesSection";

export function Landing99() {
  const popularCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad"
  ];

  const featuredProjects = [
    {
      id: 1,
      name: "Prestige Lakeside Habitat",
      location: "Varthur, Bangalore",
      price: "₹1.2 Cr - 2.5 Cr",
      type: "3, 4 BHK Apartments",
      image: "/placeholder.jpg",
      badge: "Ready to Move"
    },
    {
      id: 2,
      name: "DLF The Camellias",
      location: "Golf Course Road, Gurgaon",
      price: "₹15 Cr - 45 Cr",
      type: "4, 5 BHK Apartments",
      image: "/placeholder.jpg",
      badge: "Luxury"
    },
    {
      id: 3,
      name: "Godrej Emerald",
      location: "Thane West, Mumbai",
      price: "₹95 L - 1.8 Cr",
      type: "2, 3 BHK Apartments",
      image: "/placeholder.jpg",
      badge: "New Launch"
    },
    {
      id: 4,
      name: "Brigade Cornerstone Utopia",
      location: "Whitefield, Bangalore",
      price: "₹1.5 Cr - 3 Cr",
      type: "3, 4 BHK Apartments",
      image: "/placeholder.jpg",
      badge: "Pre-Launch"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Find Your Dream Property with AI Intelligence
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Search from 50,000+ properties with AI-powered insights and predictions
            </p>

            {/* Search Tabs */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-4 border border-gray-200 dark:border-gray-800">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter locality, landmark, project, or builder name"
                    className="pl-10 h-12 text-base dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 font-semibold">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <select className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md text-sm">
                  <option>Budget</option>
                  <option>Under 50L</option>
                  <option>50L - 1Cr</option>
                  <option>1Cr - 2Cr</option>
                  <option>Above 2Cr</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md text-sm">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 rounded-md text-sm">
                  <option>BHK</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                </select>
              </div>
            </div>

            {/* Popular Cities */}
            <div className="pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Popular Cities:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularCities.map((city) => (
                  <Link
                    key={city}
                    href={`/search?city=${city.toLowerCase()}`}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:border-primary hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Banner */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">AI Price Prediction</h3>
              <p className="text-xs text-gray-600 mt-1">95% Accuracy</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Risk Analysis</h3>
              <p className="text-xs text-gray-600 mt-1">Smart Insights</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Growth Zones</h3>
              <p className="text-xs text-gray-600 mt-1">200+ Tracked</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">Pre-Launch</h3>
              <p className="text-xs text-gray-600 mt-1">Early Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link href="/search" className="text-primary hover:underline text-sm font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="property-card">
                <div className="relative h-48 bg-gray-200">
                  <Badge className="absolute top-2 left-2 bg-white text-gray-900 border border-gray-300">
                    {project.badge}
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </p>
                  <p className="text-sm text-gray-700">{project.type}</p>
                  <p className="text-lg font-bold text-gray-900">{project.price}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newly Launched */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Newly Launched Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="property-card">
                <div className="h-40 bg-gray-200"></div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-green-100 text-green-800 border-0">New Launch</Badge>
                  <h3 className="font-semibold">Premium Apartments</h3>
                  <p className="text-sm text-gray-600 mt-1">Whitefield, Bangalore</p>
                  <p className="text-lg font-bold mt-2">₹1.2 Cr onwards</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Homes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Budget Homes Under ₹50 Lakhs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="property-card">
                <div className="h-36 bg-gray-200"></div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm">Affordable Housing</h3>
                  <p className="text-xs text-gray-600 mt-1">Navi Mumbai</p>
                  <p className="text-base font-bold mt-2">₹35 L - 48 L</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <ArticlesSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">99AI</h3>
              <p className="text-sm text-gray-400">
                AI-powered real estate intelligence platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/search">Search Properties</Link></li>
                <li><Link href="/research">Deep Research</Link></li>
                <li><Link href="/land-banking">Pre-Launch</Link></li>
                <li><Link href="/loans">Home Loans</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/news">News & Insights</Link></li>
                <li><Link href="/map">Map View</Link></li>
                <li><Link href="/dashboard">My Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Email: support@99ai.com<br />
                Phone: 1800-XXX-XXXX
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 99AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
