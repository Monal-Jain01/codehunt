"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, AlertTriangle, Sparkles } from "lucide-react";
import type { Article } from "@/lib/types/article";
import { useState } from "react";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getBadgeConfig = (badge?: string) => {
    switch (badge) {
      case 'ai-recommended':
        return {
          icon: Sparkles,
          text: 'AI Recommended',
          className: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0'
        };
      case 'high-impact':
        return {
          icon: TrendingUp,
          text: 'High Impact',
          className: 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-0'
        };
      case 'trending':
        return {
          icon: TrendingUp,
          text: 'Trending',
          className: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0'
        };
      default:
        return null;
    }
  };

  const getSentimentConfig = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive':
        return {
          text: 'Positive',
          className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
        };
      case 'neutral':
        return {
          text: 'Neutral',
          className: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700'
        };
      case 'risk-alert':
        return {
          icon: AlertTriangle,
          text: 'Risk Alert',
          className: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800'
        };
      default:
        return null;
    }
  };

  const badgeConfig = getBadgeConfig(article.badge);
  const sentimentConfig = getSentimentConfig(article.sentiment);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative"
    >
      <div className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 cursor-pointer">
        {/* Thumbnail */}
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Placeholder for image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
            <TrendingUp className="h-8 w-8" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badgeConfig && (
              <Badge className={`text-xs ${badgeConfig.className}`}>
                <badgeConfig.icon className="h-3 w-3 mr-1" />
                {badgeConfig.text}
              </Badge>
            )}
            {sentimentConfig && (
              <Badge variant="outline" className={`text-xs ${sentimentConfig.className}`}>
                {sentimentConfig.icon && <sentimentConfig.icon className="h-3 w-3 mr-1" />}
                {sentimentConfig.text}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            {article.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            )}
          </div>

          {/* AI Impact Score Tooltip */}
          {article.aiImpactScore && (
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
                <Sparkles className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                  AI Score: {article.aiImpactScore}
                </span>
              </div>

              {/* Tooltip */}
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10"
                >
                  AI Impact Score: {article.aiImpactScore}/100
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-xl" />
    </motion.div>
  );
}
