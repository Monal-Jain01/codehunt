"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockNews } from "@/lib/data/mock-data";
import { Newspaper, TrendingUp, TrendingDown, Minus } from "lucide-react";

export function NewsContent() {
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <TrendingUp className="h-4 w-4" />;
      case 'negative': return <TrendingDown className="h-4 w-4" />;
      default: return <Minus className="h-4 w-4" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'negative': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Market News & Insights</h1>
        <p className="text-muted-foreground mt-1">
          AI-summarized news with impact analysis
        </p>
      </div>

      <div className="grid gap-6">
        {mockNews.map((news) => (
          <Card 
            key={news.id} 
            className="rounded-2xl border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{news.source}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(news.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant="outline" className={getSentimentColor(news.sentiment)}>
                    <span className="mr-1">{getSentimentIcon(news.sentiment)}</span>
                    {news.sentiment.toUpperCase()}
                  </Badge>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{news.impactScore}</p>
                    <p className="text-xs text-muted-foreground">Impact Score</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {news.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t">
                {news.zones.map((zone, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    {zone}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Summary */}
      <Card className="rounded-2xl border-border/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <CardHeader>
          <CardTitle>AI Market Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Overall Sentiment</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <p className="text-xl font-bold">Positive</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg Impact Score</p>
              <p className="text-xl font-bold">76/100</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Most Affected Zone</p>
              <p className="text-xl font-bold">Tech Corridor East</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pt-4 border-t">
            Market sentiment remains positive with infrastructure developments progressing ahead of schedule. 
            Tech Corridor East and Metro Expansion zones show highest growth potential based on recent news.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
