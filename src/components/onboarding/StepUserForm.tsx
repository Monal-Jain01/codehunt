"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function StepUserForm() {
  const { watch, setValue } = useFormContext();
  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad"];

  const budgetRange = watch("budgetRange") || { min: 1000000, max: 5000000 };
  const loanRequired = watch("loanRequired") || false;
  const preferredCities = watch("preferredCities") || [];

  const handleBudgetChange = (value: number) => {
    setValue("budgetRange", {
      min: budgetRange.min,
      max: value
    });
  };

  const toggleCity = (city: string) => {
    const current = preferredCities;
    const updated = current.includes(city)
      ? current.filter((c: string) => c !== city)
      : [...current, city];
    setValue("preferredCities", updated);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tell Us About Your Investment Goals
        </h2>
        <p className="text-gray-600">
          Help us personalize your property recommendations
        </p>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="p-6 space-y-6">
          {/* Investment Purpose */}
          <div className="space-y-2">
            <Label htmlFor="purpose" className="text-base font-semibold">
              Investment Purpose
            </Label>
            <select
              id="purpose"
              value={watch("investmentPurpose") || ""}
              onChange={(e) => setValue("investmentPurpose", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select purpose</option>
              <option value="SELF_USE">Self-use</option>
              <option value="RENTAL_INCOME">Rental Income</option>
              <option value="CAPITAL_APPRECIATION">Capital Appreciation</option>
              <option value="LAND_BANKING">Land Banking</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Budget Range: ₹{((budgetRange.max || 5000000) / 100000).toFixed(0)}L
            </Label>
            <input
              type="range"
              min="1000000"
              max="100000000"
              step="500000"
              value={budgetRange.max || 5000000}
              onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>₹10L</span>
              <span>₹10Cr</span>
            </div>
          </div>

          {/* Loan Required */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <Label htmlFor="loan" className="text-base font-semibold">
                Loan Required
              </Label>
              <p className="text-sm text-gray-600">Do you need home loan assistance?</p>
            </div>
            <Switch
              id="loan"
              checked={loanRequired}
              onCheckedChange={(checked) => setValue("loanRequired", checked)}
            />
          </div>

          {/* Preferred Cities */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Preferred Cities
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => toggleCity(city)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    preferredCities.includes(city)
                      ? "border-primary bg-red-50 text-primary"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <Label htmlFor="propertyType" className="text-base font-semibold">
              Property Type
            </Label>
            <select
              id="propertyType"
              value={watch("propertyType") || ""}
              onChange={(e) => setValue("propertyType", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select type</option>
              <option value="RESIDENTIAL">Residential</option>
              <option value="COMMERCIAL">Commercial</option>
              <option value="LAND">Land/Plot</option>
              <option value="MIXED_USE">Mixed Use</option>
            </select>
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
              <option value="LOW">Low - Stable returns</option>
              <option value="MEDIUM">Medium - Balanced growth</option>
              <option value="HIGH">High - Maximum growth</option>
            </select>
          </div>

          {/* Investment Horizon */}
          <div className="space-y-2">
            <Label htmlFor="horizon" className="text-base font-semibold">
              Investment Horizon
            </Label>
            <select
              id="horizon"
              value={watch("investmentHorizon") || ""}
              onChange={(e) => setValue("investmentHorizon", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select timeframe</option>
              <option value="SHORT_TERM">Short Term (&lt; 2 years)</option>
              <option value="MEDIUM_TERM">Medium Term (2-5 years)</option>
              <option value="LONG_TERM">Long Term (&gt; 5 years)</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
