"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface StepBudgetProps {
  budget: number;
  onBudgetChange: (budget: number) => void;
}

export function StepBudget({ budget, onBudgetChange }: StepBudgetProps) {
  const [inputValue, setInputValue] = useState(budget.toString());

  useEffect(() => {
    setInputValue(budget.toString());
  }, [budget]);

  const budgetRanges = [
    { label: "10L - 50L", value: 3000000 },
    { label: "50L - 1Cr", value: 7500000 },
    { label: "1Cr - 5Cr", value: 30000000 },
    { label: "5Cr+", value: 75000000 }
  ];

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);
    if (value) {
      onBudgetChange(parseInt(value));
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onBudgetChange(value);
  };

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
          What's your investment budget?
        </h2>
        <p className="text-gray-600">
          This helps us show you relevant properties
        </p>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="p-6 space-y-6">
          {/* Budget Display */}
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0B5ED7] mb-2">
              {formatCurrency(budget)}
            </div>
            <p className="text-sm text-gray-600">Selected Budget</p>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <Label>Adjust Budget</Label>
            <input
              type="range"
              min="1000000"
              max="100000000"
              step="100000"
              value={budget}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0B5ED7]"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>₹10L</span>
              <span>₹10Cr</span>
            </div>
          </div>

          {/* Manual Input */}
          <div className="space-y-2">
            <Label>Or enter exact amount</Label>
            <Input
              type="text"
              placeholder="Enter amount in ₹"
              value={inputValue}
              onChange={handleInputChange}
              className="text-lg"
            />
          </div>

          {/* Quick Selection Buttons */}
          <div className="space-y-2">
            <Label>Quick Selection</Label>
            <div className="grid grid-cols-2 gap-3">
              {budgetRanges.map((range) => (
                <Button
                  key={range.label}
                  variant={budget === range.value ? "default" : "outline"}
                  onClick={() => onBudgetChange(range.value)}
                  className={budget === range.value ? "bg-[#0B5ED7] hover:bg-[#0A58CA]" : ""}
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
