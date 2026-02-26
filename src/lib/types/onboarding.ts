export type UserType = 'individual' | 'institutional' | 'developer' | 'agent';
export type RiskTolerance = 'low' | 'medium' | 'high';

export interface OnboardingData {
  user_type: UserType;
  investment_budget: number;
  risk_tolerance: RiskTolerance;
  full_name?: string;
  phone?: string;
  organization?: string;
}

export interface ProfileData extends OnboardingData {
  full_name: string;
  phone: string;
  organization?: string;
  onboarding_step: number;
  onboarding_completed: boolean;
}
