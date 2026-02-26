"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building2 } from "lucide-react";

interface StepAccountTypeProps {
  selectedType: "USER" | "ORGANIZATION" | null;
  onSelect: (type: "USER" | "ORGANIZATION") => void;
}

export function StepAccountType({ selectedType, onSelect }: StepAccountTypeProps) {
  const accountTypes = [
    {
      value: 'USER' as const,
      icon: User,
      title: "User",
      description: "Individual buyer or investor"
    },
    {
      value: 'ORGANIZATION' as const,
      icon: Building2,
      title: "Organization",
      description: "Company, developer, brokerage, or investment firm"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Choose Your Account Type
        </h2>
        <p className="text-gray-600 text-lg">
          Select the option that best describes you
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {accountTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.value;

          return (
            <motion.div
              key={type.value}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 h-full ${
                  isSelected
                    ? "border-2 border-primary shadow-xl bg-red-50"
                    : "border-2 border-gray-200 hover:shadow-lg hover:border-gray-300"
                }`}
                onClick={() => onSelect(type.value)}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`inline-flex p-6 rounded-2xl ${
                    isSelected ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {type.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
