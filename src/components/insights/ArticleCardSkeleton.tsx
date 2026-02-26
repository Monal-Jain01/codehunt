export function ArticleCardSkeleton() {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800" />

      {/* Content Skeleton */}
      <div className="flex-1 min-w-0 space-y-3">
        {/* Badges */}
        <div className="flex gap-2">
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
        </div>

        {/* Meta */}
        <div className="flex gap-3">
          <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
        </div>

        {/* AI Score */}
        <div className="h-6 w-28 bg-gray-200 dark:bg-gray-800 rounded-md" />
      </div>
    </div>
  );
}
