"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProgressIndicator } from "./ProgressIndicator";
import { StepAccountType } from "./StepAccountType";
import { StepUserForm } from "./StepUserForm";
import { StepOrganizationForm } from "./StepOrganizationForm";
import { StepSummary } from "./StepSummary";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { saveOnboardingData } from "@/actions/onboarding";
import { toast } from "sonner";

interface OnboardingFormData {
  user_type: "USER" | "ORGANIZATION" | "";
  // USER fields
  investmentPurpose?: string;
  budgetRange?: { min: number; max: number };
  loanRequired?: boolean;
  preferredCities?: string[];
  propertyType?: string;
  riskAppetite?: string;
  investmentHorizon?: string;
  // ORGANIZATION fields
  organizationName?: string;
  organizationType?: string;
  operatingCities?: string[];
  primaryObjective?: string;
  averageProjectSize?: number;
}

export function OnboardingLayout() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const methods = useForm<OnboardingFormData>({
    defaultValues: {
      user_type: "",
      budgetRange: { min: 1000000, max: 5000000 },
      loanRequired: false,
      preferredCities: [],
      operatingCities: [],
    },
    mode: "onChange",
  });

  const { watch, setValue, handleSubmit } = methods;
  const userType = watch("user_type");
  const totalSteps = 3;

  const handleAccountTypeSelect = (type: "USER" | "ORGANIZATION") => {
    setValue("user_type", type);
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: OnboardingFormData) => {
    setLoading(true);
    
    try {
      const onboardingData = {
        accountType: data.user_type as "USER" | "ORGANIZATION",
        ...(data.user_type === "USER" && {
          investmentPurpose: data.investmentPurpose,
          budgetRange: data.budgetRange,
          loanRequired: data.loanRequired,
          preferredCities: data.preferredCities,
          propertyType: data.propertyType,
          riskAppetite: data.riskAppetite,
          investmentHorizon: data.investmentHorizon,
        }),
        ...(data.user_type === "ORGANIZATION" && {
          organizationName: data.organizationName,
          organizationType: data.organizationType,
          operatingCities: data.operatingCities,
          primaryObjective: data.primaryObjective,
          averageProjectSize: data.averageProjectSize,
          riskAppetite: data.riskAppetite,
        }),
      };

      const result = await saveOnboardingData(onboardingData as any);
      
      if (result?.error) {
        toast.error(result.error);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed to save onboarding data");
      setLoading(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return userType !== "";
      case 2:
        if (userType === "USER") {
          const userData = watch();
          return !!(
            userData.investmentPurpose &&
            userData.propertyType &&
            userData.riskAppetite &&
            userData.investmentHorizon &&
            userData.preferredCities &&
            userData.preferredCities.length > 0
          );
        } else {
          const orgData = watch();
          return !!(
            orgData.organizationName &&
            orgData.organizationType &&
            orgData.primaryObjective &&
            orgData.averageProjectSize &&
            orgData.riskAppetite &&
            orgData.operatingCities &&
            orgData.operatingCities.length > 0
          );
        }
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-[#F5F7FA] py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to 99AI
            </h1>
            <p className="text-gray-600">
              Complete your profile to get personalized recommendations
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

          {/* Steps Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StepAccountType
                    selectedType={userType as "USER" | "ORGANIZATION" | null}
                    onSelect={handleAccountTypeSelect}
                  />
                </motion.div>
              )}
              
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {userType === "USER" ? (
                    <StepUserForm />
                  ) : (
                    <StepOrganizationForm />
                  )}
                </motion.div>
              )}
              
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StepSummary />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="border-primary text-primary hover:bg-red-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            <div className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                onClick={currentStep === totalSteps ? handleSubmit(onSubmit) : handleNext}
                disabled={!canProceed() || loading}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {loading ? "Saving..." : currentStep === totalSteps ? "Confirm & Continue" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
