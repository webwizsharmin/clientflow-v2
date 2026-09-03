import { ArrowDown, ArrowUp } from "@boxicons/react";
import clsx from "clsx";

export default function StatCard({
  icon: Icon,
  title,
  amount,
  badge,
  compare,
  compareType = "neutral",
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-4 shadow-sm dark:bg-gray-800 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {title}
          </span>
        </div>
        {badge && (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            {badge}
          </span>
        )}
      </div>

      {/* amount */}
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {amount}
      </div>

      {/* Compare Section */}
      {compare && (
        <div
          className={clsx(
            "flex items-center text-sm font-medium",
            compareType === "up" && "text-green-600 dark:text-green-400",
            compareType === "down" && "text-red-600 dark:text-red-400",
            compareType === "neutral" && "text-gray-500 dark:text-gray-400",
          )}
        >
          {compareType === "up" && (
            <span>
              <ArrowUp />
            </span>
          )}
          {compareType === "down" && (
            <span>
              <ArrowDown />
            </span>
          )}
          <span className="ml-1">{compare}</span>
        </div>
      )}
    </div>
  );
}
