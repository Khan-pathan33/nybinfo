import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import React from 'react';

const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: "DollarSign", // We'll render this correctly
    color: "from-emerald-500 to-teal-600",
    bgcolor: "bg-emerald-50 dark:bg-emerald-900/20",
    textcolor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.25%",
    trend: "up",
    icon: "Users",
    color: "from-blue-500 to-indigo-600",
    bgcolor: "bg-blue-50 dark:bg-blue-900/20",
    textcolor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: "ShoppingCart",
    color: "from-purple-500 to-pink-600",
    bgcolor: "bg-purple-50 dark:bg-purple-900/20",
    textcolor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    trend: "down",
    icon: "Eye",
    color: "from-orange-500 to-red-600",
    bgcolor: "bg-orange-50 dark:bg-orange-900/20",
    textcolor: "text-orange-600 dark:text-orange-400",
  },
];

import { DollarSign, Users, ShoppingCart, Eye } from "lucide-react";

const iconMap = {
  DollarSign: DollarSign,
  Users: Users,
  ShoppingCart: ShoppingCart,
  Eye: Eye,
};

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stats, index) => {
        const Icon = iconMap[stats.icon];
        return (
          <div
            className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
              rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50
               hover:shadow-xl transition-all duration-300 group`}
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stats.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {stats.value}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  {stats.trend === "up" ? (
                    <ArrowUpRight className={`w-4 h-4 ${stats.textcolor}`} />
                  ) : (
                    <ArrowDownRight className={`w-4 h-4 ${stats.textcolor}`} />
                  )}
                  <span className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{stats.change}</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    vs Last
                  </span>
                </div>
              </div>
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${stats.color} text-white flex items-center justify-center group-hover:scale-110 transition-all duration-200`}
              >
                {Icon && <Icon className="w-6 h-6" />}
              </div>
            </div>
            {/* progress bar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-2 bg-gradient-to-r ${stats.color} w-3/4 rounded-full transition-all duration-100`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
