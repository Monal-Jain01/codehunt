import type { Property, GrowthZone, LoanOption, NewsItem, InfrastructureProject } from '../types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 3BHK Apartment',
    location: 'Whitefield, Bangalore',
    price: 8500000,
    aiPredictedValue: 10200000,
    upliftPercentage: 20,
    riskLevel: 'low',
    propertyType: 'residential',
    growthZone: 'Tech Corridor East',
    loanEligible: true,
    image: '/placeholder-property.jpg',
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    completionDate: '2024-12-01'
  },
  {
    id: '2',
    title: 'Commercial Office Space',
    location: 'Cyber City, Gurgaon',
    price: 25000000,
    aiPredictedValue: 32500000,
    upliftPercentage: 30,
    riskLevel: 'medium',
    propertyType: 'commercial',
    growthZone: 'Business District',
    loanEligible: true,
    image: '/placeholder-property.jpg',
    area: 3500,
    completionDate: '2025-06-01'
  },
  {
    id: '3',
    title: 'Premium Land Parcel',
    location: 'Navi Mumbai',
    price: 15000000,
    aiPredictedValue: 22500000,
    upliftPercentage: 50,
    riskLevel: 'high',
    propertyType: 'land',
    growthZone: 'Metro Expansion Zone',
    loanEligible: false,
    image: '/placeholder-property.jpg',
    area: 5000
  },
  {
    id: '4',
    title: 'Luxury Villa',
    location: 'Sarjapur Road, Bangalore',
    price: 18000000,
    aiPredictedValue: 21600000,
    upliftPercentage: 20,
    riskLevel: 'low',
    propertyType: 'residential',
    loanEligible: true,
    image: '/placeholder-property.jpg',
    bedrooms: 4,
    bathrooms: 4,
    area: 3200
  }
];

export const mockGrowthZones: GrowthZone[] = [
  {
    id: '1',
    name: 'Tech Corridor East',
    location: 'Whitefield-Sarjapur, Bangalore',
    currentValue: 8500000,
    projectedValue: 12750000,
    upliftPercentage: 50,
    completionProbability: 85,
    riskScore: 25,
    infrastructureProjects: [
      {
        id: 'p1',
        name: 'Metro Phase 3 Extension',
        type: 'metro',
        status: 'ongoing',
        completionDate: '2026-03-01',
        impact: 'high'
      },
      {
        id: 'p2',
        name: 'Tech Park Development',
        type: 'commercial',
        status: 'planned',
        completionDate: '2027-01-01',
        impact: 'high'
      }
    ]
  },
  {
    id: '2',
    name: 'Metro Expansion Zone',
    location: 'Navi Mumbai',
    currentValue: 15000000,
    projectedValue: 24000000,
    upliftPercentage: 60,
    completionProbability: 75,
    riskScore: 35,
    infrastructureProjects: [
      {
        id: 'p3',
        name: 'Navi Mumbai Airport',
        type: 'airport',
        status: 'ongoing',
        completionDate: '2025-12-01',
        impact: 'high'
      },
      {
        id: 'p4',
        name: 'Coastal Highway',
        type: 'highway',
        status: 'planned',
        completionDate: '2026-06-01',
        impact: 'medium'
      }
    ]
  }
];

export const mockLoanOptions: LoanOption[] = [
  {
    id: '1',
    bankName: 'HDFC Bank',
    interestRate: 8.5,
    tenure: 20,
    processingFee: 0.5,
    approvalProbability: 92,
    emiAmount: 72500
  },
  {
    id: '2',
    bankName: 'SBI',
    interestRate: 8.3,
    tenure: 20,
    processingFee: 0.35,
    approvalProbability: 88,
    emiAmount: 71200
  },
  {
    id: '3',
    bankName: 'ICICI Bank',
    interestRate: 8.7,
    tenure: 20,
    processingFee: 0.5,
    approvalProbability: 90,
    emiAmount: 73800
  }
];

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Metro Phase 3 Completion Ahead of Schedule',
    summary: 'Bangalore Metro Phase 3 is expected to complete 6 months ahead of schedule, boosting property values in Whitefield and Sarjapur areas.',
    sentiment: 'positive',
    impactScore: 85,
    zones: ['Tech Corridor East', 'Sarjapur Belt'],
    publishedAt: '2024-02-20',
    source: 'Economic Times'
  },
  {
    id: '2',
    title: 'New IT Park Announced in Navi Mumbai',
    summary: 'Major tech companies to set up offices near the upcoming airport, expected to drive residential demand.',
    sentiment: 'positive',
    impactScore: 78,
    zones: ['Metro Expansion Zone'],
    publishedAt: '2024-02-18',
    source: 'Business Standard'
  },
  {
    id: '3',
    title: 'Interest Rates Expected to Stabilize',
    summary: 'RBI signals stable interest rate environment for next 2 quarters, positive for real estate financing.',
    sentiment: 'positive',
    impactScore: 65,
    zones: ['All Zones'],
    publishedAt: '2024-02-15',
    source: 'Mint'
  }
];

export const mockChartData = {
  forecast: [
    { month: 'Jan', value: 8500000, predicted: 8500000 },
    { month: 'Mar', value: 8800000, predicted: 8900000 },
    { month: 'Jun', value: 9200000, predicted: 9400000 },
    { month: 'Sep', value: 9600000, predicted: 9900000 },
    { month: 'Dec', value: 10000000, predicted: 10500000 },
    { month: 'Mar 25', predicted: 11200000 },
    { month: 'Jun 25', predicted: 11800000 }
  ],
  riskReturn: [
    { risk: 15, return: 12, zone: 'Low Risk' },
    { risk: 25, return: 20, zone: 'Medium Risk' },
    { risk: 35, return: 35, zone: 'High Risk' },
    { risk: 45, return: 50, zone: 'Very High Risk' }
  ],
  allocation: [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 35 },
    { name: 'Land Banking', value: 20 }
  ]
};
