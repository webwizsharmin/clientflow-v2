import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { StatCard } from "../components/ui/Cards";
import AppLayout from "./AppLayout";

const DashboardLayout = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* StatCards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={ArrowTrendingUpIcon}
            title="Revenue"
            amount="$12,340"
            badge="Monthly"
            compare="+12% from last month"
            compareType="up"
          />

          <StatCard
            icon={ArrowTrendingDownIcon}
            title="Invoices"
            amount="45"
            badge="Monthly"
            compare="-5% from last month"
            compareType="down"
          />

          <StatCard
            icon={ArrowTrendingUpIcon}
            title="Clients"
            amount="120"
            badge="Monthly"
            compare="+9% from last month"
            compareType="up"
          />
          <StatCard
            icon={ArrowTrendingDownIcon}
            title="Tasks"
            amount="78"
            badge="Monthly"
            compare="-7% vs last month"
            compareType="down"
          />
        </div>

        {/* Charts / Analytics Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Revenue Overview
            </h2>

            <div className="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500">
              {/* Chart placeholder */}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Tasks Progress
            </h2>

            <div className="h-64 flex items-center justify-center text-gray-400 dark:text-gray-500">
              {/* Chart placeholder */}
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Recent Activity
          </h2>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
              <thead className="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Action</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="px-4 py-2">Sep 2</td>
                  <td className="px-4 py-2">Invoice #102 created</td>
                  <td className="px-4 py-2">Completed</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="px-4 py-2">Sep 1</td>
                  <td className="px-4 py-2">Client added</td>
                  <td className="px-4 py-2">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardLayout;
