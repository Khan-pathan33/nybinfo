import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16”",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    customer: "Sarah Johnson",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3849",
    customer: "Mike Wilson",
    product: "AirPods Pro",
    amount: "$249",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "iPad Air",
    amount: "$599",
    status: "cancelled",
    date: "2024-01-14",
  },
];

const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 2156,
    revenue: "$2,587,044",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: 3421,
    revenue: "$852,229",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPad Air",
    sales: 987,
    revenue: "$591,213",
    trend: "up",
    change: "+15%",
  },
];

function TableSection() {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  const getDateColor = (status) => {
    if (status === "completed") return "bg-emerald-100 text-emerald-700";
    if (status === "pending") return "bg-yellow-100 text-yellow-700";
    if (status === "cancelled") return "bg-red-100 text-red-700";
    return "bg-slate-100 text-slate-600";
  };

  return (
    <div className="space-y-6">
      {/* Recent Orders */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest customer orders
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">
                  Order ID
                </th>
                <th className="text-left px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">
                  Product
                </th>
                <th className="text-left px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">
                  Amount
                </th>
                <th className="text-left px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">
                  Status
                </th>
                <th className="text-left px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">
                  Date
                </th>
                <th className="px-6 py-3" />
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">
                    {order.id}
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800 dark:text-white">
                      {order.customer}
                    </div>
                    <div className="text-xs text-slate-500">
                      {order.product}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-800 dark:text-white">
                    {order.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getDateColor(
                        order.status
                      )}`}
                    >
                      {order.date}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <MoreHorizontal className="w-4 h-4 text-slate-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products (UNCHANGED) */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Top Products
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Best performing products
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="p-6 space-y-4">
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
            >
              <div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {product.sales} sales
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.revenue}
                </p>
                <div className="flex items-center gap-1 justify-end">
                  {product.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      product.trend === "up"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableSection;
