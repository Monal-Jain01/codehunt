"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockChartData } from "@/lib/data/mock-data";
import { TrendingUp, Target, Shield, BarChart3 } from "lucide-react";

export function ResearchContent() {
  return (
    <div className="container py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Research & Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Advanced predictive models and market insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.2%</div>
            <p className="text-xs text-muted-foreground mt-1">Last 12 months</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Uplift</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5%</div>
            <p className="text-xs text-muted-foreground mt-1">Predicted growth</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28/100</div>
            <p className="text-xs text-muted-foreground mt-1">Low-Medium</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Data Points</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5M+</div>
            <p className="text-xs text-muted-foreground mt-1">Analyzed</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>Price Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/30 rounded-xl">
              <div className="text-center space-y-2">
                <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Line Chart: Historical vs Predicted</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>Risk vs Return Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/30 rounded-xl">
              <div className="text-center space-y-2">
                <Target className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Scatter Plot: Risk-Return Profile</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>Feature Importance (SHAP)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/30 rounded-xl">
              <div className="text-center space-y-2">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Bar Chart: Model Explainability</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/50">
          <CardHeader>
            <CardTitle>Confidence Bands</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-muted/30 rounded-xl">
              <div className="text-center space-y-2">
                <Shield className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Area Chart: Prediction Confidence</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Info */}
      <Card className="rounded-2xl border-border/50">
        <CardHeader>
          <CardTitle>Model Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Algorithm</p>
              <p className="font-medium">Gradient Boosting + Neural Network Ensemble</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Training Data</p>
              <p className="font-medium">10 years historical + 50K+ properties</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Update Frequency</p>
              <p className="font-medium">Real-time with daily retraining</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
