"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArticleCard } from "./ArticleCard";
import type { Article, ArticleCategory } from "@/lib/types/article";

interface ArticleTabsProps {
  articles: Article[];
}

export function ArticleTabs({ articles }: ArticleTabsProps) {
  const categories: { value: ArticleCategory; label: string }[] = [
    { value: 'news', label: 'News' },
    { value: 'tax-legal', label: 'Tax & Legal' },
    { value: 'help-guides', label: 'Help Guides' },
    { value: 'investment', label: 'Investment' }
  ];

  const getArticlesByCategory = (category: ArticleCategory) => {
    return articles.filter(article => article.category === category);
  };

  return (
    <Tabs defaultValue="tax-legal" className="w-full">
      <TabsList className="w-full justify-start bg-transparent border-b border-gray-200 dark:border-gray-800 rounded-none h-auto p-0 space-x-6">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className="relative px-0 py-3 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-primary text-gray-600 dark:text-gray-400 data-[state=active]:text-primary font-semibold transition-all duration-300 hover:text-primary dark:hover:text-primary"
          >
            {category.label}
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500"
              initial={false}
              animate={{
                scaleX: 0,
                opacity: 0
              }}
              whileHover={{
                scaleX: 1,
                opacity: 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent
          key={category.value}
          value={category.value}
          className="mt-6 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4"
          >
            {getArticlesByCategory(category.value).map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
