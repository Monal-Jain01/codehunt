"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StepOrganizationForm() {
  const { watch, setValue } = useFormContext();
  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad"];

  const operatingCities = watch("operatingCities") || [];

  const toggleCity = (city: string) => {
    const current = operatingCities;
    const updated = current.includes(city)
      ? current.filter((c: string) => c !== city)
      : [...current, city];
    setValue("operatingCities", updated);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Organization Details
        </h2>
        <p className="text-gray-600">
          Tell us about your organization and business objectives
        </p>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="p-6 space-y-6">
          {/* Organization Name */}
          <div className="space-y-2">
            <Label htmlFor="orgName" className="text-base font-semibold">
              Organization Name
            </Label>
            <Input
              id="orgName"
              type="text"
              placeholder="Enter organization name"
              value={watch("organizationName") || ""}
              onChange={(e) => setValue("organizationName", e.target.value)}
              className="text-base py-3"
            />
          </div>

          {/* Organization Type */}
          <div className="space-y-2">
            <Label htmlFor="orgType" className="text-base font-semibold">
              Organization Type
            </Label>
            <select
              id="orgType"
              value={watch("organizationType") || ""}
              onChange={(e) => setValue("organizationType", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select type</option>
              <option value="DEVELOPER">Developer</option>
              <option value="BROKERAGE">Brokerage</option>
              <option value="INVESTMENT_FIRM">Investment Firm</option>
              <option value="REIT">REIT</option>
              <option value="PRIVATE_FUND">Private Fund</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* Operating Cities */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Operating Cities
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => toggleCity(city)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    operatingCities.includes(city)
                      ? "border-primary bg-red-50 text-primary"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Objective */}
          <div className="space-y-2">
            <Label htmlFor="objective" className="text-base font-semibold">
              Primary Objective
            </Label>
            <select
              id="objective"
              value={watch("primaryObjective") || ""}
              onChange={(e) => setValue("primaryObjective", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select objective</option>
              <option value="SELL_INVENTORY">Sell Inventory</option>
              <option value="ACQUIRE_LAND">Acquire Land</option>
              <option value="RAISE_CAPITAL">Raise Capital</option>
              <option value="MANAGE_PORTFOLIO">Manage Portfolio</option>
            </select>
          </div>

          {/* Average Project Size */}
          <div className="space-y-2">
            <Label htmlFor="projectSize" className="text-base font-semibold">
              Average Project Size (₹ Crores)
            </Label>
            <Input
              id="projectSize"
              type="number"
              placeholder="Enter average project size"
              value={watch("averageProjectSize") || ""}
              onChange={(e) => setValue("averageProjectSize", parseFloat(e.target.value) || 0)}
              className="text-base py-3"
              min="0"
              step="0.1"
            />
          </div>

          {/* Risk Appetite */}
          <div className="space-y-2">
            <Label htmlFor="risk" className="text-base font-semibold">
              Risk Appetite
            </Label>
            <select
              id="risk"
              value={watch("riskAppetite") || ""}
              onChange={(e) => setValue("riskAppetite", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select risk level</option>
              <option value="LOW">Low - Conservative approach</option>
              <option value="MEDIUM">Medium - Balanced strategy</option>
              <option value="HIGH">High - Aggressive growth</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
