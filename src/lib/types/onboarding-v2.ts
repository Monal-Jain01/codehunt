export type AccountType = "USER" | "ORGANIZATION";

export type OrganizationType =
  | "DEVELOPER"
  | "BROKERAGE"
  | "INVESTMENT_FIRM"
  | "REIT"
  | "PRIVATE_FUND"
  | "OTHER";

export type InvestmentPurpose =
  | "SELF_USE"
  | "RENTAL_INCOME"
  | "CAPITAL_APPRECIATION"
  | "LAND_BANKING";

export type PropertyType =
  | "RESIDENTIAL"
  | "COMMERCIAL"
  | "LAND"
  | "MIXED_USE";

export type RiskAppetite = "LOW" | "MEDIUM" | "HIGH";

export type InvestmentHorizon =
  | "SHORT_TERM" // < 2 years
  | "MEDIUM_TERM" // 2-5 years
  | "LONG_TERM"; // > 5 years

export type PrimaryObjective =
  | "SELL_INVENTORY"
  | "ACQUIRE_LAND"
  | "RAISE_CAPITAL"
  | "MANAGE_PORTFOLIO";

export interface UserOnboardingProfile {
  accountType: "USER";
  investmentPurpose: InvestmentPurpose;
  budgetRange: {
    min: number;
    max: number;
  };
  loanRequired: boolean;
  preferredCities: string[];
  propertyType: PropertyType;
  riskAppetite: RiskAppetite;
  investmentHorizon: InvestmentHorizon;
}

export interface OrganizationOnboardingProfile {
  accountType: "ORGANIZATION";
  organizationName: string;
  organizationType: OrganizationType;
  operatingCities: string[];
  primaryObjective: PrimaryObjective;
  averageProjectSize: number;
  riskAppetite: RiskAppetite;
}

export type OnboardingProfile = UserOnboardingProfile | OrganizationOnboardingProfile;
