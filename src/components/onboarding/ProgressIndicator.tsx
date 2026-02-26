"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const steps = [
    { number: 1, label: "Account Type" },
    { number: 2, label: "Details" },
    { number: 3, label: "Summary" }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: currentStep > step.number 
                    ? "#10B981" 
                    : currentStep === step.number 
                    ? "#0B5ED7" 
                    : "#E5E7EB",
                  scale: currentStep === step.number ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold relative z-10"
              >
                {currentStep > step.number ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{step.number}</span>
                )}
              </motion.div>
              <span className={`text-xs mt-2 font-medium ${
                currentStep === step.number 
                  ? "text-[#0B5ED7]" 
                  : currentStep > step.number 
                  ? "text-green-600" 
                  : "text-gray-400"
              }`}>
                {step.label}
              </span>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-gray-200 rounded relative -mt-8">
                <motion.div
                  initial={false}
                  animate={{
                    width: currentStep > step.number ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-green-500 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
