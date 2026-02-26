"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogoutButton } from "@/components/auth/logout-button";
import { User, Mail, Shield, Heart, FileText, TrendingUp } from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface ProfileContentProps {
  user: SupabaseUser;
}

export function ProfileContent({ user }: ProfileContentProps) {
  const savedProperties = [
    { id: 1, title: "3BHK Whitefield", price: "₹85L", uplift: "+20%" },
    { id: 2, title: "Commercial Gurgaon", price: "₹2.5Cr", uplift: "+30%" },
  ];

  const savedResearch = [
    { id: 1, zone: "Tech Corridor East", date: "2024-02-20" },
    { id: 2, zone: "Navi Mumbai Airport", date: "2024-02-18" },
  ];

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <LogoutButton />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Info */}
        <Card className="lg:col-span-1 rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium truncate">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Account Status</p>
                  <Badge className="mt-1 bg-green-500 text-white border-0">Active</Badge>
                </div>
              </div>
            </div>

            <Button className="w-full" variant="outline">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Saved Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Saved Properties */}
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Saved Properties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {savedProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium">{property.title}</p>
                    <p className="text-sm text-muted-foreground">{property.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-500">{property.uplift}</p>
                    <Button size="sm" variant="ghost">View</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Saved Research */}
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Saved Research
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {savedResearch.map((research) => (
                <div
                  key={research.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium">{research.zone}</p>
                    <p className="text-sm text-muted-foreground">
                      Saved on {new Date(research.date).toLocaleDateString()}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Risk Preferences */}
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Investment Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Risk Appetite</p>
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    Medium
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Investment Horizon</p>
                  <p className="font-medium">5-7 years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Preferred Type</p>
                  <p className="font-medium">Residential</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Update Preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
