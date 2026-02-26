export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  aiPredictedValue: number;
  upliftPercentage: number;
  riskLevel: 'low' | 'medium' | 'high';
  propertyType: 'residential' | 'commercial' | 'land';
  growthZone?: string;
  loanEligible: boolean;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  completionDate?: string;
}

export interface GrowthZone {
  id: string;
  name: string;
  location: string;
  currentValue: number;
  projectedValue: number;
  upliftPercentage: number;
  infrastructureProjects: InfrastructureProject[];
  completionProbability: number;
  riskScore: number;
}

export interface InfrastructureProject {
  id: string;
  name: string;
  type: 'metro' | 'highway' | 'airport' | 'commercial' | 'residential';
  status: 'planned' | 'ongoing' | 'completed';
  completionDate: string;
  impact: 'high' | 'medium' | 'low';
}

export interface LoanOption {
  id: string;
  bankName: string;
  interestRate: number;
  tenure: number;
  processingFee: number;
  approvalProbability: number;
  emiAmount: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  impactScore: number;
  zones: string[];
  publishedAt: string;
  source: string;
}

export interface Portfolio {
  totalValue: number;
  predictedReturn: number;
  riskScore: number;
  properties: Property[];
  allocationByType: {
    residential: number;
    commercial: number;
    land: number;
  };
}
