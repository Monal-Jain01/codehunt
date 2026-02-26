"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2, Save, X } from "lucide-react";
import { toast } from "sonner";
import { updateProfile } from "@/actions/profile";

interface ProfileContentProps {
  profile: any;
  userEmail: string;
}

export function ProfileContent({ profile, userEmail }: ProfileContentProps) {
  const [editingBasic, setEditingBasic] = useState(false);
  const [editingPreferences, setEditingPreferences] = useState(false);
  const [loading, setLoading] = useState(false);

  const [basicData, setBasicData] = useState({
    full_name: profile?.full_name || "",
    phone: profile?.phone || "",
    organization: profile?.organization || "",
  });

  const [preferencesData, setPreferencesData] = useState({
    user_type: profile?.user_type || "USER",
    investment_budget: profile?.investment_budget || 0,
    risk_tolerance: profile?.risk_tolerance || "MEDIUM",
  });

  const handleSaveBasic = async () => {
    setLoading(true);
    try {
      const result = await updateProfile(basicData);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Profile updated successfully");
        setEditingBasic(false);
      }
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleSavePreferences = async () => {
    setLoading(true);
    try {
      const result = await updateProfile(preferencesData);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Preferences updated successfully");
        setEditingPreferences(false);
      }
    } catch (error) {
      toast.error("Failed to update preferences");
    } finally {
      setLoading(false);
    }
  };

  const formatBudget = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(value / 100000).toFixed(0)} L`;
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Basic Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Basic Information</CardTitle>
            {!editingBasic ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingBasic(true)}
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingBasic(false);
                    setBasicData({
                      full_name: profile?.full_name || "",
                      phone: profile?.phone || "",
                      organization: profile?.organization || "",
                    });
                  }}
                  disabled={loading}
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSaveBasic}
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name</Label>
              {editingBasic ? (
                <Input
                  id="full_name"
                  value={basicData.full_name}
                  onChange={(e) => setBasicData({ ...basicData, full_name: e.target.value })}
                  placeholder="Enter your full name"
                />
              ) : (
                <p className="text-gray-900 font-medium">{basicData.full_name || "Not set"}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <p className="text-gray-600">{userEmail}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              {editingBasic ? (
                <Input
                  id="phone"
                  value={basicData.phone}
                  onChange={(e) => setBasicData({ ...basicData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                />
              ) : (
                <p className="text-gray-900 font-medium">{basicData.phone || "Not set"}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              {editingBasic ? (
                <Input
                  id="organization"
                  value={basicData.organization}
                  onChange={(e) => setBasicData({ ...basicData, organization: e.target.value })}
                  placeholder="Enter your organization name"
                />
              ) : (
                <p className="text-gray-900 font-medium">{basicData.organization || "Not set"}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Investment Preferences */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Investment Preferences</CardTitle>
            {!editingPreferences ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingPreferences(true)}
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingPreferences(false);
                    setPreferencesData({
                      user_type: profile?.user_type || "USER",
                      investment_budget: profile?.investment_budget || 0,
                      risk_tolerance: profile?.risk_tolerance || "MEDIUM",
                    });
                  }}
                  disabled={loading}
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSavePreferences}
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user_type">Account Type</Label>
              {editingPreferences ? (
                <select
                  id="user_type"
                  value={preferencesData.user_type}
                  onChange={(e) => setPreferencesData({ ...preferencesData, user_type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="USER">User</option>
                  <option value="ORGANIZATION">Organization</option>
                </select>
              ) : (
                <p className="text-gray-900 font-medium">
                  {preferencesData.user_type === "USER" ? "User" : "Organization"}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="investment_budget">Investment Budget</Label>
              {editingPreferences ? (
                <Input
                  id="investment_budget"
                  type="number"
                  value={preferencesData.investment_budget}
                  onChange={(e) => setPreferencesData({ ...preferencesData, investment_budget: parseInt(e.target.value) || 0 })}
                  placeholder="Enter budget in rupees"
                />
              ) : (
                <p className="text-gray-900 font-medium">
                  {preferencesData.investment_budget > 0 ? formatBudget(preferencesData.investment_budget) : "Not set"}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="risk_tolerance">Risk Tolerance</Label>
              {editingPreferences ? (
                <select
                  id="risk_tolerance"
                  value={preferencesData.risk_tolerance}
                  onChange={(e) => setPreferencesData({ ...preferencesData, risk_tolerance: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="LOW">Low - Stable returns</option>
                  <option value="MEDIUM">Medium - Balanced growth</option>
                  <option value="HIGH">High - Maximum growth</option>
                </select>
              ) : (
                <p className="text-gray-900 font-medium">
                  {preferencesData.risk_tolerance === "LOW" && "Low - Stable returns"}
                  {preferencesData.risk_tolerance === "MEDIUM" && "Medium - Balanced growth"}
                  {preferencesData.risk_tolerance === "HIGH" && "High - Maximum growth"}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
