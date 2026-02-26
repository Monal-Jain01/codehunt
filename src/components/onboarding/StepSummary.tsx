"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building2, CheckCircle2 } from "lucide-react";

export function StepSummary() {
  const { watch } = useFormContext();
  const formData = watch();
  const isUser = formData.user_type === "USER";

  const formatBudget = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(value / 100000).toFixed(0)} L`;
  };

  const formatValue = (value: any): string => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'string') return value.replace(/_/g, ' ');
    if (typeof value === 'number') return value.toString();
    return String(value);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Review Your Information
        </h2>
        <p className="text-gray-600 text-lg">
          Please confirm your details before proceeding
        </p>
      </div>

      <Card className="border-2 border-gray-200 max-w-3xl mx-auto">
        <CardContent className="p-8 space-y-6">
          {/* Account Type */}
          <div className="flex items-center gap-4 pb-6 border-b">
            <div className={`p-4 rounded-xl ${isUser ? 'bg-blue-100' : 'bg-purple-100'}`}>
              {isUser ? (
                <User className="h-8 w-8 text-blue-600" />
              ) : (
                <Building2 className="h-8 w-8 text-purple-600" />
              )}
            </div>
            <div>
              <p className="text-sm text-gray-600">Account Type</p>
              <p className="text-2xl font-bold text-gray-900">
                {formData.user_type === "USER" ? "User" : "Organization"}
              </p>
            </div>
          </div>

          {/* User Details */}
          {isUser && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">Investment Preferences</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {formData.investmentPurpose && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Investment Purpose</p>
                    <p className="font-medium text-gray-900">{formatValue(formData.investmentPurpose)}</p>
                  </div>
                )}

                {formData.budgetRange && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Budget Range</p>
                    <p className="font-medium text-gray-900">Up to {formatBudget(formData.budgetRange.max)}</p>
                  </div>
                )}

                {formData.propertyType && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Property Type</p>
                    <p className="font-medium text-gray-900">{formatValue(formData.propertyType)}</p>
                  </div>
                )}

                {formData.riskAppetite && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Risk Appetite</p>
                    <Badge variant="outline" className={
                      formData.riskAppetite === 'LOW' 
                        ? 'bg-green-100 text-green-700 border-green-300'
                        : formData.riskAppetite === 'MEDIUM'
                        ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                        : 'bg-red-100 text-red-700 border-red-300'
                    }>
                      {formatValue(formData.riskAppetite)}
                    </Badge>
                  </div>
                )}

                {formData.investmentHorizon && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Investment Horizon</p>
                    <p className="font-medium text-gray-900">{formatValue(formData.investmentHorizon)}</p>
                  </div>
                )}

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Loan Required</p>
                  <p className="font-medium text-gray-900">{formData.loanRequired ? 'Yes' : 'No'}</p>
                </div>
              </div>

              {formData.preferredCities && formData.preferredCities.length > 0 && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Preferred Cities</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.preferredCities.map((city: string) => (
                      <Badge key={city} variant="outline" className="bg-white">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Organization Details */}
          {!isUser && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">Organization Details</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {formData.organizationName && (
                  <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Organization Name</p>
                    <p className="font-medium text-gray-900 text-lg">{formData.organizationName}</p>
                  </div>
                )}

                {formData.organizationType && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Organization Type</p>
                    <p className="font-medium text-gray-900">{formatValue(formData.organizationType)}</p>
                  </div>
                )}

                {formData.primaryObjective && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Primary Objective</p>
                    <p className="font-medium text-gray-900">{formatValue(formData.primaryObjective)}</p>
                  </div>
                )}

                {formData.averageProjectSize && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Average Project Size</p>
                    <p className="font-medium text-gray-900">₹{formData.averageProjectSize} Cr</p>
                  </div>
                )}

                {formData.riskAppetite && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Risk Appetite</p>
                    <Badge variant="outline" className={
                      formData.riskAppetite === 'LOW' 
                        ? 'bg-green-100 text-green-700 border-green-300'
                        : formData.riskAppetite === 'MEDIUM'
                        ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                        : 'bg-red-100 text-red-700 border-red-300'
                    }>
                      {formatValue(formData.riskAppetite)}
                    </Badge>
                  </div>
                )}
              </div>

              {formData.operatingCities && formData.operatingCities.length > 0 && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Operating Cities</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.operatingCities.map((city: string) => (
                      <Badge key={city} variant="outline" className="bg-white">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
