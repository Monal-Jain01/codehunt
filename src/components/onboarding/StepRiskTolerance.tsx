"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Zap } from "lucide-react";
import type { RiskTolerance } from "@/lib/types/onboarding";

interface StepRiskToleranceProps {
  selectedRisk: RiskTolerance | null;
  onSelect: (risk: RiskTolerance) => void;
}

export function StepRiskTolerance({ selectedRisk, onSelect }: StepRiskToleranceProps) {
  const riskOptions = [
    {
      value: 'low' as RiskTolerance,
      icon: Shield,
      title: "Low Risk",
      description: "Stable returns with minimal volatility",
      color: "green",
      dots: 1
    },
    {
      value: 'medium' as RiskTolerance,
      icon: TrendingUp,
      title: "Medium Risk",
      description: "Balanced growth with moderate risk",
      color: "yellow",
      dots: 2
    },
    {
      value: 'high' as RiskTolerance,
      icon: Zap,
      title: "High Risk",
      description: "High growth potential with higher volatility",
      color: "red",
      dots: 3
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What's your risk tolerance?
        </h2>
        <p className="text-gray-600">
          This helps us recommend suitable investment opportunities
        </p>
      </div>

      <div className="space-y-4">
        {riskOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedRisk === option.value;

          return (
            <motion.div
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-2 border-[#0B5ED7] shadow-lg bg-blue-50"
                    : "border border-gray-200 hover:shadow-md hover:border-gray-300"
                }`}
                onClick={() => onSelect(option.value)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      isSelected ? "bg-[#0B5ED7] text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {option.title}
                        </h3>
                        
                        {/* Risk Indicator Dots */}
                        <div className="flex gap-1">
                          {[1, 2, 3].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= option.dots
                                  ? option.color === 'green'
                                    ? 'bg-green-500'
                                    : option.color === 'yellow'
                                    ? 'bg-yellow-500'
                                    : 'bg-red-500'
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Your risk profile helps our AI recommend properties that match your investment goals and comfort level.
        </p>
      </div>
    </motion.div>
  );
}
