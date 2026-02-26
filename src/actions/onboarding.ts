"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { OnboardingProfile } from "@/lib/types/onboarding-v2";

export async function saveOnboardingData(data: OnboardingProfile) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  // Prepare data for database
  const profileData = {
    user_type: data.accountType,
    onboarding_completed: true,
    onboarding_step: 3,
    ...(data.accountType === "USER" && {
      investment_budget: data.budgetRange?.max,
      risk_tolerance: data.riskAppetite,
      phone: null, // Can be added later in profile
      organization: null,
    }),
    ...(data.accountType === "ORGANIZATION" && {
      organization: data.organizationName,
      investment_budget: data.averageProjectSize ? data.averageProjectSize * 10000000 : null, // Convert crores to rupees
      risk_tolerance: data.riskAppetite,
      phone: null, // Can be added later in profile
    }),
  };

  const { error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', user.id);

  if (error) {
    console.error("Error saving onboarding data:", error);
    return { error: error.message };
  }

  return redirect("/dashboard");
}
