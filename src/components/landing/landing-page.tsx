"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, MapPin, Brain, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Properties Analyzed", value: "50K+", delay: 0 },
    { label: "AI Predictions", value: "95%", delay: 100 },
    { label: "Growth Zones", value: "200+", delay: 200 },
    { label: "Happy Investors", value: "10K+", delay: 300 },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced ML models predict property value appreciation with 95% accuracy"
    },
    {
      icon: TrendingUp,
      title: "Growth Zone Analysis",
      description: "Identify high-potential areas before they boom with infrastructure tracking"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive risk scoring to make informed investment decisions"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay ahead with instant market insights and news impact analysis"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className={`space-y-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Invest Smarter with{" "}
                <span className="gradient-text">AI Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover high-growth real estate opportunities powered by advanced AI predictions, 
                infrastructure insights, and comprehensive risk analysis.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/auth/sign-up">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link href="/search">Explore Properties</Link>
              </Button>
            </div>

            <div className={`mt-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by location, property type, or growth zone..."
                  className="pl-12 h-14 text-lg rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + stat.delay}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose PropelAI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge technology to make data-driven real estate investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border-border/50 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="border-border/50 rounded-3xl overflow-hidden">
            <div className="relative p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="relative space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Transform Your Real Estate Investments?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of smart investors using AI to find the best property opportunities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/auth/sign-up">Start Free Trial</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8">
                    <Link href="/auth/login">Sign In</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="text-xl font-bold gradient-text">PropelAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 PropelAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
