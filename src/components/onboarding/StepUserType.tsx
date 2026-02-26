"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building2, Hammer, Briefcase } from "lucide-react";
import type { UserType } from "@/lib/types/onboarding";

interface StepUserTypeProps {
  selectedType: UserType | null;
  onSelect: (type: UserType) => void;
}

export function StepUserType({ selectedType, onSelect }: StepUserTypeProps) {
  const userTypes = [
    {
      value: 'individual' as UserType,
      icon: User,
      title: "Individual Investor",
      description: "Looking to invest in residential or commercial properties"
    },
    {
      value: 'institutional' as UserType,
      icon: Building2,
      title: "Institutional Investor",
      description: "Representing a fund, REIT, or investment firm"
    },
    {
      value: 'developer' as UserType,
      icon: Hammer,
      title: "Developer",
      description: "Building and selling real estate projects"
    },
    {
      value: 'agent' as UserType,
      icon: Briefcase,
      title: "Agent",
      description: "Real estate broker or consultant"
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
          What best describes you?
        </h2>
        <p className="text-gray-600">
          Help us personalize your experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {userTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.value;

          return (
            <motion.div
              key={type.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-2 border-[#0B5ED7] shadow-lg bg-blue-50"
                    : "border border-gray-200 hover:shadow-md hover:border-gray-300"
                }`}
                onClick={() => onSelect(type.value)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      isSelected ? "bg-[#0B5ED7] text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {type.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
