"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { mockLoanOptions } from "@/lib/data/mock-data";
import { Calculator, TrendingUp, CheckCircle2 } from "lucide-react";

export function LoansContent() {
  const [loanAmount, setLoanAmount] = useState("8500000");
  const [tenure, setTenure] = useState("20");

  const calculateEMI = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                 (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  return (
    <div className="container py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Home Loan Calculator</h1>
        <p className="text-muted-foreground mt-1">
          Compare loan options and calculate EMI
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* EMI Calculator */}
        <Card className="lg:col-span-1 rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              EMI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Loan Amount (₹)</Label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="8500000"
              />
            </div>

            <div className="space-y-2">
              <Label>Tenure (Years)</Label>
              <Input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="20"
              />
            </div>

            <div className="p-4 rounded-xl bg-primary/10 space-y-2">
              <p className="text-sm text-muted-foreground">Estimated EMI Range</p>
              <p className="text-2xl font-bold">
                ₹{calculateEMI(Number(loanAmount), 8.3, Number(tenure)).toLocaleString('en-IN')} - 
                ₹{calculateEMI(Number(loanAmount), 8.7, Number(tenure)).toLocaleString('en-IN')}
              </p>
            </div>

            <Button className="w-full">
              Get Pre-Approval
            </Button>
          </CardContent>
        </Card>

        {/* Loan Options */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Available Loan Options</h2>
            <Badge className="bg-blue-500 text-white border-0">
              {mockLoanOptions.length} Banks
            </Badge>
          </div>

          {mockLoanOptions.map((loan) => (
            <Card key={loan.id} className="rounded-2xl border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{loan.bankName}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        {loan.approvalProbability}% Approval Probability
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">₹{loan.emiAmount.toLocaleString('en-IN')}</p>
                    <p className="text-sm text-muted-foreground">EMI per month</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="text-lg font-semibold">{loan.interestRate}% p.a.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tenure</p>
                    <p className="text-lg font-semibold">{loan.tenure} years</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Processing Fee</p>
                    <p className="text-lg font-semibold">{loan.processingFee}%</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="flex-1">Apply Now</Button>
                  <Button variant="outline" className="flex-1">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* AI Recommendation */}
          <Card className="rounded-2xl border-border/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    AI Recommendation
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Based on your profile and property value, SBI offers the best combination of 
                    low interest rate (8.3%) and high approval probability (88%). You could save 
                    ₹2,600 per month compared to the highest EMI option.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
